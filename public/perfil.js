window.onload = function() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
        return;
    }

    fetch('/api/usuarioPerfil', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('userName').textContent = `Nombre: ${data.nombre}`;
        document.getElementById('userRole').textContent = `Rol: ${data.roleUser}`;
        document.getElementById('welcomeMessage').textContent = `Bienvenido a Farmacia Luisito, ${data.nombre}!`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
