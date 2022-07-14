import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      padding: '5px',
      textDecoration: this.props.todos.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title }  = this.props.todos
    return (
      <div style={ this.getStyle() }>
        <p> <input type='checkbox' onChange={this.props.handleCheck.bind(this, id)}></input> { title }</p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todos: propTypes.object.isRequired
}

export default Todoitem