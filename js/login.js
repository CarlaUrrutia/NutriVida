let formulario = document.getElementById("contacto");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (email.value.trim() === "") {
        alert("El correo electrónico no puede estar vacío");
        email.focus();
        return;
    }

    if (pass.value.trim() === "") {
        alert("La contraseña no puede estar vacía");
        pass.focus();
        return;
    }

    if (email.value !== "admin@duocuc.cl" || pass.value !== "Admin123") {
        alert("Credenciales incorrectas");
        pass.value = "";
        pass.focus();
        return;
    }

    alert("Inicio de sesión exitoso!");
    formulario.reset();
    
});