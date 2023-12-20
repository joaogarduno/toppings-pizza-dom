// Ahora si tenemos una referencia donde queremos agregar el "topping nuevo".
// Porque todo funciona dentro de un contexto, es por eso que es importante que recuerdes que al agregar un elemento tenemos que especificar donde vamos a quererlo, y eso lo podemos hacer haciendo uso del metodo "append()"

// Nos va a permitir agregar un nodo en esta lista
// Vamos agregar un "topping nuevo" a la "lista de toppings"




const listaDeToppings = document.getElementById('lista-toppings')


const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron')
toppingNuevo.innerText = 'Queso Extra'

listaDeToppings.append(toppingNuevo)