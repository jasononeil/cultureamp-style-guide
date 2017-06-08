import React from 'react';
import { getRegisteredComponentType } from './react-mount';
import HtmlString from './HtmlString';
import styles from './Demo.scss';

const MIN_CANVAS_WIDTH = 240;

export default class Demo extends React.Component {
  state = {
    selectedPreset: 0,
    canvasWidth: null,
  };

  render() {
    const Component = getRegisteredComponentType(this.props.component);

    return (
      <div className={styles.root}>
        {this.renderPresetList()}
        <div
          className={styles.frame}
          ref={div => {
            this.frame = div;
          }}
        >
          <div
            className={styles.canvas}
            style={{ width: this.state.canvasWidth }}
          >
            <Component {...this.selectedPresetProps()} />
          </div>
        </div>
        <div className={styles.controls}>
          {this.renderSizePresets()}
          {this.renderCanvasSize()}
        </div>
      </div>
    );
  }

  selectedPresetProps() {
    const { props, htmlProps } = this.props.presets[this.state.selectedPreset];

    Object.keys(htmlProps || {}).forEach(key => {
      const html = htmlProps[key];
      props[key] = <HtmlString {...{ html }} />;
    });

    return props;
  }

  renderPresetList() {
    const { presets } = this.props;
    const { selectedPreset } = this.state;

    return (
      <div className={styles.selectPreset}>
        <select onChange={this.onSelectPreset} value={selectedPreset}>
          {presets.map((preset, index) =>
            <option key={index} value={index}>
              {preset.name}
            </option>
          )}
        </select>
      </div>
    );
  }

  onSelectPreset = e => {
    const selectedPreset = parseInt(e.target.value);
    this.setState({ ...this.state, selectedPreset });
  };

  renderSizePresets() {
    return (
      <div className={styles.sizePresets}>
        <button onClick={this.onClickResizeTo('full')}>Full</button>
        <button onClick={this.onClickResizeTo('random')}>Random</button>
        <button onClick={this.onClickResizeTo('large')}>Large</button>
        <button onClick={this.onClickResizeTo('medium')}>Medium</button>
        <button onClick={this.onClickResizeTo('small')}>Small</button>
      </div>
    );
  }

  onClickResizeTo(size) {
    return e => this.resizeToSize(size);
  }

  resizeToSize(size) {
    switch (Symbol.for(size)) {
      case Symbol.for('full'):
        this.resizeTo();
        break;
      case Symbol.for('random'):
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, this.maxCanvasWidth()));
        break;
      case Symbol.for('large'):
        this.resizeTo(randomBetween(800, 1200));
        break;
      case Symbol.for('medium'):
        this.resizeTo(randomBetween(500, 800));
        break;
      case Symbol.for('small'):
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, 500));
        break;
    }
  }

  resizeTo(canvasWidth = null) {
    if (canvasWidth) {
      canvasWidth = Math.min(canvasWidth, this.maxCanvasWidth());
    }

    if (this.state.canvasWidth === null && canvasWidth) {
      this.setState({ ...this.state, canvasWidth: this.maxCanvasWidth() });
      setTimeout(() => {
        this.setState({ ...this.state, canvasWidth });
      });
    } else {
      this.setState({ ...this.state, canvasWidth });
    }
  }

  maxCanvasWidth() {
    return this.frame.clientWidth;
  }

  renderCanvasSize() {}
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
