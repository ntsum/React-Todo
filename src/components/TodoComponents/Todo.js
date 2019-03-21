import React from 'react';

const Todo = props => {
   return <div
    //this styling line puts a line through each item that is completed on the todo list
      style={props.todoInfo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggle(props.todoInfo.id)}
    >
      <p>{props.todoInfo.task}</p>
    </div>
}

export default Todo;