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
// انیمیشن پس‌زمینه زنده (شب و روز)
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

    let isDay = false;

    // متغیرهای ستاره‌ها
    const stars = [];
    for (let i = 0; i < 130; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005,
            factor: 1
        });
    }

    // متغیرهای ابرها برای روز
    const clouds = [
        { x: width * 0.1, y: 80, scale: 0.8, speed: 0.3 },
        { x: width * 0.5, y: 140, scale: 1.2, speed: 0.2 },
        { x: width * 0.8, y: 60, scale: 0.9, speed: 0.25 }
    ];

    function drawCloud(cx, cy, scale) {
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.beginPath();
        ctx.arc(cx, cy, 25 * scale, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(cx + 25 * scale, cy - 20 * scale, 25 * scale, Math.PI * 1, Math.PI * 1.85);
        ctx.arc(cx + 60 * scale, cy - 15 * scale, 20 * scale, Math.PI * 1.37, Math.PI * 1.91);
        ctx.arc(cx + 70 * scale, cy, 20 * scale, Math.PI * 1.5, Math.PI * 0.5);
        ctx.moveTo(cx + 70 * scale, cy + 20 * scale);
        ctx.lineTo(cx, cy + 20 * scale);
        ctx.fill();
        ctx.restore();
    }

    function renderSky() {
        ctx.clearRect(0, 0, width, height);

        if (!isDay) {
            // آسمان شب
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
        } else {
            // خورشید درخشان
            const sunX = width - 80;
            const sunY = 90;

            ctx.save();
            const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 70);
            sunGlow.addColorStop(0, 'rgba(255, 223, 100, 1)');
            sunGlow.addColorStop(0.4, 'rgba(255, 180, 50, 0.6)');
            sunGlow.addColorStop(1, 'rgba(255, 180, 50, 0)');
            ctx.fillStyle = sunGlow;
            ctx.beginPath();
            ctx.arc(sunX, sunY, 70, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffea79';
            ctx.beginPath();
            ctx.arc(sunX, sunY, 28, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // حرکت ابرها
            clouds.forEach(cloud => {
                cloud.x += cloud.speed;
                if (cloud.x - 100 > width) {
                    cloud.x = -100;
                }
                drawCloud(cloud.x, cloud.y, cloud.scale);
            });
        }

        requestAnimationFrame(renderSky);
    }

    renderSky();

    // سوئیچ تم
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDay = !isDay;
            document.body.classList.toggle('day-mode', isDay);

            if (isDay) {
                themeBtn.innerText = '☀️';
                canvas.style.background = 'linear-gradient(to bottom, #38bdf8, #818cf8, #bae6fd)';
            } else {
                themeBtn.innerText = '🌙';
                canvas.style.background = 'radial-gradient(ellipse at bottom, #111a2e 0%, #050811 100%)';
            }
        });
    }
}
