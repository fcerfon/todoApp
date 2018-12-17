import React, { Component } from 'react';

export default class TodoForm extends Component {

    constructor() {
        super();
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.resetTodos = this.resetTodos.bind(this);
    }

    onFormSubmitted(event) {
        event.preventDefault();
        var form = event.target;
        this.props.onDone(form.elements['todo_text'].value);
    }

    resetTodos(event) {
        event.preventDefault();
        this.props.reset();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmitted}>
                <section>
                    <input id='todo_text' type='text' />
                </section>
                <section>
                    <input type='submit' />
                </section>
                <section>
                    <button type='button' onClick={this.resetTodos}>Vider la liste</button>
                </section>
            </form>
        );
    }
}