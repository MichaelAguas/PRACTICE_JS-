


function calcularValorconDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value

    const inputDiscount = document.getElementById("InputDiscount");
    const Discount = inputDiscount.value;

    precioFinal = calcularDescuento(price, Discount);

}

function calcularDescuento(precio, descuento) {
    const precionConDescuento = descuento / 100; 
    const precioFinal = precio * precionConDescuento; 

    const FinalValue = document.getElementById("FinalValue");
    FinalValue.innerText = `El valor a pagar es: $` + precioFinal; 
}



