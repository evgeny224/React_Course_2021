import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// // const eleemnt = <h1>Hello World!</h1>;
// const lementTwo = React.createElement(
//   "h1",
//   { className: "test" },
//   "Привет Мир!"
// );
// ReactDOM.render(lementTwo, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
