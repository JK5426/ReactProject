import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Container from "./components/Container";
import Welcome from "./components/Welcome";
import TodoItemsContextProvider from "./store/TodoItemContext";

function App() {
  return (
    <>
      {/* Create a container to that can contain all the details */}
      <TodoItemsContextProvider>
        <Container>
          <AppName />
          <AddTodo />
          <Welcome />
          <TodoItem />
        </Container>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
