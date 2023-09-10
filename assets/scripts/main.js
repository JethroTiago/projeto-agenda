const cabecalho = document.querySelector("#cabecalho");

const menu = document.querySelector("#home");

const home = document.querySelector("#btn_home");
const sobre = document.querySelector("#btn_sobre");
const pesquisar = document.querySelector("#btn_pesquisar");
const novo = document.querySelector("#btn_novo");
const gestao = document.querySelector("#btn_gestao");

btn_home.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/home.html");
});

btn_sobre.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/sobre.html");
});

btn_pesquisar.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/pesquisar.html");
});

btn_novo.addEventListener("click", (evt) => {
    abrirAba(evt.target, "./assets/pages/novo.html");
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