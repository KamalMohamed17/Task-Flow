document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
    ".intro, .features, .customer-card, .plans"
    );

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
        });
    },
    { threshold: 0.2 }
    );

    sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
    });
});

document.querySelectorAll(".button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
    const targetId = btn.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        });
    }
    });
});

document.querySelectorAll(".plans").forEach((plan) => {
    plan.addEventListener("mouseenter", () => {
    plan.style.transform = "scale(1.05)";
    plan.style.transition = "transform 0.3s ease";
    });
    plan.addEventListener("mouseleave", () => {
    plan.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const text = "Make your tasks flow";
    const target = document.querySelector(".intro h2");
    target.textContent = "";
    let i = 0;

function typeWriter() {
    if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
    setTimeout(typeWriter, 100);
    }
}

typeWriter();
});
