import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoList/TodoForm';

export default class TodoContainer extends Component {

    constructor() {
        super();
        this.state = {
            todos : []
        }

        this.onNewTodo = this.onNewTodo.bind(this)
        this.reset = this.reset.bind(this);
    }

    onNewTodo(todoText) {
        this.setState({
            todos : [{
                title: todoText,
                done: false
            },
            ...this.state.todos] 
        });
    }

    reset() {
        this.setState({
            todos : []
        });
    }

    render() {
        let todoListComponent;
        if (this.state.todos.length === 0) {
            todoListComponent = <p>Vous n'avez aucun todo</p>
        }
        else {
            todoListComponent = <TodoList todos={this.state.todos}></TodoList>
        }
        return (
            <>
                <TodoForm reset={this.reset} onDone={this.onNewTodo}></TodoForm>
                {todoListComponent}
            </>
        );
    }
}