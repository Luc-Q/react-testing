import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("gray");
  const [disable, setDisable] = useState(false);
  const newButtonColor = buttonColor === "gray" ? "red" : "gray";

  const handler = () => {
    setDisable(true);
    setButtonColor(newButtonColor);
  };

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
    // <div>
    //   <button disabled={disable}></button>
    //   <input
    //     type="checkbox"
    //     defaultChecked={disable}
    //     aria-checked={disable}
    //     onClick={(e) => setDisable(e.target.checked)}
    //   />
    // </div>
    <div>
      <button
        disabled={disable}
        style={{ backgroundColor: buttonColor }}
        onClick={handler}
      />
    </div>
  );
}

export default App;
