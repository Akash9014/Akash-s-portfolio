window.addEventListener("load", () => {
    // Split nav text into letters
    document.querySelectorAll(".nav-text").forEach(el => {
        const chars = el.textContent.split("");
        el.innerHTML = chars.map(c => `<span class="char">${c}</span>`).join("");
    });

    // Animate nav text letters
    gsap.from(".char", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6
    });

    // Animate icons (slide in from right)
    gsap.from(".nav-icon", {
        x: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 0.8,
        delay: 0.5
    });
});
