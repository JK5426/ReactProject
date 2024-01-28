import { useContext, useState } from "react";
import style from "./TodoItem.module.css";
import { TiDocumentDelete } from "react-icons/ti";
import { TodoItemContext } from "../store/TodoItemContext";

function ShowItem({ id, itemName, date }) {
  const { deleteTodoItem } = useContext(TodoItemContext);

  const handleOnClick = () => {
    const conf = confirm("are you sure to delete this element ?");
    conf && deleteTodoItem(id);
  };

  return (
    <div className={`container  ${style["todo-item"]}`}>
      <div className="row item-row ">
        <div className={`col-6 `}>
          <span className={style["item-name"]}>{itemName}</span>
        </div>
        <div className={`col-4 `}>{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger cus-btn"
            onClick={handleOnClick}>
            <TiDocumentDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

function TodoItem() {
  const { todoItem } = useContext(TodoItemContext);
  return (
    <>
      {todoItem.map((item) => (
        <ShowItem {...item} key={item.id} />
      ))}
    </>
  );
}

export default TodoItem;
