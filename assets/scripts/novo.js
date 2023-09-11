const nome = document.querySelector("#form_nome");
const tel = document.querySelector("#form_tel");
const email = document.querySelector("#form_email");

const gravar = document.querySelector("#btn_gravar");
const cancelar = document.querySelector("#btn_cancelar");

gravar.addEventListener("click", (evt) => {
    const dados = {
        "form_nome": form_nome.value,
        "form_tel": form_tel.value,
        "form_email": form_email.value
    }

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados)
    }

    const endpoint = "http://127.0.0.1:1880/addcontatos";
    fetch(endpoint, cabecalho)
    .then(res => {
        if(res.status == 200) {
            reset();
        } else {
            alert("Erro ao gravar novo contato.");
        }
    })
});

cancelar.addEventListener("click", (evt) => {
    reset();
});

const reset = () => {
    form_nome.value = "";
    form_tel.value = "";
    form_email.value = "";
    form_nome.focus();
}