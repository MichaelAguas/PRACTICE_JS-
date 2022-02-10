function alturaIsosceles(cateto1, cateto2, base){
    if(cateto1 === cateto2 && cateto1 != base) {
    
        const altura = Math.sqrt(cateto1**2 - (cateto2**2 / 4));
        console.log(altura)
    }
    else {
        alert("Ingresa medidas de un triángulo Isósceles")
    }
}
