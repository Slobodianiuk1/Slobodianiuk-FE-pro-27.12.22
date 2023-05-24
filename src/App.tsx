import TodoWrap from './components/TodoWrap/TodoWrap';
import FormTodo from './components/FormTodo/FormTodo';

export const App = () => {


  return (
    <div className="App">
      <h1>Todo list</h1>
      <FormTodo/>
      <TodoWrap/>
    </div>
  );
};
