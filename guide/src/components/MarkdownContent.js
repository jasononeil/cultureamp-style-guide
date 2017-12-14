import React from 'react';
import ReactMarkdown from 'react-markdown';
import HtmlContent from './HtmlContent.js';

const MarkdownContent = ({ content }) => (
  <HtmlContent>
    <ReactMarkdown source={content} />
  </HtmlContent>
);

export default MarkdownContent;
