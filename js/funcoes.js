let valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?");
let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
let valorEmReal = valorEmDolarNumero * 5.77;
let valorEmRealFixado = valorEmReal.toFixed(2);
alert(valorEmRealFixado);