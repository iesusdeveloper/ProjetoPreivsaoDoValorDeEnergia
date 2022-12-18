// leiat: Leitura Atual
// leiant: Leitura Anterior
// trfkwh: Tarifa do kwh
// cilu: Contribuição de Iluminação Pública
// vbt: Valor da Bandeira Tarifária


function calculo(){
    let leiat = parseFloat(document.getElementById("inputleiat").value);
    let leiant = parseFloat(document.getElementById("inputleiant").value);
    let trfkwh = parseFloat(document.getElementById("inputtrfkwh").value);
    let cilu = parseFloat(document.getElementById("inputcilu").value);
    let vbt = document.getElementById("inputvbt").value;
    calculo = parseFloat(((leiat - leiant)*trfkwh + cilu+(vbt*(leiat-leiant))).toFixed(2));

    
    // Função faz a verificação se a variável calculo há dados suficientes ou não para fazer o calculo
function validCalculo(){

    if (isNaN(calculo) == true){
        return true;
    }
}

    if (leiat <0 || leiant <0 || trfkwh <0 || cilu <0 || vbt <0){
        document.getElementById("resultado").innerText ="Insira os valores para realizar o calculo"
    }else if (validCalculo() ==true){ 
        document.getElementById("resultado").innerText ="Insira os valores para realizar o calculo"
    }else if (calculo <0){
        document.getElementById("resultado").innerText ="O resultado não pode ser negativo"
    }else{
        document.getElementById("resultado").innerText = calculo

    }
}
