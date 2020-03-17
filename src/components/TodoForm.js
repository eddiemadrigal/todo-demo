import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue(""); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="input"
        type="text"
        className="input"
        value={ value }
        placeholder = "Enter a Task ..."
        onChange={e => setValue(e.target.value)}
      />
      <Button id="submitButton" color="primary" size="lg" block>Submit</Button>
    </Form>
  );
}

export default TodoForm;