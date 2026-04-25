let login = false;

function cadastro() {
    let nome = document.getElementById('ipt_nome').value;
    let email = document.getElementById('ipt_email').value;
    let senha = document.getElementById('ipt_senha').value;
    let confirmarSenha = document.getElementById('ipt_confirmar').value;

    if (nome == '' || email == '' || senha == '' || confirmarSenha == '') {
        alert('⚠️ Complete todos os campos obrigatórios.');
    } else if (email.indexOf('@') < 0 || email.indexOf('.com') < 0) {
        alert('Insira um e-mail válido (deve conter @ e .com).');
    } else if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
    } else if (senha != confirmarSenha) {
        alert('❌ As senhas não coincidem!');
    } else {
        alert('✅ Cadastro realizado com sucesso!');
        login = true;
    }

    if (login) {
        window.location.href = "login.html";
    }
}