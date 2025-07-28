export default function NewTodo() {
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
}
