//Variables en mayusculas,
//significan que su valor no lo cambiaremos en un futuro.
//Creacion del objeto Teclas.
var teclas = {
  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGTH :39
};

//Keydown detecta cuando tecleamos.
//Keyup detecta cuando soltamos la tecla.
document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");

var x = 150;
var y = 150;

dibujarLinea("red", 100, 100, 200, 200, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;//grosor de la linea
  lienzo.moveTo( xinicial , yinicial);
  lienzo.lineTo( xfinal , yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//KeyCode es el numero que representa a cada tecla.
//keyCode de la Flecha a la izquierda 37
//keyCode de la Flecha a la derecha 39
function dibujarTeclado(evento) {
var colorcito = "blue";
var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
  dibujarLinea(colorcito, x, y, x, y -movimiento, papel);
  y = y -movimiento;
      break;
  }
switch (evento.keyCode) {
  case teclas.DOWN:
  dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
  y = y + movimiento;
    break;
}
switch (evento.keyCode) {
  case teclas.LEFT:
  dibujarLinea(colorcito, x, y, x -movimiento, y, papel);
  x = x -movimiento;
    break;
}
switch (evento.keyCode) {
  case teclas.RIGTH:
  dibujarLinea(colorcito, x, y, x +movimiento, y, papel);
  x = x +movimiento;
    break;
    console.log("Tecla no habilitada!!");
    default:
    break;
}

}
