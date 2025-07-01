// Em um novo arquivo, como /Cadastro/cadastro.js

document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os valores dos campos do formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Adicione aqui a captura dos outros campos como primeiro e segundo nome, se necessário.

    try {
        // Faz a requisição para o endpoint de registro do backend
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            // Se a resposta não for OK, mostra a mensagem de erro do backend
            alert(data.msg); // Ex: "Usuário já cadastrado com este e-mail."
            return;
        }

        // Se o registro for bem-sucedido, armazena o token e redireciona
        alert('Cadastro realizado com sucesso! Faça o login.');
        window.location.href = 'http://127.0.0.1:3000/LoginUsuario/login.html'; // Redireciona para a página de login

    } catch (error) {
        console.error('Erro ao registrar:', error);
        alert('Ocorreu um erro. Tente novamente.');
    }
});