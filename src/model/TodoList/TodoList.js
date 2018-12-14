import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return (
        <ul>
            {
                props.todos.map((elm, index) => {
                    return <TodoItem key={index} isDone={elm.isDone} label={elm.title}></TodoItem>
                })
            }
        </ul>
    )
}