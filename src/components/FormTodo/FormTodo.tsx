import { FC, FormEvent, useState } from 'react';
import styles from './FormTodo.module.scss';
import { IFormTodo } from '../../types/todo.type';
import Button from '../ui/Button/Button';

const FormTodo: FC<IFormTodo> = ({ addNewTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addNewTodo(value);
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
