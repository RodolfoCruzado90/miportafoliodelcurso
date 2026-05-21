// ================= SCROLL ANIMATION =================
const elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let el of elements) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

// Ejecutar al cargar
revealOnScroll();


// ================= SMOOTH NAV (EXTRA MEJORA) =================
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


// ================= ACTIVE MENU HIGHLIGHT =================
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});