import { useRef } from "react";

export default function NewTodo() {
  const todoTextInput = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;
    console.log(enteredText);

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
}
