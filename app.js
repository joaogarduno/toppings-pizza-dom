// Seleccionando un elemento por su ID
// -----------------------------------
// const contenedor = document.getElementById('contenedor');

// console.log(contenedor)
// console.log(typeof contenedor.innerHTML);


// --------
// const titulo = document.getElementById('titulo');

// console.log(titulo);
// console.log(typeof titulo);

// console.log(titulo.innerText);
// console.log(typeof titulo.innerText);

// console.log(titulo.tagName);


// 
// -----------------------------------
// Seleccionando un elemento por su clase - CLASS
// const toppings = document.getElementsByClassName('topping')

// console.log(toppings);
// console.log(toppings.length);
// console.log(toppings[0]);
// console.log(toppings[0].id);


// -----------------------------------
// Seleccionando todos los elementos que tengan una etiqueta específica HTML
const misToppings = document.getElementsByTagName('li');

console.log(misToppings);
// console.log(typeof misToppings);

const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');

console.log(toppingsFondoMarron);