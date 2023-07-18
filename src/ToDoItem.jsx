import "./App.css";
import { useState } from "react";

function ToDoItem({ toDoTask, handleDelete }) {
  let myTodoText = toDoTask || "Untitled To Do";

  const [isCompleted, setIsCompleted] = useState(false);


  return (
    <div onClick={() => setIsCompleted(!isCompleted)} className="row gy-3">
      <div
        className="col-md-8 todo m-auto"
        style={isCompleted ? { backgroundColor: "gray" } : {}}
      >
        <div className="row pt-3 text-box">
          {/* Note that we are using an embedded JS expression in our JSX */}
          <p
            style={isCompleted ? { textDecoration: "line-through" } : {}}
            className="text mx-auto"
          >
            {myTodoText}
          </p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            <button onClick={handleDelete} className="btn btn-danger w-75 px-0 m-0 my-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
