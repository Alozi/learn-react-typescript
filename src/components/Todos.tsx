const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
// export default function Todos(props: {items: string[], children}) {
//     return <ul>
//         {props}
//     </ul>
// }
