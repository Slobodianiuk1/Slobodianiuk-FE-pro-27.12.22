import {FC, useEffect} from 'react';
import styles from './TodoWrap.module.scss';
import Todo from '../Todo/Todo';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getTodos} from "../../store/api/todos";

const TodoWrap: FC = () => {

  useEffect(() => {
    dispatch(getTodos(null))
  }, [])

  const dispatch = useAppDispatch()

  const {todos, isError, isLoading} = useAppSelector(({todos}) => todos)

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>ERROR!!!</div>

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoWrap;
