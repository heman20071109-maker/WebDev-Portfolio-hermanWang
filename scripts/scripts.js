
const btn = document.getElementById("magicButton");
btn.addEventListener("click", () => {
    alert("Hello! I'm Herman. Thanks for checking out my work!");
    btn.style.backgroundColor = "#00cec9";
    btn.innerText = "Welcome!";
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        console.log(`User is interested in: ${title}`);
    });
});