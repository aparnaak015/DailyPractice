import React from "react";
import "./styles.css";

const currentDate = new Date().getDate();
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{currentDate}</h2>
    </div>
  );
}
