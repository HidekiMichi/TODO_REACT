import { useState } from "react";

function AddTodo({onNewItem}) {

const[todoName, setTodoName] = useState("");
const[dueDate, setDueDate] = useState("");

const handleNameChange = (e) => {
  setTodoName(e.target.value);
};

const handleDateChange=(e) => {
  setDueDate(e.target.value);
}
const handleAddButtonClicked = () => {
  onNewItem(todoName, dueDate);
  setDueDate("");
  setTodoName("");
};
    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" id="TodoItem" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange}/>
          </div>
          <div className="col-4">
            <input type="date" id="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" 
            onClick={handleAddButtonClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;