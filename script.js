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
    else if (lowerText.includes("iphone") || lowerText.includes("ios")) osIcon = OS_ICONS.apple.replace("os-icon--apple", "os-icon--iphone");
    else if (lowerText.includes("mac") || lowerText.includes("apple")) osIcon = OS_ICONS.apple.replace("os-icon--apple", "os-icon--mac");
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

// =====================================================
// پس‌زمینهٔ سینمایی و واکنش‌گرا: هالووین + حالت عادی
// =====================================================
const canvas = document.getElementById("bg-canvas");
if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d", { alpha: true });
    let width = 0, height = 0, isDay = false, lastFrame = 0;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const isHalloweenSeason = (month === 9 && date >= 25) || (month === 10 && date <= 1);
    document.body.classList.toggle("halloween-theme", isHalloweenSeason);
    const rand = (min, max) => min + Math.random() * (max - min);
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const stars = Array.from({ length: 170 }, () => ({
        x: Math.random(), y: Math.random() * .78,
        r: rand(.45, 1.65), alpha: rand(.24, .95), speed: rand(.004, .018),
        dir: Math.random() < .5 ? -1 : 1, twinkle: Math.random() * Math.PI * 2
    }));
    const clouds = Array.from({ length: 7 }, (_, i) => ({
        x: (i / 7) * 1.35 - .12, y: rand(.08, .48), scale: rand(.56, 1.55),
        speed: rand(.00013, .00031) * (i % 2 ? 1 : .78), phase: rand(0, 8)
    }));
    const leaves = Array.from({ length: 58 }, () => ({
        x: Math.random(), y: Math.random(), size: rand(4, 10), speed: rand(.00013, .00058),
        drift: rand(-.0004, .0004), spin: rand(0, Math.PI * 2), spinSpeed: rand(-.035, .035),
        color: ["#f58a27", "#ffc04d", "#b94824", "#d96721", "#9d4c24", "#ffdb77"][Math.floor(Math.random() * 6)]
    }));
    const bats = Array.from({ length: 26 }, (_, i) => ({
        x: Math.random(), y: rand(.07, .66), vx: rand(.00010, .00031) * (Math.random() < .25 ? -1 : 1),
        vy: rand(-.00008, .00008), scale: rand(.78, 1.9), phase: rand(0, 10),
        angle: rand(-.3, .3), turn: rand(-.0012, .0012), type: i % 3
    }));
    const motes = Array.from({ length: 55 }, () => ({
        x: Math.random(), y: rand(.2, 1), r: rand(.7, 2.2), phase: rand(0, 10),
        speed: rand(.004, .018), lift: rand(.00003, .00012)
    }));
    let nextLightningAt = performance.now() + rand(8500, 11500);
    let lightningStartedAt = -10000;
    let lightningX = .5;

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
        width = Math.max(1, window.innerWidth);
        height = Math.max(1, window.innerHeight);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        renderSky(performance.now());
    }

    function setSkyBackground() {
        if (isHalloweenSeason) {
            canvas.style.background = isDay
                ? "linear-gradient(180deg,#75b8ea 0%,#a9c5d7 43%,#efbf8b 100%)"
                : "radial-gradient(ellipse at 75% 17%,#3b315f 0%,#1a1835 42%,#080b19 100%)";
        } else {
            canvas.style.background = isDay
                ? "linear-gradient(180deg,#38bdf8 0%,#818cf8 100%)"
                : "radial-gradient(ellipse at 70% 22%,#17213d 0%,#050811 82%)";
        }
    }

    function roundedGlow(x, y, radius, inner, outer) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, inner); g.addColorStop(1, outer);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    }

    function drawCloud(cloud, time, alpha = .68) {
        const x = cloud.x * width;
        const y = cloud.y * height + Math.sin(time * .00015 + cloud.phase) * 8;
        const scale = cloud.scale * clamp(width / 1150, .62, 1.45);
        ctx.save();
        ctx.translate(x, y); ctx.scale(scale, scale); ctx.globalAlpha = alpha;
        // سایهٔ سرد در لبهٔ پایین و لایه‌های پرحجم ابر
        const shade = ctx.createLinearGradient(0, -36, 0, 35);
        shade.addColorStop(0, "rgba(255,255,255,.96)");
        shade.addColorStop(.53, isDay ? "rgba(248,246,255,.82)" : "rgba(170,170,214,.26)");
        shade.addColorStop(1, isDay ? "rgba(126,147,183,.43)" : "rgba(55,52,94,.22)");
        ctx.fillStyle = shade;
        ctx.beginPath();
        ctx.ellipse(0, 4, 53, 18, 0, 0, Math.PI * 2);
        ctx.ellipse(-26, -5, 27, 22, 0, 0, Math.PI * 2);
        ctx.ellipse(1, -18, 31, 31, 0, 0, Math.PI * 2);
        ctx.ellipse(29, -8, 34, 25, 0, 0, Math.PI * 2);
        ctx.ellipse(52, 3, 27, 17, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isDay ? "rgba(255,255,255,.38)" : "rgba(208,197,255,.14)";
        ctx.lineWidth = 1.4; ctx.beginPath(); ctx.ellipse(4, -12, 27, 25, -.1, Math.PI * 1.05, Math.PI * 1.9); ctx.stroke();
        ctx.restore();
    }

    function drawSun(time) {
        const x = width * .79, y = height * .18, pulse = .96 + Math.sin(time * .00045) * .04;
        roundedGlow(x, y, Math.min(180, width * .2), "rgba(255,222,139,.58)", "rgba(255,188,108,0)");
        ctx.save(); ctx.translate(x, y); ctx.rotate(time * .000025);
        ctx.strokeStyle = "rgba(255,231,166,.42)"; ctx.lineWidth = 2;
        for (let i = 0; i < 16; i++) {
            ctx.rotate(Math.PI / 8); ctx.beginPath(); ctx.moveTo(36 * pulse, 0); ctx.lineTo(49 * pulse, 0); ctx.stroke();
        }
        const g = ctx.createRadialGradient(-10, -12, 2, 0, 0, 39 * pulse);
        g.addColorStop(0, "#fff4bb"); g.addColorStop(.7, "#ffca67"); g.addColorStop(1, "#f79a45");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 31 * pulse, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }

    function drawMoon(time) {
        const x = width * .755, y = Math.max(100, height * .19), r = clamp(Math.min(width * .055, height * .105), 43, 78);
        roundedGlow(x, y, r * 3.1, "rgba(197,190,255,.24)", "rgba(135,110,230,0)");
        ctx.save();
        // حلقهٔ هالهٔ ماه
        ctx.strokeStyle = "rgba(213,205,255,.12)"; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(x, y, r * 1.23 + Math.sin(time * .0004) * 2, 0, Math.PI * 2); ctx.stroke();
        const g = ctx.createRadialGradient(x - r * .32, y - r * .38, 1, x, y, r * 1.08);
        g.addColorStop(0, "#fffdf1"); g.addColorStop(.48, "#f3efff"); g.addColorStop(.82, "#d4d5ef"); g.addColorStop(1, "#8989b6");
        ctx.shadowColor = "rgba(214,202,255,.52)"; ctx.shadowBlur = 24;
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        // لکه‌ها و دهانه‌های ماه داخل محدودهٔ دایره
        ctx.save(); ctx.beginPath(); ctx.arc(x, y, r - 1, 0, Math.PI * 2); ctx.clip();
        [[-.33,-.14,.15],[.24,.26,.105],[.05,-.45,.075],[-.47,.34,.055],[.42,-.24,.045],[-.08,.15,.07]].forEach(([dx,dy,rr]) => {
            ctx.fillStyle = "rgba(115,112,156,.14)"; ctx.beginPath(); ctx.arc(x + dx * r, y + dy * r, rr * r, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,.19)"; ctx.lineWidth = 1; ctx.stroke();
        });
        ctx.restore(); ctx.restore();
    }

    function drawBat(bat, time) {
        const flap = Math.sin(time * .019 + bat.phase) * 16;
        const x = bat.x * width, y = bat.y * height + Math.sin(time * .0017 + bat.phase) * 24;
        ctx.save(); ctx.translate(x, y); ctx.rotate(bat.angle + Math.sin(time * .0008 + bat.phase) * .13); ctx.scale(bat.scale, bat.scale);
        ctx.fillStyle = "rgba(5,3,18,.99)"; ctx.strokeStyle = "rgba(139,77,174,.9)"; ctx.lineWidth = 1.7; ctx.shadowColor = "rgba(115,63,170,.45)"; ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(-30, 0); ctx.quadraticCurveTo(-49, -19 - flap, -58, -11 - flap * .4);
        ctx.lineTo(-50, 7); ctx.lineTo(-39, 1); ctx.lineTo(-34, 14); ctx.lineTo(-23, 6);
        ctx.quadraticCurveTo(-13, -7, -5, -2); ctx.lineTo(0, -7);
        ctx.lineTo(5, -2); ctx.quadraticCurveTo(14, -9, 24, 6);
        ctx.lineTo(36, 14); ctx.lineTo(40, 1); ctx.lineTo(51, 7); ctx.lineTo(59, -11 - flap * .4);
        ctx.quadraticCurveTo(46, -22 + flap, 30, 0); ctx.quadraticCurveTo(14, -7, 4, -3);
        ctx.lineTo(0, 11); ctx.lineTo(-6, 17); ctx.lineTo(-12, 9); ctx.lineTo(-19, 17); ctx.lineTo(-22, 6); ctx.closePath();
        ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 1, 6.5, 9, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-4,-4); ctx.lineTo(-8,-13); ctx.lineTo(-1,-7); ctx.moveTo(4,-4); ctx.lineTo(8,-13); ctx.lineTo(1,-7); ctx.fill();
        if (isHalloweenSeason) {
            ctx.fillStyle = "#ff9b55"; ctx.shadowColor = "#ff602e"; ctx.shadowBlur = 7;
            ctx.beginPath(); ctx.ellipse(-2.5, 0, 1.5, 2.1, 0, 0, Math.PI * 2); ctx.ellipse(2.5, 0, 1.5, 2.1, 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    }

    function drawHauntedHouse(cx, ground, scale, time, foreground = false) {
        ctx.save(); ctx.translate(cx, ground); ctx.scale(scale, scale);
        const wall = isDay ? "rgba(73,61,83,.66)" : "rgba(7,7,23,.94)";
        const roof = isDay ? "rgba(49,39,64,.76)" : "rgba(5,4,18,.99)";
        ctx.fillStyle = wall; ctx.strokeStyle = isDay ? "rgba(255,210,150,.28)" : "rgba(103,76,138,.35)"; ctx.lineWidth = 1.2;
        // عمارت مرکزی
        ctx.fillRect(-55, -102, 112, 102);
        ctx.beginPath(); ctx.moveTo(-70, -102); ctx.lineTo(0, -160); ctx.lineTo(70, -102); ctx.closePath(); ctx.fillStyle = roof; ctx.fill();
        // برجک‌های نامتقارن
        ctx.fillStyle = wall; ctx.fillRect(-76, -125, 28, 125); ctx.fillRect(48, -137, 30, 137);
        ctx.fillStyle = roof;
        ctx.beginPath(); ctx.moveTo(-83,-125); ctx.lineTo(-62,-169); ctx.lineTo(-46,-125); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(41,-137); ctx.lineTo(63,-190); ctx.lineTo(84,-137); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-18,-145); ctx.lineTo(0,-184); ctx.lineTo(18,-145); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = "rgba(255,163,77,.24)"; ctx.beginPath(); ctx.moveTo(0,-184); ctx.lineTo(0,-202); ctx.stroke();
        // پنجره‌های درخشان
        const glow = .72 + .2 * Math.sin(time * .003 + cx);
        ctx.shadowColor = isDay ? "rgba(255,189,91,.55)" : "rgba(255,122,51,.8)"; ctx.shadowBlur = foreground ? 9 : 14;
        ctx.fillStyle = `rgba(255,165,71,${isDay ? .62 : glow})`;
        [[-45,-84,10,17],[-6,-81,12,19],[29,-82,10,18],[-69,-106,8,12],[57,-116,9,13],[ -7,-129,8,12]].forEach(([x,y,w,h]) => {
            ctx.fillRect(x,y,w,h); ctx.fillRect(x + w/2 - .7,y,1.4,h);
        });
        ctx.shadowBlur = 0;
        // در و نردهٔ جلوی عمارت
        ctx.fillStyle = isDay ? "rgba(24,20,37,.8)" : "rgba(3,3,14,.97)";
        ctx.beginPath(); ctx.moveTo(-13,0); ctx.lineTo(-13,-38); ctx.quadraticCurveTo(0,-54,13,-38); ctx.lineTo(13,0); ctx.closePath(); ctx.fill();
        if (foreground) {
            ctx.strokeStyle = "rgba(12,8,21,.88)"; ctx.lineWidth = 3;
            for (let i=-125;i<=125;i+=22) { ctx.beginPath(); ctx.moveTo(i, -1); ctx.lineTo(i,-24-(i%44===0?7:0)); ctx.stroke(); }
            ctx.beginPath(); ctx.moveTo(-135,-16); ctx.lineTo(135,-16); ctx.stroke();
        }
        ctx.restore();
    }

    function drawTree(x, ground, scale, lean = 0) {
        ctx.save(); ctx.translate(x, ground); ctx.scale(scale, scale); ctx.rotate(lean);
        ctx.fillStyle = isDay ? "rgba(48,43,53,.76)" : "rgba(4,5,17,.96)";
        ctx.beginPath(); ctx.moveTo(-7,0); ctx.lineTo(-3,-75); ctx.lineTo(-30,-106); ctx.lineTo(-12,-98); ctx.lineTo(-37,-137); ctx.lineTo(-9,-119); ctx.lineTo(0,-167); ctx.lineTo(8,-119); ctx.lineTo(34,-145); ctx.lineTo(15,-104); ctx.lineTo(34,-110); ctx.lineTo(6,-74); ctx.lineTo(10,0); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = isDay ? "rgba(255,153,77,.16)" : "rgba(109,75,139,.25)"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0,-3); ctx.lineTo(0,-105); ctx.moveTo(0,-83); ctx.lineTo(-22,-119); ctx.moveTo(0,-64); ctx.lineTo(20,-106); ctx.stroke(); ctx.restore();
    }

    function drawHills() {
        const gy = height * .88;
        ctx.save();
        const g = ctx.createLinearGradient(0, height * .62, 0, height);
        g.addColorStop(0, isDay ? "rgba(79,77,91,.13)" : "rgba(13,10,30,.5)");
        g.addColorStop(1, isDay ? "rgba(47,45,55,.65)" : "rgba(3,4,15,.96)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0,gy);
        ctx.quadraticCurveTo(width*.15,height*.72,width*.32,height*.84);
        ctx.quadraticCurveTo(width*.52,height*.67,width*.68,height*.83);
        ctx.quadraticCurveTo(width*.84,height*.71,width,height*.84);
        ctx.lineTo(width,height); ctx.lineTo(0,height); ctx.closePath(); ctx.fill(); ctx.restore();
    }

    function drawPumpkin(x, y, scale, time, alpha = 1, variant = 0) {
        // نور نامنظم شبیه شعلهٔ واقعی، نه ضربان یکنواخت
        const wave = Math.sin(time * (.008 + variant * .001) + x * .019) * .5 + .5;
        const irregular = Math.sin(time * .027 + y * .17 + variant) * .12 + Math.sin(time * .041 + x) * .07;
        const flicker = clamp(.74 + wave * .24 + irregular, .48, 1.08);
        ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale); ctx.globalAlpha = alpha;
        roundedGlow(0, -8, 75 * flicker, `rgba(255,106,28,${.31*flicker})`, "rgba(255,91,27,0)");
        const body = ctx.createLinearGradient(-32,-24,31,31);
        body.addColorStop(0,"#ffb64d"); body.addColorStop(.35,"#ff7b1d"); body.addColorStop(.72,"#e95813"); body.addColorStop(1,"#8d2c18");
        ctx.fillStyle = body; ctx.strokeStyle = "rgba(111,43,17,.64)"; ctx.lineWidth = 1.1;
        for (let i=-2;i<=2;i++) {
            ctx.beginPath(); ctx.ellipse(i*12, 0, 12.3 - Math.abs(i)*.65, 22 - Math.abs(i)*1.1, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        }
        // ساقه
        ctx.fillStyle = "#56682d"; ctx.beginPath(); ctx.moveTo(-5,-20); ctx.quadraticCurveTo(-9,-34,-1,-38); ctx.quadraticCurveTo(5,-31,3,-21); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = "rgba(255,184,78,.55)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(-25,-10); ctx.quadraticCurveTo(-20,6,-22,14); ctx.moveTo(25,-10); ctx.quadraticCurveTo(20,6,22,14); ctx.stroke();
        // چهرهٔ حک‌شده با نور از داخل
        ctx.shadowColor = "#ffcf56"; ctx.shadowBlur = 14 * flicker; ctx.fillStyle = `rgba(255,238,134,${flicker})`;
        ctx.beginPath(); ctx.moveTo(-21,-8); ctx.lineTo(-7,-3); ctx.lineTo(-13,6); ctx.lineTo(-18,2); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(7,-3); ctx.lineTo(21,-8); ctx.lineTo(18,2); ctx.lineTo(13,6); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-16,8); ctx.lineTo(-9,10); ctx.lineTo(-5,8); ctx.lineTo(0,12); ctx.lineTo(5,8); ctx.lineTo(10,10); ctx.lineTo(16,8); ctx.lineTo(11,19); ctx.lineTo(6,16); ctx.lineTo(0,20); ctx.lineTo(-6,16); ctx.lineTo(-11,19); ctx.closePath(); ctx.fill();
        ctx.fillStyle = `rgba(255,248,190,${.42*flicker})`; ctx.fillRect(-8,12,3,5); ctx.fillRect(3,12,3,5);
        ctx.shadowBlur = 0; ctx.restore();
    }

    function drawPumpkinPatch(time) {
        const scaleBase = clamp(width / 1000, .56, 1.22);
        const row = [
            [.025, .955, 1.42], [.085, .982, .82], [.15, .966, .62], [.225, .99, .42],
            [.77, .986, .48], [.835, .968, .66], [.91, .984, 1.02], [.975, .952, 1.5],
            [.29, .989, .38], [.39, .995, .3], [.61, .991, .34], [.7, .995, .3]
        ];
        row.forEach((p,i) => drawPumpkin(width*p[0], height*p[1], p[2]*scaleBase, time, i % 3 === 1 ? .78 : .98, i));
        // کدوهای کوچک‌تر میان بوته‌ها برای عمق صحنه
        for (let i=0;i<9;i++) {
            const x = width * (.255 + i * .061), y = height * (.947 + (i%3)*.016);
            drawPumpkin(x,y,scaleBase*(.24 + (i%4)*.075),time,.76,i+9);
        }
    }

    function drawFog(time) {
        for (let i=0;i<5;i++) {
            const y = height*(.72 + i*.061);
            const travel = ((time*(.006 + i*.0017)) % (width+450)) - 220;
            ctx.save(); ctx.globalAlpha = .74;
            const g = ctx.createLinearGradient(travel-230,y,travel+260,y+10);
            g.addColorStop(0,"rgba(184,173,220,0)"); g.addColorStop(.43, isDay ? "rgba(255,225,194,.17)" : "rgba(178,167,216,.13)"); g.addColorStop(1,"rgba(184,173,220,0)");
            ctx.fillStyle=g;
            ctx.beginPath(); ctx.ellipse(travel+width*.23,y,width*.35,14+i*4,.02,0,Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(((travel+width*.74)%(width+450)),y+9,width*.28,12+i*3,-.03,0,Math.PI*2); ctx.fill(); ctx.restore();
        }
    }

    function drawLeaves() {
        leaves.forEach(leaf => {
            if (!reducedMotion) {
                leaf.y += leaf.speed; leaf.x += leaf.drift + Math.sin(leaf.y*15)*.00035; leaf.spin += leaf.spinSpeed;
                if (leaf.y > 1.04) { leaf.y = -.04; leaf.x = Math.random(); }
                if (leaf.x < -.04) leaf.x = 1.04; if (leaf.x > 1.04) leaf.x = -.04;
            }
            const x=leaf.x*width,y=leaf.y*height;
            ctx.save(); ctx.translate(x,y); ctx.rotate(leaf.spin); ctx.fillStyle=leaf.color; ctx.globalAlpha=.84;
            ctx.beginPath(); ctx.moveTo(0,-leaf.size); ctx.lineTo(leaf.size*.56,-leaf.size*.28); ctx.lineTo(leaf.size*1.03,0); ctx.lineTo(leaf.size*.43,leaf.size*.23); ctx.lineTo(0,leaf.size); ctx.lineTo(-leaf.size*.52,leaf.size*.27); ctx.lineTo(-leaf.size,0); ctx.lineTo(-leaf.size*.48,-leaf.size*.3); ctx.closePath(); ctx.fill();
            ctx.strokeStyle="rgba(255,226,166,.75)"; ctx.lineWidth=.7; ctx.beginPath(); ctx.moveTo(0,-leaf.size*.72); ctx.lineTo(0,leaf.size*.72); ctx.stroke(); ctx.restore();
        });
    }

    function drawWitch(time) {
        const cycle = (time * .000027) % 2;
        const path = cycle < 1 ? cycle : 2 - cycle;
        const x = (path * 1.16 - .08) * width;
        const y = height * (.29 + Math.sin(time*.0012)*.055);
        const scale = clamp(width/1100, .56, 1.05);
        ctx.save(); ctx.translate(x,y); ctx.scale(scale,scale); ctx.rotate(-.08 + Math.sin(time*.001)*.025);
        ctx.fillStyle="rgba(35,23,44,.94)"; ctx.strokeStyle="rgba(255,192,124,.24)"; ctx.lineWidth=1.1;
        // جارو و رشته‌های انتهایی
        ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(-42,18); ctx.lineTo(46,8); ctx.stroke();
        ctx.lineWidth=1.7; for (let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(40,8);ctx.lineTo(53+i*2,1+i*4);ctx.stroke();}
        // بدن و شنل
        ctx.beginPath(); ctx.moveTo(-7,-12); ctx.quadraticCurveTo(3,-3,12,1); ctx.lineTo(27,15); ctx.lineTo(-10,18); ctx.lineTo(-18,7); ctx.closePath(); ctx.fill(); ctx.stroke();
        // سر و مو
        ctx.beginPath(); ctx.arc(-8,-17,7,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-14,-21); ctx.quadraticCurveTo(-25,-13,-15,-9); ctx.lineTo(-6,-13); ctx.closePath(); ctx.fill();
        // کلاه نوک‌تیز
        ctx.beginPath(); ctx.moveTo(-23,-22); ctx.lineTo(-5,-49); ctx.lineTo(2,-23); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-11,-22,17,3.2,-.12,0,Math.PI*2); ctx.fill();
        // دست و پا در حال پرواز
        ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(-2,-8); ctx.lineTo(14,-1); ctx.moveTo(4,15); ctx.lineTo(-9,25); ctx.moveTo(16,14); ctx.lineTo(28,20); ctx.stroke();
        // رد جادویی
        ctx.strokeStyle="rgba(255,192,107,.62)"; ctx.lineWidth=1.6; ctx.setLineDash([3,6]); ctx.beginPath(); ctx.moveTo(-56,27); ctx.quadraticCurveTo(-24,35,3,24); ctx.stroke(); ctx.setLineDash([]);
        ctx.restore();
    }

    function drawMotes(time) {
        motes.forEach(m => {
            if (!reducedMotion) m.y -= m.lift;
            if (m.y < .05) m.y = 1.02;
            const a=.12+(Math.sin(time*m.speed+m.phase)+1)*.19;
            roundedGlow(m.x*width,m.y*height, m.r*3, `rgba(255,178,93,${a*.45})`, "rgba(255,140,55,0)");
            ctx.fillStyle=`rgba(255,205,133,${a})`; ctx.beginPath(); ctx.arc(m.x*width,m.y*height,m.r,0,Math.PI*2); ctx.fill();
        });
    }

    function drawLightning(time) {
        if (time >= nextLightningAt) {
            lightningStartedAt = time; lightningX = rand(.18,.82); nextLightningAt = time + rand(8500,11500);
        }
        const elapsed=time-lightningStartedAt;
        if(elapsed<0 || elapsed>210) return;
        const flash=elapsed<36?.22:elapsed<78?.07:elapsed<112?.025:0;
        if(flash>0){ctx.fillStyle=`rgba(215,220,255,${flash})`;ctx.fillRect(0,0,width,height);}
        if(elapsed<95){
            ctx.save(); ctx.strokeStyle=`rgba(235,232,255,${.92-elapsed/130})`; ctx.lineWidth=2.4; ctx.shadowColor="#b7baff"; ctx.shadowBlur=19;
            ctx.beginPath(); let x=lightningX*width,y=0; ctx.moveTo(x,y);
            while(y<height*.48){x+=rand(-34,34);y+=rand(18,38);ctx.lineTo(x,y);} ctx.stroke(); ctx.restore();
        }
    }

    function renderSky(time = performance.now()) {
        if (!width || !height) return;
        ctx.clearRect(0,0,width,height);
        if (isHalloweenSeason && !isDay) {
            stars.forEach(star=>{
                if(!reducedMotion){star.alpha+=star.speed*star.dir;if(star.alpha>.98||star.alpha<.17)star.dir*=-1;}
                ctx.globalAlpha=star.alpha; ctx.fillStyle="#fff6e8"; ctx.beginPath();ctx.arc(star.x*width,star.y*height,star.r,0,Math.PI*2);ctx.fill();
                if(star.r>1.3){ctx.strokeStyle=`rgba(255,242,222,${star.alpha*.34})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(star.x*width-3,star.y*height);ctx.lineTo(star.x*width+3,star.y*height);ctx.moveTo(star.x*width,star.y*height-3);ctx.lineTo(star.x*width,star.y*height+3);ctx.stroke();}
            }); ctx.globalAlpha=1;
            drawMoon(time);
        } else if (isDay) drawSun(time);
        else {
            stars.slice(0,120).forEach(star=>{ctx.fillStyle=`rgba(255,255,255,${star.alpha*.78})`;ctx.beginPath();ctx.arc(star.x*width,star.y*height,star.r,0,Math.PI*2);ctx.fill();});
        }

        // خانه و جنگل فقط در بازهٔ فصلی نمایش داده می‌شوند تا تم عادی دست‌نخورده بماند.
        if (isHalloweenSeason) {
            drawHills();
            const ground=height*.84;
            drawTree(width*.035,ground,clamp(width/1000,.56,1.28),-.1);
            drawTree(width*.13,ground+8,clamp(width/1250,.48,1.0),.08);
            drawTree(width*.91,ground+4,clamp(width/1050,.58,1.15),-.08);
            drawTree(width*.985,ground,clamp(width/900,.62,1.35),.12);
            drawHauntedHouse(width*.77,ground+26,clamp(width/760,.78,1.55),time,true);
            drawHauntedHouse(width*.31,ground+38,clamp(width/1250,.52,.92),time,false);
            drawHauntedHouse(width*.52,ground+45,clamp(width/1900,.34,.62),time,false);
        }

        // ابرها در روز عادی و در هر دو حالتِ تم هالووین نمایش داده می‌شوند.
        if (isHalloweenSeason || isDay) {
            clouds.forEach((cloud,i)=>{
                if(!reducedMotion){cloud.x+=cloud.speed*(isDay?1:.72);if(cloud.x>1.42)cloud.x=-.24;}
                drawCloud(cloud,time,isDay?(.3+(i%3)*.10):(.11+(i%3)*.045));
            });
        }

        if(isHalloweenSeason){
            bats.forEach((bat,i)=>{
                if(!reducedMotion){bat.x+=bat.vx*(isDay?.7:1);bat.y+=bat.vy;bat.angle+=bat.turn;
                    if(bat.x>1.13)bat.x=-.13;if(bat.x<-.13)bat.x=1.13;if(bat.y<.04||bat.y>.68)bat.vy*=-1;}
                if(!isDay || i<5) drawBat(bat,time);
            });
            if(isDay){drawWitch(time);drawLeaves();}
            else {drawFog(time);drawLightning(time);}
            drawMotes(time); drawPumpkinPatch(time);
        }
    }

    function animate(time) {
        if(!lastFrame || time-lastFrame>=30){renderSky(time);lastFrame=time;}
        if(!reducedMotion) requestAnimationFrame(animate);
    }

    const themeBtn=document.getElementById("themeToggle");
    function updateTheme(){
        document.body.classList.toggle("day-mode",isDay);
        themeBtn.textContent=isDay?"☀️":"🌙";
        themeBtn.setAttribute("aria-label",isDay?"تغییر به حالت شب":"تغییر به حالت روز");
        themeBtn.setAttribute("title",isDay?"حالت شب":"حالت روز");
        setSkyBackground(); renderSky(performance.now());
    }
    if(themeBtn) themeBtn.addEventListener("click",()=>{isDay=!isDay;updateTheme();});
    window.addEventListener("resize",resizeCanvas,{passive:true});
    if(motionQuery.addEventListener) motionQuery.addEventListener("change",event=>{
        reducedMotion=event.matches;
        if(!reducedMotion){lastFrame=0;requestAnimationFrame(animate);} else renderSky(performance.now());
    });
    setSkyBackground(); resizeCanvas();
    if(!reducedMotion) requestAnimationFrame(animate);
}
