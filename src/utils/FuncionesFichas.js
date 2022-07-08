

export const mezclarfichas = (listadefichas) => {
    const casillerovacio = listadefichas.length-1
    const listadefichasmezclada = [
        ...listadefichas
            .filter(ficha => ficha != casillerovacio)
            .sort(() => Math.random()-0.5),
        casillerovacio
    ]
    return (puederesolverse(listadefichasmezclada) || !estaresuelto(listadefichasmezclada))?listadefichasmezclada:mezclarfichas(listadefichas)
}

const puederesolverse = (listadefichas)=>{
    let product = 1;
  for (let i = 1;   i <= listadefichas.length - 1; i++) {
    for (let j = i + 1; j <= listadefichas.length; j++) {
      product *= (listadefichas[i - 1] - listadefichas[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

export const estaresuelto = (listadefichas) => {
    return listadefichas.every((ficha,posicion)=> ficha==posicion)
}

export const getmatrizposicion = (indice) => {
 return {
  fila: Math.floor(indice/4), columna:(indice%4)
 }
}

export const getindice = (fila,columna) => {
  return parseInt(fila,10)*4+ parseInt(columna,10)
}

export const puedomover = (posicioninicial, posicionfinal) => {
  const casillerovacio = 15;
  const matrizinicial = getmatrizposicion(posicioninicial);
  const matrizfinal = getmatrizposicion(posicionfinal);

  return Math.abs(matrizinicial.fila-matrizfinal.fila) + Math.abs(matrizinicial.columna-matrizfinal.columna)===1
}

export const mover = (fichas,posiciondeinicio,posiciondedestino) => {
  const fichasresultado = [...fichas];
  [ fichasresultado[posiciondeinicio], fichasresultado[posiciondedestino] ] = [ fichasresultado[posiciondedestino], fichasresultado[posiciondeinicio] ];
  return fichasresultado;
}

export const getposicionvisual = (fila,columna) => {
  return {
    x: columna*80,y: fila*80
  }
}