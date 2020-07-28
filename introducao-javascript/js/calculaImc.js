var titulo = document.querySelector(".titulo");

titulo.textContent = "Cacete";


function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso < 1000 && peso > 0) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3) {
        return true;
    } else{
        return false;
    }
}

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdImc = pacientes[i].querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    if (validaPeso(peso) && validaAltura(altura)) {    
        tdImc.textContent = calculaIMC(peso, altura);

    } else {
        tdImc.textContent = "Informações inválidas"
        pacientes[i].classList.add("paciente-invalido");
    }

}



