document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var togglePasswordButton = document.getElementById('togglePassword');
    var togglePasswordIcon = togglePasswordButton.querySelector('i');

    togglePasswordButton.setAttribute('aria-label', 'Mostrar/Ocultar contraseña');

    togglePasswordButton.addEventListener('click', function() {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
            togglePasswordButton.classList.remove('bg-danger');
            togglePasswordButton.classList.add('bg-success');
            passwordInput.classList.remove('password-hidden');
            passwordInput.classList.add('password-visible');
        } else {
            passwordInput.setAttribute('type', 'password');
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
            togglePasswordButton.classList.remove('bg-success');
            togglePasswordButton.classList.add('bg-danger');
            passwordInput.classList.remove('password-visible');
            passwordInput.classList.add('password-hidden');
        }
    });

    togglePasswordButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            togglePasswordButton.click();
        }
    });
});