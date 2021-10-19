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
