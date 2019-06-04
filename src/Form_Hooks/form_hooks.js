import React, { useState } from "react";
import {
  Form,
  Label,
  Input,
  FormGroup
} from 'reactstrap';

export function Forms() {
  const [obj, setObj] = useState({ name: '', address: '', mobile: '' })
  const [mob, setMob] = useState({ mobile: '' })
  const [radio, setRadio] = useState({})
  const handleChange = (e) => {
    // debugger
    let object = { ...obj }
    object[e.target.id] = e.target.value;
    setObj(object)
    console.log(object)
  }
  const handleRadio = (id, value) => {
    // debugger
    let radios = {}
    radios[id] = value
    setRadio(radios)
    console.log(radios)
  }
  const handleMobileChange = (e) => {
    // debugger
    let value = e.target.value;
    console.log('v:' , value)
    let finalValue = parseInt(value)
    if (finalValue > 0 || finalValue < 9) {
      let object = { ...mob }
      object[e.target.id] = finalValue;
      setMob(object)
      console.log(object)
    }
    else {
      console.log('no')
    }
  }
  return (
    <div className='form'>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type='text'
            id='name'
            value={obj.name}
            onChange={(e) => handleChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input type='textarea'
            id="address"
            value={obj.address}
            onChange={(e) => handleChange(e)} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"
              id='male'
              value={radio.radio}
              onClick={() => handleRadio('male', true)} />
            Male
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"
              id='female'
              value={radio.radio}
              onClick={() => handleRadio('female', true)} />
            Female
            </Label>
        </FormGroup>
        <br />
        <FormGroup>
          <Label>Mobile No.</Label>
          <Input type='text'
            id='mobile'
            value={mob.mobile}
            onChange={(e) => handleMobileChange(e)}
          />
        </FormGroup>
      </Form>
    </div>
  )
}
