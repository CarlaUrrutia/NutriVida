let formulario = document.getElementById("contacto");
let nombre  = document.getElementById("nombre");
let apellido = document.getElementById("apellido"); 
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let pass = document.getElementById("pass"); 
let pass2 = document.getElementById("pass2");
let fenac = document.getElementById("fenac");
let objetivo = document.getElementById("objetivo");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (nombre.value.trim() === ""){
        alert("El nombre esta vacio!");
        nombre.focus();
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)){
        alert("El nombre solo debe contener letras");
        nombre.focus();
        return;
    }

    if (apellido.value.trim() === ""){
        alert("El apellido está vacio!");
        apellido.focus();
        return;
    }    
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido.value)){
        alert("El apellido solo debe contener letras");
        apellido.focus();
        return;
    }

    let vRut = /^(0?[1-9][0-9]{6}|[1-9][0-9]{7})-[0-9kK]$/;
    if (!vRut.test(rut.value)){
        alert("El RUT debe tener el formato 12345678-9 (sin puntos y con guion)");
        rut.focus();
        return;
    }

    let vCorreo = /^[^\s@]+@(gmail\.com|outlook\.com|duocuc\.cl)$/;
    if (!vCorreo.test(email.value)){
        alert("Ingrese un correo valido (@gmail.com, @outlook.com o @duocuc.cl)");
        email.focus();
        return;
    }

    if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        pass.focus();
        return;
    }

    if (pass.value !== pass2.value) {
        alert("Las contraseñas no coinciden");
        pass2.focus();
        return;
    }

    if (!fenac.value) {
        alert("Ingrese su fecha de nacimiento.");
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
        alert("Debes ser mayor de 18 años para registrarte");
        fenac.focus();
        return;
    }

    if (objetivo.value === "") {
        alert("Por favor, seleccione su objetivo nutricional.");
        objetivo.focus();
        return;
    }
    alert("¡Registro exitoso! Bienvenido a Clínica NutriVida.");
    formulario.reset();
});