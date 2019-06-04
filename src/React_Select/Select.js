import React, { Component } from 'react';
import Select from 'react-select';
import { FaTimes, FaAccessibleIcon } from 'react-icons/fa'
import './select.css'
import { components } from 'react-select';


const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    {props.data.icon}
    {props.data.label}
  </Option>
);
const customSingleValue = ({ data }) => (
  <div>
    <span>{data.icon}</span>
    <span>{data.label}</span>
  </div>

);
class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      isMulti: false
    };
    this.options = [
      { value: 'Java', index: 1, label: 'Java', icon: <FaTimes /> },
      { value: 'Python', index: 2, label: 'Python', icon: <FaAccessibleIcon /> },
      { value: 'Go', index: 3, label: 'Go', icon: <FaTimes /> },
      { value: 'Javascript', index: 4, label: 'Javascript', icon: <FaAccessibleIcon /> },
      { value: 'C', index: 5, label: 'C', icon: <FaTimes /> },
      { value: 'Java1', index: 6, label: 'Java1', icon: <FaAccessibleIcon /> },
      { value: 'Python1', index: 7, label: 'Python1', icon: <FaTimes /> },
      { value: 'Go1', index: 8, label: 'Go1', icon: <FaAccessibleIcon /> },
      { value: 'Javascript1', index: 9, label: 'Javascript', icon: <FaTimes /> },
      { value: 'C1', index: 10, label: 'C', icon: <FaAccessibleIcon /> },
    ];
  }
  handleClickRadio(value) {
    this.setState({
      selectedOption: [],
      isMulti: value
    })
  }
  handleChange(selectedOption) {
    this.setState({ selectedOption: selectedOption })
  }
  removeOption(id) { 
    if (this.state.isMulti) {
      const selectedOption = [...this.state.selectedOption];
      let finalSelectedOption = selectedOption.filter(x => x.index !== id)
      this.setState({ selectedOption: finalSelectedOption })
    }
    else {
      this.setState({ selectedOption: {} })
    }

  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div className='wrapper-select'>
        <div className='radio'>
          <input type='radio' name='radio' value='single' onClick={() => this.handleClickRadio(false)} />Single
          <input type='radio' name='radio' value='multiple' onClick={() => this.handleClickRadio(true)} />Multiple
        </div>
        <div className='select'>
          <Select options={this.options}
            isMulti={this.state.isMulti}
            onChange={(selectedOption) => this.handleChange(selectedOption)}
            value={selectedOption}
            components={{ Option: IconOption, SingleValue: customSingleValue }}
          />
        </div>
        <div className='display'>
          <div className='react-chip'>
            {this.state.isMulti
              ?
              <>
                {selectedOption === null ? '' : <div>{selectedOption.map((option, key) => {
                  return (
                    <div key={option.index + key}>
                      <div key={option.index + key}>{option.label}<FaTimes onClick={() => this.removeOption(option.index)} /></div>
                    </div>
                  )
                })} </div>}
              </>

              :
              <div>
                {!selectedOption.label ? '' :
                  <div>{selectedOption.label}
                    <FaTimes onClick={() => this.removeOption(selectedOption.index)} />
                  </div>
                }
              </div>}

          </div>
        </div>
      </div>

    )
  }
}
export default ReactSelect;