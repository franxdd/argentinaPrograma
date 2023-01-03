import React from "react";

function Experiencia() {
  return (
    <>
      <h2>Experiencia</h2>
      <h4 id="experiencia">Proyecto de Peliculas</h4>
      <ul className="experience">
        <li>
          <p>
            {" "}
            El proyecto consiste en una aplicación que permite visualizar un
            listado
            <br /> de peliculas (6) con una información detallada de cada uno al
            darle click <br /> en cada uno.
            <br />
          </p>
        </li>
      </ul>
      <h4>Proyecto de pokemones</h4>
      <ul className="experience">
        <li>
          <p>
            El proyecto consiste en una SPA (Single Page Application) que
            permite <br /> obtener información de una API que otorga la página
            pokeapi.co
          </p>
        </li>
      </ul>
    </>
  );
}

export default Experiencia;
