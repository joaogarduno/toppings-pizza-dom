// Así como podemos crear y agregar elementos al DOM pero, tambien podemos eliminarlos .

// Por ejemplo queremos ahora eliminar el "topping nuevo" inmediatamente luego de haberlo agregado

const listaDeToppings = document.getElementById('lista-toppings')


const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron')
toppingNuevo.innerText = 'Queso Extra'

listaDeToppings.append(toppingNuevo)

// toppingNuevo.remove()
listaDeToppings.remove()

// El metodo remove() removio ese elemento del DOM y lo mismo se puede aplicar a cualquier elemento
// Lo unico que necesitamos es una referencia a ese elemento en el DOM


// EXISTE OTRO METODO LLAMADO "appendChild()"
// El metodo "append()" de JavaScript te permite insertar uno o más nodos o strings. Ese nodo o string seran insertados al final de la lista del padre nodo.


// ¿Qué diferencia existe ente los metodos append() y appendChild()?
// ---> El metodo append() puede aceptar multiples parametros miestras que el metodo appendChild() solo puede un solo parametro.
// ---> El metodo append() acepta y puedes hacer uso de ambos objetos "nodos" y "strings", mientras que el metodo appendChild() solo acepta objetos de "nodo"
// ---> El metodo append() no tiene un valor de retorno o de regreso, mientras que con el metodo appendChild() retorna o regresa anexado el objeto "nodo".

