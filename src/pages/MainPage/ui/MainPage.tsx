import { useAppSelector } from "app/hooks";
import { TodoForm } from "features/TodoForm";
import { TodoList } from "features/TodoList";
import Loader from "shared/ui/Loader/Loader";

const MainPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.todos);
  return (
    <section>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
      {loading && <Loader />}
    </section>
  );
};

export default MainPage;
