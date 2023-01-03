import React from "react";

function Habilidades() {
  return (
    <>
      <h3>Habilidades</h3>

      <ul div className="icons">
        <li className="icon">
          <i
            className="fab fa-html5"
            style={{ fontSize: "2rem", color: "red" }}
          ></i>
          <label>HTML</label>
        </li>
        <li className="icon">
          <i
            className="fab fa-css3-alt"
            style={{ fontSize: "2rem", color: "blue" }}
          ></i>
          <label>CSS</label>
        </li>
        <li className="icon">
          <i
            className="fab fa-js"
            style={{
              fontSize: "2rem",
              color: "rgb(242, 216, 15)",
            }}
          ></i>
          <label>JS</label>
        </li>
        <li className="icon">
          <i
            className="fab fa-react"
            style={{
              fontSize: "2rem",
              color: "rgb(93, 170, 241)",
            }}
          ></i>
          <label>React</label>
        </li>
      </ul>
    </>
  );
}

export default Habilidades;
