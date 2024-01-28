import { useContext, useRef } from "react";
import { FaNotesMedical } from "react-icons/fa6";
import { TodoItemContext } from "../store/TodoItemContext";

function AddTodo() {
  // const [date, setDate] = useState(""); In this we can fetch the value, but it'll reload the UI for every change.

  const contextObj = useContext(TodoItemContext);
  const handleNewItem = contextObj.addTodoItem;

  const dueDate = useRef("");

  const addItem = (event) => {
    event.preventDefault();
    const date = dueDate.current.value;
    handleNewItem(event.target.elements.itemName.value, date);
    event.target.elements.itemName.value = "";
    dueDate.current.value = "";
    // setDate("");
  };

  return (
    <div className="container add-todo">
      <form className="row item-row" onSubmit={addItem}>
        <div className="col-6">
          <input name="itemName" type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input
            // onChange={(event) => setDate(event.target.value)}
            // value={dueDate}
            type="date"
            ref={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success cus-btn">
            <FaNotesMedical />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
