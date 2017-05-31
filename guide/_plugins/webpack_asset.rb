require 'open-uri'

module Jekyll
  class WebpackAssetTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset_path = text.strip
    end

    def render(context)
      asset_filename = webpack_asset_filename(@asset_path, context)
      return unless asset_filename

      if dev?(context)
        "http://localhost:8080/#{asset_filename}"
      else
        "#{context.environments[0].site['baseurl']}/assets/#{asset_filename}"
      end
    end

    private

    def webpack_asset_filename(asset_path, context)
      manifest(context)[asset_path]
    end

    def manifest(context)
      @manifest ||= JSON.load(manifest_file(context))
    end

    def manifest_file(context)
      if dev?(context)
        open_with_retry('http://localhost:8080/manifest.json')
      else
        File.read(File.join(context.environments[0].site['source'],
                            'assets/manifest.json'))
      end
    end

    def open_with_retry(url, retries: 2, interval: 0.5)
      open(url)
    rescue
      sleep interval
      retry if (retries -= 1) > 0
    end

    def dev?(context)
      context.environments[0].jekyll.environment == 'development'
    end
  end
end

Liquid::Template.register_tag('webpack_asset', Jekyll::WebpackAssetTag)
