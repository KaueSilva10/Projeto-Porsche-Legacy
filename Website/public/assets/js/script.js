function cadastrar() {
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmarSenha = ipt_confirmar.value;

    if (nomeVar == '' || emailVar == '' || senhaVar == '' || confirmarSenha == '') {
        alert('⚠️ Complete todos os campos obrigatórios.');
    } else if (emailVar.indexOf('@') < 0) {
        alert('Insira um e-mail válido.');
    } else if (senhaVar.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
    } else if (senhaVar != confirmarSenha) {
        alert('❌ As senhas não coincidem!');
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                alert("✅ Cadastro realizado com sucesso!");
                window.location = "login.html";
            } else {
                alert("Erro ao cadastrar! Verifique se o e-mail já está em uso.");
            }
        }).catch(function (erro) {
            console.log("Erro na requisição: " + erro);
        });
    }
}