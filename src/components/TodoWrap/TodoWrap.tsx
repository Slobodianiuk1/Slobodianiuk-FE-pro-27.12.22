import { FC } from 'react';
import styles from './TodoWrap.module.scss';
import Todo from '../Todo/Todo';
import { ITodoWrapProps } from '../../types/todo.type';

const TodoWrap: FC<ITodoWrapProps> = ({
  todoList,
  toggleTodoHandler,
  deleteTodoHandler,
}) => {
  return (
    <div className={styles.container}>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          toggleTodoHandler={toggleTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </div>
  );
};

export default TodoWrap;
