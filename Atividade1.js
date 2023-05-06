
//função que calcula a média de um array de números
function media(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma / arr.length;
}

//função que calcula a area de um retângulo
function areaRetangulo(base, altura) {
    return base * altura;
}

//função com callback que calcula a area de um retângulo
function areaRetanguloCallback(base, altura, callback) {
    return callback(base, altura);
}

//função que calcula a area de um triângulo com function arrow
const areaTriangulo = (base, altura) => base * altura / 2;