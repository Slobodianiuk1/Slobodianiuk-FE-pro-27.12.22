import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ITodo} from "../../../types/todo.type.ts";

const API = 'https://jsonplaceholder.typicode.com/todos'


export const getTodos = createAsyncThunk<ITodo[], null>(
  'todos',
  async (_, { rejectWithValue }) => {
    try {
      const todos = await axios.get<ITodo[]>(API)
      return  todos.data
    } catch (error: any){
      return rejectWithValue(error)
    }
  }
)
