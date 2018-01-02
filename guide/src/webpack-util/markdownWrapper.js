/**
 * Markdown Component Loader allows us to set a class name on the elements it produces, allowing us
 * to style the components without the styles bleeding down into children.
 *
 * Unfortunately these settings are applied at runtime, by passing props into the generated React
 * component, which isn't possible if we're using the MDX file as a page directly in Gatsby. This
 * loader is a workaround, it imports out HtmlContent styles and applies them to the markdown elements
 * on the page.
 *
 * See https://github.com/ticky/markdown-component-loader#inner-element-styling
 */
const loader = function(source) {
  if (this.cacheable) this.cacheable();

  source =
    `import htmlStyles from 'components/HtmlContent.module.scss';\n` + source;

  source = source.replace(
    'export default MarkdownComponent;',
    `
        const WrappedMarkdownComponent = () => (<div className={htmlStyles.contentContainer}>
          <MarkdownComponent elementProps={{
            h1: { className: htmlStyles.h1 },
            h2: { className: htmlStyles.h2 },
            h3: { className: htmlStyles.h3 },
            table: { className: htmlStyles.table },
            blockquote: { className: htmlStyles.blockquote },
            hr: { className: htmlStyles.hr },
            img: { className: htmlStyles.img },
            a: { className: htmlStyles.link },
          }} />
        </div>);
        export default WrappedMarkdownComponent;
    `
  );
  return source;
};

module.exports = loader;
