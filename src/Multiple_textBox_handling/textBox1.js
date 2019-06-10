import React from 'react';
import { Input, Label } from 'reactstrap';
import _ from 'lodash';

export const TextBox1 = (props) => {
  const textBoxValue = _.cloneDeep(props.textBoxValue)
  return (
    <div className='textBox'>
      <Label>Text Box 1</Label>
      <Input
        type="text"
        id='tb'
        value={textBoxValue.value.tb}
        onChange={(e) => props.getTextBox1Value(e.target.id, e.target.value)} />
    </div>
  )
}
