// PROMEDIO!! 

function ListaPromedioAritmetico (lista) {

    let sumaLista = 0

    for (let i = 0; i < lista.length; i++) {

    sumaLista = sumaLista + lista[i]; // ASÍ ACCEDEMOS A CADA ELEMENTO DE LA LISTA !!!RECORDAR!!!

}

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


function ListaPromedioAritmetico1 (lista) {

    const listaSuma = lista.reduce(

        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const listaPromedio = listaSuma / lista.length;
    return listaPromedio
}

// MEDIANA!!

const lista1 = [
    100, 
    200,
    700,
    800000000,
];

const mitadDeElementos = parseInt(lista1.length / 2); // OPERACIÓN ENTERA


function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }


let mediana; 

if (esPar(lista1.length)) { 

    const elemento = lista1[mitadDeElementos - 1];
    const elemento1 = lista1[mitadDeElementos]; // ACCEDEMOS AL OTRO ELEMENTO "JUGAMOS"

    const promedioE1y2 = ListaPromedioAritmetico1([
        elemento, 
        elemento1,
    ]);
    
    mediana = promedioE1y2;
    
} else { 
    mediana = lista1[mitadDeElementos]; // POSICIÓN []
}


// MODA!!!


const lista2 = [

    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,

  ];

  // 1. Creamos un objeto {} por cada elemento del array. []
  // que contenga el número de veces que se repita el número. 


const lista2Count = {}; 

lista2.map( // Utilizamos el método map para recorrer el array. 
    function(elemento) {
        if (lista2Count[elemento]) { // Le decimos que si el elemento que encuentre ya existe; 

            lista2Count[elemento] += 1;  // Le sume 1 a ese elemento. 
        } else {
            lista2Count[elemento] = 1; // Queda guardado en la variable que creamos como objeto.
        }
    }
) 

// 2. Convertimos el objeto nuevamente en un array para identificar el elemento que más se repite.

// Con .entries convertimos en objeto lo que pongamos en el párametro.

const lista2Array = Object.entries(lista2Count).sort( // 3. .sort para identificar el elemento con mayor repitición. 

    function(elementoA, elementoB){ 
        return elementoA[1], elementoB[1]; // Entramos a la segunda posición del array(1) para organizarlo de menor a mayor.
    }
) 

const moda = lista2Array[lista2Array.length - 1] // La moda será el último elemento del nuevo array creado. Para eso restamos 1 al total de la longitud del array. 