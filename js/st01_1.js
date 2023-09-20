document.addEventListener("DOMContentLoaded", function () {

    escreverBemVindo();
});

function escreverBemVindo() {
    let nome = localStorage.getItem("nome")
    let resp = document.querySelector("p")
    let btnCancela = document.querySelector("#btnCancela")
    if (nome != null) {
        resp.innerHTML = `seja bem vindo ${nome}`
        btnCancela.style.display = "block"
    } else {
        resp.innerHTML = `😒 não tem nenhum usuário cadastrado!`
        btnCancela.style.display = "none"
    }

}