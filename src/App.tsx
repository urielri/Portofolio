import React, { useState, ClassType, FormHTMLAttributes, useContext } from "react";
import "./assets/style.scss";
import Contenedor from "./components/container";
import Bloque from "./components/bloque";
import { tema, TemaContext } from "./components/tema";
import { prependOnceListener } from "cluster";

type FormData = React.FormEvent<HTMLElement>;

interface iTema {
  background: string;
  border: string;
  color: string;

}

function App(): JSX.Element {
  //Variables de estado var string nombre = setNombre();
  const [nombre, setNombre] = useState<string>("");
  const [tem, setTema] = useState<iTema>(tema.light);
  
  //Variables de estado

  //funcion
  const cambiaTema = (e: FormData) => {
    if (tem === tema.light) {
      setTema(tema.dark);
    } else {
      setTema(tema.light);
    }
  };
  //funcion

  return (
    //ingrese un nombre = "";

    <TemaContext.Provider value={tem}>
    <Contenedor >
      <div className="fl-1">
        <div className="colm-2">
          <Bloque >
            <div className="tit">
              <h1>Hola, {nombre}</h1>
            </div>
            <div className="menu">
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="input">
                <label htmlFor="check">
                  <span style={{ color: tem.color }}>Tema: </span>
                  <input
                    type="checkbox"
                    onChange={(e) => cambiaTema(e)}
                    id="check"
                  />
                </label>
              </div>
            </div>
          </Bloque>
        </div>
        <div className="colm-2">
          <Bloque></Bloque>
        </div>
      </div>
      <div className="fl-1">
        <div className="colm-2">
          <Bloque></Bloque>
        </div>
        <div className="colm-2">
          <Bloque></Bloque>
        </div>
      </div>
    </Contenedor>
    </TemaContext.Provider>
  );
}

export default App;
