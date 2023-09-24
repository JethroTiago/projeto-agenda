const dados = document.querySelector("#dados");
const fundopopup = document.querySelector("#fundopopup");
const btn_gravar = document.querySelector("#btn_gravar");
const btn_cancelar = document.querySelector("#btn_cancelar");

const form_id = document.querySelector("#form_id");
const form_nome = document.querySelector("#form_nome");
const form_tel = document.querySelector("#form_tel");
const form_email = document.querySelector("#form_email");

btn_gravar.addEventListener("click", (evento) => {
    fundopopup.classList.add("ocultar");
    const endpoint = `http://127.0.0.1:1880/atualizarcontatos/${form_id.value}/${form_nome.value}/${form_tel.value}/${form_email.value}`
    fetch(endpoint)
    .then (res => {
        if (res.status == "200"){
            alert("Dados atualizados com sucesso!");
            preencherdvg();
        } else {
            alert("Erro ao atualizar informações.");
        }
    })
});

btn_cancelar.addEventListener("click", (evento) => {
    fundopopup.classList.add("ocultar");
});

const preencherdvg = () => {
    dados.innerHTML = "";
    const entpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
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

            const coluna5 = document.createElement("div");
            coluna5.setAttribute("class", "col c5 operacoes");
            const imgdelete = document.createElement("img");
            imgdelete.setAttribute("src", "delete.svg");
            imgdelete.setAttribute("class", "iconeop");
            imgdelete.addEventListener("click", (evento) => {
                //console.log(evento.target.parentNode.parentNode.firstChild.innerHTML); "Pega o ID da div"
                const id = evento.target.parentNode.parentNode.firstChild.innerHTML;
                deletarContatos(id);
            });
            const imgeditar = document.createElement("img");
            imgeditar.setAttribute("src", "edit.svg");
            imgeditar.setAttribute("class", "iconeop");
            imgeditar.addEventListener("click", (evento) => {
                fundopopup.classList.remove("ocultar");
                const dados = [...evento.target.parentNode.parentNode.childNodes];
                form_id.value = dados[0].innerHTML;
                form_nome.value = dados[1].innerHTML;
                form_tel.value = dados[2].innerHTML;
                form_email.value = dados[3].innerHTML;
            });
            
            coluna5.appendChild(imgdelete);
            coluna5.appendChild(imgeditar);
            linha.appendChild(coluna5);

            dados.appendChild(linha);
        })
    })
};

preencherdvg();

const deletarContatos = (id) => {
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
    .then (res => {
        if(res.status == 200) {
            //Rotina para remover do banco de dados
            preencherdvg();
        }
    })
};