// --- 1. "Say Hello" Magic Button Interaction ---
const btn = document.getElementById("magicButton");
if (btn) {
    btn.addEventListener("click", () => {
        alert("Hello! I'm Herman. Thanks for exploring my digital world!");
        btn.style.backgroundColor = "#00b894";
        btn.style.boxShadow = "0 15px 25px rgba(0, 184, 148, 0.4)";
        btn.innerText = "Thanks for visiting!";
    });
}

// --- 2. Advanced 3-Way Theme Toggle Logic (100% PROTOCOL RESTRICTION FREE) ---
const themeToggle = document.getElementById("themeToggle");
const themes = ['light', 'dark', 'colorblind'];

// Safely get theme from the URL parameters instead of restricted localStorage
const urlParams = new URLSearchParams(window.location.search);
let currentTheme = urlParams.get('theme') || 'light';

function applyTheme(theme) {
    document.body.className = ''; // Reset all classes
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerText = "👁️ Colorblind Mode";
    } else if (theme === 'colorblind') {
        document.body.classList.add('colorblind-mode');
        if (themeToggle) themeToggle.innerText = "☀️ Light Mode";
    } else {
        if (themeToggle) themeToggle.innerText = "🌙 Dark Mode";
    }

    // Dynamically inject the theme into all navigation links so state passes between pages!
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        let baseHref = link.getAttribute('href').split('?')[0]; // Strip old params
        link.setAttribute('href', baseHref + '?theme=' + theme);
    });
}

// Immediately apply theme state on load
applyTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        if (currentTheme === 'light') currentTheme = 'dark';
        else if (currentTheme === 'dark') currentTheme = 'colorblind';
        else currentTheme = 'light';
        
        applyTheme(currentTheme);

        // Update the browser URL bar silently without reloading the page
        try {
            let newUrl = window.location.pathname + '?theme=' + currentTheme;
            window.history.replaceState(null, '', newUrl);
        } catch (error) {
            // Silently catch in extremely strict old browsers, the links will still work anyway
        }
    });
}

// --- 3. Image Modal (Lightbox) Logic ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

if (modal && modalImg && captionText && closeBtn) {
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
}

// --- 4. Background Music (BGM) Toggle Logic ---
const bgmMusic = document.getElementById("bgmMusic");
const bgmToggleBtn = document.getElementById("bgmToggleBtn");

if (bgmMusic && bgmToggleBtn) {
    bgmToggleBtn.addEventListener("click", () => {
        if (bgmMusic.paused) {
            bgmMusic.play(); 
            bgmToggleBtn.innerText = "🔊"; 
        } else {
            bgmMusic.pause(); 
            bgmToggleBtn.innerText = "🔇"; 
        }
    });
}