import React, { useState } from 'react';
import { addTodoAsync } from 'entities/todos/todoThunk';
import {useAppDispatch} from "app/hooks";
import cls from './TodoForm.module.scss';
const TodoForm: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === '') return;

        dispatch(addTodoAsync(text.trim()));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={cls.TodoForm}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
