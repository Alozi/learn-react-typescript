import { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export default function NewTodo() {
  const todosCtx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
}
