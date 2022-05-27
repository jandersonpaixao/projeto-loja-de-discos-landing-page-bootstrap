let nome = window.document.getElementById('nome');

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value.match(regex)) {
    email.style.borderBottom = '2px solid var(--primary-color)';
    txtEmail.innerHTML = 'Email válido 👌';
    txtEmail.style.color = 'var(--primary-color)';
    emailOk = true;
  } else {
    email.style.borderBottom = '2px solid red';
    txtEmail.innerHTML = 'Email inválido';
    txtEmail.style.color = 'red';
    emailOk = false
    
  }
}
function assuntoDigitado() {
    let txtAssunto = document.querySelector('#txtAssunto');
  
    if (assunto.value.length <= 140) {
      assunto.style.borderBottom = '2px solid var(--primary-color)';
      txtAssunto.innerHTML = 'Assunto válido, pode dale';
      txtAssunto.style.color = 'green';
      assuntoOk = true;
    } else {
      assunto.style.borderBottom = '2px solid red';
      txtAssunto.innerHTML = 'Assunto inválido, o texto deve de 1 a 140 caracteres';
      txtAssunto.style.color = 'red';
      assuntoOk = false;
    }
  }

  function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha o formulário corretamente antes de enviar...');
    }
  }