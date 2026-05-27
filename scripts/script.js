// --- 1. "Say Hello" Magic Button Interaction ---
const btn = document.getElementById("magicButton");
btn.addEventListener("click", () => {
    alert("Hello! I'm Herman. Thanks for checking out my work!");
    btn.style.backgroundColor = "#00b894";
    btn.style.boxShadow = "0 15px 25px rgba(0, 184, 148, 0.4)";
    btn.innerText = "Thanks for visiting!";
});

// --- 2. Dark Mode Toggle Logic ---
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});

// --- 3. Image Modal (Lightbox) Logic ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", (e) => {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// --- 4. Background Music (BGM) Toggle Logic ---
const bgmMusic = document.getElementById("bgmMusic");
const bgmToggleBtn = document.getElementById("bgmToggleBtn");

bgmToggleBtn.addEventListener("click", () => {
    if (bgmMusic.paused) {
        bgmMusic.play(); 
        bgmToggleBtn.innerText = "🔊"; 
    } else {
        bgmMusic.pause(); 
        bgmToggleBtn.innerText = "🔇"; 
    }
});