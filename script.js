// ===========================
// HIDDIFY_plas - script.js
// ===========================

// آیکون‌های SVG سیستم‌عامل‌ها
const OS_ICONS = {
    android: `<span class="os-icon"><svg viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83 1.5 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg></span>`,
    windows: `<span class="os-icon"><svg viewBox="0 0 24 24"><path d="M3 5.5L10 4.5V11.5H3V5.5ZM3 12.5H10V19.5L3 18.5V12.5ZM11 4.3L21 3V11.5H11V4.3ZM11 12.5H21V21L11 19.7V12.5Z"/></svg></span>`,
    apple: `<span class="os-icon"><svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.67-.82 1.13-1.96.99-3.09-1 .04-2.22.67-2.92 1.49-.62.72-1.17 1.88-1.02 2.99 1.12.09 2.28-.57 2.95-1.39z"/></svg></span>`,
    tv: `<span class="os-icon"><svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg></span>`,
    linux: `<span class="os-icon"><svg viewBox="0 0 24 24"><path d="M12.38 2.01c-3.14 0-5.69 2.55-5.69 5.69 0 1.25.4 2.4 1.08 3.34-.14.28-.27.57-.38.87C6.67 13.88 6 16.03 6 18.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5 0-2.47-.67-4.62-1.39-6.59-.11-.3-.24-.59-.38-.87.68-.94 1.08-2.09 1.08-3.34 0-3.14-2.55-5.69-5.69-5.69zm-2.38 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4.76 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg></span>`
};

document.getElementById("statusBox").innerText = CONFIG.status;
document.getElementById("configButton").href = CONFIG.telegram;
document.getElementById("telegramBtn").href = CONFIG.telegram;
document.getElementById("supportBtn").href = CONFIG.support;
document.getElementById("tutorialBtn").href = CONFIG.tutorial;

const container = document.getElementById("appContainer");

CONFIG.categories.forEach((category, index) => {
    const section = document.createElement("section");
    section.className = "category";

    const title = document.createElement("h2");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = category.title;
    const cleanTitleText = tempDiv.textContent || tempDiv.innerText || "";

    let osIcon = "";
    const lowerText = cleanTitleText.toLowerCase();

    if (lowerText.includes("tv")) osIcon = OS_ICONS.tv;
    else if (lowerText.includes("win")) osIcon = OS_ICONS.windows;
    else if (lowerText.includes("ios") || lowerText.includes("iphone") || lowerText.includes("mac") || lowerText.includes("apple")) osIcon = OS_ICONS.apple;
    else if (lowerText.includes("linux")) osIcon = OS_ICONS.linux;
    else if (lowerText.includes("android") || index === 0) osIcon = OS_ICONS.android;

    // آیکون و متن با ترتیب صحیح جهت راست‌چین شدن
    title.innerHTML = `${osIcon} <span>${cleanTitleText}</span>`;
    section.appendChild(title);

    category.apps.forEach(app => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="appInfo">
                <span class="icon">${app.icon}</span>
                <span class="name">${app.name}</span>
            </div>
            <a class="download" href="${app.link}" target="_blank">دانلود</a>
        `;
        section.appendChild(card);
    });

    container.appendChild(section);
});

// انیمیشن دکمه‌ها
document.querySelectorAll(".download").forEach(btn => {
    btn.addEventListener("click", function (e) {
        if (this.getAttribute("href") === "#") {
            e.preventDefault();
            alert("لینک دانلود هنوز اضافه نشده است.");
        }
    });
});

document.querySelectorAll("a").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(.95)";
        setTimeout(() => btn.style.transform = "scale(1)", 120);
    });
});

const year = new Date().getFullYear();
document.querySelector("footer p").innerHTML = "© " + year + " HIDDIFY_plas";

// ==========================================
// انیمیشن پس‌زمینه (شب: ستاره / روز: خورشید و ابر)
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

    // لیست ستاره‌ها برای شب
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

    // لیست ابرهای متحرک برای روز
    const clouds = [
        { x: width * 0.1, y: 100, scale: 0.8, speed: 0.4 },
        { x: width * 0.6, y: 160, scale: 1.1, speed: 0.25 },
        { x: width * 0.3, y: 240, scale: 0.6, speed: 0.5 }
    ];

    // رسم ابر
    function drawCloud(cx, cy, scale) {
        ctx.save();
        ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        ctx.beginPath();
        ctx.arc(cx, cy, 30 * scale, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(cx + 35 * scale, cy - 20 * scale, 35 * scale, Math.PI * 1.0, Math.PI * 1.85);
        ctx.arc(cx + 75 * scale, cy - 15 * scale, 28 * scale, Math.PI * 1.37, Math.PI * 1.91);
        ctx.arc(cx + 100 * scale, cy, 30 * scale, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // رسم خورشید
    function drawSun() {
        const sunX = width - 80;
        const sunY = 90;
        
        ctx.save();
        // هاله نور خورشید
        const glow = ctx.createRadialGradient(sunX, sunY, 20, sunX, sunY, 70);
        glow.addColorStop(0, "rgba(255, 220, 100, 0.8)");
        glow.addColorStop(1, "rgba(255, 220, 100, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, 70, 0, Math.PI * 2);
        ctx.fill();

        // مرکز خورشید
        ctx.fillStyle = "#ffea00";
        ctx.beginPath();
        ctx.arc(sunX, sunY, 32, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function renderSky() {
        ctx.clearRect(0, 0, width, height);

        if (!isDay) {
            // انیمیشن ستاره‌های شب
            stars.forEach(star => {
                star.alpha += star.speed * star.factor;
                if (star.alpha >= 1 || star.alpha <= 0.12) star.factor *= -1;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });
        } else {
            // رسم خورشید
            drawSun();

            // حرکت ابرهای روز
            clouds.forEach(cloud => {
                cloud.x += cloud.speed;
                if (cloud.x - 120 > width) cloud.x = -150;
                drawCloud(cloud.x, cloud.y, cloud.scale);
            });
        }
        requestAnimationFrame(renderSky);
    }
    renderSky();

    // سوئیچ تم
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        isDay = !isDay;
        document.body.classList.toggle('day-mode', isDay);
        themeBtn.innerText = isDay ? '☀️' : '🌙';
        canvas.style.background = isDay ? 'linear-gradient(to bottom, #38bdf8, #818cf8)' : 'radial-gradient(ellipse at bottom, #111a2e 0%, #050811 100%)';
    });
}
