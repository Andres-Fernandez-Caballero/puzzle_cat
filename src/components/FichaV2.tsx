import React from 'react';
import { getmatrizposicion } from '../utils/FuncionesFichas';

interface FichaV2Props {
  ficha: number;
  index: number;
  image: string;
  handleOnClickFicha: (index: number) => void;
}

export const FichaV2 = (props: FichaV2Props) => {
  const ficha = props.ficha;
  const index = props.index;
  const image = props.image;
  const handleOnClickFicha = props.handleOnClickFicha;

  const posicion = getmatrizposicion(ficha);

  const styleFicha = {
    opacity: ficha === 15 ? 0 : 1,

    //https://descargarfondos.com/wp-content/uploads/gato2.jpg
    backgroundImage: `url(${image}) `,
    backgroundPosition: `${25 * (posicion.columna + 1)}% ${25 * (posicion.fila + 1)}%`,
    backgroundSize: '360px 360px',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <li
      className="grid-item"
      style={styleFicha}
      onClick={() => {
        handleOnClickFicha(index);
      }}
    >
      {ficha + 1}
    </li>
  );
};
