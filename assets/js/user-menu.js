// Agregar al archivo dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Manejar el toggle del menú de usuario
    const userProfile = document.querySelector('.user-profile');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Cerrar el menú cuando se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!userProfile.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            userProfile.setAttribute('aria-expanded', 'false');
        }
    });

    // Manejar el botón de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí puedes agregar tu lógica de logout
            console.log('Logout clicked');
        });
    }
});