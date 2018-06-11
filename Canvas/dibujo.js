 //getElementById Metodo del documento que trae un elemento atravez del ID
//input texto_lineas.
var texto = document.getElementById('texto_lineas');
//Ejecucion del boton.
var boton = document.getElementById('botoncito');
//ejecucion de funcion dibujoPorClick, al dar click al boton.
boton.addEventListener("click", dibujoPorClick);



var d = document.getElementById('dibujito')
//ancho del canvas.
var ancho = d.width;

// getContext Metodo del canvas.
//Elegimos dibujar en 2D.
var lienzo = d.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo( xinicial , yinicial);
  lienzo.lineTo( xfinal , yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//Funcion del input.
function dibujoPorClick(){
  //Obtener valor del formulario value.
var lineas = parseInt(texto.value);
var l = 0;
//yinicial, xfinal
var yi, xf;
var colores = "#ec407a";
var espacio = ancho / lineas;
//Ejecuta mientras la condicion sea igual.
for(l = 0; l < lineas; l++){

yi = espacio * l;

xf = espacio * (l + 1);

dibujarLinea(colores, 0, yi, xf, 300);
console.log("linea" + l);

}
dibujarLinea(colores,1 ,1 ,1 ,ancho -1);
dibujarLinea(colores,1 ,ancho , ancho -1 ,ancho -1);

dibujarLinea(colores,1 ,1 ,ancho -1 ,0);
dibujarLinea(colores,300 ,0 ,ancho -1 ,ancho -1);


}

/*
console.log(lienzo); // esto es para verificar en la consola
//Inicia el Dibujo.
lienzo.beginPath();
//Propiedad del objeto lienzo  se le asigna el color.
lienzo.strokeStyle = "red";
//
lienzo.moveTo(0, 0);
//
lienzo.lineTo(0, 250);
//Es el hecho de trasar la linea.
lienzo.stroke();
//
lienzo.moveTo(0, 250);
//
lienzo.lineTo(250, 250);
//
lienzo.stroke();
//
lienzo.moveTo(250, 250);
//
lienzo.lineTo(250, 0);
//
lienzo.stroke();
//
lienzo.moveTo(250, 0);
//
lienzo.lineTo(0, 0);
//
lienzo.stroke();
//Termina el Dibujo.
lienzo.closePath();
*/
