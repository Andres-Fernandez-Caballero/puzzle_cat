import React,{useState} from 'react'
import { mezclarfichas, puedomover ,mover } from '../utils/FuncionesFichas'
import { Ficha } from './Ficha'
export const Tablero = () => {

    const [fichas, setfichas] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  
    const mezclar = () => {
      const fichasmezcladas = mezclarfichas(fichas)
      setfichas(fichasmezcladas)
    }
    const handleClickFicha = (index) => {
    
      if(puedomover(index, fichas.indexOf(15))){
    
        const fichasmovidas = mover(fichas,index,fichas.indexOf(15))
        setfichas(fichasmovidas)
      }
    }
    const style = {
      width: 320,
      height: 320,
    }
  return (
    <div>
      <ul className='tablero' style = {style}>
        {fichas.map((ficha,index)=><Ficha 
          key={ficha}
          index={index} 
          ficha={ficha}
          handleOnClickFicha={handleClickFicha} />)}
      </ul>
    </div>
  )
}
