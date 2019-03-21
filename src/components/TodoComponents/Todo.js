import React from 'react';

const Todo = props => {
   return <React.Fragment><p
    //this styling line puts a line through each item that is completed on the todo list
      style={props.todoInfo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggle(props.todoInfo.id)}
    >
    <li>{props.todoInfo.task}</li>
    </p>
      </React.Fragment>
}

export default Todo;