import React, { Component } from 'react';
import './Column.css'
import { Button } from 'reactstrap';
import { FaSortUp, FaSortDown, FaTimes } from 'react-icons/fa';
import _ from 'lodash';
class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableColumns: [],
      selectedColumns: [],
      tempAvailableColumns: [],
      tempSelectedColumns: [],
      tempMove: {},
      active: [],
      color: ''
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
  availableColumn(col, key) {
    // debugger;
    const { tempAvailableColumns } = this.state;
    // if (active === key - 1) {
    //   this.setState({ active: null })
    // } else {
    //   active.push(col.name)
    //   this.setState({ active: active })
    // }

    if (tempAvailableColumns.find(x => x.index === col.index)) {
      return;
    } else {
      this.setState({ tempAvailableColumns: [...tempAvailableColumns, col] });
    }
  }
  addColumn() {
    const availableColumns = [...this.state.availableColumns];
    const tempAvailableColumns = [...this.state.tempAvailableColumns];

    const selectedColumns = [...this.state.selectedColumns, ...tempAvailableColumns]
    const filtered_availableColumn = _.differenceBy(availableColumns, tempAvailableColumns, 'index');

    this.setState({
      availableColumns: filtered_availableColumn,
      selectedColumns: selectedColumns,
      tempAvailableColumns: [],
      // active: []
    });
  }
  selectedColumn(col) {
    const tempSelectedColumns = [...this.state.tempSelectedColumns];
    if (tempSelectedColumns.indexOf(col) === -1) {
      tempSelectedColumns.push(col);
    }
    this.setState({ tempSelectedColumns, tempMove: col })
  }
  removeColumn() {
    const { tempSelectedColumns, selectedColumns } = this.state;
    const availableColumns = [...this.state.availableColumns, ...tempSelectedColumns]
    let sortedAvailableColumns = _.sortBy(availableColumns, 'index');
    const filtered_selectedCol = _.differenceBy(selectedColumns, tempSelectedColumns, 'index')

    this.setState({
      availableColumns: sortedAvailableColumns,
      selectedColumns: filtered_selectedCol,
      tempSelectedColumns: []
    })
  }
  shiftElementsUpDown(id) {
    const { tempMove, selectedColumns } = this.state;
    if (selectedColumns !== null) {
      let index = _.indexOf(selectedColumns, selectedColumns.find(x => x.index === tempMove.index))
      console.log('index', index)
      if (id === 'down') {
        var prevIndex = (index + 1 + selectedColumns.length) % selectedColumns.length;
        console.log('hkh', prevIndex)

      }
      else if (id === 'up') {
        var prevIndex = (index - 1 + selectedColumns.length) % selectedColumns.length;
      }
      selectedColumns.splice(prevIndex, 0, selectedColumns.splice(index, 1)[0]);

      this.setState({ selectedColumns: selectedColumns })
    }
    else {
      console.log('jklj')
    }

  }
  divColor(col) {
    // debugger;
    if (this.state.tempAvailableColumns.find(x => x.index === col.index)) {
      return 'blue';
    }

  }

  render() {
    return (
      <div className='wrapper'>
        <div className='column-left'>
          <h3>Available Column</h3>
          {this.state.availableColumns.map((col, key) => {
            return (
              <div style={{ color: this.divColor(col) }}
                onClick={() => this.availableColumn(col, key)}
                key={col.index + key}
              >
                {col.name}
              </div>
            )
          })}
        </div>
        <div className='button'>
          <Button
            disabled = {!this.state.tempAvailableColumns[0]}
            color='primary'
            onClick={() => this.addColumn()}>
            Add
          </Button>
        </div>
        <div className='column-right'>
          <h3>Selected Column</h3>
          {this.state.selectedColumns.map((col, key) => {
            return (
              <>
                <div onClick={() => this.selectedColumn(col)}
                  key={key}
                >
                  {col.name}
                </div>
              </>
            )
          })}
        </div>
        <div className='buttons'>
          <button
            disabled={!this.state.tempMove.name}
            onClick={() => this.shiftElementsUpDown('up')}
            className='fa-icons'
          >
            <FaSortUp />
          </button>
          <button
            disabled={!this.state.tempMove.name}
            onClick={() => this.shiftElementsUpDown('down')}
            className='fa-icons'>
            <FaSortDown />
          </button>
          <button
            disabled={!this.state.tempMove.name}
            onClick={() => this.removeColumn()}
            className='fa-icons'>
            <FaTimes />
          </button>
        </div>
      </div>
    )
  }
}
export default Column;