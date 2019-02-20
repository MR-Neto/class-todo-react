import React, { Component } from 'react';
import Item from './Item';
import Form from './Form';

const initialData = ['finish demo', 'buy milk'];

class Todo extends Component {
  state = {
    todos: initialData,
  }

  handleDelete = (index) => {
    const { todos } = this.state
    todos.splice(index,1);
    this.setState({
      todos: [...todos]
    })
  }

  listTodos = () => {
    const { todos } = this.state;
    return todos.map((item, index) => {
      return <Item 
        key={`${item}-${index}`}
        index={index}
        name={item}
        referenceToDeleteFunction={this.handleDelete}
      />
    });
  }

  handleClick = (todoInput) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoInput] // the line below is the same
    // const newTodos = []
    // todos.forEach((item) => {
    //   newTodos.push(item);
    // })
    // newTodos.push(todoInput)
    this.setState({
      todos: newTodos,
    })
  }

  render() {    
    return (
      <div>
        <Form addToList={this.handleClick} />
        {this.listTodos()}
      </div>
    );
  }
}

export default Todo;