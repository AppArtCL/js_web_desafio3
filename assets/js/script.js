// Ejercicio 3 
function pintar(elemento, colorFondo = "green") {
    elemento.style.backgroundColor = colorFondo
}

const ele = document.getElementById("ele1") 
ele.addEventListener("click", function() {
    pintar(this, "yellow")
})