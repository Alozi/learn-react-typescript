import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;
export default function Todos({
  items,
  onRemoveTodo,
}: {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}
