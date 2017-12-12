import React from 'react';
import Kebab from 'components/kebab';
import styles from './ColorCard.module.scss';
import duplicate from 'cultureamp-style-guide/icons/duplicate.svg';

const ColorBlockKebab = ({ bgColor, sassVar }) => {
  const hex = bgColor.hex(),
    rgb = bgColor
      .rgb()
      .array()
      .map(Math.round)
      .join(', '),
    cmyk = bgColor
      .cmyk()
      .array()
      .map(Math.round)
      .join(', ');
  return (
    <span className={styles.kebabContainer}>
      <Kebab
        links={[]}
        actions={[
          getColorDropdownItem('SASS', sassVar),
          getColorDropdownItem('HEX', hex),
          getColorDropdownItem('RGB', rgb),
          getColorDropdownItem('CMYK', cmyk),
        ]}
        title="Copy To Clipboard"
      />
    </span>
  );
};

const getColorDropdownItem = (type, value) => {
  let input;
  return {
    text: (
      <div className={styles.dropdownItem}>
        <strong>{type}</strong> <small>{value}</small>
        <input type="text" defaultValue={value} ref={i => (input = i)} />
      </div>
    ),
    action: () => {
      if (input) {
        input.select();
        document.execCommand('copy');
      }
    },
    icon: duplicate,
    hoverIcon: true,
  };
};

export default ColorBlockKebab;
