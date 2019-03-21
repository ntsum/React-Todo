import React from 'react';

//this is where my form is created for input from the user as well as where the prop is called which uses the function in App.js to make the button functional
const TodoForm = props => {
  return (
    <form action="">
      <input
        type="text"
        className="input"
        value={props.inputText}
        onChange={props.handleChange}
        placeholder="THINGS I GOT 2 DO"
      />
      <button onClick={props.handleClick}>Add Todo</button>
      <button onClick={props.clearComplete}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;