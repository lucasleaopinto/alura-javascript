var pacientes = document.querySelectorAll(".paciente");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);
    var tdImc = paciente.querySelector(".info-imc");

    if (validaPeso(peso) && validaAltura(altura)) {
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Não foi Possível Calcular o IMC";
        paciente.classList.add("paciente-invalido")
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;

    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

function validaErrosForm(paciente) {

    var erros = [];
    if (paciente.nome.length === 0)
        erros.push("Nome vázio");
    if (paciente.peso.length === 0)
        erros.push("Peso não pode ser vazio");
    if (paciente.altura.length === 0)
        erros.push("Altura não pode ser vazia");
    if (paciente.gordura.length === 0)
        erros.push("Gorduta vázia");
    if (!validaAltura(paciente.altura))
        erros.push("Altura Inválida");
    if (!validaPeso(paciente.peso))
        erros.push("Peso Inválida");
    return erros;
}