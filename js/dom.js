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
  console.log(p.innerHTML)
}
