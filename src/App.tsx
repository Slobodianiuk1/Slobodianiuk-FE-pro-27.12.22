import { useState } from 'react';
import TodoWrap from './components/TodoWrap/TodoWrap';
import { todoData } from './mocks/todo.mock';
import FormTodo from './components/FormTodo/FormTodo';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [todoList, setTodoList] = useState(todoData);

  const addNewTodo = (title: string) => {
    const newTodo = {
      userId: 1,
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const toggleTodoHandler = (id: string): void => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )
    );
  };

  const deleteTodoHandler = (id: string): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <FormTodo addNewTodo={addNewTodo} />
      <TodoWrap
        todoList={todoList}
        toggleTodoHandler={toggleTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
};
