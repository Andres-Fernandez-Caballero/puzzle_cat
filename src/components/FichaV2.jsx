import React from 'react'
import {getmatrizposicion} from './../utils/FuncionesFichas'


export const FichaV2 = (props) => {

    const ficha = props.ficha
    const index = props.index
    const image = props.image
    const handleOnClickFicha = props.handleOnClickFicha

    const posicion = getmatrizposicion(index);

    const styleFicha = {
        opacity: ficha === 15 ? 0 : 1,

        //https://descargarfondos.com/wp-content/uploads/gato2.jp 1)}% ${25 * (posicion.fila + 1)}%`,
        backgroundSize: '360px 360px',
        backgroundRepeat: 'no-repeat',
    }

  return (
    <li 
        className= 'grid-item'
        style={styleFicha}
        onClick={() => { handleOnClickFicha(index) } } >
        {ficha + 1}
    </li>
  )
}
