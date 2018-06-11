var imagenes = [];
imagenes ["charmander"] = "charmander.png";
imagenes ["pikachu"] = "pikachu.png";
imagenes ["squartle"] = "squartle.png";


class Pakiman
{

constructor(n, v, a)
{
this.imagen = new Image();
this.nombre = n;
this.vida = v;
this.ataque = a;

this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar()
  {
document.body.appendChild(this.imagen);

  }
}

var charmander = new Pakiman("charmander", 100, 30);
var pikachu = new Pakiman("pikachu", 80, 50);
var squartle = new Pakiman("squartle", 80, 60);
