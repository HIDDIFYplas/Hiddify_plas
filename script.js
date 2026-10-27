// ===========================
// HIDDIFY_plas - script.js
// ===========================

// آیکون‌های SVG سیستم‌عامل‌ها؛ فرم اصلی آیکون‌ها حفظ شده است.
const OS_ICONS = {
    android: `<span class="os-icon os-icon--android" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83 1.5 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg></span>`,
    windows: `<span class="os-icon os-icon--windows" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5.5L10 4.5V11.5H3V5.5ZM3 12.5H10V19.5L3 18.5V12.5ZM11 4.3L21 3V11.5H11V4.3ZM11 12.5H21V21L11 19.7V12.5Z"/></svg></span>`,
    apple: `<span class="os-icon os-icon--apple" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.67-.82 1.13-1.96.99-3.09-1 .04-2.22.67-2.92 1.49-.62.72-1.17 1.88-1.02 2.99 1.12.09 2.28-.57 2.95-1.39z"/></svg></span>`,
    tv: `<span class="os-icon os-icon--tv" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg></span>`,
    linux: `<span class="os-icon os-icon--linux" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12.38 2.01c-3.14 0-5.69 2.55-5.69 5.69 0 1.25.4 2.4 1.08 3.34-.14.28-.27.57-.38.87C6.67 13.88 6 16.03 6 18.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5 0-2.47-.67-4.62-1.39-6.59-.11-.3-.24-.59-.38-.87.68-.94 1.08-2.09 1.08-3.34 0-3.14-2.55-5.69-5.69-5.69zm-2.38 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4.76 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg></span>`
};

const statusBox = document.getElementById("statusBox");
if (statusBox) statusBox.innerText = CONFIG.status;
document.getElementById("configButton").href = CONFIG.telegram;
document.getElementById("telegramBtn").href = CONFIG.telegram;
document.getElementById("supportBtn").href = CONFIG.support;
document.getElementById("tutorialBtn").href = CONFIG.tutorial;

