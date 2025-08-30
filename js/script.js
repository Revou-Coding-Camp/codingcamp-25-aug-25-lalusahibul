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
let nama = 'Lalu Sahibul purwa';
let welcome = document.getElementById("nama");
welcome.textContent = "Lalu Sahibul Purwa";
// Form Validation & Show Result
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const namaInput = document.getElementById("namaInput").value;
    const tglLahir = document.getElementById("tglLahir").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    document.getElementById("time").textContent = new Date().toLocaleString();
    document.getElementById("resNama").textContent = namaInput;
    document.getElementById("resTgl").textContent = tglLahir;
    document.getElementById("resGender").textContent = gender;
    document.getElementById("resPesan").textContent = pesan;
});

document.getElementById("year").textContent = new Date().getFullYear();
let copyright = document.getElementById("copyright");
copyright.textContent = nama;