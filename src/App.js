import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [repo, setRepo] = useState([]);

  const workspace = async (name, index) => {
    // eslint-disable-next-line no-restricted-globals
    console.log(name);
    await fetch(`http://localhost:3000/fetchpublic/${name}`, {
    }).then((response) => {
      return response.text();
    });
    console.log(name);
  };

  return (
    <main>
      <center>
        <div class="content">
          <label for="name">Workspace Name: </label>
          <input
            type="text"
            placeholder="Workspace Name"
            id="name"
            onChange={(e) => (setRepo(e.target.value))}
          />
          <a href="https://docs.google.com/spreadsheets/d/1CRmgMQPCZNOwshVixbfk4XwckHIM9JJuOXoC5YaqSpo/edit#gid=0"><button class="button" onClick={() => workspace(repo) }>
            Submit
          </button></a>
        </div>
      </center>
    </main>
  );
}

export default App;
