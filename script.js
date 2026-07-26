// ===========================
// HIDDIFY_plas
// ===========================

// وضعیت سرورها
document.getElementById("statusBox").innerText = CONFIG.status;

// لینک دکمه‌ها
document.getElementById("configButton").href = CONFIG.telegram;
document.getElementById("telegramBtn").href = CONFIG.telegram;
document.getElementById("supportBtn").href = CONFIG.support;
document.getElementById("tutorialBtn").href = CONFIG.tutorial;

// محل نمایش برنامه‌ها
const container = document.getElementById("appContainer");

// ساخت دسته‌بندی‌ها
CONFIG.categories.forEach(category => {

    const section = document.createElement("section");
    section.className = "category";

    const title = document.createElement("h2");
    title.innerHTML = category.title;

    section.appendChild(title);

    // ساخت کارت هر برنامه
    category.apps.forEach(app => {

        const card = document.createElement("div");
        card.className = "card";

        const left = document.createElement("div");
        left.className = "appInfo";

        const icon = document.createElement("span");
        icon.className = "icon";
        icon.innerHTML = app.icon;

        const name = document.createElement("span");
        name.className = "name";
        name.innerText = app.name;

        left.appendChild(icon);
        left.appendChild(name);

        const button = document.createElement("a");
        button.className = "download";
        button.innerText = "دانلود";

        button.href = app.link;
        button.target = "_blank";

        card.appendChild(left);
        card.appendChild(button);

        section.appendChild(card);

    });

    container.appendChild(section);

});

// اگر لینک وارد نشده باشد
document.querySelectorAll(".download").forEach(btn => {

    btn.addEventListener("click", function (e) {

        if (this.getAttribute("href") === "#") {

            e.preventDefault();

            alert("لینک دانلود هنوز اضافه نشده است.");

        }

    });

});

// افکت کوچک کلیک روی دکمه‌ها
document.querySelectorAll("a").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 120);

    });

});

// سال فوتر
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

footer.innerHTML = "© " + year + " HIDDIFY_plas";


// ==========================================
// انیمیشن پس‌زمینه ستاره‌های زنده (Live Starry Sky)
// ==========================================
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const stars = [];
    const numStars = 130;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005,
            factor: 1
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => {
            star.alpha += star.speed * star.factor;
            if (star.alpha >= 1) {
                star.alpha = 1;
                star.factor = -1;
            } else if (star.alpha <= 0.12) {
                star.alpha = 0.12;
                star.factor = 1;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.shadowBlur = star.radius * 3;
            ctx.shadowColor = '#ffffff';
            ctx.fill();
        });
        requestAnimationFrame(drawStars);
    }

    drawStars();
}
