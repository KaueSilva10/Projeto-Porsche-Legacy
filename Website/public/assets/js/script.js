function validarSessao() {
    let liUsuario = document.getElementById("li_usuario");
    let nome = sessionStorage.NOME_USUARIO;

    if (nome != undefined) {
        liUsuario.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="color: white;">Olá, <b>${nome}</b></span>
                <button onclick="limparSessao()" class="login" style="background-color: #e30613;">Sair</button>
            </div>
        `;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}

window.onload = validarSessao;