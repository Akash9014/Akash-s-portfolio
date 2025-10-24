// 1.nav Animation
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
//2.about page animation
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Split each character into a span
  const texts = document.querySelectorAll(".about h1, .about p");

  texts.forEach(el => {
    el.innerHTML = el.textContent.split("").map(char => {
      if(char === " ") return " "; // keep spaces
      return `<span class="char">${char}</span>`;
    }).join("");
  });

  // 2️⃣ Animate characters
  const chars = document.querySelectorAll(".about .char");

  gsap.from(chars, {
    x: 100,        // start 100px to the right
    opacity: 0.8,    // start invisible
    duration: .5,
    ease: "power4.out",
    stagger: 0.01  // stagger each char
    // no "repeat" or "yoyo", so it stays in place
  });
});

//3.contact page animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Flip, Draggable);

  const fullSize = document.querySelector(".full-size"),
        thumbnail = document.querySelector(".thumbnail");

  // Check if elements exist
  if (!fullSize || !thumbnail) return;

  // Make the thumbnail draggable
  Draggable.create(".initial", { bounds: "body" });

  // Click to flip
  document.addEventListener("click", () => {
    const state = Flip.getState(".thumbnail, .full-size");

    fullSize.classList.toggle("active");
    thumbnail.classList.toggle("active");

    Flip.from(state, {
      duration: 0.6,
      fade: true,
      absolute: true,
      toggleClass: "flipping",
      ease: "power1.inOut"
    });
  });

  // EmailJS setup
  emailjs.init("YOUR_PUBLIC_KEY"); // replace with your key

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
          alert("Message sent!");
          // flip back to thumbnail after sending
          const state = Flip.getState(".thumbnail, .full-size");
          fullSize.classList.remove("active");
          thumbnail.classList.remove("active");
          Flip.from(state, { duration: 0.6, fade: true, absolute: true, ease: "power1.inOut" });
          contactForm.reset();
        }, (err) => alert("Error: " + err.text));
    });
  }
});
