import React from "react";
import List from "./List";

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Rick and Morty</h1>
      <nav className="navbar sticky-top navbar-light bg-success m-1 p-2">
        <h1 className="navbar-brand text-light">Rick and Morty</h1>
      </nav>
      <List />
    </div>
  );
}

export default App;
