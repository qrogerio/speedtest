function cadastrarPessoa() {
    let nome = document.querySelector("#nome").value;
localStorage.setItem("nm", nome);
window.location.href = "bemvindo.html"
}
function cancelarCadastro(){
localStorage.removeItem("nm")
document.querySelector("p").innerHTML = `Incrição Cancelada😔`
}