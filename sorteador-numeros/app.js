let quantidadeDeNumeros = document.getElementById("quantidade");
let numeroInicial = document.getElementById("de");
let numeroFinal = document.getElementById("ate");
let texto = document
  .getElementById("resultado")
  .getElementsByClassName("texto__paragrafo")[0];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function sortearNNumerosAleatorios(quantidade, min, max) {
  let listaNumeros = [];
  while (quantidade > 0) {
    let num = getRandomIntInclusive(min, max);
    if (listaNumeros.includes(num)) {
      continue;
    } else {
      listaNumeros.push(num);
      quantidade--;
    }
  }
  return listaNumeros;
}

function sortear() {
  if (numeroInicial.value >= numeroFinal.value) {
    alert(
      'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'
    );
    return;
  }
  if (quantidadeDeNumeros.value > numeroFinal.value - numeroInicial.value + 1) {
    alert(
      'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'
    );
    return;
  }
  let numerosSorteados = sortearNNumerosAleatorios(
    quantidadeDeNumeros.value,
    numeroInicial.value,
    numeroFinal.value
  );
  texto.innerHTML = `Números sorteados: ${numerosSorteados}`;
  document
    .getElementById("btn-reiniciar")
    .setAttribute("class", "container__botao");
}

function limparCampos() {
  quantidadeDeNumeros.value = "";
  numeroInicial.value = "";
  numeroFinal.value = "";
  texto.innerHTML = `Números sorteados: nenhum até agora`;
}

function reiniciar() {
  limparCampos();
  document
    .getElementById("btn-reiniciar")
    .setAttribute("class", "container__botao-desabilitado");
}
