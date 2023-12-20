// Otra operación importante es tambien verificar si un elemento posee una clase o no.
// Eso lo podemos confirmar con el metodo contains()
// El metodo contains() nos permite verificar si una clase específica existe en esa lista de clases.


// const primerTopping = document.querySelector('.topping');

// console.log(primerTopping.classList.contains('fondo-marron'));

// console.log(primerTopping.classList)
// En este caso se retorna una valor mas no una acción es decir verdadero o falso, y mostramos ese valor con el "console.log(), entonces nos mostrará la clase que si tiene ese elemento"





// Pero si pasamos una clase que no tiene ese elemento, por ejemplo:
const primerTopping = document.querySelector('.topping');

console.log(primerTopping.classList.contains('fondo-azul'));

console.log(primerTopping.classList)
// No tiene esa clase

// Esto es util en caso de que queremos usarlo, digamos en un condicional o en un ciclo, pero sobre todo en las condicionales son muy utiles, para poder decidir si se hace algo en base a que si un elemento posee una clase o no