import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [todo, setTodo] = useState("");

  // CREATE
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      todo: todo,
      completed: false,
    };
    setTodoArr([...todoArr, obj]);
    setTodo("");
  };

  // UPDATE
  const updateTodo = (id) => {
    const updatedArr = todoArr.map((task, index) => {
      if (id === index) {
        task.completed = true;
        // if ((task.completed = true)) {
        //   task.completed={{ textDecoration: "line-through" }};
        // }
      }
      return task;
    });
    setTodoArr(updatedArr);
    // .map() because we are transforming not filtering out
  };

  // DELETE/DESTROY
  const deleteTask = (id) => {
    const updatedArr = todoArr.filter((task, index) => {
      return index !== id;
      // looping thru Arr with .filter(), return -runs and stores in- updatedArr, callback function has (task=ea item,index=index of item), AND passing in id of item at deleteItem(index), SO if id and index don't match keep and add to updatedArr but if matched don't add to updatedArr
    });
    setTodoArr(updatedArr);
  };

  return (
    <div className="App mt-5">
      <form
        onSubmit={submitHandler}
        className=" form-group border-rounded bg-secondary mx-auto "
      >
        <label>Add To-Do:</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className=" btn btn-info">Add To-Do!</button>
      </form>

      {/* READ */}
      {todoArr.map((task, index) => {
        return (
          <div className="mb-3">
            {task.completed ? (
              <span style={{ textDecoration: "line-through" }}>
                {task.todo}
              </span>
            ) : (
              task.todo
            )}
            <input type="checkbox" onChange={() => updateTodo(index)}></input>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-outline-danger"
            >
              Delete Task
            </button>
          </div>
        );
      })}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
