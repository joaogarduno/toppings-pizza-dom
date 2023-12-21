// Ya sabemos como crear, agregar y eliminar elementos del DOM con JavaScript

// Ahora lo que haremos es cómo recorrer el DOM, ya que JavaScript nos permite aprovechar esa jerarquía con esos "Nodos Padres, Nodos hijos, Nodos Hermanos" toda esa jeraqrquía nos va a permitir recorrer el DOM con nuestro código en caso de que lo necesitemos

// Por ejemplo tenemos este elemento "listaDeToppings" en caso de que ocurra algo al realizar una operación con su elemento o nodo padre simplemente podemos seleccionar "parentElement" o "parentNode", es decir el elemento padre o el nodo padre, hay una diferencia entre nodo y elemento
// El parentElement solo incluye los elementos HTML

const listaDeToppings = document.getElementById('lista-toppings');

// Obtener una referencia a ese contenedor sin obtenerlo directamente si no indirectamente a través de la lista de toppings.
// console.log(listaDeToppings.parentElement);
// console.log(listaDeToppings.parentElement.parentElement);

// console.log(listaDeToppings.parentNode);
// console.log(listaDeToppings.parentNode.parentNode);



// -----------------------------------
// Tambien nosotros podemos obtener los Nodos o Elementos Hijos, para esos casos vamos a necesitar la propiedad children()
// Esto nos dara todos los nodos hijos de la lista de toppings.
// Sera una coleccion de HTML

// console.log(listaDeToppings.children);

// Con eso podemos ver que nuestro elemento tiene 4 hijos de esa lista de toppings y esos 4 elementos los podemos usar de forma individual con sus indices pero tenemos acceso a ellos gracias a esa propiedad "children()"
// 

// Notamos que no estamos accediendo a ellos directamente, si no indirectamente a través de la lista de toppings y eso es util para realizar ciertas operaciones en nuestro código.

// Además de "children" también tenemos la opcion de seleccionar el primero hijo -> firstChild

// console.log(listaDeToppings.firstChild);
// console.log(typeof listaDeToppings.firstChild);


// Cuando utilizamos este metodo y lo que vemos en consola a la hora de utilizarlo vemos texto, ya que este metodo trabaja con nodos.
// Y desafortunadamente en este caso estamos ocupando el código de forma vertical es decir va bajando y se va indexando segun su contenido del elemento, pero ese espacio es conocido como un Nodo es decir, toma en cuenta esos espacios como si fueran Nodos.

// Entonces lo que tendriamos que hacer es colocar todo el codigo de HTML en este caso del elemento <ul> con la clase "lista-toppings" en una sola linea para que podamos verlo representado en la consola del navegador.

// En ese caso si nos mostrara en la consola del navegador el elemento <li>

// Recuerda que no es lo recomendable tener el codigo en una sola linea de código ya que es muy complicada leerla

// Esta propiedad trabaja con Nodos es por eso que la información que nos trae o nos muestra es diferente, es decir que lo que nos muestra es texto, ya que normalmente nos muestra texto en lugar de un elemento como tal, porque de siempre tratamos de indentar nuestro código adecuadamente, indentar la estructura HTML para poder leerla más facilmente.


// En ese caso en lugar de usar "firstChild()" usariamos "children()" y usamos el indice correspondiente que es 0 en este caso.

// console.log(typeof listaDeToppings.children)

// console.log(listaDeToppings.children[0])

//  y de esta forma tenemos acceso al primer hijo sin ningun problema





// -----------------------------------
// tambien podemos utilizar la propiedad "lastChild()" tambien trabaja solo con Nodos

// console.log(listaDeToppings.lastChild)

// Pero por suerte estas 2 propiedades 
// - firstChild
// - lastChild
// Tambien tienen su version para obtener elementos HTML en lugar de usar "firstChild" usariamos "firstElementChild" y esa propiedad sera mas practica para nosotros

// console.log(typeof listaDeToppings.firstElementChild)

// console.log(listaDeToppings.firstElementChild)

// console.log(listaDeToppings.lastElementChild)

// Estas son las 2 versiones para trabajar con nodos y para trabajar con elementos.





// -----------------------------------
// Ademas de padres y hijos tambien tenemos hermanos como podemos obtener los hermanos de toppings

// En este caso el hermano de la lista de toppings si nos vamos al DOM seria "título" ya que estan al mismo nivel de la jerarquía y ambos pertenecen al "contenedor", es decir estan dentro de ese <div>
// ¿Cómo podemos obtener "titulo" indirectamente a través de "lista de toppings"?

// console.log(listaDeToppings.previousElementSibling)

// También podemos obtener el proximo elemento
// console.log(listaDeToppings.nextElementSibling)




// También tenemos la versión para trabajar con Nodos:
// console.log(listaDeToppings.previousSibling)
// console.log(listaDeToppings.nextSibling)
// Normalmente vamos a trabajar con la version que trae element, es decir, previousElementSibling

// Así es como podemos recorrer por el DOM con notación de punto utilizando estas propiedades


console.log(listaDeToppings.firstElementChild.firstElementChild)






// -----------------------------------