import React from "react";
import { useEffect } from "react";
import { getinfo } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import "./Home.css";
import About from "../About/About";
import Habilidades from "../Habilidades/Habilidades";
import Contacto from "../Contacto/Contacto";
import Experiencia from "../Experiencia/Experiencia";
function Home() {
  const dispatch = useDispatch();
  const informacion = useSelector((state) => state.info.results);
  useEffect(() => {
    dispatch(getinfo());
  }, [dispatch]);
  console.log(informacion && informacion[0].email);
  return (
    <div className="todo">
      <Nav />
      {informacion === undefined ? (
        <div className="newtons-cradle">
          <div>{console.log("asd")}</div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      ) : (
        informacion &&
        informacion.map((e) => {
          return (
            <div key={e} className="home">
              <div className="foto">
                <div className="borde">
                  <img
                    className="perfil"
                    src={e.picture.medium}
                    alt="profile"
                  />
                  <div className="skills">
                    <Habilidades />
                  </div>
                  <div className="contacto">
                    <Contacto
                      email={e.email}
                      cell={e.cell}
                      state={e.location.state}
                      city={e.location.city}
                      country={e.location.country}
                    />
                  </div>
                </div>
              </div>
              <div className="nombre">
                <h1>
                  {e.name.first} {e.name.last}
                </h1>
                <h2> Estudiante de desarrollo web </h2>

                <div className="divFoto2">
                  <img
                    className="mediaFoto"
                    src={e.picture.medium}
                    alt="profile"
                  />
                </div>
              </div>

              <div id="about" className="sobre">
                <About />
              </div>
              <div className="skillsRes">
                <Habilidades />
              </div>
              <div className="experience">
                <Experiencia />
              </div>
              <div className="contactoRes">
                <Contacto
                  email={e.email}
                  cell={e.cell}
                  state={e.location.state}
                  city={e.location.city}
                  country={e.location.country}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
