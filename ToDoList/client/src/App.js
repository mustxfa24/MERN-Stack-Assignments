import React, { useState } from "react"

function App() {

  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);



  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, newTask])
  };

  const deleteHandler = (delIdx) => {
    const filteredtasks = task.filter((todo, i) => {
      return i !== delIdx;
    });

    setTask(filteredtasks)   

  };
  


  return (
    <div style={{textAlign: "center"}}>
      <form  className="border-bottom border-danger col-4 p-4" onSubmit={(e) => {
        submitHandler(e)
      }}>
        <label> New Task? </label>
        <input onChange={(e) => {
          setNewTask(e.target.value);
        }} type="text" 
        value={newTask}/>
        <div>
        <button className="btn btn-success" > Add </button>
        </div>
        
      </form>

      <div className="bg-info text-dark col-4">
        {
          task.map( (todo, i) => {
            return (
              <div key={i} className="border border-dark">
                <input type="checkbox" />
                <span> {todo}</span>
                <button className="btn btn-dark" onClick={(e) => {
                  deleteHandler(i);
                }}> Delete </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
  }

export default App;