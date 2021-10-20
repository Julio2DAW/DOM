/*
  dom.js
  Ejercicios Guiados de DOM.
  Autor: Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
  Licencia: GPL v3 o superior.
  Año 2021
*/

'use strict'

function ejecutar(){
  //console.log("Funciona");
  //let input = document.getElementById('iNombre')
  //console.log(input.value);
  let campos = document.getElementsByTagName('input')
  console.log(campos[2].value);

  let p = document.querySelector('.c1')
  console.log(p.outerHTML)

  let spans = document.querySelectorAll('.c1 span')
  console.log(spans)

  //document.getElementByClassName

  //Modificación del DOM
  spans[1].innerHTML = ' ¡Viva la Pepa!'

  //Modificar atributos de estilo
  spans[0].style.color = 'blue'
  spans[0].style.fontSize = '20pt'
}


setInterval(mover, 100)

let posicion = 0
function mover() {
  let p = document.getElementById('correCaminos')
  p.style.left = `${posicion}px`
  posicion += 1
}

function construir() {
  console.log('Construyo')
  let div = document.getElementsByClassName('borde')[0]
  //console.log(div);
  //div.innerHTML = '<p>Esto es un texto <span class="negrita">en negrita</span>.</p>'
  let p = document.createElement('p')
  div.appendChild(p)
  let nodoTexto = document.createTextNode('Este es un texto...')
  p.appendChild(nodoTexto)

  let span = document.createElement('span')
  p.appendChild(span)
  span.classList.add('negrita')
  //span.classList.add('borde')
  span.appendChild(document.createTextNode('en negrita'))
  let img = document.createElement('img')
  div.insertBefore(img, p)
  img.setAttribute('src', 'img/doom.jfif')
  //document.body.appendChild(img)
}

function destruir() {
  let p = document.querySelector('.borde p')
  //p = document.getElementsByTagName('p')[2]
  //p = document.getElementByClassName('borde')[0].getElementsByTagName('p')[0]
  console.log(p.innerHTML)
  p.remove()
}

function destruirTodo() {
  let div = document.getElementsByClassName('borde')[0]
  while (div.firstElementChild)
    div.removeChild(div.firstElementChild)
}
