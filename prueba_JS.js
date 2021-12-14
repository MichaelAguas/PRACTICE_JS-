// 3️⃣ Traduce a codigo JavaScript las variables del ejemplo anterior y deja tu codigo en los comentarios. 

let nombre = "Michael";
let apellido = "Aguas"; 
let nombre_usuario = "Michael Aguas"
let edad = 17 
let gmail = "aguasbonillamichael@gmail.com" 
let mayor_de_edad = false 
let dinero_Ahorrado = 2000000   
let deudas = 150000

let nombre_completo = nombre + apellido; 
console.log(nombre_completo)

let dinero_real = dinero_Ahorrado - deudas
console.log(dinero_real)

function nombre(name, lastname, nickname) {
    let full_name = name + lastname; 
    return "Mi nombre es " + full_name + "pero prefiero que me digas" + nickname
}

console.log(nombre("Michael", "Aguas", "Micha"));

const subscripción = "basic"; 

if (subscripción === "free"){
    console.log("Solo puedes tomar los cursos gratis")
}

else if (subscripción ==="basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes") 
}

else if (subscripción === "expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else if (subscripción === "expertplus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


const i = 0 

while(i < 5){ 
    i += 1 
    console.log("El valor de i es " + i)
}

let i = 10 
while (i >= 2){
    i -= 1
    console.log("El valor de i es " + i)
}

function funcion(Array) {
    console.log(Array[0]);
}