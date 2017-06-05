import React from 'react';

export default function HtmlString({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
