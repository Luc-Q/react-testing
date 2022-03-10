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

test("checkbox is not checked", () => {
  render(<App />);

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});
