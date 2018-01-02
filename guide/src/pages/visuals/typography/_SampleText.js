import React from 'react';
import HtmlContent from 'components/HtmlContent.js';
import styles from './index.module.scss';
import { ActionLink } from 'components/Link.js';

const TypeLabel = ({ children }) => (
  <div className={styles.typeLabel}>{children}</div>
);

const SampleText = () => (
  <HtmlContent>
    <TypeLabel>Heading 1 – 18px / 24px</TypeLabel>
    <h1>
      Culture Amp 2017
      <br />Q3 Culture First Survey
    </h1>

    <TypeLabel>Heading 2 – 16px / 24px</TypeLabel>
    <h2>
      Vampires the romantic ideology behind
      <br />them this is another line
    </h2>

    <TypeLabel>Intro Para – 16px / 24px</TypeLabel>
    <p>
      Philosophy is considered a science but it is difficult to say, when one
      has to compare with an ordinary science, for example biology, or
      chemistry. This is a question that turns into a burning problem among the
      scientists and linguists all over the world.
    </p>

    <TypeLabel>Body – 14px / 24px</TypeLabel>
    <p>
      When darkness turns to day, the sun moves over the horizon and touches
      everything in sight. This movement across the landscape brightens
      everything. Such an illumination awakens us all. We rise with energy
      moving in and through us allowing us to create a new day. A day unique
      from all the rest and creatively woven into our soul. This is the
      landscape of our soul. As you can see, nature has a way of showing us just
      how powerful we are.
    </p>

    <TypeLabel>Control Action – 14px / 24px</TypeLabel>
    <ActionLink action={() => {}}>Fact and truth</ActionLink>

    <TypeLabel>Body Small – 12px / 24px</TypeLabel>
    <p>
      Western Astrology originated way back, around 500 BC, with a concept
      called the Zodiac being developed. This comprised of an imaginary sphere
      surrounding the earth, which followed the path of the Sun through the
      constellations during the year. The Zodiac was split into twelve sections,
      each named after the specific constellation noted in that area. Elements:
      Many ancient philosophies used a set of classical elements to explain the
      way nature behaved. Each sign was connected to one of the classical
      elements (fire, earth, air, or water).
    </p>

    <TypeLabel>Lablels &amp; Legends – 10px / 24px</TypeLabel>
    <label>Fact and truth</label>
  </HtmlContent>
);

export default SampleText;
