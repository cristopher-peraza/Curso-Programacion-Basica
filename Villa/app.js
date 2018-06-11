


var z;
for (var i = 0; i < 10; i++) {
//Pasamos los paramatros que usara aleatorio.
z = aleatorio(10, 20);
document.write(z + ", ");
}

//Math. Para generar operaciones matematicas complejas en js.
//Math.ceil Redondea hacia arriba.
//Math.floor Redondea hacia abajo.
//Math.random Genera un numero aleatorio entre 0 y 1.
function aleatorio(min ,maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
//Imagen de la funcion en github.
