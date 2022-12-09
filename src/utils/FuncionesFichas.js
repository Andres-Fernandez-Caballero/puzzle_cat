

/***
 * @param {numbre[]} listadefichas
 * @returns {number[]} listadefichasmezclada
 */
export const mezclarfichas = (listadefichas) => {
  const casillerovacio = listadefichas.length - 1
  const listadefichasmezclada = [
    ...listadefichas
      .filter(ficha => ficha !== casillerovacio)
      .sort(() => Math.random() - 0.5),
    casillerovacio
  ]
  return (puederesolverse(listadefichasmezclada) || !estaresuelto(listadefichasmezclada)) ? listadefichasmezclada : mezclarfichas(listadefichas)
}

/***
 * @param {number[]} listadefichas
 * @returns {boolean}
 */
const puederesolverse = (listadefichas) => {
  let product = 1;
  for (let i = 1; i <= listadefichas.length - 1; i++) {
    for (let j = i + 1; j <= listadefichas.length; j++) {
      product *= (listadefichas[i - 1] - listadefichas[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

/***
 * @param {number[]} listadefichas
 * @returns {boolean}
 */
export const estaresuelto = (listadefichas) => {
  return listadefichas.every((ficha, posicion) => ficha === posicion)
}


/***
 * @param {number} indice
 * @returns {object} {fila: number, columna: number}
 */
export const getmatrizposicion = (indice) => {
  return {
    fila: Math.floor(indice / 4),
    columna: (indice % 4)
  }
}

/***
 * @param {number} fila
 * @param {number} columna
 * @returns {number} indice
 */
export const getindice = (fila, columna) => {
  return parseInt(fila, 10) * 4 + parseInt(columna, 10)
}

/***
 * @param {number} posicioninicial
 * @param {number} posicionfinal
 * @returns {boolean}
 */
export const puedomover = (posicioninicial, posicionfinal) => {

  const matrizinicial = getmatrizposicion(posicioninicial);
  const matrizfinal = getmatrizposicion(posicionfinal);

  return Math.abs(matrizinicial.fila - matrizfinal.fila) + Math.abs(matrizinicial.columna - matrizfinal.columna) === 1
}

/***
 * @param {number[]} fichas
 * @param {number} posiciondeinicio
 * @param {number} posiciondedestino
 * @returns {number[]} fichasresultado
 */
export const mover = (fichas, posiciondeinicio, posiciondedestino) => {
  const fichasresultado = [...fichas];
  [fichasresultado[posiciondeinicio], fichasresultado[posiciondedestino]] = [fichasresultado[posiciondedestino], fichasresultado[posiciondeinicio]];
  return fichasresultado;
}

/***
 * @param {number} fila
 * @param {number} columna
 * @returns {object} {x: number, y: number}
 */
export const getposicionvisual = (fila, columna) => {
  return {
    x: columna * 80, y: fila * 80
  }
}