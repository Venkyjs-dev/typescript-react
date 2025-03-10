import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscars from "./components/Oscar";

function App() {
  const name = {
    first: "Raghu",
    last: "Rajan",
  };
  const names = [
    { first: "raj", last: "pushpa" },
    { first: "dev", last: "ara" },
    { first: "amar", last: "bahubali" },
  ];

  const status = "success";
  return (
    <>
      <Greet name="venky" weight={60} isLoggedIn={true} />
      <hr />
      <Person name={name} />
      <hr />
      <PersonList names={names} />
      <hr />
      <Status status={status} />
      <hr />
      <Heading>Hello how are you </Heading>
      <hr />
      <Oscars>
        <Heading>Oscar goes to kiravani</Heading>
      </Oscars>
    </>
  );
}

export default App;
