// 功能 1：按钮点击改变网页状态
const myButton = document.getElementById("magicButton");
const myTitle = document.getElementById("main-title");

myButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "#dff9fb";
    myTitle.innerText = "Thanks for visiting my site! ✨";
    myButton.innerText = "Glad you are here!";
    myButton.style.backgroundColor = "#27ae60";
});

// 功能 2：为所有图片添加点击弹窗效果 (Unit 9 互动进阶)
const allImages = document.querySelectorAll('.image-card img');

// 使用循环为每一张图片绑定点击事件
allImages.forEach(function(img) {
    img.addEventListener("click", function() {
        // img.alt 会读取你在 HTML 中写在 alt="..." 里的文字
        alert("You clicked on: " + img.alt + "! It's a great picture.");
    });
});