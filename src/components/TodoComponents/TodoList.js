// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        //react fragment is used here instead of a div so I do not get an error when trying to type out the map method
        //and the map is returning a new array with the new item id, item, and toggling the true/false for purchased. 
     <React.Fragment>
         {props.todoItems.map(todoItem => {
    return  <Todo key ={todoItem.id} todoInfo= {todoItem}
    toggle ={props.toggle}
    />
         })}
    </React.Fragment>
    );
};

export default TodoList;
