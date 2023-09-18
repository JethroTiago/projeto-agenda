const btn_pesquisa = document.querySelector("#btn_pesquisa");
const txt_pesquisa = document.querySelector("#txt_pesquisa");
const dados = document.querySelector("#dados");

btn_pesquisa.addEventListener("click", (evt) => {
    const valorPesquisa = txt_pesquisa.value
    if (valorPesquisa == "") {
        alert("Digite algo no campo para pesquisar.");
        txt_pesquisa.focus();
        return;
    }
    const pesquisa = document.querySelector("input[name=pesquisa]:checked").value;
    const entpoint = `http://127.0.0.1:1880/pesquisarcontatos/${pesquisa}/${valorPesquisa}`;
    fetch(entpoint)
    .then(res => res.json())
    .then(res => {
        dados.innerHTML = "";
        res.forEach((elemento) => {
            const linha = document.createElement("div");
            linha.setAttribute("class", "dados_linhas");

            const coluna1 = document.createElement("div");
            coluna1.setAttribute("class", "col c1");
            coluna1.innerHTML = elemento.n_contato_contato;
            linha.appendChild(coluna1);

            const coluna2 = document.createElement("div");
            coluna2.setAttribute("class", "col c2");
            coluna2.innerHTML = elemento.s_nome_contato;
            linha.appendChild(coluna2);

            const coluna3 = document.createElement("div");
            coluna3.setAttribute("class", "col c3");
            coluna3.innerHTML = elemento.s_telefone_contato;
            linha.appendChild(coluna3);

            const coluna4 = document.createElement("div");
            coluna4.setAttribute("class", "col c4");
            coluna4.innerHTML = elemento.s_email_contato;
            linha.appendChild(coluna4);

            dados.appendChild(linha);
        })
    })
});