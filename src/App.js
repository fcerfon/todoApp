import React, { Component } from 'react';
import TodoList from './model/TodoList/TodoList';
import './App.css';
import TodoForm from './model/TodoList/TodoForm';
import Json from './model/mocks/todos.json'

class App extends Component {

  constructor() {
    super();
    this.todos = Json;
  }

  onNewTodo(todoText) {
    this.todos.push({
      title : todoText,
      isDone : false
    });
  }

  render() {
    return (
      <>
        <TodoForm onDone={this.onNewTodo}></TodoForm>
        <TodoList todos={this.todos}></TodoList>
      </>
    );
  }
}

export default App;
