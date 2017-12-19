import React from 'react';
import ReactMarkdown from 'react-markdown';
import HtmlContent from './HtmlContent.js';
import { Link, ExternalLink } from './Link.js';

const LinkRenderer = props => {
  if (props.href.startsWith('http://') || props.href.startsWith('https://')) {
    // This is an external link.
    return <ExternalLink to={props.href}>{props.children}</ExternalLink>;
  }
  // This is an internal link, so use Gatsby Link so we get SPA goodness.
  return <Link to={props.href}>{props.children}</Link>;
};

const MarkdownContent = ({ content }) => (
  <HtmlContent>
    <ReactMarkdown source={content} renderers={{ link: LinkRenderer }} />
  </HtmlContent>
);

export default MarkdownContent;
