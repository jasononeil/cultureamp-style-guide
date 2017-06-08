import React from 'react';
import { getRegisteredComponentType } from './react-mount';
import HtmlString from './HtmlString';
import styles from './Demo.scss';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPreset: 0 };
  }

  render() {
    const Component = getRegisteredComponentType(this.props.component);

    return (
      <div className={styles.root}>
        {this.renderSelectList()}
        <div className={styles.canvas}>
          <Component {...this.selectedPresetProps()} />
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

  renderSelectList() {
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
}
