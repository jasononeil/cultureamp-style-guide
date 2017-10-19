// Copy-pasted from svg-sprite-loader/runtime/browser-sprite.js to customize
// `attrs` passed to BrowserSprite constructor.
// See https://github.com/kisenka/svg-sprite-loader/issues/200 for an issue that
// may lead to a cleaner way of customising this.

import BrowserSprite from 'svg-baker-runtime/browser-sprite';
import domready from 'domready';

const spriteNodeId = '__SVG_SPRITE_NODE__';
const spriteGlobalVarName = '__SVG_SPRITE__';
const isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
let sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({
    // customized to hide from screen readers
    attrs: { id: spriteNodeId, ['aria-hidden']: 'true', focusable: 'false' },
  });
  window[spriteGlobalVarName] = sprite;
}

const loadSprite = () => {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  const existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  domready(loadSprite);
}

export default sprite;
