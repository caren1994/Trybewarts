const button1 = document.getElementById('button1');

function botao(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
} button1.addEventListener('click', botao);

const agreementCheck=document.getElementById('agreement');

function enviar(){
const button2=document.getElementById('submit-btn');
if(agreementCheck.checked){
    button2.disabled=false;
    
}
}agreementCheck.addEventListener('click',enviar);