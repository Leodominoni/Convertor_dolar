function converter(){
    var valorElemento = document.getElementById('valor')
    var valor = valorElemento.value
    var valorDolar = parseFloat(valor)
    var valorReal = valorDolar * 5.19  //dia 8.9.22
    var resultado = document.getElementById('valorConvertido')
    var valorConvertido = `O valor em Dólar é U$ ${valorReal.toFixed(2)}`
    resultado.innerHTML = valorConvertido
}