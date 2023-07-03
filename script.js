


function calcIMC() {
    //selected values
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value

    alturavalor = parseFloat(altura)
    pesovalor = parseFloat(peso)

    //calculate
    let imc = pesovalor / (alturavalor * alturavalor)

    //result
    let result = document.querySelector('#result')
    result.classList.add('resultado')

    result.innerHTML = 'o valor do seu IMC é: ' + imc.toFixed(2);
}