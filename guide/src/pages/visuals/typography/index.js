import React from 'react';
import Link from 'components/Link';
import SampleText from './_SampleText.js';
import styles from './index.module.scss';

const sentences = [
  'All their equipment and instruments are alive.',
  'A red flair silhouetted the jagged edge of a wing.',
  'I watched the storm, so beautiful yet terrific.',
  'Almost before we knew it, we had left the ground.',
  'A shining crescent far beneath the flying vessel.',
  'It was going to be a lonely trip back.',
  'Mist enveloped the ship three hours out from port.',
  'My two natures had memory in common.',
];

const Line = ({ size, lineHeight, weight }) => {
  return (
    <div>
      <h6>
        Ideal Sans Size: {size} Line: {lineHeight} Weight: {weight}
      </h6>
      <div
        style={{
          fontFamily: "'Ideal Sans A', 'Ideal Sans B'",
          fontSize: size + 'px',
          lineHeight: lineHeight + 'px',
          fontWeight: weight,
        }}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
      </div>
    </div>
  );
};

const LinesForSize = ({ size, lineHeight }) => (
  <div>
    <h1>Size: {size}</h1>
    <Line size={size} lineHeight={lineHeight} weight={600} />
    <Line size={size} lineHeight={lineHeight} weight={500} />
    <Line size={size} lineHeight={lineHeight} weight={400} />
    <Line size={size} lineHeight={lineHeight} weight={300} />
    <Line size={size} lineHeight={lineHeight} weight={200} />
  </div>
);

const LinesForColors = ({ bgColor, textColor }) => (
  <div style={{ background: bgColor, color: textColor, padding: 20 }}>
    <LinesForSize size={48} lineHeight={72} />
    <LinesForSize size={24} lineHeight={48} />
    <LinesForSize size={18} lineHeight={24} />
    <LinesForSize size={16} lineHeight={24} />
    <LinesForSize size={14} lineHeight={24} />
    <LinesForSize size={12} lineHeight={24} />
    <LinesForSize size={10} lineHeight={24} />
  </div>
);

class Page extends React.Component {
  render() {
    return (
      <div>
        <LinesForColors bgColor="white" textColor="#3E4543" />
        <LinesForColors bgColor="#3E4543" textColor="white" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export default Page;
