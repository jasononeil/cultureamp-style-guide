import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from 'components/card';
import success from 'cultureamp-style-guide/icons/success-white.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation-white.svg';
import MarkdownContent from '../MarkdownContent';

const TipCard = ({ title, type, content }) => (
  <Card
    title={title}
    icon={type === 'tip' ? success : exclamation}
    iconColor={type === 'tip' ? 'seedling' : 'coral'}
  >
    <MarkdownContent content={content} />
  </Card>
);

export default TipCard;
