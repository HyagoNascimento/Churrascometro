//Carne - 400gr por pessoa + 6horas - 650
//Cerveja - 1200ml por pessoa + 6horas - 2000ml
//Refrigerante/Agua - 1000ml por pessoa + 6horas - 1500ml 

//criança valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;

    const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    const qdtTotalCerveja = cervejaPP(duracao) * adultos;
    const qdtTotalBebida= bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p> ${Math.ceil(qdtTotalCarne / 1000)} Kg de carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebida / 2000)} Garrafas (2L) de bebidas</p>`

}

function carnePP(duracao){
    
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;}
}

function cervejaPP(duracao){
    
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;}
}

function bebidaPP(duracao){
    
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;}
}

