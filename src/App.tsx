import React, { useState } from "react";
import TodoList from "components/TodoList";
import NewTodo from "components/NewTodo";
import { Todo } from "todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "hi", done: false },
  ]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: `t${Math.floor(Math.random() * 100 + 1).toString()}`,
        text: text,
        done: false,
      },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) =>
      prev.map((el) => {
        if (el.id === todoId) {
          return { ...el, done: !el.done };
        } else {
          return { ...el };
        }
      })
    );
    // todos.forEach((todo) => {
    //   if (todo.id === todoId) {
    //     document.querySelector(`.${todoId}`)!.classList.toggle("remove");
    //   }
    // });

    // });
  };
  return (
    <div className="App">
      {/* A Component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
