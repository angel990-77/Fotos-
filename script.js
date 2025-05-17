function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    if (mensaje.style.display === "block") {
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }
}