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

   handleChange = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" onChange={this.handleChange} checked={this.state.todos.completed}/>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default TodosList