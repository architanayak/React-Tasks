import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { TextBox1 } from './textBox1';
import { TextBox2 } from './textBox2';
import './textBox.css'

// class ParentTextBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: {}
//     }
//   }
//   getTextBoxValue(id, value) {
//     let obj = {};
//     obj[id] = value;
//     this.setState({ value: obj })
//   }
//   render() {
//     return (
//       <div className='parent-textBox'>
//         <TextBox1
//           setTextBoxValue={this.state.value}
//           getTextBox1Value={(id, value) => this.getTextBoxValue(id, value)} />
//         <TextBox2
//           setTextBoxValue={this.state.value}
//           getTextBox2Value={(id, value) => this.getTextBoxValue(id, value)}
//         />
//       </div>
//     )
//   }
// }
// export default ParentTextBox;

export const ParentTextBox = () => {
  const [value, setValue] = useState({value : {tb:''}})

  const getTextBoxValue = (id, values) => {
    let obj = {};
    obj[id] = values;
    setValue({ value: obj })
  }
  return (
    <div className='parent-textBox'>
      <TextBox1
        textBoxValue={value}
        getTextBox1Value={(id, values) => getTextBoxValue(id, values)} />
      <TextBox2
        textBoxValue={value}
        getTextBox2Value={(id, values) => getTextBoxValue(id, values)}
      />
      <Button onClick={() => setValue({ value : { tb : '' }}) }>Clear</Button>
    </div>
  )
}