import React from "react";
import TodoContainer from "./TodoContainer";

class TodosList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: false
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

  handleCheck = (id) => {
    this.setState({ todos: this.state.todos.map(task => {
      console.log("looking for ", id, 'found', task.id);
      if(task.id === id) {
        task.completed = !task.completed
      }
      console.log('changed it', task.completed);
      return task
    }) })
  }

render() {
  return(
    <div className="App">
      <TodoContainer todos={this.state.todos} handleCheck = {this.handleCheck}/>
    </div>
  )
}
}
export default TodosList