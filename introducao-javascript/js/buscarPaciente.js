var buscarPaciente = document.querySelector('#buscar-paciente');
buscarPaciente.addEventListener('click', function(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function(){
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientesAdicionados = JSON.parse(resposta);
            pacientesAdicionados.forEach(function(pacienteNovo){
                adicionaPacienteTabela(pacienteNovo);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert('Erro ao adicionar');
        }
       

    })
    xhr.send();

})

