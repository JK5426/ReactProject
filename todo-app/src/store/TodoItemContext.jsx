import { createContext } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoItemContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        id: action.payload.id,
        itemName: action.payload.itemName,
        date: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (items) => items.id !== action.payload.id
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItem, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addTodoItem = (item, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        id: uuidv4(),
        itemName: item,
        date: date,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteTodoItem = (itemId) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id: itemId,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemContext.Provider value={{ todoItem, addTodoItem, deleteTodoItem }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContextProvider;
