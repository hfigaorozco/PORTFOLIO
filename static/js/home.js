const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");
const nav = document.querySelector("nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Mostrar borde al bajar
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

    // Ocultar al bajar y mostrar al subir
    if (currentScroll > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
});

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.innerHTML = "≡";
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "≡";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});