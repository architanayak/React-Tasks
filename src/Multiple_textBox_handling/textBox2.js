import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import _ from 'lodash';

export const TextBox2 = (props) => {
  const textBoxValue = _.cloneDeep(props.textBoxValue)
  return (
    <div className='textBox'>
      <Label>Text Box 2</Label>
      <Input
        id='tb'
        type="text"
        value={textBoxValue.value.tb}
        onChange={(e) => props.getTextBox2Value(e.target.id, e.target.value)} />
    </div>
  )
}

// class TextBox2 extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       textBox2 : ''
//     }
//   }
//   render() {
//     return (
//       <div className='textBox'>
//         <Label>Text Box2</Label>
//         <Input type="text" value={this.props.setTextBox2Values.tb1} />
//       </div>
//     )
//   }
// }
// export default TextBox2;