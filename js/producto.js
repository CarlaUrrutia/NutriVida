let btnAgendar = document.getElementById("btn-agendar");
let yaAgendado = false;

btnAgendar.addEventListener("click", function() {
    if (yaAgendado === false) {
        alert("Agendamiento exitoso!");
        btnAgendar.textContent = "✔ Agendado";
        btnAgendar.style.backgroundColor = "green";
        
        yaAgendado = true; 
    } else {
        alert("Ya tienes una hora agendada para este plan");
    }
});