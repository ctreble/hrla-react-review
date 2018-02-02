//look for all components
import React from "react";
import Entry from './Entry.jsx';


const List = (props) => {
  return (
    <div>
      <input onChange={props.onInputChange}></input>
      <button onClick={props.addTask} > Add Task </button>
      <h3>Your Tasks</h3>
     <ul>
      {props.tasks.map((task, key) => (
        <Entry 
        task={task} 
        doneTask={props.doneTask} 
        key={key} 
        index={key} />
      ))}
      </ul>
    </div>
  )
};

export default List
