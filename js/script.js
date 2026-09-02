let pantalla = document.getElementById("pantalla")
let numero;
let operador;

function agregar(valor){
    if(pantalla.value === "0")
        pantalla.value = valor;
    else
        pantalla.value += valor;
}

function limpiar(){
    pantalla.value = "0";
}

function sumar(){
    numero = pantalla.value;
    operador = "+";
    limpiar();
}

function restar(){
    numero = pantalla.value;
    operador = "-";
    limpiar();
}

function multiplicar(){
    numero = pantalla.value;
    operador = "*";
    limpiar();
}

function dividir(){
    numero = pantalla.value;
    operador = "/";
    limpiar();
}

function calcular(){
    if (operador == "+")
        pantalla.value = Number(numero) + Number(pantalla.value);
    if (operador == "-")
        pantalla.value = Number(numero) - Number(pantalla.value);
    if (operador == "*")
        pantalla.value = Number(numero) * Number(pantalla.value);
    if (operador == "/")
        if (pantalla.value === "0")
            pantalla.value = "Error, no se puede dividir por 0"
        else
            pantalla.value = Number(numero) / Number(pantalla.value)
}