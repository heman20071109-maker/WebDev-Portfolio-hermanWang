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

// --- 2. 3-Way Theme Toggle Logic ---
const themeToggle = document.getElementById("themeToggle");
const themes = ['light', 'dark', 'colorblind'];

// Safely get theme from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
let currentTheme = urlParams.get('theme') || 'light';

function applyTheme(theme) {
    document.body.className = ''; 
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerText = "👁️ Colorblind Mode";
    } else if (theme === 'colorblind') {
        document.body.classList.add('colorblind-mode');
        if (themeToggle) themeToggle.innerText = "☀️ Light Mode";
    } else {
        if (themeToggle) themeToggle.innerText = "🌙 Dark Mode";
    }

    // Keep the theme state when clicking nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        let baseHref = link.getAttribute('href').split('?')[0]; 
        link.setAttribute('href', baseHref + '?theme=' + theme);
    });
}

applyTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        if (currentTheme === 'light') currentTheme = 'dark';
        else if (currentTheme === 'dark') currentTheme = 'colorblind';
        else currentTheme = 'light';
        
        applyTheme(currentTheme);

        try {
            let newUrl = window.location.pathname + '?theme=' + currentTheme;
            window.history.replaceState(null, '', newUrl);
        } catch (error) {}
    });
}

// --- 3. Image and Video Modal (Lightbox) Logic ---
// 这里的代码改成了简单易懂的 if/else 逻辑
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

if (modal && modalImg && modalVideo && captionText && closeBtn) {
    // Select both images and videos
    let mediaElements = document.querySelectorAll(".card img, .card video");
    
    for (let i = 0; i < mediaElements.length; i++) {
        mediaElements[i].addEventListener("click", function(e) {
            modal.style.display = "block";
            
            // Check if the clicked element is a video
            if (e.target.tagName === 'VIDEO') {
                modalImg.style.display = "none";
                modalVideo.style.display = "block";
                modalVideo.src = e.target.src;
                modalVideo.play();
                captionText.innerHTML = "Horizon Gameplay";
            } else {
                // If it is an image
                modalVideo.style.display = "none";
                modalVideo.pause();
                modalImg.style.display = "block";
                modalImg.src = e.target.src;
                captionText.innerHTML = e.target.alt;
            }
        });
    }

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalVideo.pause(); // Pause video when closing
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
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