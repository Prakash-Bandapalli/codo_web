document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.querySelector('main');

    let formVisible = false;

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        if (!formVisible) {
            loginForm.style.display = 'block'; 
            mainContent.style.display = 'none'; 
        } else {
            loginForm.style.display = 'none'; 
            mainContent.style.display = 'block'; 
        }

        formVisible = !formVisible;
    });
});

