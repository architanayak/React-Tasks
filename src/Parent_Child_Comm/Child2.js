import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

export const Child2 = (props) => {
  return (
    <div className='child2'>
      <FaTimesCircle onClick={() => props.removeSelectedItem(props.selectedItem)}/>
      <div className='child2-items'>
        {props.selectedItem ? props.selectedItem.name : null}
      </div>
      <div className='child2-items'>
        <img height={70} src={props.selectedItem ? props.selectedItem.img : null} />
      </div>
    </div>
  )
}
