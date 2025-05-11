import { useState, useEffect } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function App() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const item = localStorage.getItem("todos");
    return item ? JSON.parse(item) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onDelete = (value) => {
    setToDos((prev) => prev.filter((item) => item !== value));
  };


  return (
    <div className="todolist">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (
        <TodoItem todo={item} onDelete={() => onDelete(item)}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
