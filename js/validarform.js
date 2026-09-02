let formulario = document.getElementById("contacto");
let nombre  = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let fono = document.getElementById("fono");
let fenac = document.getElementById("fenac");
let productos = document.getElementById("productos");
let cantidad = document.getElementById("cantidad");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)){
        alert("El nombre solo debe contener letras")
        nombre.focus();
        return;
    }

    let vRut = /^(0?[1-9][0-9]{6}|[1-9][0-9]{7})-[0-9kK]$/;
    if (!vRut.test(rut.value)){
        alert("El rut debe tener el formato 12345678-9 (sin puntos y con guion)");
        rut.focus();
        return;
    }

    let vCorreo = /^[^\s@]+@(gmail\.com|outlook\.com|duocuc\.cl)$/;
    if (!vCorreo.test(email.value)){
        alert("Error en formato correo");
        email.focus();
        return;
    }

    let vFono = /^\+56\d{9}$/;
    if (!vFono.test(fono.value)){
        alert("Error en formato teléfono")
        fono.focus();
        return;
    }

    if (!fenac.value) {
        alert("Ingrese su fecha de nacimiento");
        fenac.focus();
        return;
    }

    let fechaNacimiento = new Date(fenac.value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad < 18) {
        alert("Debes ser mayor de 18 años");
        fenac.focus();
        return;
    }

    if (productos.value === "") {
        alert("Por favor seleccione un producto");
        productos.focus();
        return;
    }
    
    if (cantidad.value === "") {
        alert("Por favor ingrese la cantidad que desea comprar");
        cantidad.focus();
        return;
    }

    let debito = document.getElementById("debito");
    let credito = document.getElementById("credito");
    let efectivo = document.getElementById("efectivo");
    if (!debito.checked && !credito.checked && !efectivo.checked) {
        alert("Por favor seleccione una forma de pago");
        return; 
    }


    alert("Compra exitosa !!")


});