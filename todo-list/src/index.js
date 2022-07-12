import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContainer from "./TodoContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoContainer />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from "react"
// import ReactDOM from "react-dom"
// //component file
// import TodoContainer from "./components/TodoContainer"
// ReactDOM.render(<TodoContainer />, document.getElementById("root"))