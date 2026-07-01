const words = [
    "Frontend Developer",
    "Web Developer",
    "UI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){
    const currentWord = words[wordIndex];
    if(!isDeleting){
        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if(charIndex > currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    }else{
        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if(charIndex < 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ================= EmailJS =================

emailjs.init("JW9KCuXEo3QTrHt1j");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_88x6j3o",
        "template_5qdb0zh",
        this
    )

    .then(() => {

        alert("Message Sent Successfully! ✅");

        contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        alert("Failed to send message ❌");

    });

});