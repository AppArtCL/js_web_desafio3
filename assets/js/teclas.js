colorKey = "white"

cuadroKey = document.getElementById("key")

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        colorKey = "pink"
        pintar(cuadroKey)
    } else if (event.key === "s") {
        colorKey = "orange"
        pintar(cuadroKey)       
    } else if (event.key === "d") {
        colorKey = "lightblue"
        pintar(cuadroKey)
    } else if (event.key === "q") {
        colorKey = "purple"
        agregarDiv()
    } 
    else if (event.key === "w") {
        colorKey = "grey"
        agregarDiv()
    } else if (event.key === "e") {
        colorKey = "brown"
        agregarDiv()
    } 
})

function pintar(elemento) {
    elemento.style.backgroundColor = colorKey
}

function agregarDiv() {
    contenedor = document.getElementById("contenedor")
    nuevoElemento = document.createElement("div")
    nuevoElemento.style.backgroundColor = colorKey
    nuevoElemento.style.border = "1px solid black"
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    contenedor.appendChild(nuevoElemento)
}