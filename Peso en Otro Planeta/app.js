//Obtener datos del Usuario.
//prompt permite insertarle datos, funciona igual que un alert.
var usuario = prompt("Cual es tu Peso?");

//Eleccion de Planeta.
// \n = salto de linea en javascript.
var planeta = prompt("Elige tu Planeta.\n 1 = Marte / 2 = Jupiter. ");

//Gravedad en otros Planetas.
 var g_tierra = 9.8;
 var g_marte = 3.7;
 var g_jupiter = 24.8;

 //Peso de Persona obtenida por el Uusario.
 //parseFloat recibe decimales.
 var peso = parseFloat(usuario);

 //Variable que convierte nuestro peso a el peso en otro planeta.
 var peso_final;
//Variable nombres de planetas.
 var nombre;

 if (planeta == 1){
   peso_final = peso * g_marte / g_tierra;
   nombre = "Marte";
 }else if (planeta == 2){
   peso_final = peso * g_jupiter / g_tierra;
      nombre = "Jupiter";
 }else {
  peso_final = 10000;
 }


peso_final = parseFloat(peso_final);
//Imprecion de peso final
//toFixed(2) Eliges la cantidad de decimales que deseas mostrar.
 document.write("Tu peso en"+ nombre +" es " + peso_final.toFixed(2) + "<b> kg</b>");
