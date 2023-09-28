const cabecalho = document.querySelector("#cabecalho");

const menu = document.querySelector("#home");

const btn_home = document.querySelector("#btn_home");
const btn_sobre = document.querySelector("#btn_sobre");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_filtrar = document.querySelector("#btn_filtrar");
const btn_novo = document.querySelector("#btn_novo");
const btn_gestao = document.querySelector("#btn_gestao");

btn_home.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/home.html");
});

btn_sobre.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/sobre.html");
});

btn_novo.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/novo.html");
});

btn_pesquisar.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/pesquisar.html");
});

btn_filtrar.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/filtrar.html");
});

btn_gestao.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/gestao.html");
});

const abrirAba = (elemento, url) => {
    const abas = [...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada");
    })
    elemento.classList.add("abaSelecionada");
    window.open(url, "if_principal");
}

const principal = document.querySelector("#principal");

console.log("Projeto Agenda - Desenvolvido por Jethro");