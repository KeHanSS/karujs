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

// function armarPedido(){
//     let agregarMas = "si" 
//     let opcionComprar
//     while (agregarMas == "si") {
//         opcionComprar = parseInt(prompt("que desea pedir? 1) Pizzas 2) Sandwich 3) Salir"));
//         while (opcionComprar != 1 && opcionComprar != 2 && opcionComprar != 3) {
//         alert("Ingrese un valor valido");
//         opcionComprar = parseInt(prompt("que desea pedir? 1) Pizzas 2) Sandwich 3) Salir"));
//         }
//         switch (opcionComprar){
//             case 1:
//                 if(opcionComprar == 1){
//                     let opcionPizza = prompt(`elija una denuestras pizzas Napolitana $${precioNapolitana}, Salame $${precioSalame}`).toLowerCase();
//                     let cantidadComprar = parseInt(prompt("cuantas pizzas necesitas?"));
//                     ingresarPizza(opcionPizza,cantidadComprar);
//                     agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
//                     while (agregarMas != "si" && agregarMas != "no") {
//                         alert("Valor ingresado no valido. Ingrese si o no.");
//                         agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
//         }
//     }    
//             case 2:
//             if (opcionComprar == 2){
//             let opcionSandwich = prompt(`elija uno de nuestros deliciosos sandwich, Chararero $${precioChacarero}, Luco $${precioBarrosLuco}`).toLowerCase();
//             let cantidadComprar = parseInt(prompt("cuantos sandwich necesitas?"));
//             ingresarSandwich(opcionSandwich,cantidadComprar);
//             agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
//             while (agregarMas != "si" && agregarMas != "no") {
//                 alert("Valor ingresado no valido. Ingrese si o no.");
//                 agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
//             }
//         } if (opcionComprar == 3){
//             break;
//         }
//     }
//     valorCarrito(carrito);
//     alert("Gracias por preferirnos!.");
//     }
// }

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

/*function eligePizza() {   
    let pizza = prompt(`Elige entre nuestras exquisitas pizzas: napolitana, salame`);
    let direccion = prompt(`Ingresa direccion para delivery`);
    switch (pizza) {
        case "napolitana":
            if(pizza == "napolitana") {
                alert(`El precio de tu pizza napolitana es ${precioNapolitana}`);
                let formaPago = parseInt(prompt(`Ingresa forma de pago, 1: efectivo 2: tarjeta`));
                switch (formaPago) {
                    case 1:
                        alert(`El valor ${precioNapolitana} se cobrara en efectivo en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    case 2:
                        alert(`El valor ${precioNapolitana} se te cobrara en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    default:
                        alert(`El valor ingresado es incorrecto`);
                        eligePizza();
                }
            } else {
            }
        case "salame":
            if(pizza == "salame") {
                alert(`El precio de tu pizza salame es ${precioSalame}`);
                let formaPago = parseInt(prompt(`Ingresa forma de pago, 1: efectivo 2: tarjeta`));
                switch (formaPago) {
                    case 1:
                        alert(`El valor ${precioSalame} se cobrara en efectivo en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    case 2:
                        alert(`El valor ${precioSalame} se te cobrara en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    default:
                        alert(`El valor ingresado es incorrecto`);
                        eligePizza();
                }
            } else {
            }
    }
}

function eligeSandwich() {
    let sandwich = prompt(`Elige entre nuestros exquisitos sandwich: chacarero, luco`);
    let direccion = prompt(`Ingresa direccion para delivery`);
    switch (sandwich) {
        case "chacarero":
            if(sandwich == "chacarero") {
                alert(`El precio de tu sandwich chacarero es ${precioChacarero}`);
                let formaPago = parseInt(prompt(`Ingresa forma de pago, 1: efectivo 2: tarjeta`));
                switch (formaPago) {
                    case 1:
                        alert(`El valor ${precioChacarero} se cobrara en efectivo en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    case 2:
                        alert(`El valor ${precioChacarero} se te cobrara en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    default:
                        alert(`El valor ingresado es incorrecto`);
                        eligeSandwich();
                }
            } else {
            }
        case "luco":
            if(sandwich == "luco") {
                alert(`El precio de tu barros luco es ${precioBarrosLuco}`);
                let formaPago = parseInt(prompt(`Ingresa forma de pago, 1: efectivo 2: tarjeta`));
                switch (formaPago) {
                    case 1:
                        alert(`El valor ${precioBarrosLuco} se cobrara en efectivo en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    case 2:
                        alert(`El valor ${precioBarrosLuco} se te cobrara en tu domicilio, muchas gracias por tu compra!`);
                        break;
                    default:
                        alert(`El valor ingresado es incorrecto`);
                        eligeSandwich();
                }
            } else {
            }
    }
}
function opciones() {
    let elegirOpcion = parseInt(prompt(`Ingresa 1 para pizzas o 2 para sandwich`));
    switch (elegirOpcion) {
        case 1:
            eligePizza();
            break;
        case 2:
            eligeSandwich();
            break;
    }
}*/



welcome();
comprarPedido();

// let nuevoPedido =0;
// do {
//     opciones();
//     nuevoPedido = parseInt(prompt(`Elige la opcion 1 para hacer otro pedido o 2 para salir`));
// } while(nuevoPedido != 2);
//     if (nuevoPedido == 2) {
//         alert(`Nos vemos pronto! gracias por preferirnos <3`);
//     } else {
// }



