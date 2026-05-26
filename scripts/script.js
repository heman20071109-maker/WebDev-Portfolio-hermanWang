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
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");
    
    // Update button text and icon
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

// Select all card images and add click events
document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", (e) => {
        // Show the modal
        modal.style.display = "block";
        // Update modal image source to match the clicked image
        modalImg.src = e.target.src;
        // Use the image's alt attribute as the caption
        captionText.innerHTML = e.target.alt;
    });
});

// Close the modal when clicking the "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// --- 4. Background Music (BGM) Toggle Logic ---
const bgmMusic = document.getElementById("bgmMusic");
const bgmToggleBtn = document.getElementById("bgmToggleBtn");

bgmToggleBtn.addEventListener("click", () => {
    // Check if the music is currently paused
    if (bgmMusic.paused) {
        bgmMusic.play(); // Play the music
        bgmToggleBtn.innerText = "🔊"; // Change icon to speaker on
    } else {
        bgmMusic.pause(); // Pause the music
        bgmToggleBtn.innerText = "🔇"; // Change icon to speaker off
    }
});