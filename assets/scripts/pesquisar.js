const analisar = document.querySelector("#btn_pesquisa");
const textoDePesquisa = document.querySelector("#txt_pesquisa");

analisar.addEventListener("click", (evt) => {
    const valorPesquisa = textoDePesquisa.value
    if (valorPesquisa == "") {
        alert("Digite algo no campo para pesquisar.");
        textoDePesquisa.focus();
        return;
    }
    const pesquisa = document.querySelector("input[name=pesquisa]:checked").value;
    let entpoint = `http://127.0.0.1:1880/pesquisarcontatos/${pesquisa}/${valorPesquisa}`;
    fetch(entpoint)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
});