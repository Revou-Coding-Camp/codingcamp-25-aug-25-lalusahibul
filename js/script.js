document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navbar-right');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('open');
        });
    } else {
        console.error("Elemen 'burger-menu' atau 'navbar-right' tidak ditemukan.");
    }
});

let nama = document.getElementById("nama");
nama.textContent = "Lalu Sahibul Purwa";