import {createSlice} from "@reduxjs/toolkit";
import {getTodos} from "../../api/todos";
import {ITodo} from "../../../types/todo.type.ts";

type IState = {
  todos: [] | ITodo[],
  isLoading: boolean,
  isError: boolean
}

const initialState: IState = {
  todos: [],
  isLoading: false,
  isError: false
}

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
        addTodo: (state, {payload}) => {
          state.todos = [...state.todos, payload]
        },
        deleteTodo: (state, {payload}) => {
          state.todos = state.todos.filter(({id}) => id !== payload)
        },
        isCompleted: (state, {payload}) => {
          state.todos = state.todos.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo )
        },
  },

  extraReducers: builder => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(getTodos.fulfilled, (state, {payload}) =>{
      state.isLoading = false
      state.isError = false
      state.todos = payload
    })
    builder.addCase(getTodos.rejected, (state) =>{
      state.isLoading = false
      state.isError = true
      state.todos = []
    })
  }
})

export const { addTodo, deleteTodo, isCompleted } = todosSlice.actions