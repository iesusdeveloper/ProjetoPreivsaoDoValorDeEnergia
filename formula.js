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
let calculo = parseFloat(((leiat - leiant)*trfkwh + cilu+(vbt*(leiat-leiant))).toFixed(2));

document.getElementById("resultado").innerText = calculo
}
