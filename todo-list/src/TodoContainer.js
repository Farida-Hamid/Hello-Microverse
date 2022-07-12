import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
  state = {
    todos: []
   };

   render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}
export default TodoContainer