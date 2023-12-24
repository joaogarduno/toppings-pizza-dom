// Veamos como normalmente agregamos un eventListener a un elemento del DOM y lo hacemos con JavaScript

// Lo primero que haremos en el archivo es tener una referencia al elemento en el DOM.
// Digamos que queremos el "topping" de albahaca
// const albahaca = document.getElementById('albahaca');


// function mostrarClic(topping){
//   console.log(topping)
// }

// Una vez que tenemos el elemento y la funcion, tenemos que crear una asociacion entre el elemento y la función, cuando sera llamada esa función y que evento debe ocurrir para que llame a esa función ese es el eventListener(), estamos creandolo asociandolo

// Para generar y agregar un eventListener(), escribimos el nombre de la variable referencia del elemento "albahaca" y luego escribimos el nombre del metodo .addEventListener().

// albahaca.addEventListener('click', mostrarClic);

// Ese metodo toma 2 argumentos, primero el nombre del evento (investigar la lista de eventos de ese metodo) en este caso vamos a ocupar el evento de "click" y el segundo argumento es el nombre de la funcion que va a manejar ese evento,  incluso se puede definir deirectamente, pero en este caso solo la estamos definiendo separado individualmente, y es importante que solo escribas el nombre de la función sin parentesis (recuerda solo en este caso).

// albahaca.addEventListener('click', mostrarClic);

// Y esto es lo que crea la asociación entre el elemento, el evento y la función que se va a llamar



// Ahora si queremos mostrar el target del evento 

// function mostrarClic(e){
//   console.log(e.target)
// }
// albahaca.addEventListener('click', mostrarClic);



// PEro ahora en lugar de mostrar ese target quiero mostrar solamente su texto
// function mostrarClic(e){
//   console.log(e.target.innerText)
// }
// albahaca.addEventListener('click', mostrarClic);




// --------------------------------------------

// Si queremos seleccionar todos los "toppings" primero, vamos a usar el metodo "getElementByClassName"
// Eso nos va a retornar una colección HTML, una vez que tenemos esa colección HTML podemo iterar usando un ciclo para iterar sobre todos esos elementos, podemos usar un ciclo for "of".

// const toppings = document.getElementsByClassName('topping');

// function mostrarClic(e){
//   console.log(e.target.innerText);
// }

// // CICLO
// for (const topping of toppings){
//   console.log(topping);
// }

// albahaca.addEventListener('click', mostrarClic);





// --------------------------------------------
// con un addEventListener

// const toppings = document.getElementsByClassName('topping');

// function mostrarClic(e){
//   console.log(e.target.innerText);
// }

// // CICLO
// for (const topping of toppings){
//   // console.log(topping);
//   topping.addEventListener('click', mostrarClic)
// }




// --------------------------------------------

const toppings = document.getElementsByClassName('topping');




// En lugar de definir una funcion a parte es decir una funcion como tal podemos definir la funcion direactamente si es pequeña o precisa y lo definiriamos direactamente en el ciclo FOR con una funcion flecha
// function mostrarClic(e){
//   console.log(e.target.innerText);
// }



// CICLO
for (const topping of toppings){
  // console.log(topping);
  topping.addEventListener('click', (e) => {
    console.log(e.target.innerText)
  });
}

// Si se trata de ciclo se recomienda que se debe tener separada


// --------------------------------------------
// Para manejar otros eventos l aunica diferencia seria personalizar en la opcion de 'click' en lugar de click colocamos otro nombre de algun otro evento y es afunción va a manajar ese evento y dentro del cuerpo de la función decides como manejarlo.

// Vamos aplicar todos estos nuevos conceptos a nuestros proyectos al mmomento de crearlos asi que aprenderemos a utilizarlos en contexto.




