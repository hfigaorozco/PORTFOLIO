const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");
const nav = document.querySelector("nav");
const techToggles = document.querySelectorAll(".tech-toggle");
const conferencePhotos = document.querySelectorAll('.conference-photo');

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

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

techToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const tags = toggle.nextElementSibling;
        toggle.classList.toggle("active");
        tags.classList.toggle("open");
    });
});

conferencePhotos.forEach(img => {
    const images = JSON.parse(img.dataset.images);
    let index = 0;
    let interval = null;
    const card = img.closest('.conference-card');

    card.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            index = (index + 1) % images.length;
            img.src = images[index];
        }, 1200);
    });

    card.addEventListener('mouseleave', () => {
        clearInterval(interval);
        index = 0;
        img.src = images[0];
    });
});