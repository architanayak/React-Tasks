import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
// addColValue(col,index) {
//     //debugger
//     console.log(index)
//     let arr = this.state.availableColumn;
//     let arr2= arr.splice(index,1);
//     arr.filter(value => !arr.includes(value))
//     console.log('arr::',arr)
//     // this.setState({availableColumn : arr})
//     this.state.selectedColumns.push(col)
//     console.log('arr',...this.state.selectedColumns)
//   }
