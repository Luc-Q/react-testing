import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [disable, setDisable] = useState(false);

  return (
    // <div className="App">
    //  <button
    //     style={{ backgroundColor: buttonColor }}
    //     onClick={() => setButtonColor(newButtonColor)}
    //   >
    //     change to {newButtonColor}
    //   </button>
    //   <input type="checkbox" />
    // </div>
    <div>
      <button disabled={disable}></button>
      <input
        type="checkbox"
        defaultChecked={disable}
        aria-checked={disable}
        onClick={(e) => setDisable(e.target.checked)}
      />
    </div>
  );
}

export default App;
