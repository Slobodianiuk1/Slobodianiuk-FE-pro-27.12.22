import { FC } from 'react';
import styles from './Todo.module.scss';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { ITodo } from '../../types/todo.type';
import clsx from 'clsx';
import {useAppDispatch} from "../../hooks";
import {deleteTodo, isCompleted} from "../../store/slice/todos";

const Todo: FC<ITodo> = ({
  id,
  completed,
  title,
}) => {

  const dispatch =  useAppDispatch()

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
        onClick={() => dispatch(deleteTodo(id))}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => dispatch(isCompleted(id))}
      />
    </div>
  );
};

export default Todo;
