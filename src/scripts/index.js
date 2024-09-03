let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let resultado = document.querySelector("#resultado");
let submitBtn = document.querySelector("#submit-btn");

let pesoValue, alturaValue, imc, classificacao;
const classificacoes = [
  "Muito abaixo do peso",
  "Abaixo do peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau 1",
  "Obesidade grau 2",
  "Obesidade grau 3",
];

function getInputValue({ target }) {
  if (target.id === "peso") {
    pesoValue = target.value;
  } else {
    alturaValue = target.value;
  }
}

function calculateImc(event) {
  event.preventDefault();
  imc = pesoValue / (alturaValue * alturaValue);

  if (!imc) {
    resultado.innerHTML = `
    <h3>Resultado</h3>
    <p>Preencha os campos corretamente!</p>`;
    return;
  }

  if (imc < 16.9) {
    classificacao = classificacoes[0];
  } else if (imc >= 17 && imc <= 18.4) {
    classificacao = classificacoes[1];
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = classificacoes[2];
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = classificacoes[3];
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = classificacoes[4];
  } else if (imc >= 35 && imc <= 39.9) {
    classificacao = classificacoes[5];
  } else {
    classificacao = classificacoes[6];
  }

  peso.value = altura.value = "";

  resultado.innerHTML = `
  <h3>Resultado</h3>
  <p>O seu IMC é: ${imc.toFixed(
    2
  )} kg/m2, sua classificação é: <strong>${classificacao}!</strong></p>
  </p>`;
}

submitBtn.addEventListener("click", (event) => calculateImc(event));
