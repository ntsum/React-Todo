import React from 'react';


const TodoForm = props => {
  return (
    <form action="">
      <input
        type="text"
        className="input"
        value={props.inputText}
        onChange={props.handleChange}
        placeholder="...todo"
      />
      <button onClick={props.handleClick}>Add Todo</button>
      <button onClick={props.clearComplete}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;