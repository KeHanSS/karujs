const iva = 1.19;
const carrito = [];
let precioNapolitana = 9990;
let precioSalame = 5990;
let precioChacarero = 6990;
let precioBarrosLuco = 4990;

class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    descuento() {
        if (this.precio > 19990) {
            this.precio = this.precio * 0.9;
        }
    }
    comprar(cantidad) {
        let cantidadNumero = parseInt(cantidad);
        let precioOriginal = this.precio;
        if (this.stock > 0) {
            while (cantidadNumero > this.stock || cantidadNumero <= 0 || Number.isNaN(cantidadNumero)) {
                alert("ingrese una cantidad valida. Stock disponible: " + this.stock);
                cantidadNumero = parseInt(prompt("Ingrese nueva cantidad a pedir."));
            }
            this.descuento();
            alert("Se realizo su pedido de " + cantidadNumero + " "+ this.nombre);
            alert("El precio de su pedido es de " + (this.precio * cantidadNumero));
            carrito.push(new Producto(this.nombre, this.categoria, this.precio, cantidadNumero))
            this.stock -= cantidadNumero;
            this.precio = precioOriginal;

        } else {
            alert("No tenemos stock disponible. Disculpe las molestias");
        }
    };
}
// funcion carrito
function valorCarrito(carrito) {
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0) * 1.19;
    alert("el valor total de la compra es de: $" + totalCarrito)
    return (totalCarrito)
}

const pizzaNapolitana = new Producto("napolitana", "pizza", 9990, 10);
const pizzaSalame = new Producto("salame", "pizza", 5990, 10);
const sandwichChacarero = new Producto("chacarero", "sandwich", 6990, 5);
const sandwichLuco = new Producto("luco", "sandwich", 4990, 5);

function welcome() {
    alert (`Bienvenido a Karu, a continuacion elige entre nuestros productos disponibles`);
}

function eligePizza(pizza,cantidad) {
    let nuevaPizza = pizza.toLowerCase();
    while ((nuevaPizza != "salame") && (nuevaPizza != "napolitana")) {
        nuevaPizza = prompt(`Elige entre nuestras exquisitas pizzas: napolitana, salame`.toLowerCase());
    }
    if (nuevaPizza === "napolitana") {
        pizzaNapolitana.comprar(cantidad)
    } else {
        pizzaSalame.comprar(cantidad)
    }

}

function eligeSandwich(sandwich,cantidad) {
    let nuevoSandwich = sandwich.toLowerCase();
    while ((nuevoSandwich != "luco") && (nuevoSandwich != "chacarero")) {
        nuevoSandwich = prompt(`Elige entre nuestros exquisitos sandwich: chacarero, luco`.toLowerCase());
    }
    if (nuevoSandwich === "chacarero") {
        sandwichChacarero.comprar(cantidad)
    } else {
        sandwichLuco.comprar(cantidad)
    }

}

function mostrarPedido() {
    console.log("pizza: " + carrito[0].nombre + "sandwich: " + carrito[1].nombre);
}

function armarCombo() {
    let pizza = prompt(`elija su pizza, Napolitana $${precioNapolitana}, Salame $${precioSalame}?`).toLowerCase();
    eligePizza(pizza,1);
    let sandwich = prompt(`elija su sandwich, Chacarero $${precioChacarero}, Luco$${precioBarrosLuco}`).toLowerCase();
    eligeSandwich(sandwich,1);
}

function armarPedido(){
    let agregarMas = "si" 
    let opcionComprar
    while (agregarMas === "si") {
        opcionComprar = parseInt(prompt("que desea pedir? 1) Pizzas 2) Sandwich 3) Salir"));
        while (opcionComprar != 1 && opcionComprar != 2 && opcionComprar != 3) {
        alert("Ingrese un valor valido");
        opcionComprar = parseInt(prompt("que desea pedir? 1) Pizzas 2) Sandwich 3) Salir"));
        }
        if(opcionComprar === 1){
            let opcionPizza = prompt(`elija una denuestras pizzas Napolitana $${precioNapolitana}, Salame $${precioSalame}`).toLowerCase();
            let cantidadComprar = parseInt(prompt("cuantas pizzas necesitas?"));
            eligePizza(opcionPizza,cantidadComprar);
            agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            while (agregarMas != "si" && agregarMas != "no") {
                alert("Valor ingresado no valido. Ingrese si o no.");
                agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
}
        } if (opcionComprar ===2){
            let opcionSandwich = prompt(`elija uno de nuestros deliciosos sandwich, Chararero $${precioChacarero}, Luco $${precioBarrosLuco}`).toLowerCase();
            let cantidadComprar = parseInt(prompt("cuantos sandwich necesitas?"));
            eligeSandwich(opcionSandwich,cantidadComprar);
            agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            while (agregarMas != "si" && agregarMas != "no") {
                alert("Valor ingresado no valido. Ingrese si o no.");
                agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
}
        } if (opcionComprar === 3){
            break
        }
    }
    valorCarrito(carrito);
    alert("Gracias por preferirnos!.");
}


function comprarPedido() {
    let inputComprar = parseInt(prompt("Que desea pedir? 1) Pizzas o sandwich 2) Arma tu combo 3) Salir"));
    while (inputComprar != 1 && inputComprar != 2 && inputComprar != 3) {
        alert("Valor ingresado no valido.");
        inputComprar = parseInt(prompt("Que desea pedir? 1) Pizzas o sandwich 2) Arma tu combo 3) Salir"));
    }
    if (inputComprar === 1) {
        armarPedido();
        mostrarPedido();
        valorCarrito(carrito);
    } if(inputComprar === 2){
        armarCombo();
    } else {
        alert("Gracias, vuelva pronto!.");
    }
}

welcome();
comprarPedido();



