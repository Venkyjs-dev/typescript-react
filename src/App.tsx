/*
  EVENT PROPS
*/
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Button
        handleClick={(e, id) => {
          console.log("button clicked", id);
        }}
      />
      <hr />
      <Input
        value={value}
        handleChange={(event) => {
          console.log("input: " + event.target.value);
          setValue(event.target.value);
        }}
      />
    </>
  );
}

export default App;
