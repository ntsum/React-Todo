import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

//this is the DATA that we use as a base for more incoming data
const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
constructor () {
  super ();
  //this calls the array above using todoData and then inputs an empty string for todo items that may be called
  this.state = {
    todos: todoData,
    inputText : ""
  };
  
  }

  //this changes the target value when text is entered
handleChange= event => {
  this.setState({inputText:event.target.value})
}

///this adds items to the todo list
handleClick = event => {
  event.preventDefault()

const newToDo = {
  task: this.state.inputText,
  id: Date.now(),
  completed: false
}
  this.setState({
  todos: [...this.state.todos, newToDo],
  inputText: ""
    
    
  });
}

//this clears the items from the todo list
clearComplete = event => {
  event.preventDefault()
  let todos = this.state.todos.filter(todo=> !todo.completed);
  this.setState({todos});
};

//this returns true or false for todo list
toggleComplete = id => {
  let todos = this.state.todos.slice();
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState({ todos });
};


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

  //this is the section where I am calling all of my props into the state
  render() {
    return (
      <div>
        <TodoList todoItems = {this.state.todos}
        toggle={this.toggleComplete}/>
        <TodoForm handleChange={this.handleChange}
        inputText = {this.state.inputText}
        handleClick = {this.handleClick} 
        clearComplete= {this.clearComplete}/>
      </div>
    );
  }
}

export default App;
