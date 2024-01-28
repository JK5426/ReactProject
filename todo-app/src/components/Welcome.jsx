import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import style from "./Welcome.module.css";

const Welcome = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItem = contextObj.todoItem;
  return (
    todoItem.length === 0 && (
      <div className={style.welcome}>Enjoy your day 😊 !!!</div>
    )
  );
};

export default Welcome;
