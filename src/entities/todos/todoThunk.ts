import {
  setLoading,
  addTodo,
  toggleTodo,
  deleteTodo,
  fetchTodosList,
  setError,
} from "./todoSlice";
import { AppDispatch, RootState } from "app/store";

// Здесь замокаем функции для эмуляции API запросов
const fetchTodos = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
        { id: 3, text: "Task 3", completed: false },
      ]);
    }, 1000);
  });
};

const saveTodo = (todo: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todo);
    }, 500);
  });
};

const deleteTodoItem = (id: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 300);
  });
};

export const fetchTodosAsync = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const todos = await fetchTodos();
    dispatch(fetchTodosList(todos));
  } catch (e) {
    dispatch(setError("Error Fetch Todos"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addTodoAsync = (text: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const todo = await saveTodo({
      id: Date.now(),
      text,
      completed: false,
    });
    dispatch(addTodo(todo));
  } catch (e) {
    dispatch(setError("Error Add Todos"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const toggleTodoAsync =
  (id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const state = getState() as RootState;
      const todo = state.todos.todos.find((todo) => todo.id === id);
      if (todo) {
        const updatedTodo = {
          ...todo,
          completed: !todo.completed,
        };
        await saveTodo(updatedTodo);
        dispatch(toggleTodo(id));
      }
    } catch (e) {
      dispatch(setError("Error Toggle Todos"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const deleteTodoAsync =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      await deleteTodoItem(id);
      dispatch(deleteTodo(id));
    } catch (e) {
      dispatch(setError("Error Delete Todos"));
    } finally {
      dispatch(setLoading(false));
    }
  };
