import React from "react";

function Contacto({ email, cell, city, state, country }) {
  return (
    <>
      <h3 className="contacH3">Contacto</h3>
      <div>
        <ul className="contactUl">
          <li>Email: {email}</li>
          <li>Celular: {cell}</li>
        </ul>

        <p>
          {city}-{state}-{country}
        </p>
      </div>
    </>
  );
}

export default Contacto;
