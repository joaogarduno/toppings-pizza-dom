// Cómo crear un elemento desde 0 con JavaScript y luego agregar ese elemento al DOM de forma dinamica
// Esto lo vamos a ocupar cuando:
  // Cuándo por ejemplo recibes información de un servidor o una API (Aplication Programming Interface) recibimos esa información en formato JSON que es un formato que se usa para intercambiar datos en desarrollo web y necesitas transformar esa información en elementos HTML que los usuarios puedan ver con los cuales puedan interactuar lo podemos realizar de forma dinamica, veamos como:



const listaDeToppings = document.getElementById('lista-toppings')


const toppinNuevo = document.createElement('li');