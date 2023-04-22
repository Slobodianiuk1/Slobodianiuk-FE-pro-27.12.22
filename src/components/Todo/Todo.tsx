import { FC } from 'react';
import styles from './Todo.module.scss';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { ITodoProps } from '../../types/todo.type';
import clsx from 'clsx';

const Todo: FC<ITodoProps> = ({
  id,
  completed,
  title,
  toggleTodoHandler,
  deleteTodoHandler,
}) => {
  const todoCompletedStyle = clsx(
    completed && styles.completedTodo,
    styles.todo
  );

  return (
    <div className={todoCompletedStyle}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{title}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodoHandler(id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodoHandler(id)}
      />
    </div>
  );
};

export default Todo;
