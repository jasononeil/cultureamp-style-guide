import React from 'react';
import { getRegisteredComponentType } from './react-mount';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPreset: 0 };
  }

  selectedPresetProps() {
    const preset = this.props.presets[this.state.selectedPreset];
    return preset.props;
  }

  onSelectPreset = e => {
    const selectedPreset = parseInt(e.target.value);
    this.setState({ ...this.state, selectedPreset });
  };

  renderSelectList() {
    const { presets } = this.props;
    const { selectedPreset } = this.state;

    return (
      <select onChange={this.onSelectPreset} value={selectedPreset}>
        {presets.map((preset, index) => (
          <option key={index} value={index}>
            {preset.name}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const Component = getRegisteredComponentType(this.props.component);

    return (
      <div>
        {this.renderSelectList()}
        <Component {...this.selectedPresetProps()} />
      </div>
    );
  }
}
