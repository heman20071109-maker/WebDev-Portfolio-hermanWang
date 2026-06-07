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
        let href = link.getAttribute('href');
        if (href && !href.startsWith('#')) {
            let baseHref = href.split('?')[0]; 
            link.setAttribute('href', baseHref + '?theme=' + theme);
        }
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
// --- 5. Splash Screen & Cool Moving Lines Animation ---
const splashScreen = document.getElementById("splashScreen");
const canvas = document.getElementById("splashCanvas");

if (splashScreen && canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    // Create lines/particles
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3, // Velocity X
            vy: (Math.random() - 0.5) * 3, // Velocity Y
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function animateLines() {
        // Create a trailing effect by filling with low opacity black
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
            if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        requestAnimationFrame(animateLines);
    }
    
    animateLines();

    // Click to enter the portfolio
    splashScreen.addEventListener("click", () => {
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.visibility = "hidden";
            splashScreen.style.display = "none";
        }, 800); // Wait for transition to finish
    });

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// --- 6. Font Size Toggle Logic ---
const fontToggleBtn = document.getElementById("fontToggleBtn");
const fontSizes = ['Medium', 'Large', 'Small'];
let currentFontIndex = 0;

if (fontToggleBtn) {
    fontToggleBtn.addEventListener("click", () => {
        currentFontIndex = (currentFontIndex + 1) % fontSizes.length;
        let selectedSize = fontSizes[currentFontIndex];
        
        // Update Button Text
        fontToggleBtn.innerText = `A Font: ${selectedSize}`;
        
        // Update Body Class for CSS Scaling
        document.body.classList.remove('font-small', 'font-large');
        if (selectedSize === 'Small') {
            document.body.classList.add('font-small');
        } else if (selectedSize === 'Large') {
            document.body.classList.add('font-large');
        }
        // Medium is the default, so no class needed
    });
}

// --- 7. Mouse Follower Image Logic ---
const mouseFollower = document.getElementById("mouseFollower");

if (mouseFollower) {
    document.addEventListener("mousemove", (e) => {
        // Set the image position exactly at the cursor coordinates
        mouseFollower.style.left = e.clientX + "px";
        mouseFollower.style.top = e.clientY + "px";
    });
}