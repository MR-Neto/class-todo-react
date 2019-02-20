import React, { Component } from 'react';

class Form extends Component {
  state = {
    todoInput: '',
  }

  handleInput = (e) => {
    this.setState({
      todoInput: e.target.value,
    })
  }

  handleClick = () => {
    const { todoInput } = this.state;
    const { addToList } = this.props;
    addToList(todoInput)
    this.setState({
      todoInput: '',
    })
  }

  render() {
    const { todoInput } = this.state;
    return (
      <div>
        <input type="text" value={todoInput} onChange={this.handleInput} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Form;