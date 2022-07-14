import React from "react"
class TodosList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
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
    this.state.todos.map(task => {
      console.log("looking for ", id, 'found', task.id);
      if(task.id === id) {
        console.log('found it', task.completed);
        task.completed = !task.completed;
        console.log('changed it', task.completed);
      }
    })
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" onChange={this.handleCheck(todo.id)} defaultChecked={todo.completed}/>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default TodosList