import "../App.css";

export default function List({
  todos,
  isHideComplete,
  onDeleteTodo,
  onCompleteTodo,
}) {
  let content;

  content = isHideComplete ? todos.filter((todo) => !todo.isComplete) : todos;

  return (
    <>
      <ul>
        {content.length > 0
          ? content.map((todo) => (
              <li key={todo.id} id={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={(e) =>
                    onCompleteTodo(Number(e.target.parentElement.id))
                  }
                ></input>
                <p className={todo.isComplete ? "done" : ""}>{todo.title}</p>
                <button
                  onClick={(e) => {
                    onDeleteTodo(e.target.parentElement.id);
                  }}
                >
                  X
                </button>
              </li>
            ))
          : "할일 없음"}
      </ul>
    </>
  );
}
