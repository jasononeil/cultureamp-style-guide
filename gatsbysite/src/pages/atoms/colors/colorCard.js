import React from 'react';
import styles from './colorCard.module.scss';

const ColorCard = ({ name }) => {
  console.log();
  var colorClassName = styles[name.toLowerCase()];
  return (
    <div className={styles.colorCard}>
      <h3>{name}</h3>
      <h4 className={styles.subHeader}>Tint &amp; Shade</h4>
      <div className={`${styles.colorBlock} ${colorClassName}`}>Color</div>
    </div>
  );
};

export default ColorCard;
