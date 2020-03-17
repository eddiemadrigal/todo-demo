import React, { useState } from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { Container, Row, Col } from 'reactstrap';
import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]);

  const addTodo = item => {
    const newTodos = [...todos, { item, completed: false, id: new Date() }];
    setTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    if (newTodos[index].completed === false) {
      newTodos[index].completed = true;
    } else {
      newTodos[index].completed = false;
    }
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <Container id="container">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>

            <h1>Todo List</h1>

            <TodoForm addTodo={addTodo} />  

            {todos.map((item, index) => (
              <Todo
                key={index}
                index={index}
                todo={item}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;