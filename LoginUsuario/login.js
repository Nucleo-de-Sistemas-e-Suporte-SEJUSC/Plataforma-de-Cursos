// login.js

document.getElementById('login-form').addEventListener('submit', async function(event) {
    // Impede que o formulário recarregue a página
    event.preventDefault();

    // Pega os valores dos campos com os IDs que adicionamos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Envia os dados para o seu backend
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        // Se o backend retornar um erro (ex: senha incorreta), mostra um alerta
        if (!response.ok) {
            alert(data.msg || "Falha no login. Verifique suas credenciais.");
            return;
        }

        // Se o login for bem-sucedido, salva o token no navegador
        localStorage.setItem('authToken', data.token);

        // Redireciona para a página de boas-vindas
        window.location.href = 'http://127.0.0.1:3000/BemVindoUsuario/usuario.html';

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro na comunicação com o servidor. Tente novamente.');
    }
});