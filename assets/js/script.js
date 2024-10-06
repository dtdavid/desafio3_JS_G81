
/*SCRIPT INICIAL PUNTO 2.1 SEPARADOS EN ARCHIVOS DIFERENTES*/

/*function pintar (color = "green") {
    ele.style.backgroundColor = color
}
const ele = document.getElementById("ele1")
ele.addEventListener('click', pintar)*/

/*PUNTO 2.2 */

/*const ele = document.getElementById('ele1')

//cambiamos la función inicial para que pueda recibir el evento directamente y cambiar el color de fondo

  ele.addEventListener('click', function(){
    ele.style.backgroundColor = 'yellow'
}) */

/* PUNTO 2.3 */
// función pinta con parámetro con valor 'green' por defecto
function pintar (color = "green") {
    ele.style.backgroundColor = color
}

const ele = document.getElementById('ele1')
//aquí responde al evento 'click' llamando a la función pintar con el argumento 'yellow'
ele.addEventListener('click',()=>{
    pintar("yellow")
})

