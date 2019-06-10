import React, { Component } from 'react';
import {
  NavItem,
  Navbar
} from 'reactstrap';
import { Route, Switch, NavLink } from 'react-router-dom';
import { HooksExState } from './HooksExample/HooksExState';
import { HooksExEffect } from './HooksExample/HooksExEffect';
import Column from './Column/Column';
import { Forms } from './Form_Hooks/form_hooks';
import Mobile from './Mobile_Input/mobile';
import Parent from './Parent_Child_Comm/Parent';
import ReactSelect from './React_Select/Select';
import { ParentTextBox } from './Multiple_textBox_handling/parent';

const header = [
  { name: 'Column Task', to: '/column' },
  { name: 'React Select', to: '/react_select' },
  { name: 'Use state', to: '/hooks_useState' },
  { name: 'Use Effect', to: '/hooks_useEffect' },
  { name: 'Form using hooks', to: '/hooks_form' },
  { name: 'Mobile Input', to: '/mobile' },
  { name: 'Parent-Child-Communication', to: '/parent' },
  { name: 'Multiple-TextBox', to: '/multiple-textbox' }
]
class Header extends Component {
  render() {
    return (
      <div className='heading'>
        <Navbar>
          {header.map((header, key) => {
            return (
              <div className='nav-items' key={key}>
                <NavItem>
                  <NavLink to={header.to}>{header.name}</NavLink>
                </NavItem>
              </div>
            )
          })}
        </Navbar>
        <Switch>
          <Route exact path='/column' component={Column}></Route>
          <Route exact path='/react_select' component={ReactSelect}></Route>
          <Route exact path='/hooks_useState' component={HooksExState}></Route>
          <Route exact path='/hooks_useEffect' component={HooksExEffect}></Route>
          <Route exact path='/hooks_form' component={Forms}></Route>
          <Route exact path='/mobile' component={Mobile}></Route>
          <Route exact path='/parent' component={Parent}></Route>
          <Route exact path='/multiple-textbox' component={ParentTextBox}></Route>
        </Switch>
      </div>
    )
  }
}
export default Header