const container = document.getElementById("appContainer");
CONFIG.categories.forEach((category, index) => {
    const section = document.createElement("section");
    section.className = "category";

    const title = document.createElement("h2");
    const cleanTitleText = category.title.trim();
    const lowerText = cleanTitleText.toLowerCase();
    let osIcon = "";

    if (lowerText.includes("tv")) osIcon = OS_ICONS.tv;
    else if (lowerText.includes("win")) osIcon = OS_ICONS.windows;
    else if (lowerText.includes("linux")) osIcon = OS_ICONS.linux;
    else if (lowerText.includes("ios") || lowerText.includes("iphone") || lowerText.includes("mac") || lowerText.includes("apple")) osIcon = OS_ICONS.apple;
    else if (lowerText.includes("android") || index === 0) osIcon = OS_ICONS.android;

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
            <a class="download" href="${app.link}" target="_blank" rel="noopener noreferrer">دانلود</a>
        `;
        section.appendChild(card);
    });
    container.appendChild(section);
});

document.querySelectorAll(".download").forEach(btn => {
    btn.addEventListener("click", function (e) {
        if (this.getAttribute("href") === "#") {
            e.preventDefault();
            alert("لینک دانلود هنوز اضافه نشده است.");
        }
    });
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(.97)";
        setTimeout(() => { link.style.transform = ""; }, 120);
    });
});

const year = new Date().getFullYear();
document.querySelector("footer p").textContent = `© ${year} HIDDIFY_plas`;

// ================================================
// پس‌زمینهٔ زنده: حالت اصلی + جلوه‌های فصلی هالووین
// ================================================
const canvas = document.getElementById("bg-canvas");
if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d", { alpha: true });
    let width = 0;
    let height = 0;
    let isDay = false;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    const nowDate = new Date();
    const month = nowDate.getMonth(); // 0 = January
    const day = nowDate.getDate();
    const isHalloweenSeason = (month === 9 && day >= 25) || (month === 10 && day <= 1);
    document.body.classList.toggle("halloween-theme", isHalloweenSeason);

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        clouds.forEach((cloud, i) => {
            if (cloud.x > width + 200) cloud.x = (i + 1) * width / 4;
        });
        renderSky(performance.now());
    }

    const stars = Array.from({ length: 105 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.25 + 0.4,
        alpha: Math.random() * 0.75 + 0.2,
        speed: Math.random() * 0.012 + 0.003,
        direction: Math.random() < 0.5 ? -1 : 1
    }));
    const clouds = [
        { x: window.innerWidth * 0.1, y: 100, scale: 0.8, speed: 0.34 },
        { x: window.innerWidth * 0.6, y: 160, scale: 1.05, speed: 0.22 },
        { x: window.innerWidth * 0.3, y: 240, scale: 0.62, speed: 0.43 }
    ];
    const leaves = Array.from({ length: 22 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 4 + Math.random() * 7,
        speed: 0.35 + Math.random() * 1.15,
        drift: (Math.random() - 0.5) * 0.9,
        spin: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.065,
        color: ["#e87928", "#f59e0b", "#b45309", "#c2410c", "#d97706"][Math.floor(Math.random() * 5)]
    }));
    const bats = Array.from({ length: 4 }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: 70 + Math.random() * Math.min(250, window.innerHeight * 0.4),
        scale: 0.55 + Math.random() * 0.65,
        speed: 0.35 + Math.random() * 0.65,
        phase: i * 1.7,
        visible: Math.random() > 0.15
    }));
    const motes = Array.from({ length: 26 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.7 + Math.random() * 1.7,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.018
    }));

    let nextLightningAt = performance.now() + 8500 + Math.random() * 4500;
    let lightningStartedAt = -10000;
    let lastFrame = 0;

    function setSkyBackground() {
        if (isHalloweenSeason) {
            canvas.style.background = isDay
                ? "linear-gradient(180deg, #77b9e8 0%, #c9b7a4 62%, #e3a36b 100%)"
                : "radial-gradient(ellipse at 78% 24%, #30264b 0%, #17172f 42%, #080b19 100%)";
        } else {
            canvas.style.background = isDay
                ? "linear-gradient(to bottom, #38bdf8, #818cf8)"
                : "radial-gradient(ellipse at bottom, #111a2e 0%, #050811 100%)";
        }
    }

    function drawCloud(cx, cy, scale, alpha = 0.55) {
        ctx.save();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(cx, cy, 30 * scale, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(cx + 35 * scale, cy - 20 * scale, 35 * scale, Math.PI, Math.PI * 1.85);
        ctx.arc(cx + 75 * scale, cy - 15 * scale, 28 * scale, Math.PI * 1.37, Math.PI * 1.91);
        ctx.arc(cx + 100 * scale, cy, 30 * scale, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawSun(time) {
        const sunX = width - Math.max(74, width * 0.14);
        const sunY = Math.max(76, height * 0.16);
        const pulse = 0.93 + Math.sin(time * 0.00045) * 0.07;
        ctx.save();
        const glow = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, 95 * pulse);
        glow.addColorStop(0, isHalloweenSeason ? "rgba(255,190,105,.54)" : "rgba(255,220,100,.8)");
        glow.addColorStop(1, "rgba(255,190,100,0)");
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(sunX, sunY, 95 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = isHalloweenSeason ? "#ffd18a" : "#ffea00";
        ctx.beginPath(); ctx.arc(sunX, sunY, 29 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }

    function drawMoon(time) {
        const x = width - Math.max(84, width * 0.19);
        const y = Math.max(102, height * 0.17);
        const r = Math.min(57, Math.max(40, width * 0.105));
        ctx.save();
        const halo = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 2.5);
        halo.addColorStop(0, "rgba(220,205,255,.19)");
        halo.addColorStop(1, "rgba(150,120,220,0)");
        ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(x, y, r * 2.5, 0, Math.PI * 2); ctx.fill();
        const moon = ctx.createRadialGradient(x - r * 0.3, y - r * 0.28, 2, x, y, r);
        moon.addColorStop(0, "#fff6db"); moon.addColorStop(0.76, "#ded6e9"); moon.addColorStop(1, "#a8a1c3");
        ctx.fillStyle = moon; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        // حفره‌های ظریف ماه
        ctx.fillStyle = "rgba(100,87,128,.14)";
        [[-.28,-.08,.13],[.25,.3,.09],[.1,-.43,.07],[-.42,.35,.06]].forEach(([dx,dy,rr]) => {
            ctx.beginPath(); ctx.arc(x + dx * r, y + dy * r, rr * r, 0, Math.PI * 2); ctx.fill();
        });
        ctx.restore();
    }

    function drawBat(bat, time) {
        if (!bat.visible) return;
        const flap = Math.sin(time * 0.012 + bat.phase) * 5;
        ctx.save(); ctx.translate(bat.x, bat.y + Math.sin(time * 0.001 + bat.phase) * 7); ctx.scale(bat.scale, bat.scale);
        ctx.fillStyle = "rgba(10,8,22,.94)";
        ctx.beginPath();
        ctx.moveTo(-20, -2); ctx.quadraticCurveTo(-13, -13 - flap, -5, -3);
        ctx.quadraticCurveTo(0, -11, 5, -3); ctx.quadraticCurveTo(14, -14 + flap, 21, -2);
        ctx.lineTo(12, 2); ctx.lineTo(8, 8); ctx.lineTo(2, 3); ctx.lineTo(-3, 8); ctx.lineTo(-8, 2); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 0, 4.2, 5.5, 0, 0, Math.PI * 2); ctx.fill();
        if (isHalloweenSeason) {
            ctx.fillStyle = "rgba(255,113,75,.75)";
            ctx.fillRect(-2.4, -1, 1.2, 1.2); ctx.fillRect(1.2, -1, 1.2, 1.2);
        }
        ctx.restore();
    }

    function drawPumpkin(x, y, scale, time, alpha = 1) {
        const flicker = 0.78 + 0.22 * (0.5 + 0.5 * Math.sin(time * 0.013 + x * 0.07)) * (0.8 + 0.2 * Math.sin(time * 0.031 + y));
        ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale); ctx.globalAlpha = alpha;
        const glow = ctx.createRadialGradient(0, -8, 2, 0, -8, 55 * flicker);
        glow.addColorStop(0, `rgba(255,132,38,${0.30 * flicker})`); glow.addColorStop(1, "rgba(255,90,20,0)");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, -8, 55 * flicker, 0, Math.PI * 2); ctx.fill();
        const orange = ctx.createLinearGradient(-22, -26, 24, 25);
        orange.addColorStop(0, "#ffb044"); orange.addColorStop(.5, "#f47719"); orange.addColorStop(1, "#a83d13");
        ctx.fillStyle = orange;
        for (let i = -2; i <= 2; i++) {
            ctx.beginPath(); ctx.ellipse(i * 8, 0, 8.5, 18 - Math.abs(i) * 1.2, 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = "#4f6b32"; ctx.beginPath(); ctx.ellipse(1, -20, 4, 8, .25, 0, Math.PI * 2); ctx.fill();
        ctx.shadowColor = "#ffd35a"; ctx.shadowBlur = 10 * flicker; ctx.fillStyle = `rgba(255,238,136,${flicker})`;
        ctx.beginPath(); ctx.moveTo(-12,-6); ctx.lineTo(-5,1); ctx.lineTo(-13,3); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(5,1); ctx.lineTo(13,-6); ctx.lineTo(13,3); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-9,8); ctx.lineTo(9,8); ctx.lineTo(5,14); ctx.lineTo(-5,14); ctx.closePath(); ctx.fill();
        ctx.restore();
    }

    function drawCastle() {
        const base = height * 0.88;
        ctx.save();
        const grd = ctx.createLinearGradient(0, base - 120, 0, height);
        grd.addColorStop(0, isDay ? "rgba(66,50,65,.30)" : "rgba(7,7,20,.95)");
        grd.addColorStop(1, isDay ? "rgba(53,42,48,.63)" : "rgba(3,4,13,.98)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.moveTo(0, height); ctx.lineTo(0, base - 22);
        ctx.lineTo(width * .12, base - 22); ctx.lineTo(width * .12, base - 73);
        ctx.lineTo(width * .16, base - 96); ctx.lineTo(width * .20, base - 73); ctx.lineTo(width * .20, base - 35);
        ctx.lineTo(width * .35, base - 35); ctx.lineTo(width * .35, base - 72);
        ctx.lineTo(width * .39, base - 96); ctx.lineTo(width * .43, base - 72); ctx.lineTo(width * .43, base - 18);
        ctx.lineTo(width * .58, base - 18); ctx.lineTo(width * .58, base - 63);
        ctx.lineTo(width * .62, base - 86); ctx.lineTo(width * .66, base - 63); ctx.lineTo(width * .66, base - 32);
        ctx.lineTo(width * .8, base - 32); ctx.lineTo(width * .8, base - 81);
        ctx.lineTo(width * .84, base - 105); ctx.lineTo(width * .88, base - 81); ctx.lineTo(width * .88, base - 20);
        ctx.lineTo(width, base - 20); ctx.lineTo(width, height); ctx.closePath(); ctx.fill();
        if (isDay) {
            ctx.fillStyle = "rgba(255,198,105,.55)";
            [[.16,.76],[.39,.79],[.62,.81],[.84,.75]].forEach(([xp,yp]) => {
                ctx.fillRect(width * xp - 3, height * yp, 5, 9);
            });
        } else {
            ctx.fillStyle = "rgba(255,166,75,.78)";
            [[.16,.78],[.39,.80],[.62,.82],[.84,.76]].forEach(([xp,yp]) => {
                ctx.fillRect(width * xp - 2, height * yp, 4, 7);
            });
        }
        ctx.restore();
    }

    function drawFog(time) {
        for (let i = 0; i < 3; i++) {
            const y = height * (0.78 + i * 0.065);
            const drift = (time * (0.008 + i * 0.003)) % (width + 220) - 110;
            const fog = ctx.createLinearGradient(drift - 170, y, drift + 240, y + 25);
            fog.addColorStop(0, "rgba(180,168,210,0)"); fog.addColorStop(.45, `rgba(173,163,200,${0.055 + i * .012})`); fog.addColorStop(1, "rgba(180,168,210,0)");
            ctx.fillStyle = fog;
            ctx.beginPath(); ctx.ellipse(drift + width * .2, y, width * .43, 17 + i * 6, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse((drift + width * .75) % (width + 200), y + 8, width * .32, 13 + i * 4, 0, 0, Math.PI * 2); ctx.fill();
        }
    }

    function drawLightning(time) {
        if (time >= nextLightningAt) {
            lightningStartedAt = time;
            nextLightningAt = time + 9500 + Math.random() * 5500;
        }
        const elapsed = time - lightningStartedAt;
        if (elapsed < 0 || elapsed > 175) return;
        const strength = elapsed < 42 ? 0.20 : elapsed < 86 ? 0.075 : 0.025;
        ctx.fillStyle = `rgba(208,220,255,${strength})`;
        ctx.fillRect(0, 0, width, height);
        if (elapsed < 85) {
            const startX = width * (.24 + Math.random() * .52);
            ctx.save(); ctx.strokeStyle = `rgba(240,237,255,${0.88 * (1 - elapsed / 110)})`; ctx.lineWidth = 2.2; ctx.shadowColor = "#b7baff"; ctx.shadowBlur = 18;
            ctx.beginPath(); ctx.moveTo(startX, 0);
            let x = startX, y = 0;
            while (y < height * .48) {
                x += (Math.random() - .5) * 42; y += 20 + Math.random() * 32; ctx.lineTo(x, y);
            }
            ctx.stroke(); ctx.restore();
        }
    }

    function drawAutumnLeaves() {
        leaves.forEach(leaf => {
            leaf.y += leaf.speed; leaf.x += leaf.drift + Math.sin(leaf.y * .017) * .35; leaf.spin += leaf.spinSpeed;
            if (leaf.y > height + 15) { leaf.y = -15; leaf.x = Math.random() * width; }
            if (leaf.x < -20) leaf.x = width + 15; if (leaf.x > width + 20) leaf.x = -15;
            ctx.save(); ctx.translate(leaf.x, leaf.y); ctx.rotate(leaf.spin); ctx.fillStyle = leaf.color; ctx.globalAlpha = .78;
            ctx.beginPath(); ctx.moveTo(0, -leaf.size); ctx.quadraticCurveTo(leaf.size * 1.1, -leaf.size * .3, 0, leaf.size); ctx.quadraticCurveTo(-leaf.size * 1.1, -leaf.size * .3, 0, -leaf.size); ctx.fill();
            ctx.strokeStyle = "rgba(255,220,160,.7)"; ctx.lineWidth = .6; ctx.beginPath(); ctx.moveTo(0,-leaf.size*.65); ctx.lineTo(0,leaf.size*.65); ctx.stroke(); ctx.restore();
        });
    }

    function drawMotes(time) {
        motes.forEach(mote => {
            const alpha = .18 + (Math.sin(time * mote.speed + mote.phase) + 1) * .20;
            ctx.fillStyle = `rgba(255,174,89,${alpha})`;
            ctx.beginPath(); ctx.arc(mote.x, mote.y, mote.r, 0, Math.PI * 2); ctx.fill();
        });
    }

    function renderSky(time = performance.now()) {
        ctx.clearRect(0, 0, width, height);
        if (isHalloweenSeason) {
            if (isDay) {
                drawSun(time);
                clouds.forEach(cloud => {
                    cloud.x += cloud.speed * (reducedMotion ? 0 : 1);
                    if (cloud.x - 130 > width) cloud.x = -160;
                    drawCloud(cloud.x, cloud.y, cloud.scale, .42);
                });
                drawCastle();
                if (!reducedMotion) drawAutumnLeaves();
                bats.forEach((bat, i) => {
                    bat.x += (reducedMotion ? 0 : bat.speed * .55);
                    if (bat.x > width + 50) bat.x = -50;
                    if (i < 2) drawBat(bat, time);
                });
                drawMotes(time);
                drawPumpkin(46, height - 32, .73, time, .65);
                drawPumpkin(width - 48, height - 32, .69, time, .65);
            } else {
                stars.forEach(star => {
                    if (!reducedMotion) {
                        star.alpha += star.speed * star.direction;
                        if (star.alpha >= .95 || star.alpha <= .18) star.direction *= -1;
                    }
                    ctx.beginPath(); ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255,244,226,${star.alpha})`; ctx.fill();
                });
                drawMoon(time);
                // ابرها عمداً پس از ماه رسم می‌شوند تا جلوی آن حرکت کنند.
                clouds.forEach((cloud, i) => {
                    cloud.x += (reducedMotion ? 0 : cloud.speed * .55);
                    if (cloud.x - 130 > width) cloud.x = -160;
                    drawCloud(cloud.x, cloud.y + i * 13, cloud.scale * 1.05, .12 + i * .025);
                });
                bats.forEach(bat => {
                    bat.x += (reducedMotion ? 0 : bat.speed);
                    if (bat.x > width + 50) bat.x = -45;
                    drawBat(bat, time);
                });
                drawCastle(); drawFog(time); drawMotes(time);
                drawPumpkin(48, height - 35, .93, time, .96);
                drawPumpkin(width - 48, height - 35, .88, time, .94);
                if (!reducedMotion) drawLightning(time);
            }
        } else if (!isDay) {
            stars.forEach(star => {
                if (!reducedMotion) {
                    star.alpha += star.speed * star.direction;
                    if (star.alpha >= .95 || star.alpha <= .15) star.direction *= -1;
                }
                ctx.beginPath(); ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${star.alpha})`; ctx.fill();
            });
        } else {
            drawSun(time);
            clouds.forEach(cloud => {
                cloud.x += reducedMotion ? 0 : cloud.speed;
                if (cloud.x - 120 > width) cloud.x = -150;
                drawCloud(cloud.x, cloud.y, cloud.scale);
            });
        }
    }

    function animate(time) {
        // محدود کردن نرخ نقاشی روی دستگاه‌های ضعیف‌تر
        if (!lastFrame || time - lastFrame >= 28) {
            renderSky(time);
            lastFrame = time;
        }
        if (!reducedMotion) requestAnimationFrame(animate);
    }

    const themeBtn = document.getElementById("themeToggle");
    function updateTheme() {
        document.body.classList.toggle("day-mode", isDay);
        themeBtn.innerText = isDay ? "☀️" : "🌙";
        themeBtn.setAttribute("aria-label", isDay ? "تغییر به حالت شب" : "تغییر به حالت روز");
        themeBtn.setAttribute("title", isDay ? "حالت شب" : "حالت روز");
        setSkyBackground();
        renderSky(performance.now());
    }
    themeBtn.addEventListener("click", () => {
        isDay = !isDay;
        updateTheme();
    });
    window.addEventListener("resize", resizeCanvas, { passive: true });
    if (motionQuery.addEventListener) {
        motionQuery.addEventListener("change", event => {
            reducedMotion = event.matches;
            if (!reducedMotion) { lastFrame = 0; requestAnimationFrame(animate); }
            else renderSky(performance.now());
        });
    }
    setSkyBackground();
    resizeCanvas();
    if (!reducedMotion) requestAnimationFrame(animate);
}
