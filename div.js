const cambioColor = document.getElementById('key')
const a = 'pink'
const s = 'orange'
const d = 'lightblue'
const q = 'purple'
const w = 'grey'
const e = '#432D27'
function cambiarColor(color){
    cambioColor.style.backgroundColor = color
    console.log(color)    
}
function crearElemento(param){
    const elemento = document.createElement('div')
    cambioColor.appendChild(elemento)
    elemento.style.width = '200px';
    elemento.style.height = '200px';
    elemento.style.backgroundColor = param
}

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a') {
        cambiarColor(a)
    }else if (event.key === 's'){
        cambiarColor(s)
    }else if (event.key === 'd'){
        cambiarColor(d)
    }else if (event.key === 'q'){
        crearElemento(q)
    }else if (event.key === 'w'){
        crearElemento(w)
    }else if (event.key === 'e'){
        crearElemento(e)
    }
})
