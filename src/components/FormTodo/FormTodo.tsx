import { FC, FormEvent, useState } from 'react';
import styles from './FormTodo.module.scss';
import Button from '../ui/Button/Button';
import {useAppDispatch} from "../../hooks";
import {addTodo} from "../../store/slice/todos";
import { v4 as uuidv4 } from 'uuid'

const FormTodo: FC = () => {
  const [value, setValue] = useState('');
const dispatch = useAppDispatch()


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      userId: 1,
      id: uuidv4(),
      title: value,
      completed: false,
    }

    dispatch(addTodo(newTodo))

    setValue('');
  };

  return (
    <div className={styles.todoFromContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button typeBtn="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormTodo;
