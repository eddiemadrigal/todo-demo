import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Input} from 'reactstrap';

const TodoForm = (props) => {
  const { addTodo, clearCompleted } = props;
  const [item, setItem] = useState("");
  const handleChange = event => setItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(item);
    setItem("");
  };
  const handleClear = event => {
    event.preventDefault();
    clearCompleted();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container id="container">
        <h1>Todo List</h1>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="text"
              id="input"
              name="item"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange} />
            <Button color="success" size="lg" block>Add the Todo Item</Button>
            <Button onClick={handleClear} color="danger" size="lg" block>Remove Completed</Button>
          </Col>
        </Row>
      </Container>
      
    </Form>
  );
};

export default TodoForm;