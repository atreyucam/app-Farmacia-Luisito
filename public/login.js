document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const emailUser = document.getElementById('email').value;
    const passwordUser = document.getElementById('password').value;

    try {
        const response = await fetch('/api/loginUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailUser, passwordUser })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            document.getElementById('message').textContent = 'Login exitoso!';
            // Aquí podrías redirigir al usuario o hacer algo más
            localStorage.setItem('token', data.token);
            window.location.href = '/perfil.html';
        } else {
            document.getElementById('message').textContent = 'Error en el login.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
