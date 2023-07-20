import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string
}

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: ""
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
          state.error = action.payload
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
          state.loading = action.payload
        },
        fetchTodosList: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, fetchTodosList, setLoading, setError } = todoSlice.actions;

export default todoSlice.reducer;