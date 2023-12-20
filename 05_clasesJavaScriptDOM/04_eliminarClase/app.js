// Tambien puedes eliminar una clase de un elemento, esa operación tambien es muy util.
// Es decir, si agregaste una clase por ejemplo, digamos una clase activa y le asignaste un estilo porque ese elemento estaba activo en ese momento, en la aplicación o en la página web, pero ya no esta activo y necesitas eliminar ese estilo en ese caso deberiamos de eliminar la clase y simplemente eso va a remover todo el estilo asociado, para eso utilizamos el metodo remove() y dentro de los parentesis pasamos el nombre de la clase.

const primerTopping = document.querySelector('.topping');

primerTopping.classList.remove('topping')

console.log(primerTopping.classList)

// De esta manera es como podemos eliminar clases de forma dinamica

// Ya sabemos como agregar y eliminar una clase y como verificar si un elemento tiene una clase o no, asi que eso es muy util

// Estas son operaciones que utilizaremos a menudo si trabajamos con el DOM

// Ahora como hasta el momento ya sabemos como agregar clases y estilos entonces vamos a ver como puedes crear, agregar y eliminar elementos en el DOM.