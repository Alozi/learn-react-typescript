import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

function TodosContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(enteredText: string) {
    const newTodo = new Todo(enteredText);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  }

  function removeTodoHandler(todoId: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
