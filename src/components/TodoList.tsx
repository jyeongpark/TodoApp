import React from "react";
import { Todo } from "todo.model";
import "components/TodoList.css";
interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id} className={`${todo.id} ${todo.done && "remove"}`}>
          <span>{todo.text}</span>
          {/* <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button> */}
          {!todo.done ? (
            <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
          ) : (
            <button onClick={() => props.onDeleteTodo(todo.id)}>
              다시하기
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
