require 'pry'

module Jekyll
  class WebpackAssetTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset_path = text.strip
    end

    def render(context)
      if dev?(context)
        "//localhost:8080/#{@asset_path}"
      else
        "/assets/#{@asset_path}"
      end
    end

    private

    def dev?(context)
      context.environments[0].jekyll.environment == 'development'
    end
  end
end

Liquid::Template.register_tag('webpack_asset', Jekyll::WebpackAssetTag)
