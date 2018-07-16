var botaoBuscarPacientes = document.querySelector("#busca-pacientes");

botaoBuscarPacientes.addEventListener("click", function () {
    console.log("cliquei no buscar");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var respostaPacientes = JSON.parse(resposta);
            respostaPacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            alert("Não foi possivel realizar a busca.");
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    })
    xhr.send();

});