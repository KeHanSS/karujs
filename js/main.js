let precioNapolitana = 9990;
let precioSalame = 5990;
let precioChacarero = 6990;
let precioBarrosLuco = 4990;


function welcome() {
    alert (`Bienvenido a Karu, a continuacion elige entre nuestros productos disponibles`);
}

function eligePizza() {
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
}

welcome();

let nuevoPedido =0;
do {
    opciones();
    nuevoPedido = parseInt(prompt(`Elige la opcion 1 para hacer otro pedido o 2 para salir`));
} while(nuevoPedido != 2);
    if (nuevoPedido == 2) {
        alert(`Nos vemos pronto! gracias por preferirnos <3`);
    } else {
}



