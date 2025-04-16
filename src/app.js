import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  generarCarta()
  document.getElementById("botonPoker").addEventListener("click",generarCarta)
};
function generarCarta() {

  //Definiendo Variables 
  const simbolos = ["♠", "♥", "♦", "♣"] //array de todas las pintas
  const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"] // array de todos los valores
  let valornum = document.querySelector("#number"); // haz que valorNum consulte por el selector en el documento "number"
  let topelement = document.querySelector("#topsim"); // haz que topElement consulte por el selector en el documento "topsim"
  let backelement = document.querySelector("#backsim"); // haz que valor num consulte por el selector  en el documento "backsim"

  let aleatorioVal = valores[Math.floor(Math.random() * valores.length)];
  valornum.innerHTML = aleatorioVal

  let aleatorioSim = simbolos[Math.floor(Math.random() * simbolos.length)];
  topelement.innerHTML = aleatorioSim
  backelement.innerHTML = aleatorioSim

  if (aleatorioSim === "♥" || aleatorioSim === "♦") {
    topelement.style.color = "red";
    valornum.style.color = "red";
    backelement.style.color = "red";
  }
  else {
    topelement.style.color = "black";
    valornum.style.color = "black";
    backelement.style.color = "black";
  }

}
