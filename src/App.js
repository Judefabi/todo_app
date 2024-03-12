// import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToDo = () => {
    if (todo !== "") {
      setTodoList([...todoList, { title: todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const deleteToDo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    // const newTodos = todoList.filter((todo) => {
    //   return todo !== text;
    // });
    setTodoList(newTodoList);
  };
  // console.log(todoList);

  const editToDo = (index) => {
    const todos = [...todoList];
    const editedTodo = prompt("Edit to-do", todos[index].title);
    if (editedTodo !== null && editedTodo.trim() !== "") {
      todos[index].title = editedTodo;
      todos[index].isCompleted = false;
      setTodoList(todos);
    }
  };

  const toggleComplete = (index) => {
    setTodoList(
      todoList.map((todo, idx) =>
        idx === index ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">React ToDo</header>
      <h1 className="">React Todo</h1>
      <div className="inner-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo activity"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={addToDo} className="add-button">
          Add
        </button>
      </div>
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((todo, index) => (
            <div className="todo">
              <li
                className={`${todo.isCompleted ? "completed" : ""}`}
                key={index}>
                {todo.title}
              </li>

              <button onClick={() => editToDo(index)} className="edit-button">
                Edit
              </button>
              <button
                onClick={() => toggleComplete(index)}
                className="complete-button">
                Complete
              </button>
              <button
                onClick={() => deleteToDo(index)}
                className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task Remaining</p>
        </div>
      )}
    </div>
  );
}

export default App;
