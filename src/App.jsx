import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItem from "./ToDoItem";
import { useState, useRef } from "react";

function ToDoList() {

  const [toDoItems, setToDoItems] = useState([])
  const inputRef = useRef();

  // To Lift up state, we need a callback / a function defined in the parent where that 
  // state we want to manipulate (from the child) exists.
  function handleDelete(id) {

    console.log(id)
    setToDoItems(
      toDoItems.filter((toDo) => {
        return toDo.id !== id;
      })
    )
  }


  function handleAdd() {
    // ["Walk the dog", "WAsh the dishes", "New Todo item"] <- use spread
    // operator to create a brand new array that is extended copy of prev
    // array. Avoids unexpected side effects due to immutability principle
    setToDoItems([...toDoItems, {
      text: inputRef.current.value,
      id: Date.now()
    }])
    inputRef.current.value = ""
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row text-center">
          <h1>To Do List:</h1>
          <p>
            Click 'Add' to add a new to do and click a todo to cross it off!
          </p>
        </div>
        <div className="row justify-center text-center">
          {/* This is where our todo items will go */}
          {
            toDoItems.map((toDo) => {

              console.log(toDo.id)

              return(
                <ToDoItem key={toDo.id} toDoTask={toDo.text} handleDelete={() => handleDelete(toDo.id)} />
              )
            })  
          }
        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write ToDo Task here..."
                aria-label="ToDoInput"
                ref={inputRef}
              />
              <div className="input-group-append">
                <button onClick={handleAdd} className="btn btn-primary h-100 m-0" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
