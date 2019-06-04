import React, { Component } from 'react';
import {
  Input,
  Label
} from 'reactstrap';

class Mobile extends Component {
  constructor(props) {
    super(props)
    this.state = { mobile: '' }
  }
  handleMobileChange = (e) => {
    let number = e.target.value.replace(/\D/g, ''); // pure number --> no brackets,spaces,special chars nothing.
    let subStringFirst = number.substring(0, 3)     //First substring
    let subStringSecond = number.substring(3, 6)    //Second substring
    let subStringThird = number.substring(6, 10)    //Third substring
    if (number.length > 6) {
      let afterFirst = '(' + subStringFirst + ') ' + subStringSecond + '-' + subStringThird;
      this.setState({
        mobile: afterFirst
      })
    }
    else if (number.length > 3) {
      let first = '(' + subStringFirst + ') ' + subStringSecond;
      this.setState({
        mobile: first
      })
    }
    else {
      this.setState({ mobile: number })
    }
  }
  render() {
    return (
      <div>
        <center>
          <Label> Mobile Number
          <Input
              value={this.state.mobile}
              onChange={(e) => this.handleMobileChange(e)}
            />
          </Label>
        </center>
      </div>
    )
  }
}
export default Mobile