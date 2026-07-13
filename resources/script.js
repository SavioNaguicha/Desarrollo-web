function Saludar() {
    alert ("Hola bienvenidos")
}

// validacion de correo 
const emailInput = document.getElementById("email");
const feedback = document.getElementById("feedback");
emailInput.addEventListener("input", () => {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailPattern.test(emailInput.value)) {
feedback.textContent = "Correo válido";
feedback.style.color = "green";
} else {
feedback.textContent = "Correo no válido";
feedback.style.color = "red";
}
});