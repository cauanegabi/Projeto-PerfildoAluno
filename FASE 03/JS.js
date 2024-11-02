function trocarImagem(novaImagem) {
    document.getElementById('imagens').src = novaImagem;
}

function adicionarUC() {
    var novaUC = prompt("Por favor, insira o nome da nova UC:");
    
    if (novaUC) {
        var tabela = document.getElementById("ucsCursadas");     
        var novaLinha = tabela.insertRow();
        var novaCelula = novaLinha.insertCell();
        
        novaLinha.className = "tr-simple";
        novaCelula.className = "td-simple";
        
        novaCelula.textContent = novaUC;
    }
}

function moverCima() {
    var tabela = document.getElementById("ucsCursadas").getElementsByTagName('tbody')[0];
    var linhas = tabela.rows;
    for (var i = 1; i < linhas.length; i++) {
        if (linhas[i].getElementsByTagName("input")[0].checked) {
            if (i > 0) {
                tabela.insertBefore(linhas[i], linhas[i - 1]);
                break;
            }
        }
    }
}

function moverBaixo() {
    var tabela = document.getElementById("ucsCursadas").getElementsByTagName('tbody')[0];
    var linhas = tabela.rows;
    for (var i = 0; i < linhas.length - 1; i++) {
        if (linhas[i].getElementsByTagName("input")[0].checked) {
            if (i < linhas.length - 1) {
                tabela.insertBefore(linhas[i + 1], linhas[i]);
                break;
            }
        }
    }
}

function validarCPF(cpf) {
    
    cpf = cpf.replace(/[.-]/g, '');

    if (cpf.length !== 11) {
        document.getElementById('mensagemErro').textContent = 'CPF invalido. Deve conter 11 digitos.';
        return;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ) {
        document.getElementById('mensagemErro').textContent = 'CPF invalido.';
        return;
    }
    
    soma = 0;
    for (let i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ) {
        document.getElementById('mensagemErro').textContent = 'CPF invalido.';
        return;
    }

    document.getElementById('mensagemErro').textContent = 'CPF Correto';
}

function validarEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
        document.getElementById('mensagemErroEmail').textContent = 'Email invalido.';
    } else {
        document.getElementById('mensagemErroEmail').textContent = 'Email correto';
    }
}