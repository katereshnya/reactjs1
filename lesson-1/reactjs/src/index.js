import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

const reactElement = (
  <div>
    <h1>Hello React</h1>
  </div>
);

const FunctionComponent = () => {
  return reactElement;
};

class ClassComponent extends React.Component {
  render() {
    return reactElement;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent />
    <hr />
    <ClassComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
