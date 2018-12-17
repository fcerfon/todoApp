import React, { Component } from 'react';
import TodoList from './model/TodoList/TodoList';
import './App.css';
import TodoForm from './model/TodoList/TodoForm';

class App extends Component {

  constructor() {
    super();
    this.todos = [];

    this.onNewTodo = this.onNewTodo.bind(this)
    this.reset = this.reset.bind(this);
  }

  onNewTodo(todoText) {
    this.todos.push({
      title : todoText,
      isDone : false
    });
    this.setState({});
  }

  reset() {
    this.todos = [];
    this.setState({});
  }

  render() {
    let todoListComponent;
    if (this.todos.length == 0) {
      todoListComponent = <p>Vous n'avez aucun todo</p>
    }
    else {
      todoListComponent = <TodoList todos={this.todos}></TodoList>
    }
    return (
      <>
        <TodoForm reset={this.reset} onDone={this.onNewTodo}></TodoForm>
        {todoListComponent}
      </>
    );
  }
}

export default App;
