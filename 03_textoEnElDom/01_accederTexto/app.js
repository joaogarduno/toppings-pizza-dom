// Diferentes formas de obtener el contenido interno de un elemento que contiene texto, veamos las distintas formas y alternativas

// Cualquier operacion relacionada con el DOM debemos obtener ese elemento usando uno de los metodos que aprendimos en la parte anterior
const listaDeToppings = document.getElementById('lista-toppings');

// console.log(listaDeToppings);
// console.log(typeof listaDeToppings);

// Retorna cadena de caracteres
// console.log(listaDeToppings.innerText);
// console.log(typeof listaDeToppings.innerText)

// console.log(listaDeToppings.textContent);
// console.log(typeof listaDeToppings.textContent);


// Esta es totalmente diferente ya que las 2 anteriores retornan texto, pero "innerHTML" retorna la estructura HTML interna de ese elemento como una cadena de caracteres.

console.log(listaDeToppings.innerHTML);