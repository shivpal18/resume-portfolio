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