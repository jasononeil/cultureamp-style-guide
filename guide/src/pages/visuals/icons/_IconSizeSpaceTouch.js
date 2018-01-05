import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import styles from './_IconsPage.module.scss';
import minimumSize from '!file-loader!./img/minimum-size.svg';
import spacing from '!file-loader!./img/spacing.svg';
import touchArea from '!file-loader!./img/touch-area.svg';
import neighbouringIcons from '!file-loader!./img/neighbouring-icons.svg';

class IconSizeSpaceTouch extends React.Component {
  render() {
    return (
      <Card>
        <div className={styles.cardWrapper}>
          {this.renderImage(
            'Minimum Size',
            minimumSize,
            'Each icon should have a minimum width of 20px'
          )}
          {this.renderImage(
            'Spacing',
            spacing,
            'Labels should sit 10px to the right of an icon'
          )}
          {this.renderImage(
            'Touch Target',
            touchArea,
            'If an icon is clickable the clickable area should be at least a 48px square surrounding the icon'
          )}
          {this.renderImage(
            'Neighbouring Icons',
            neighbouringIcons,
            'If two icons are side-by-side in a toolbar, they should each have a 48px touch area, resulting in 96px total width'
          )}
        </div>
      </Card>
    );
  }

  renderImage(title, img, alt) {
    return (
      <div className={styles.iconExample}>
        <strong>{title}</strong>
        <img src={img} alt={alt} title={alt} />
      </div>
    );
  }
}

IconSizeSpaceTouch.PropTypes = {};

export default IconSizeSpaceTouch;
