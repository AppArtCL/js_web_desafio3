// Ejercicio 4
const cuadroAzul = document.getElementById("cuadroAzul") 
const cuadroRojo = document.getElementById("cuadroRojo") 
const cuadroVerde = document.getElementById("cuadroVerde") 
const cuadroAmarillo = document.getElementById("cuadroAmarillo") 

function pintar(elemento) {
    elemento.style.backgroundColor = "black"
}

cuadroAzul.addEventListener("click", function() {
    pintar(this)
})
cuadroRojo.addEventListener("click", function() {
    pintar(this)
})
cuadroVerde.addEventListener("click", function() {
    pintar(this)
})
cuadroAmarillo.addEventListener("click", function() {
    pintar(this)
})
