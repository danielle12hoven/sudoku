import React, { PureComponent } from 'react'
import Store from '../store'
// import {Link} from 'react-router';
// import { history } from '../store'
import {Link} from 'react-router';
import API from '../api'


const api = new API()
const games = api.service('games')


class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(newProps, newState) {
    const oldCell = this.props.cell;
    const newCell = newProps.cell;
    return (
      oldCell.value !== newCell.value ||
      oldCell.editable !== newCell.editable ||
      oldCell.hasConflict !== newCell.hasConflict
    );
  }

  render() {
    const cell = this.props.cell;

    const classes = [];
    classes.push('i'+cell.i);
    classes.push('j'+cell.j);
    classes.push(cell.editable ? 'editable' : 'not-editable');
    classes.push(cell.hasConflict ? 'has-conflict' : 'no-conflict');

    return (
      <td className={classes.join(' ')}>
        <input
          type="tel"
          value={cell.value}
          onClick={this.onClick}
          onChange={this.onChange} />
      </td>
    );
  }

  onClick(event) {
    event.preventDefault();
    if (this.props.cell.editable) {
      event.target.select();
    } else {
      event.target.blur();
    }
  }

  onChange(event) {
    event.preventDefault();
    const cell = this.props.cell;
    if (!cell.editable) {
      return;
    }
    const newValue = event.target.value;
    if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
      event.target.value = cell.value;
      return;
    }
    Store.dispatch({
      type: 'CHANGE_VALUE',
      i: cell.i,
      j: cell.j,
      value: newValue === '' ? null : parseInt(newValue)
    });
  }
}