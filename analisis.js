// Helpers

function esPar(numerito) { 
    return (numerito % 2 === 0);  //PAR O NO? 
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


// Mediana General

function medianaSalarios (lista){

    const mitadSalarios = parseInt(lista.length / 2); 

    if (esPar(lista.length)) {
        const persona1 = lista[mitadSalarios - 1];
        const persona2 = lista[mitadSalarios]; 
        
        const promedioS1y2 = ListaPromedioAritmetico1([
            persona1, 
            persona2, 
        ]); 

        return promedioS1y2; 
    } else {
        const personaMitad = lista[mitadSalarios];
        return personaMitad
    }
}

const salariosCol = colombia.map(

    function (personita) { 
        return personita.salary; 
}
)

const salariosColSorted = salariosCol.sort(
    function(A, B) {
        return A - B; 
    }
)


const medianaSalariosGeneral = medianaSalarios(salariosColSorted)




// Mediana top 10% 

const InitialSlice = (salariosColSorted.length * 90) / 100; 
const FinalSlice = salariosColSorted.length - InitialSlice;  // Restamos el 90% al 100%, ese total es el número de "cortadas" que hará el slice


const salariostop10 = salariosColSorted.splice(InitialSlice, FinalSlice); 

const medianaTop10 = medianaSalarios(salariostop10);



console.log({
    medianaSalariosGeneral,
    medianaTop10,
}
)

