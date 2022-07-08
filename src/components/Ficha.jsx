import React from 'react'
import { Motion, spring } from 'react-motion'
import { getmatrizposicion, getposicionvisual } from '../utils/FuncionesFichas'

export const Ficha = (props) => {
    const ficha = props.ficha
    const index = props.index

    const matriz = getmatrizposicion(index);
    const posicion = getposicionvisual(matriz.fila, matriz.columna)
    console.log(index);
    const estilodeficha = {
        width:'calc(25%)',
        height: 'calc(25%)',
        translateX: posicion.x,
        translateY: posicion.y,
        backgroundSize: '5px',
        backGroundPosition: `${(100 / 4) * (ficha % 4)}% ${(100 / 4) * (Math.floor(ficha / 4))}%`,
    }

    const motionStyle = {
      translateX: spring(posicion.x),
      translateY: spring(posicion.y)
    }
  
  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
        style={{
          ...estilodeficha,
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          // Is last tile?
          opacity: ficha === 15 ? 0 : 1,
        }}
        className="ficha"
        onClick={ () => { props.handleOnClickFicha(index)} }
      >
        {`${ficha + 1}`}
      </li>
    )}
    </Motion>
  )
}
