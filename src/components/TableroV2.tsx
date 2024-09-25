import "./TableroV2.css";
import React, { useState } from "react";
import { FichaV2 } from "./FichaV2";
import { useEffect } from "react";
import {
  estaresuelto,
  mezclarfichas,
  mover,
  puedomover,
} from "../utils/FuncionesFichas";

interface TableroV2Props {
  image: string;
}
export const TableroV2 = (props: TableroV2Props) => {
  const [fichas, setfichas] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const [juegoIniciado, setJuegoIniciado] = useState(false);

  const image = props.image;

  const mezclar = () => {
    setfichas(mezclarfichas(fichas));
  };

  const handleOnClickFicha = (index: number) => {
    if (puedomover(index, fichas.indexOf(15))) {
      const fichasMovidas = mover(fichas, index, fichas.indexOf(15));
      setfichas(fichasMovidas);
    }
  };

  useEffect(() => {
    setfichas(mezclarfichas(fichas));
    setJuegoIniciado(true);
  }, []);

  useEffect(() => {
    if (estaresuelto(fichas) && juegoIniciado) alert("Ganaste 😆");
  }, [fichas, juegoIniciado]);

  return (
    <div>
      <ul className="grid-container">
        {fichas.map((ficha, index) => (
          <FichaV2
            key={index}
            ficha={ficha}
            index={index}
            image={image}
            handleOnClickFicha={handleOnClickFicha}
          />
        ))}
      </ul>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="btn" onClick={mezclar}>
          mezclar
        </button>
      </div>
    </div>
  );
};
