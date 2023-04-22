export interface ITodoWrapProps {
  todoList: ITodo[];
  toggleTodoHandler: (id: string) => void;
  deleteTodoHandler: (id: string) => void;
}

export interface ITodoProps extends ITodo {
  toggleTodoHandler: (id: string) => void;
  deleteTodoHandler: (id: string) => void;
}

interface ITodo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export interface IFormTodo {
  addNewTodo: (title: string) => void;
}
