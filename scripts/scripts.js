// --- 1. "Say Hello" 魔法按钮交互 ---
const btn = document.getElementById("magicButton");
btn.addEventListener("click", () => {
    alert("Hello! I'm Herman. Thanks for checking out my work!");
    btn.style.backgroundColor = "#00b894"; // 变成好看的绿色
    btn.style.boxShadow = "0 15px 25px rgba(0, 184, 148, 0.4)";
    btn.innerText = "Thanks for visiting!";
});

// --- 2. 深色模式切换逻辑 (Extending Design) ---
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    // 切换 body 的 dark-mode 类名
    document.body.classList.toggle("dark-mode");
    
    // 更新按钮上的文字和图标
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});

// --- 3. 图片放大画廊 (Modal/Lightbox) 逻辑 ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-btn");

// 选取所有的卡片图片并给它们添加点击事件
document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", (e) => {
        // 让模态框显示出来
        modal.style.display = "block";
        // 把模态框里的图片来源替换成你刚才点击的图片的来源
        modalImg.src = e.target.src;
        // 把图片的 alt 属性作为底部的文字说明
        captionText.innerHTML = e.target.alt;
    });
});

// 点击右上角的 "X" 关闭模态框
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 点击图片以外的背景区域也能关闭模态框
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});