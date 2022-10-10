import { useState } from "react";
import "./App.css";
import Rate from "./Components/Rate";
import Submited from "./Components/Submited.js";

function App() {
  const [number, setNumber] = useState(0);
  const [submitHendeler, setsubmitHendeler] = useState(false);

  return (
    <>
      <div className="font-face-gm flex">
        {number > 0 && submitHendeler ? (
          <Submited num={number}></Submited>
        ) : (
          <Rate
            setState={setNumber}
            state={number}
            hendeler={setsubmitHendeler}
          ></Rate>
        )}
      </div>
    </>
  );
}

export default App;
