// src/app/store.ts

import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import todosReducer from 'entities/todos/todoSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export default store;
