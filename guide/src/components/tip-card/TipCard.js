import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from 'components/card';
import successWhite from 'cultureamp-style-guide/icons/success.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation.svg';
import styles from './TextContent.module.scss';

const TipCard = ({ title, type, content }) => (
  <Card
    title={title}
    icon={type === 'tip' ? successWhite : exclamation}
    iconColor={type === 'tip' ? 'seedling' : 'coral'}
  >
    <div className={styles.textContent}>
      <ReactMarkdown source={content} />
    </div>
  </Card>
);

export default TipCard;
