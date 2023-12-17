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
// const misToppings = document.getElementsByTagName('li');

// console.log(misToppings);
// console.log(typeof misToppings);

// const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');

// console.log(toppingsFondoMarron);



// -----------------------------------
// Seleccionar un elemento que cumpla el criterio de un selector CSS y existen 2 metodos diferentes 
// - .querySelector() -> El primer elemento que cumpla ese criterio
// - .querySelectorAll() -> Nos permite seleccionar todos los que cumplen con ese criterio.

// Estos métodos son útiles cuando necesitamos un proceso de selección más específico, es como cuando escribes tus selectores en CSS.

// Puedes combinar distintos estados ID, Clases, activo, enfocado --> .querySelector()

// const aceituna = document.querySelector('#aceitunas');
// console.log(aceituna);


// const aceituna = document.querySelector('.topping');
// console.log(aceituna)
// console.log(typeof aceituna)


// const primerToppingNaranja = document.querySelector('.topping.fondo-naranja')
// console.log(primerToppingNaranja);
// console.log(typeof primerToppingNaranja);

// const primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
// console.log(primerToppingNaranja)
// console.log(typeof primerToppingNaranja)


const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron)

