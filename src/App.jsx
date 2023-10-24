import "./App.css";
import { useState, useEffect } from "react";
import InputGroup from "./components/InputGroup";
import List from "./components/List";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [isHideComplete, setIsHideComplete] = useState(false);
  const [nextId, setNextId] = useState(0);
  const [userTitle, setUserTitle] = useState("");
  function addTodo() {
    setTodos([...todos, { id: nextId, title: userTitle, isComplete: false }]);
    setNextId(nextId + 1);
    setUserTitle("");
  }

  return (
    <>
      <h1>Todo List</h1>
      <InputGroup
        addNewTodo={() => userTitle && addTodo()}
        userTitle={userTitle}
        changeUserTitle={(newTitle) => setUserTitle(newTitle)}
      />
      <List
        todos={todos}
        isHideComplete={isHideComplete}
        onDeleteTodo={(id) => setTodos(todos.filter((todo) => todo.id != id))}
        onCompleteTodo={(id) =>
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
          )
        }
      />
      <button onClick={() => setIsHideComplete(!isHideComplete)}>
        {isHideComplete ? "완료 항목 보이기" : "완료 항목 숨기기"}
      </button>
    </>
  );
}
