import React, { Component, useState } from 'react';
import './App.css'
import { Button } from 'reactstrap';
import { FaSortUp, FaSortDown, FaTimes } from 'react-icons/fa';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableColumns: [],
      selectedColumns: [],
      tempAvailableColumns: [],
      tempSelectedColumns: [],
      tempMove: {}
    };
    this.cols =
      [
        { name: '1Annual Revenue', value: 'Annual_Revenue', index: 1 },
        { name: '2City', value: 'City', index: 2 },
        { name: '3Company', value: 'Company', index: 3 },
        { name: '4Country', value: 'Country', index: 4 },
        { name: '5Created By', value: 'Created_By', index: 5 },
        { name: '6Created Time', value: 'Created_Time', index: 6 },
        { name: '7Description', value: 'Description', index: 7 },
        { name: '8Email', value: 'Email', index: 8 },
        { name: '9Email Opt Out', value: 'Email_Opt_Out', index: 9 },
        { name: '10Fax', value: 'Fax', index: 10 },
        { name: '11First Name', value: 'First_Name', index: 11 },
        { name: '12Full Name', value: 'Full_Name', index: 12 },
        { name: '13Industry', value: 'Industry', index: 13 },
      ]
  }
  componentWillMount() {
    this.setState({ availableColumns: [...this.cols] })
  }
  availableColumn(col) {
    const { tempAvailableColumns } = this.state;
    if (tempAvailableColumns.find(x => x.index === col.index)) {
      return;
    } else {
      this.setState({ tempAvailableColumns: [...tempAvailableColumns, col] });
    }
  }
  addColumn() {
    // debugger;
    const availableColumns = [...this.state.availableColumns];
    const tempAvailableColumns = [...this.state.tempAvailableColumns];

    const selectedColumns = [...this.state.selectedColumns, ...tempAvailableColumns]


    // const filtered_availableColumn = availableColumns.filter(x => {
    //   let temp = tempAvailableColumns.find(y => {
    //     return x.index === y.index;
    //   });
    //   return temp === undefined ? true : false;
    // });
    const filtered_availableColumn = _.differenceBy(availableColumns, tempAvailableColumns, 'index');

    // const filtered_availableColumn = availableColumns.filter(x => !tempAvailableColumns.find(y => x.index === y.index));

    this.setState({
      availableColumns: filtered_availableColumn,
      selectedColumns: selectedColumns,
      tempAvailableColumns: [],
    });
  }
  selectedColumn(col) {
    console.log("col", col);
    const tempSelectedColumns = [...this.state.tempSelectedColumns];
    if (tempSelectedColumns.indexOf(col) == -1) {
      tempSelectedColumns.push(col);
    }
    this.setState({ tempSelectedColumns, tempMove: col })
  }
  removeColumn() {
    const { tempSelectedColumns, selectedColumns } = this.state;
    const availableColumns = [...this.state.availableColumns, ...tempSelectedColumns]
    let soterdAvailableColumns = _.sortBy(availableColumns, 'index');
    const filtered_selectedCol = _.differenceBy(selectedColumns, tempSelectedColumns, 'index')

    this.setState({
      availableColumns: soterdAvailableColumns,
      selectedColumns: filtered_selectedCol,
      tempSelectedColumns: []
    })

    // const availableColumns = [...this.state.availableColumns];
    // const tempSelectedColumns = [...this.state.tempSelectedColumns];

    // const selectedColumns = [...this.state.selectedColumns];
    // availableColumns.push(...this.state.tempSelectedColumns);

    // this.setState({ availableColumns: availableColumns, tempSelectedColumns: [] })
    // const filtered_selectedCol = selectedColumns.filter(x => !tempSelectedColumns.includes(x))

    // this.setState({ selectedColumns: filtered_selectedCol })
  }
  shiftUpwards() {
    // debugger;
    const { tempMove, selectedColumns } = this.state;
    let index = _.indexOf(selectedColumns, selectedColumns.find(x => x.index === tempMove.index))
    // console.log('index::', _.findLastIndex(selectedColumns));
    // for(let i=0; i<=selectedColumns.length; i++){
      
    selectedColumns.splice(index - 1, 0, selectedColumns.splice(index, 1)[0])
    // }
    this.setState({ selectedColumns: selectedColumns })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='column-left'>
          <h3>Available Column</h3>
          {this.state.availableColumns.map((col, key) => {
            return (
              <div onClick={() => this.availableColumn(col)}
                key={col.index + key}
              >
                {col.name}
              </div>
            )
          })}
        </div>
        <div className='button'>
          <Button color='primary' onClick={() => this.addColumn()}>Add</Button>
        </div>
        <div className='column-right'>
          <h3>Selected Column</h3>
          {this.state.selectedColumns.map((col, key) => {
            return (
              <>
                <div onClick={() => this.selectedColumn(col)}
                  key={col.index + key}
                >
                  {col.name}
                </div>
              </>
            )
          })}
        </div>
        <div className='buttons'>
          <button onClick={() => this.shiftUpwards()} className='fa-icons'>
            <FaSortUp />
          </button>
          <button className='fa-icons'>
            <FaSortDown />
          </button>
          <button onClick={() => this.removeColumn()} className='fa-icons'>
            <FaTimes />
          </button>
        </div>
      </div>
    )
  }
}
export default App;