import React, {useState} from 'react'
import './TableroV2.css'
import { FichaV2 } from './FichaV2'
import { mover, puedomover } from '../utils/FuncionesFichas'


export const TableroV2 = (props) => {

    const [fichas, setfichas] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    
    const image = props.image;

    const handleOnClickFicha = (index) => {
        if(puedomover(index, fichas.indexOf(15))) {
            const fichasMovidas = mover(fichas, index, fichas.indexOf(15))
            setfichas(fichasMovidas)
        }
    }


    return (
        
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
    )
}
