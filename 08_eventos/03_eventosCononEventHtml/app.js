// Eventos en HTML
// Esta parte es importante.
// Ahora veremos un ejemplo practico en nuestro ejemplo de HTML con el tema Toppings de pizza sobre los eventsListener y como puedes ejecutar código cuando ocurra un evento en un elemento del DOM, veremos un ejemplo sencillo pero este nos servira para ilustrar este concepto y luego en los proyectos vamos a implementar este concepto de forma mas avanzada.

// Esto solo sera una ilustración solo para aprender lo basico y sencillo de la sintaxis una opción para poder ejecutar código cuando ocurra un evento específico es indicar toda esta asociación en HTML, digamos que cuando hagamos clic en el elemento en este caso en el elemento que tenemos en HTML asi...

// <li id="aceitunas" class="topping fondo-marron">Aceitunas</li>
// <li class="topping fondo-naranja">Cebolla</li>

// En "Aceitumas" quiero que se muestre un mensaje en la consola por eso en HTML tenemos atributos que representan distintos eventos, en este caso tenemos el atributo "onclick", vamos a manejar un evento de clic, si el usuario hace clic sobre ese elemento vamos a ejecutar una funcion específica, esa funcion la vamos a definir en este archivo de JavaScript.

// En este archivo tendremos una función que se va a llamar "mostrar clic" mostrarClic() y es importante que incluyamos los parentesis vacíos o con los valores que requiera en HTML (eso lo vemos en archivo HTML)

// function mostrarClic(){
//   console.log('Clic');
// }


// En HTML estamos asignado esta función "mostrarClic()" a ese evento de "clic" -> "onClick" sobre ese elemento de la lista 
// <li onclick="mostrarClic()" class="topping fondo-naranja">Champiñones</li>

// Entonces... en cuestion de los terminos que tenemos anotados en nuestros apuntes esta funcion dentro del codigo HTML -> "mostrarClic()"

// "mostrarClic()" = eventHandler

// Y la funcion que manejara ese evento que es el "event handler" es la que tenemos en el archivo de JavaScript "app.js"

// Ahora la asociasion que existe entre la funcion y el evento que ya esta predeterminada y lista para ejecutarse cuando ocurra el evento es lo que denominamos tambien un "Event Listener":
// onclick="mostrarClic()"



// --------------------------------------
// Digamos que queremos personalizar el valor y colocaremos un parametro llamado "topping"
function mostrarClic(topping){
  console.log(topping)
}


// Esto hasta ahora parece simple, pero en realidad esto no se hace así, cuando se quiere construir aplicaciónes mas complejas no es tan practico escribir directamente algo en HTML ya que tendriamos que esta definiendo el atributo y llamar a la función con los argumentos fijos en HTML.

// Existe otra forma mas dinamica de hacerlo a traves de un evento llamado ".addEventListener()" y aquí es donde entra el concepto de "Event Listener"

// ¿Proximanete haremos una analisis sobre el metodo .addEventListener()? para evitar estas usando esto directamente en el codigo HTML en algo fijo, es funcional hacerlo asi y puede servir para proyectos sencillos.