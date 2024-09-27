const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Default GIF before clicking Yes (already added in HTML)
yesBtn.addEventListener("click", () => {
    // Change the text when "Yes" is clicked
    question.innerHTML = "I love you too! 😘";

    // Change the GIF to a new one
    gif.src = "https://media.tenor.com/bW1BRyLj9B8AAAAi/quby-pentol.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
