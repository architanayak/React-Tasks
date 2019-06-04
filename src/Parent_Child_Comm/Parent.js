import React, { Component } from 'react';
import { Child1 } from './Child1';
import { Child2 } from './Child2';
import './parent-child.css'

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    }
  }
  getRemoveSelectedItem(item) {
    const { selectedItem } = this.state;
    if (selectedItem.name !== item.name) {
      this.setState({ selectedItem: item })
    } else {
      this.setState({ selectedItem: {} });
    }
  }
  render() {
    const { selectedItem } = this.state
    return (
      <div className='parent'>
        <Child1
          getSelectedItem={(item) => this.getRemoveSelectedItem(item)}
          selectedItem={selectedItem}
        />
        <Child2
          selectedItem={this.state.selectedItem}
          removeSelectedItem={(item) => this.getRemoveSelectedItem(item)}
        />
      </div>
    )
  }
}
export default Parent;