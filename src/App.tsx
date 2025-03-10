import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
  return (
    <>
      <Greet name="venky" weight={60} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={names} />
    </>
  );
}

export default App;
