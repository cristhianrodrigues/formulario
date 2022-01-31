const botao = document.getElementById('botao')

botao.addEventListener('click', (event) => {
    event.preventDefault()

    const formulario = document.getElementById('formulario')
    const nome = document.getElementById('nome')
    const erroImgNome = document.getElementById('img-erroNome')

    const sobrenome = document.getElementById('sobrenome')
    const erroImgSobrenome = document.getElementById('img-erroSobrenome')

    const email = document.getElementById('email')
    const erroImgEmail = document.getElementById('img-erroEmail')

    const senha = document.getElementById('senha')
    const erroImgSenha = document.getElementById('img-erroSenha')
    
    if (nome.value == '') {
        erroImgNome.style.visibility='visible';
        erroImgNome.style.position='absolute';
        erroImgNome.style.marginTop='-18px';
        erroImgNome.style.right='14%';
        nome.classList.add("erroNoInputNome");
        nome.Placeholder = '';
        document.getElementById("MensagemDeErroNome").textContent="é necessário inserir um nome";
        document.getElementById("MensagemDeErroNome").style.visibility='visible';

    }else {
        erroImgNome.style.visibility='hidden';
        erroImgNome.style.position='absolute';
        nome.classList.remove("erroNoInputNome");
        document.getElementById("MensagemDeErroNome").style.visibility='hidden';

    } 

    if (sobrenome.value == '') {
        erroImgSobrenome.style.visibility='visible';
        sobrenome.classList.add("erroNoInput");
        document.getElementById("MensagemDeErroSobrenome").textContent="é necessário inserir um sobrenome";
        document.getElementById("MensagemDeErroSobrenome").style.visibility='visible';
    }else {
        erroImgSobrenome.style.visibility='hidden';
        sobrenome.classList.remove("erroNoInput");
        document.getElementById("MensagemDeErroSobrenome").style.visibility='hidden';
    }
    if (email.value == '') {
        erroImgEmail.style.visibility='visible';
        email.classList.add("erroNoInput");
        email.classList.add("emailPlaceholder");
        document.getElementById("MensagemDeErroEmail").textContent="é necessário inserir um email de verdade";
        document.getElementById("MensagemDeErroEmail").style.visibility='visible';
        document.getElementsByName('email')[0].placeholder='email@exemplo.com';

    }else {
        erroImgEmail.style.visibility='hidden';
        email.classList.remove("erroNoInput");
        email.classList.remove("emailPlaceholder");
        document.getElementById("MensagemDeErroEmail").style.visibility='hidden'
    }

    if (senha.value == '') {
        erroImgSenha.style.visibility='visible';
        senha.classList.add("erroNoInput");
        document.getElementById("MensagemDeErroSenha").textContent="é necessário inserir um senha";
        document.getElementById("MensagemDeErroSenha").style.visibility='visible';
    }else {
        erroImgSenha.style.visibility='hidden';
        senha.classList.remove("erroNoInput");
        document.getElementById("MensagemDeErroSenha").style.visibility='hidden';
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        erroImgEmail.style.visibility='visible';
        email.classList.add("erroNoInput");
        email.classList.add("emailPlaceholder");
        document.getElementById("MensagemDeErroEmail").textContent="é necessário inserir um email de verdade";
        document.getElementById("MensagemDeErroEmail").style.visibility='visible';
        document.getElementsByName('email')[0].placeholder='email@exemplo.com';
    }else {
        erroImgEmail.style.visibility='hidden';
        email.classList.remove("erroNoInput");
        document.getElementById("MensagemDeErroEmail").style.visibility='hidden';
    }

})