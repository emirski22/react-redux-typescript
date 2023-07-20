import React, { useEffect } from 'react';
import { fetchTodosAsync, toggleTodoAsync, deleteTodoAsync } from 'entities/todos/todoThunk';
import {useAppDispatch, useAppSelector} from "app/hooks";
import cls from "./TodoList.module.scss";
const TodoList: React.FC = () => {
    const {todos, loading} = useAppSelector((state) => state.todos);
     const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch]);

    const handleToggle = (id: number) => {
        dispatch(toggleTodoAsync(id));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteTodoAsync(id));
    };


    return (
        <ul className={cls.TodoList}>
            {todos.map((todo) => (
                <li key={todo.id}>
          <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </span>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
