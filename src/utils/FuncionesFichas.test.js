import { mezclarfichas, mover } from "./FuncionesFichas"

describe('pruebas sobre piezas de tablero',() => {
    
    test('debe mezclar una lista de piezas',() => {
        const piezas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        console.log(mezclarfichas(piezas))
        expect(mezclarfichas(piezas)).not.toEqual(piezas)
    })

    test('debe intercambiar los valores de una lista en base a su posicion', () => {
        const piezas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

        const piezasMovidas = mover(piezas,0,1)
        expect(piezasMovidas[0]).toBe(piezas[1]);
    })
})