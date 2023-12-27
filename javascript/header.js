document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.getElementById('menu-button');
  
    menuButton.addEventListener('click', function () {
      if (sidebar.classList.contains('open-menu')) {
        sidebar.classList.remove('open-menu');
      } else {
        sidebar.classList.add('open-menu');
      }
    });
  });
  