import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("button has correct initial coloer", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "change to blue" });

//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });

//   fireEvent.click(colorButton);

//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

//   expect(colorButton.textContent).toBe("change to red");
// });

// test("initial conditions", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", { name: "change to blue" });
//   expect(colorButton).toBeEnabled();

//   const checkBox = screen.getByRole("checkbox");
//   expect(checkBox).not.toBeChecked();
// });

// First Quiz
// test("checkbox is not checked", () => {
//   render(<App />);

//   const checkBox = screen.getByRole("checkbox");
//   const button = screen.getByRole("button");

//   fireEvent.click(checkBox);
//   expect(button).toBeDisabled();

//   fireEvent.click(checkBox);
//   expect(button).toBeEnabled();
// });

// Second Quiz
test("disable button, gray, enable button, red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("backgroundColor: red");
});

test("clicked", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  fireEvent.click(colorButton);

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: blue");
});
