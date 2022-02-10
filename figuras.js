// CUADRADO
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();

// TRIÁNGULO
console.group("Triángulo")

function perimetroTriangulo(lado1, lado2, base){
    return (Number(lado1) + Number(lado2) + Number(base)); 
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

console.groupEnd();

// CÍRCULO
console.group("Círculo")

function diametroCirculo(radio){
    return radio * 2
}

function perimetroCírculo(diametro){
    return diametro * Math.PI; 
}

function perimetroCirculo1(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI
}

function areaCirculo(radio){
    return radio * radio *  Math.PI;

}


console.groupEnd()

// CONEXIÓN DE JS CON HTML 

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); // Nos permite recibir como valor el que ingrese el usuario
    const value = input.value;  // Para obtener únicamente el valor 
    
    const area = areaCuadrado(value); // pasamos por perímetro donde se guarda ese valor 
    alert(area);
}

function CalcularPerimetroTriangulo() {

    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const perimetro = perimetroTriangulo(value, value1, value2) 
    alert(perimetro)

}

function CalcularAreaTriangulo() { 

    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const area = areaTriangulo(value, value1);
    alert(area)

}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value; 

    const perimetro = perimetroCírculo(value);
    alert(perimetro)
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value; 

    const area = areaCirculo(value);
    alert(area) 
}







