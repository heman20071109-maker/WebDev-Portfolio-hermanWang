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

// --- 2. Advanced 3-Way Theme Toggle Logic ---
const themeToggle = document.getElementById("themeToggle");
const themes = ['light', 'dark', 'colorblind'];

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

// --- 3. Advanced Media Modal (Lightbox) Logic (升级版：支持图片与视频) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

if (modal && modalImg && modalVideo && captionText && closeBtn) {
    // 监听所有卡片中的图片和视频
    document.querySelectorAll(".card img, .card video").forEach(media => {
        media.addEventListener("click", (e) => {
            modal.style.display = "block";
            
            if (e.target.tagName.toLowerCase() === 'video') {
                // 如果点击的是视频
                modalImg.style.display = "none";
                modalVideo.style.display = "block";
                modalVideo.src = e.target.src;
                modalVideo.play();
                captionText.innerHTML = e.target.getAttribute("aria-label") || "Video Media";
            } else {
                // 如果点击的是图片
                modalVideo.style.display = "none";
                modalVideo.pause();
                modalImg.style.display = "block";
                modalImg.src = e.target.src;
                captionText.innerHTML = e.target.alt;
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalVideo.pause(); // 关闭时暂停视频
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalVideo.pause(); // 点击背景关闭时暂停视频
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

// --- 5. Intersection Observer API (拔高点：实现滚动渐现高级动画) ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 动画只触发一次，优化性能
        }
    });
}, observerOptions);

// 动态为 section 和 card 添加初始隐藏类
document.querySelectorAll('section, .card').forEach(el => {
    el.classList.add('hidden-fade');
    observer.observe(el);
});