import React from 'react';

const Entry = (props) => {
  return (
    <div>
      <li>
        {props.task}
      </li>
      <button onClick={()=> {props.doneTask(props.index)}}> Done </button>
    </div>
  )
};

export default Entry
