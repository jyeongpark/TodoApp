import React, { useRef } from "react";
import { validate, Validatable } from "util/validation";
import "components/NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    const inputValidate: Validatable = {
      value: `${enteredText}`,
      maxLength: 15,
      minLength: 0,
    };
    if (validate(inputValidate)) {
      props.onAddTodo(enteredText);
      textInputRef.current!.value = "";
    } else {
      alert(
        `${inputValidate.minLength + 1}글자 이상 ${
          inputValidate.maxLength - 1
        }글자 이하 입력하세요`
      );
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
