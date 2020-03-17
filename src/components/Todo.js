import React from 'react';
import { Button, Input } from 'reactstrap';

function Todo({ todo, index, toggleTodo, removeTodo }) {
    return (
        <div
        className="todo"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
        <Input id="todo-text" value = {todo.item} readOnly />
            <Button id="complete" color="success" onClick={() => toggleTodo(index)}>Complete</Button>
            <Button id="remove" color="danger" onClick={() => removeTodo(index)}>x</Button>
        </div>
    );
}

export default Todo;