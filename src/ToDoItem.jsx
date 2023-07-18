import "./App.css";

function ToDoItem({ toDoTask, urgency }) {
  let taskUrgency = urgency || 0;
  let myTodoText = toDoTask || "Untitled To Do";

  return (
    <div className="row gy-3">
      <div className="col-md-8 todo m-auto">
        <div className="row pt-3 text-box">
          {/* Note that we are using an embedded JS expression in our JSX */}
          <p className="text">{myTodoText}</p>
          <p>Urgency is level: {taskUrgency}</p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            <button className="btn btn-danger w-75 px-0 m-0 my-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
