function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 4.70;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O resultado em real é: R$${valorEmReal}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  var valorEmRealNumerico = parseFloat(valor);
  var valorConvertido = valorEmRealNumerico / 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O resultado em dolar é: $${valorConvertido}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}