import { useRef } from "react";
import classes from "./NewTodo.module.css";

export default function NewTodo({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const todoTextInput = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;
    console.log(enteredText);

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
}
