const analisar = document.querySelector("#btn_pesquisa");
const textoDePesquisa = document.querySelector("#txt_pesquisa");

analisar.addEventListener("click", (evt) => {
    if (textoDePesquisa.value == "") {
        alert("Digite algo no campo para pesquisar.");
        textoDePesquisa.focus();
        return;
    }
    console.log(document.getElementsByName("pesquisa").value)
});