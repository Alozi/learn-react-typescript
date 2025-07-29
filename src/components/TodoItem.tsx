import classes from "./TodoItem.module.css";

export default function TodoItem({
  text,
  id,
  onRemoveTodo,
}: {
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}) {
  return (
    <li className={classes.item} onClick={() => onRemoveTodo(id)}>
      {text}
    </li>
  );
}
