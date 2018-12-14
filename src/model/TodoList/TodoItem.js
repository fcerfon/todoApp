import React, { Component } from 'react';
import StrongLabel from "../common/StrongLabel"

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isDone: false };
    }

    onStatusChange(event) {
        if (event.target.checked) {
            this.setState({ isDone: true });
        }
        else {
            this.setState({ isDone: false });
        }
    }

    render() {

        const checkbox = this.state.checked ?
            <input type='checkbox' onChange={(event) => this.onStatusChange(event)} checked /> :
            <input type='checkbox' onChange={(event) => this.onStatusChange(event)} />

        const checkedClassName = this.state.isDone ? 'checked' : 'unchecked';

        return (
            <div className={`todoItem todo-${checkedClassName}`}>
                {checkbox}
                <StrongLabel title={this.props.label}></StrongLabel>
            </div>
        )
    }
}