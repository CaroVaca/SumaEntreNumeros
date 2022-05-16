let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("Enviar");

rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";

btnEnviar.addEventListener("click", () => {
  let primerNum: number = Number(dato1.value);
  let segundoNum: number = Number(dato2.value);
  let actual, suma: number;
  actual = primerNum;
  suma = 0;

  while (actual <= segundoNum) {
    suma = suma + actual;
    actual++;
  }
  console.log("El resultado de la suma es: ", suma);
});
