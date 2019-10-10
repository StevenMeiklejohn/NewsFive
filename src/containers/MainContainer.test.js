import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./MainContainer.js";

let container

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders without crashing", () => {
  ReactDOM.render(<MainContainer />, container);
  ReactDOM.unmountComponentAtNode(container);
});
