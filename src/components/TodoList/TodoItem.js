import React, { Component } from 'react';
import StrongLabel from "../common/StrongLabel"

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { done: false };
    }

    onStatusChange(event) {
        this.setState({ done: !this.state.done });
    }

    render() {
        const checkedClassName = this.state.done ? 'checked' : 'unchecked';

        return (
            <div className={`todoItem todo-${checkedClassName}`}>
                <input type='checkbox' checked={this.state.done} onChange={this.onStatusChange.bind(this)} />
                <StrongLabel title={this.props.label}></StrongLabel>
            </div>
        )
    }
}