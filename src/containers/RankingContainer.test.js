import React from "react";
import ReactDOM from "react-dom";
import RankingContainer from "./RankingContainer.js";

let container, headlines;

beforeEach(() => {
  headlines = [
    "Freddie Starr ate my hamster",
    "Safety meeting ends in accident",
    "Man found dead in graveyard",
    "Drunk fought invisible man",
    "Jellyish apocalypse not coming."
  ];

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders without crashing", () => {
  ReactDOM.render(<RankingContainer headlines={headlines} />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it("renders expected header", () => {
  ReactDOM.render(<RankingContainer headlines={headlines} />, container);
  const header = container.querySelector("h2");
  expect(header.textContent).toBe("Starting with your favourite, please drag");
});

it("displays all articles", () => {
  ReactDOM.render(<RankingContainer headlines={headlines} />, container);
  const articleElements = Array.from(
    container.querySelectorAll(".draggable")
  );
  const actual = articleElements.map(article => article.textContent)
  const expected = [
    "1: Freddie Starr ate my hamster",
    "2: Safety meeting ends in accident",
    "3: Man found dead in graveyard",
    "4: Drunk fought invisible man",
    "5: Jellyish apocalypse not coming."
  ]
  expect(expected).toStrictEqual(actual);
});
