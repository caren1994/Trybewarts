const button1 = document.getElementById('button1');


button1.addEventListener('click', login)
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === "tryber@teste.com" && senha === "123456") {
        alert('Olá, Tryber!');

    } else {
        alert('Email ou senha inválidos.');
    }

}