// Toggle del sidebar en dispositivos móviles
        document.getElementById('toggleSidebar').addEventListener('click', function () {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.querySelector('.main-content');

            sidebar.classList.toggle('visible');
            mainContent.classList.toggle('shifted');
        });
