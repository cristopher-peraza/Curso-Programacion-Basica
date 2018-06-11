var numeros = 100;

for(var i = 1; i <=100; i++)
{
  //Los valores (i,3), se asignan a la funcion esDivisible
  if (esDivisible(i,3))
  {

  document.write("Fizz");

  }
 if (esDivisible(i,5))
 {

   document.write("Buzz");

 }
//esDivisible que no sea divisible
  if(!esDivisible(i,3) && !esDivisible(i,5)){


    document.write(i);
  }
  //Se concateno el br alfinal de las instrucciones pero antes de finalisar el ciclo para que se aplique.
  document.write("<br />");

}
//La funcion esDivisible, recibira dos parametron, (num, divisor), los valores estan asignados en cada if.
function esDivisible(num, divisor)
{
  if (num % divisor == 0) {
    return true;
    }
    else
    {
      return false;
    }
}
