// ===========================
// HIDDIFY_plas - script.js
// ===========================

// آیکون‌های SVG سیستم‌عامل‌ها؛ فرم اصلی آیکون‌ها حفظ شده است.
const OS_ICONS = {
    // SVG اختصاصی هر پلتفرم؛ نورها داخل خود شکل هستند و سایهٔ بیرونی سنگین ندارند.
    android: `<span class="os-icon os-icon--android" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><linearGradient id="androidShell" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d5ff8a"/><stop offset=".48" stop-color="#68c94b"/><stop offset="1" stop-color="#247d45"/></linearGradient><linearGradient id="androidHat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6b3ca4"/><stop offset="1" stop-color="#25133e"/></linearGradient></defs>
      <ellipse cx="32" cy="56" rx="20" ry="3.6" fill="#ff7b32" opacity=".34"/>
      <path d="M20 25 15 19M44 25l5-6" fill="none" stroke="#78e66b" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M17 29Q17 14 32 14T47 29V39Q47 44 42 44H22Q17 44 17 39Z" fill="url(#androidShell)" stroke="#b6ff83" stroke-width="1.2"/>
      <path d="M21 44h22v8q0 3-4 3H25q-4 0-4-3Z" fill="#45a952" stroke="#9cff75" stroke-width="1"/>
      <path d="M20 47 13 52M44 47l7 5" fill="none" stroke="#79df62" stroke-width="4" stroke-linecap="round"/>
      <path d="M25 54v4M39 54v4" fill="none" stroke="#a6f76a" stroke-width="4" stroke-linecap="round"/>
      <path d="M14 19 29 6Q32 3 35 7L51 20 43 22 21 22Z" fill="url(#androidHat)" stroke="#a886e6" stroke-width="1.1"/>
      <path d="M11 22Q30 18 54 22L51 25Q31 22 13 26Z" fill="#f18b43" stroke="#ffc36e" stroke-width="1"/>
      <path d="M22 29 29 32 23 37Z M42 29 35 32 41 37Z" fill="#ffb22d" stroke="#fff08a" stroke-width=".7"/>
      <path d="M24 39 28 37 31 40 34 37 39 39 36 42 27 42Z" fill="#4c261f" stroke="#ffd06a" stroke-width=".7"/>
      <path d="M27 39v2M32 39v2M36 39v2" stroke="#fff1a3" stroke-width=".8"/>
      <circle cx="32" cy="13" r="1.5" fill="#ffb44a"/>
    </svg></span>`,
    windows: `<span class="os-icon os-icon--windows" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><linearGradient id="winBlue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8ce8ff"/><stop offset="1" stop-color="#2771d9"/></linearGradient><linearGradient id="winAmber" x1="0" y1="0" x2="0.8" y2="1"><stop stop-color="#ffcb75"/><stop offset="1" stop-color="#e85a35"/></linearGradient></defs>
      <path d="M9 14 29 10V30H9Z" fill="url(#winBlue)" stroke="#c7f6ff" stroke-width="1.1"/><path d="M33 9 55 5V30H33Z" fill="url(#winAmber)" stroke="#ffd59a" stroke-width="1.1"/><path d="M9 34H29V54L9 50Z" fill="url(#winAmber)" stroke="#ffc58a" stroke-width="1.1"/><path d="M33 34H55V58L33 54Z" fill="url(#winBlue)" stroke="#b4eaff" stroke-width="1.1"/>
      <path d="M32 7V57M7 32H57" stroke="#26123b" stroke-width="3.4"/>
      <path d="M14 19 18 17 22 20 18 22Z M38 19 42 17 46 20 42 22Z" fill="#fff2a4"/><path d="M37 43 42 40 47 45 42 49Z" fill="#fff1a0"/>
      <path d="M16 43 22 42 20 47 16 47Z" fill="#2c1738"/>
      <path d="M18 59 26 56 31 60 38 56 46 59" fill="none" stroke="#ff9148" stroke-width="1.7" stroke-linecap="round"/>
    </svg></span>`,
    iphone: `<span class="os-icon os-icon--iphone" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><linearGradient id="iphoneFruit" x1=".15" y1="0" x2=".85" y2="1"><stop stop-color="#ffd26e"/><stop offset=".36" stop-color="#ff8b39"/><stop offset=".76" stop-color="#c53260"/><stop offset="1" stop-color="#61277e"/></linearGradient></defs>
      <ellipse cx="32" cy="57" rx="18" ry="3" fill="#ff7d35" opacity=".28"/>
      <path d="M31 18C24 12 13 18 11 29 8 43 17 55 26 54c3 0 4-2 7-2s5 2 8 2c8-1 16-13 12-25-3-9-12-13-20-8Z" fill="url(#iphoneFruit)" stroke="#ffd08a" stroke-width="1.2"/>
      <path d="M31 18Q27 9 35 5Q40 14 34 20" fill="#6ed16e" stroke="#b7ff95" stroke-width="1.1"/><path d="M33 11Q43 5 48 10Q43 17 34 15" fill="#8cf078" stroke="#cbff9b" stroke-width=".8"/>
      <path d="M17 31 27 34 20 40Z M47 31 37 34 44 40Z" fill="#351737" stroke="#ffe58a" stroke-width=".8"/>
      <path d="M18 43Q24 39 29 43L32 46 35 43Q41 39 47 43L43 48 38 47 33 51 28 47 22 48Z" fill="#35152d" stroke="#ffe08a" stroke-width="1"/>
      <path d="M22 44 24 47M30 45 31 48M38 45 37 48" stroke="#fff0a3" stroke-width="1.1"/>
    </svg></span>`,
    mac: `<span class="os-icon os-icon--mac" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><linearGradient id="macFruit" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d8a5ff"/><stop offset=".46" stop-color="#8751d0"/><stop offset="1" stop-color="#27256d"/></linearGradient></defs>
      <ellipse cx="32" cy="57" rx="18" ry="3" fill="#b981ff" opacity=".25"/>
      <path d="M31 19C24 13 13 18 11 29 8 42 17 55 26 54c3 0 4-2 7-2s5 2 8 2c8-1 16-13 12-25-3-9-12-13-20-8Z" fill="url(#macFruit)" stroke="#f0d4ff" stroke-width="1.2"/>
      <path d="M31 18Q27 9 35 5Q40 14 34 20" fill="#ff9a54" stroke="#ffda9b" stroke-width="1"/><path d="M33 11Q43 5 48 10Q43 17 34 15" fill="#8fe47b" stroke="#d7ffac" stroke-width=".8"/>
      <path d="M16 31 26 34 20 40Z M48 31 38 34 44 40Z" fill="#21153e" stroke="#d6bcff" stroke-width=".7"/>
      <path d="M19 44Q31 52 45 43L42 49 36 48 32 51 27 48 22 49Z" fill="#171239" stroke="#ffbd80" stroke-width="1"/>
      <path d="M8 25l3-2m44 0 3 2M18 14l2-3m26 3 2-3" stroke="#f3d0ff" stroke-width="1.5" stroke-linecap="round"/><path d="M48 27l2-4 2 4 4 1-4 2-2 4-2-4-4-2Z" fill="#ffe19c"/>
    </svg></span>`,
    tv: `<span class="os-icon os-icon--tv" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <rect x="7" y="13" width="50" height="36" rx="4" fill="#261b46" stroke="#c7b7ff" stroke-width="2"/><rect x="11" y="17" width="42" height="28" rx="2" fill="#354c81"/><path d="M12 41 24 28 31 35 40 23 53 40Z" fill="#11152e"/><path d="M28 38V28L34 22 40 28V38Z" fill="#ff9d4a"/><path d="M31 38V31H37V38" fill="#fff0a1"/><circle cx="45" cy="23" r="4" fill="#fff0a1"/><path d="M24 12l8-6 8 6" fill="none" stroke="#bca2ff" stroke-width="2"/><path d="M20 54H44" stroke="#ffad60" stroke-width="3" stroke-linecap="round"/>
    </svg></span>`,
    linux: `<span class="os-icon os-icon--linux" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><linearGradient id="penguinBody" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5b536d"/><stop offset=".5" stop-color="#17142a"/><stop offset="1" stop-color="#050713"/></linearGradient><linearGradient id="penguinBelly" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff7e5"/><stop offset="1" stop-color="#d8d4ed"/></linearGradient></defs>
      <ellipse cx="32" cy="58" rx="18" ry="3.2" fill="#ff9a35" opacity=".3"/>
      <path d="M19 28Q15 11 31 12Q48 11 46 30L49 47Q47 56 32 56Q17 56 15 47Z" fill="url(#penguinBody)" stroke="#a89acb" stroke-width="1.2"/>
      <path d="M24 31Q32 24 40 31L42 48Q39 53 32 53Q25 53 22 48Z" fill="url(#penguinBelly)" stroke="#fff5df" stroke-width=".8"/>
      <path d="M23 26 13 39 17 44 27 35M41 26 51 39 47 44 37 35" fill="#24223c" stroke="#82789d" stroke-width="1.2"/>
      <path d="M25 23 30 25 28 29 23 27ZM39 23 34 25 36 29 41 27Z" fill="#ffbc52" stroke="#fff0a5" stroke-width=".7"/><path d="M28 30 36 30 32 36Z" fill="#ff942f" stroke="#ffdb78" stroke-width=".8"/>
      <path d="M22 13 27 6 40 8 46 17 41 19 25 18Z" fill="#5a2d82" stroke="#caa5ff" stroke-width="1.1"/><path d="M19 17Q32 14 47 18L45 22Q32 19 20 22Z" fill="#ff8b42" stroke="#ffd18a" stroke-width="1"/><path d="M31 9l2-3 2 3" fill="none" stroke="#fff0ab" stroke-width="1.2"/>
      <path d="M22 54 18 58 28 58 30 55M42 54 46 58 36 58 34 55" fill="#ffab35" stroke="#ffdf82" stroke-width=".8"/>
    </svg></span>`
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
    else if (lowerText.includes("iphone") || lowerText.includes("ios")) osIcon = OS_ICONS.iphone;
    else if (lowerText.includes("mac") || lowerText.includes("apple")) osIcon = OS_ICONS.mac;
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

    const stars = Array.from({ length: 110 }, () => ({
        x: Math.random(), y: Math.random() * .78,
        r: rand(.45, 1.65), alpha: rand(.24, .95), speed: rand(.004, .018),
        dir: Math.random() < .5 ? -1 : 1, twinkle: Math.random() * Math.PI * 2
    }));
    const clouds = Array.from({ length: 4 }, (_, i) => ({
        x: (i / 5) * 1.35 - .12, y: rand(.08, .48), scale: rand(.56, 1.55),
        speed: rand(.00013, .00031) * (i % 2 ? 1 : .78), phase: rand(0, 8)
    }));
    const leaves = Array.from({ length: 21 }, () => ({
        x: Math.random(), y: Math.random(), size: rand(6.5, 12.5), speed: rand(.00010, .00034),
        drift: rand(-.00032, .00032), spin: rand(0, Math.PI * 2), spinSpeed: rand(-.018, .018),
        color: ["#f58a27", "#ffc04d", "#b94824", "#d96721", "#9d4c24", "#ffdb77"][Math.floor(Math.random() * 6)]
    }));
    const bats = Array.from({ length: 6 }, (_, i) => ({
        x: Math.random(), y: rand(.09, .62), vx: rand(.000055, .00017) * (Math.random() < .25 ? -1 : 1),
        vy: rand(-.000035, .000035), scale: rand(.50, .96), phase: rand(0, 10),
        angle: rand(-.18, .18), turn: rand(-.00032, .00032), type: i % 3
    }));
    const motes = Array.from({ length: 12 }, () => ({
        x: Math.random(), y: rand(.2, 1), r: rand(.7, 2.2), phase: rand(0, 10),
        speed: rand(.004, .018), lift: rand(.00003, .00012)
    }));
    let nextLightningAt = performance.now() + rand(8500, 11500);
    let lightningStartedAt = -10000;
    let lightningX = .5;

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.15);
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
        // ابرهای حجیم چندلایه با لبه‌های نرم و نور گرم/سرد؛ بدون سایه‌های سنگین.
        const x = cloud.x * width;
        const y = cloud.y * height + Math.sin(time * .00012 + cloud.phase) * 7;
        const scale = cloud.scale * clamp(width / 1150, .62, 1.42);
        ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale); ctx.globalAlpha = alpha;
        const base = ctx.createLinearGradient(0, -42, 0, 38);
        if (isDay) {
            base.addColorStop(0, "rgba(255,255,255,.98)");
            base.addColorStop(.42, "rgba(255,249,244,.91)");
            base.addColorStop(.78, "rgba(241,218,222,.76)");
            base.addColorStop(1, "rgba(179,176,208,.43)");
        } else {
            base.addColorStop(0, "rgba(221,216,255,.29)");
            base.addColorStop(.45, "rgba(144,135,190,.23)");
            base.addColorStop(1, "rgba(42,40,78,.12)");
        }
        ctx.fillStyle = base;
        ctx.beginPath();
        ctx.ellipse(0, 5, 61, 20, 0, 0, Math.PI * 2);
        ctx.ellipse(-42, 0, 27, 19, -.16, 0, Math.PI * 2);
        ctx.ellipse(-27, -15, 25, 28, -.18, 0, Math.PI * 2);
        ctx.ellipse(-4, -24, 30, 34, .02, 0, Math.PI * 2);
        ctx.ellipse(23, -18, 31, 30, .09, 0, Math.PI * 2);
        ctx.ellipse(47, -4, 28, 22, .12, 0, Math.PI * 2);
        ctx.ellipse(62, 8, 21, 13, 0, 0, Math.PI * 2);
        ctx.fill();
        // نور روی قله‌های ابر
        const highlight = ctx.createLinearGradient(0, -42, 0, 0);
        highlight.addColorStop(0, isDay ? "rgba(255,255,255,.66)" : "rgba(221,218,255,.22)");
        highlight.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = highlight; ctx.beginPath();
        ctx.ellipse(-8, -25, 22, 18, -.08, Math.PI, Math.PI * 2);
        ctx.ellipse(21, -18, 23, 16, .1, Math.PI, Math.PI * 2); ctx.fill();
        // لایهٔ پایینی رنگی، مثل ابرهای غروب
        ctx.fillStyle = isDay ? "rgba(240,174,170,.18)" : "rgba(92,77,143,.16)";
        ctx.beginPath(); ctx.ellipse(6, 14, 48, 8, 0, 0, Math.PI * 2); ctx.fill();
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
        // خفاش با بال‌های منحنی و پرده‌دار، گوش‌های تیز و چشم‌های کوچک.
        const flap = reducedMotion ? 0 : Math.sin(time * .0062 + bat.phase) * 8.5;
        const x = bat.x * width, y = bat.y * height + (reducedMotion ? 0 : Math.sin(time * .00052 + bat.phase) * 10);
        ctx.save(); ctx.translate(x, y);
        ctx.rotate(bat.angle + (reducedMotion ? 0 : Math.sin(time * .00028 + bat.phase) * .045));
        ctx.scale(bat.scale, bat.scale);
        const wingFill = ctx.createLinearGradient(0, -20, 0, 22);
        wingFill.addColorStop(0, "#21152f"); wingFill.addColorStop(1, "#080814");
        ctx.fillStyle = wingFill; ctx.strokeStyle = "rgba(155,91,188,.82)"; ctx.lineWidth = 1.15;
        // بال چپ، با بریدگی‌های نرم شبیه خفاش واقعی
        ctx.save(); ctx.translate(-4, -1); ctx.rotate(-flap * .008);
        ctx.beginPath(); ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-7, -9, -16, -8);
        ctx.quadraticCurveTo(-27, -20, -39, -24);
        ctx.lineTo(-34, -8);
        ctx.quadraticCurveTo(-43, -3, -49, 1);
        ctx.quadraticCurveTo(-41, 8, -31, 11);
        ctx.quadraticCurveTo(-27, 4, -21, 15);
        ctx.quadraticCurveTo(-16, 7, -9, 13);
        ctx.quadraticCurveTo(-4, 5, 0, 5); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = "rgba(191,128,215,.55)"; ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(-5, 2); ctx.lineTo(-37, -19); ctx.moveTo(-10, 5); ctx.lineTo(-43, 1); ctx.moveTo(-18, 8); ctx.lineTo(-29, 8); ctx.stroke(); ctx.restore();
        // بال راست
        ctx.save(); ctx.translate(4, -1); ctx.scale(-1, 1); ctx.rotate(-flap * .008);
        ctx.fillStyle = wingFill; ctx.strokeStyle = "rgba(155,91,188,.82)"; ctx.lineWidth = 1.15;
        ctx.beginPath(); ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-7, -9, -16, -8);
        ctx.quadraticCurveTo(-27, -20, -39, -24);
        ctx.lineTo(-34, -8);
        ctx.quadraticCurveTo(-43, -3, -49, 1);
        ctx.quadraticCurveTo(-41, 8, -31, 11);
        ctx.quadraticCurveTo(-27, 4, -21, 15);
        ctx.quadraticCurveTo(-16, 7, -9, 13);
        ctx.quadraticCurveTo(-4, 5, 0, 5); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = "rgba(191,128,215,.55)"; ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(-5, 2); ctx.lineTo(-37, -19); ctx.moveTo(-10, 5); ctx.lineTo(-43, 1); ctx.moveTo(-18, 8); ctx.lineTo(-29, 8); ctx.stroke(); ctx.restore();
        // سر، گوش‌ها و بدن
        ctx.fillStyle = "#090713"; ctx.strokeStyle = "rgba(155,91,188,.88)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(-8, -3); ctx.lineTo(-11, -15); ctx.lineTo(-3, -9); ctx.quadraticCurveTo(0, -12, 3, -9); ctx.lineTo(11, -15); ctx.lineTo(8, -3); ctx.quadraticCurveTo(12, 7, 4, 11); ctx.lineTo(0, 15); ctx.lineTo(-4, 11); ctx.quadraticCurveTo(-12, 7, -8, -3); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = isHalloweenSeason ? "#ffb252" : "#d5cbff";
        ctx.beginPath(); ctx.ellipse(-3.5, -2, 1.25, 1.8, -.2, 0, Math.PI * 2); ctx.ellipse(3.5, -2, 1.25, 1.8, .2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#120d1d"; ctx.beginPath(); ctx.moveTo(-3, 11); ctx.lineTo(0, 15); ctx.lineTo(3, 11); ctx.closePath(); ctx.fill();
        ctx.restore();
    }

    // سه روح کم‌تعداد برای ایجاد عمق؛ حرکت آن‌ها آرام نگه داشته شده است.
    const ghosts = [
        { x: .19, y: .57, size: .74, phase: .4, alpha: .74 },
        { x: .66, y: .49, size: .62, phase: 2.2, alpha: .62 },
        { x: .88, y: .63, size: .82, phase: 4.1, alpha: .7 }
    ];

    function drawGhost(ghost, time) {
        const bob = reducedMotion ? 0 : Math.sin(time * .00042 + ghost.phase) * 9;
        const x = width * ghost.x + Math.sin(time * .00018 + ghost.phase) * 8;
        const y = height * ghost.y + bob;
        const s = ghost.size * clamp(width / 1050, .72, 1.08);
        ctx.save();
        ctx.translate(x, y); ctx.scale(s, s);
        ctx.globalAlpha = ghost.alpha;
        ctx.shadowColor = isDay ? "rgba(255,226,192,.45)" : "rgba(190,178,255,.6)";
        ctx.shadowBlur = 12;
        const body = ctx.createLinearGradient(0, -31, 0, 38);
        body.addColorStop(0, "rgba(255,255,255,.94)");
        body.addColorStop(.68, isDay ? "rgba(250,237,255,.8)" : "rgba(207,207,239,.83)");
        body.addColorStop(1, "rgba(165,159,208,.12)");
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.moveTo(-19, 28);
        ctx.lineTo(-19, -4);
        ctx.bezierCurveTo(-20, -23, -11, -34, 0, -34);
        ctx.bezierCurveTo(13, -34, 20, -22, 19, -4);
        ctx.lineTo(19, 27);
        ctx.quadraticCurveTo(12, 21, 6, 29);
        ctx.quadraticCurveTo(0, 36, -6, 29);
        ctx.quadraticCurveTo(-13, 22, -19, 28);
        ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0;
        // چهرهٔ سادهٔ روح
        ctx.fillStyle = "rgba(39,24,62,.92)";
        ctx.beginPath(); ctx.ellipse(-6, -9, 2.6, 4.4, -.1, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(6, -9, 2.6, 4.4, .1, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 3, 3.1, 4.3, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }

    function drawGhosts(time) {
        ghosts.forEach(ghost => drawGhost(ghost, time));
    }

    function drawHauntedHouse(cx, ground, scale, time, foreground = false) {
        // عمارت گوتیک با برج‌های باریک، شیروانی‌های چندلایه، پنجره‌های نوک‌قوسی و جزئیات سنگی.
        ctx.save(); ctx.translate(cx, ground); ctx.scale(scale, scale);
        const wall = isDay ? "rgba(71,58,79,.78)" : "rgba(8,7,25,.97)";
        const wallLight = isDay ? "rgba(114,91,112,.68)" : "rgba(30,22,53,.96)";
        const roof = isDay ? "rgba(39,34,58,.9)" : "rgba(4,4,19,.99)";
        const trim = isDay ? "rgba(255,205,150,.38)" : "rgba(140,100,179,.52)";
        ctx.lineWidth = 1.25; ctx.strokeStyle = trim;
        // سایهٔ زمین و خط پایه
        ctx.fillStyle = isDay ? "rgba(50,38,56,.18)" : "rgba(0,0,12,.34)";
        ctx.beginPath(); ctx.ellipse(0, 2, 153, 10, 0, 0, Math.PI * 2); ctx.fill();
        // بدنه و بال‌های کناری
        ctx.fillStyle = wall; ctx.fillRect(-73, -107, 146, 107);
        ctx.fillStyle = wallLight; ctx.fillRect(-111, -70, 39, 70); ctx.fillRect(73, -77, 39, 77);
        ctx.strokeRect(-73, -107, 146, 107);
        // سقف اصلی با دو لایهٔ شیروانی
        ctx.fillStyle = roof; ctx.beginPath(); ctx.moveTo(-88,-105); ctx.lineTo(-4,-166); ctx.lineTo(82,-105); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-79,-105); ctx.lineTo(-4,-158); ctx.lineTo(73,-105); ctx.closePath(); ctx.strokeStyle = "rgba(173,125,191,.28)"; ctx.stroke();
        // برج مرکزی بلند و برج‌های باریک نامتقارن
        ctx.fillStyle = wall; ctx.fillRect(-23,-153,39,51);
        ctx.fillStyle = roof;
        ctx.beginPath(); ctx.moveTo(-31,-151); ctx.lineTo(-4,-207); ctx.lineTo(24,-151); ctx.closePath(); ctx.fill(); ctx.strokeStyle = trim; ctx.stroke();
        ctx.fillStyle = wall; ctx.fillRect(-101,-122,28,122); ctx.fillRect(73,-133,31,133);
        ctx.fillStyle = roof;
        ctx.beginPath(); ctx.moveTo(-108,-121); ctx.lineTo(-87,-171); ctx.lineTo(-68,-121); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(66,-132); ctx.lineTo(88,-189); ctx.lineTo(111,-132); ctx.closePath(); ctx.fill(); ctx.stroke();
        // نوک‌های فلزی و پرچم کوچک
        ctx.strokeStyle = "rgba(255,174,95,.58)"; ctx.lineWidth = 1.3;
        [[-87,-171],[ -4,-207],[88,-189]].forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y-13);ctx.stroke();ctx.beginPath();ctx.moveTo(x,y-12);ctx.lineTo(x+9,y-9);ctx.lineTo(x,y-5);ctx.stroke();});
        // شیروانی‌های فرعی و پنجرهٔ زیرشیروانی
        ctx.fillStyle = roof; ctx.beginPath(); ctx.moveTo(-116,-69); ctx.lineTo(-92,-101); ctx.lineTo(-69,-69); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(66,-76); ctx.lineTo(92,-112); ctx.lineTo(118,-76); ctx.closePath(); ctx.fill(); ctx.stroke();
        // خط‌های سنگ و تیرک‌ها، به تعداد محدود برای حفظ کارایی
        ctx.strokeStyle = isDay ? "rgba(255,216,174,.13)" : "rgba(159,124,190,.16)"; ctx.lineWidth = .8;
        for(let yy=-91; yy<=-19; yy+=18){ctx.beginPath();ctx.moveTo(-67,yy);ctx.lineTo(-45,yy);ctx.moveTo(48,yy+5);ctx.lineTo(68,yy+5);ctx.stroke();}
        // پنجره‌های نوک‌قوسی با نور هالووینی
        const glow = .72 + .2 * Math.sin(time * .0017 + cx * .013);
        ctx.shadowColor = isDay ? "rgba(255,190,100,.42)" : "rgba(255,115,43,.7)";
        ctx.shadowBlur = foreground ? 4 : 3;
        const windows = [[-52,-78,13,23],[-20,-79,13,24],[18,-79,13,24],[47,-77,12,22],[-91,-101,8,16],[83,-110,9,18],[-9,-135,10,18]];
        windows.forEach(([x,y,w,h],i)=>{
            ctx.fillStyle = i%3===0 ? `rgba(255,208,111,${isDay?.76:glow})` : `rgba(255,151,60,${isDay?.65:glow})`;
            ctx.beginPath(); ctx.moveTo(x,y+h); ctx.lineTo(x,y+6); ctx.quadraticCurveTo(x+w/2,y-3,x+w,y+6); ctx.lineTo(x+w,y+h); ctx.closePath(); ctx.fill();
            ctx.fillStyle = "rgba(55,26,32,.8)"; ctx.fillRect(x+w*.45,y+4,w*.12,h-4);
        });
        ctx.shadowBlur = 0;
        // در بزرگ با پنل و حلقهٔ فلزی
        ctx.fillStyle = isDay ? "rgba(25,18,35,.92)" : "rgba(2,2,13,.99)";
        ctx.beginPath(); ctx.moveTo(-17,0); ctx.lineTo(-17,-42); ctx.quadraticCurveTo(0,-62,17,-42); ctx.lineTo(17,0); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = trim; ctx.stroke(); ctx.beginPath(); ctx.arc(9,-23,1.8,0,Math.PI*2); ctx.fillStyle="#ffb45d"; ctx.fill();
        // پله‌ها
        ctx.strokeStyle = isDay ? "rgba(255,208,163,.32)" : "rgba(137,104,164,.4)"; ctx.lineWidth = 1.6;
        for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-22-i*4,-i*4);ctx.lineTo(22+i*4,-i*4);ctx.stroke();}
        // نردهٔ جلویی و نیزه‌ها فقط در بنای پیش‌زمینه
        if (foreground) {
            ctx.strokeStyle = "rgba(8,5,20,.9)"; ctx.lineWidth = 2.4;
            for(let i=-136;i<=136;i+=17){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,-(i%34===0?23:17));ctx.lineTo(i-3,-(i%34===0?18:12));ctx.stroke();}
            ctx.beginPath();ctx.moveTo(-143,-13);ctx.lineTo(143,-13);ctx.moveTo(-143,-3);ctx.lineTo(143,-3);ctx.stroke();
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
        // کدوهای متفاوت با شیارهای برجسته و چهره‌های حکاکی‌شدهٔ متنوع.
        const wave = Math.sin(time * (.0021 + (variant % 3) * .00018) + x * .013) * .5 + .5;
        const irregular = Math.sin(time * .0065 + y * .12 + variant) * .075 + Math.sin(time * .010 + x * .017) * .055;
        const flicker = clamp(.78 + wave * .17 + irregular, .58, 1.02);
        const shape = variant % 4;
        ctx.save(); ctx.translate(x, y); ctx.scale(scale * (shape===1?1.12:shape===2?.9:1), scale * (shape===3?1.1:shape===1?.9:1)); ctx.globalAlpha = alpha;
        // هالهٔ نزدیک و کنترل‌شده برای جلوگیری از مصرف زیاد GPU
        roundedGlow(0, -5, 48 * flicker, `rgba(255,111,29,${.23*flicker})`, "rgba(255,80,22,0)");
        const body = ctx.createLinearGradient(-29,-25,28,29);
        body.addColorStop(0, shape===2 ? "#ffc65f" : "#ffb74b");
        body.addColorStop(.34, shape===3 ? "#ff9230" : "#fa751d");
        body.addColorStop(.72, "#d94b15"); body.addColorStop(1, "#6e2519");
        ctx.fillStyle = body; ctx.strokeStyle = "rgba(97,35,15,.78)"; ctx.lineWidth = 1.1;
        // پوستهٔ یکپارچه
        ctx.beginPath(); ctx.moveTo(0,-25);
        ctx.bezierCurveTo(-10,-30,-29,-24,-32,-8);
        ctx.bezierCurveTo(-38,8,-25,24,-11,26);
        ctx.quadraticCurveTo(0,31,11,26);
        ctx.bezierCurveTo(27,22,37,7,31,-8);
        ctx.bezierCurveTo(26,-24,10,-30,0,-25); ctx.closePath(); ctx.fill(); ctx.stroke();
        // برجستگی‌های پنج‌گانهٔ کدو
        for(let i=-2;i<=2;i++){
            ctx.beginPath(); ctx.ellipse(i*12,0, shape===2?9.4:10.7, 22-Math.abs(i)*1.4, 0,0,Math.PI*2);
            ctx.strokeStyle = i===0 ? "rgba(255,191,90,.5)" : "rgba(102,36,15,.42)"; ctx.lineWidth = i===0 ? 1.35 : .9; ctx.stroke();
        }
        // بازتاب بالا و ساقهٔ خمیده با برگ پیچک
        const shine=ctx.createLinearGradient(-15,-25,8,-2); shine.addColorStop(0,"rgba(255,230,157,.42)"); shine.addColorStop(1,"rgba(255,230,157,0)");
        ctx.fillStyle=shine; ctx.beginPath(); ctx.ellipse(-12,-12,8,12,-.42,0,Math.PI*2); ctx.fill();
        ctx.fillStyle = "#526b2c"; ctx.strokeStyle = "#9ab653"; ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(-5,-23); ctx.quadraticCurveTo(-10,-34,-2,-39); ctx.quadraticCurveTo(6,-34,3,-22); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(1,-31); ctx.quadraticCurveTo(12,-39,17,-32); ctx.quadraticCurveTo(10,-26,2,-29); ctx.closePath(); ctx.fill();
        // نور حکاکی‌ها درون خود صورت
        ctx.shadowColor = "#ffb936"; ctx.shadowBlur = 5 * flicker;
        ctx.fillStyle = `rgba(255,228,112,${.83*flicker})`;
        if(shape===0){ // چشم‌های شیطانی باریک و دهان دندانه‌دار
            ctx.beginPath();ctx.moveTo(-22,-8);ctx.lineTo(-7,-3);ctx.lineTo(-15,5);ctx.closePath();ctx.fill();
            ctx.beginPath();ctx.moveTo(7,-3);ctx.lineTo(22,-8);ctx.lineTo(15,5);ctx.closePath();ctx.fill();
            ctx.beginPath();ctx.moveTo(-17,9);ctx.lineTo(-8,11);ctx.lineTo(-4,9);ctx.lineTo(0,13);ctx.lineTo(5,9);ctx.lineTo(10,11);ctx.lineTo(17,8);ctx.lineTo(13,19);ctx.lineTo(7,16);ctx.lineTo(0,21);ctx.lineTo(-7,16);ctx.lineTo(-13,19);ctx.closePath();ctx.fill();
        } else if(shape===1){ // چشم‌های گرد و لبخند بزرگ
            ctx.beginPath();ctx.ellipse(-12,-3,5,7,-.18,0,Math.PI*2);ctx.ellipse(12,-3,5,7,.18,0,Math.PI*2);ctx.fill();
            ctx.beginPath();ctx.moveTo(-18,8);ctx.quadraticCurveTo(0,27,18,8);ctx.quadraticCurveTo(0,15,-18,8);ctx.closePath();ctx.fill();
            ctx.fillStyle="#713018";ctx.fillRect(-7,14,4,5);ctx.fillRect(4,14,4,5);
        } else if(shape===2){ // نگاه نامتقارن با ستارهٔ جادویی
            ctx.beginPath();ctx.moveTo(-23,-2);ctx.lineTo(-7,-7);ctx.lineTo(-12,6);ctx.closePath();ctx.fill();
            ctx.beginPath();ctx.ellipse(12,-2,4,6,.12,0,Math.PI*2);ctx.fill();
            ctx.beginPath();ctx.moveTo(-15,11);ctx.quadraticCurveTo(0,17,15,8);ctx.lineTo(10,20);ctx.lineTo(-8,19);ctx.closePath();ctx.fill();
        } else { // چشم‌های ستاره‌ای و لبخند کلاسیک
            for(const ex of [-12,12]){ctx.beginPath();ctx.moveTo(ex,-10);ctx.lineTo(ex+3,-4);ctx.lineTo(ex+9,-3);ctx.lineTo(ex+4,2);ctx.lineTo(ex+5,8);ctx.lineTo(ex,4);ctx.lineTo(ex-5,8);ctx.lineTo(ex-4,2);ctx.lineTo(ex-9,-3);ctx.lineTo(ex-3,-4);ctx.closePath();ctx.fill();}
            ctx.beginPath();ctx.moveTo(-16,10);ctx.lineTo(16,10);ctx.lineTo(12,20);ctx.lineTo(6,16);ctx.lineTo(1,21);ctx.lineTo(-5,16);ctx.lineTo(-11,20);ctx.closePath();ctx.fill();
        }
        ctx.shadowBlur=0;
        // رگه‌های ساقه تا بدنه
        ctx.strokeStyle = "rgba(255,193,89,.48)"; ctx.lineWidth = .8;
        ctx.beginPath();ctx.moveTo(0,-21);ctx.quadraticCurveTo(-3,-10,-2,-4);ctx.moveTo(0,-20);ctx.quadraticCurveTo(6,-10,5,-5);ctx.stroke();
        ctx.restore();
    }

    function drawPumpkinPatch(time) {
        const scaleBase = clamp(width / 1000, .56, 1.22);
        const row = [
            [.035, .958, 1.18], [.14, .979, .62], [.245, .99, .43],
            [.755, .99, .43], [.86, .974, .72], [.965, .955, 1.22]
        ];
        row.forEach((p,i) => drawPumpkin(width*p[0], height*p[1], p[2]*scaleBase, time, i % 2 === 1 ? .82 : .98, i));
        // چند کدوی کوچک‌تر برای عمق صحنه، بدون شلوغ کردن تصویر
        for (let i=0;i<3;i++) {
            const x = width * (.36 + i * .14), y = height * (.989 + (i%2)*.008);
            drawPumpkin(x,y,scaleBase*(.27 + (i%3)*.06),time,.8,i+6);
        }
    }

    function drawFog(time) {
        for (let i=0;i<3;i++) {
            const y = height*(.76 + i*.065);
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
        // برگ افرا با چند نوک و رگبرگ؛ سایزش کمی بزرگ‌تر تا در موبایل هم به‌وضوح برگ دیده شود.
        leaves.forEach(leaf => {
            if (!reducedMotion) {
                leaf.y += leaf.speed; leaf.x += leaf.drift + Math.sin(leaf.y * 10 + leaf.spin) * .00022; leaf.spin += leaf.spinSpeed;
                if (leaf.y > 1.04) { leaf.y = -.04; leaf.x = Math.random(); }
                if (leaf.x < -.04) leaf.x = 1.04; if (leaf.x > 1.04) leaf.x = -.04;
            }
            const x = leaf.x * width, y = leaf.y * height;
            ctx.save(); ctx.translate(x, y); ctx.rotate(leaf.spin);
            const size = leaf.size; ctx.scale(size, size * 1.12);
            ctx.fillStyle = leaf.color; ctx.globalAlpha = .88;
            ctx.beginPath();
            ctx.moveTo(0,.95);
            ctx.quadraticCurveTo(-.12,.61,-.39,.64); ctx.lineTo(-.31,.35); ctx.lineTo(-.73,.42);
            ctx.lineTo(-.55,.10); ctx.lineTo(-.98,-.03); ctx.lineTo(-.52,-.18);
            ctx.lineTo(-.65,-.55); ctx.lineTo(-.27,-.36); ctx.lineTo(-.13,-.9);
            ctx.lineTo(.02,-.52); ctx.lineTo(.24,-.91); ctx.lineTo(.3,-.37);
            ctx.lineTo(.68,-.56); ctx.lineTo(.52,-.18); ctx.lineTo(.99,-.02);
            ctx.lineTo(.55,.11); ctx.lineTo(.75,.42); ctx.lineTo(.34,.34);
            ctx.lineTo(.4,.65); ctx.quadraticCurveTo(.12,.61,0,.95); ctx.closePath(); ctx.fill();
            // رگبرگ اصلی و سه رگبرگ فرعی
            ctx.strokeStyle = "rgba(255,225,161,.78)"; ctx.lineWidth = .055; ctx.lineCap = "round";
            ctx.beginPath(); ctx.moveTo(0,.83); ctx.lineTo(0,-.73);
            ctx.moveTo(0,.19); ctx.lineTo(-.43,-.14); ctx.moveTo(0,.02); ctx.lineTo(.43,-.15);
            ctx.moveTo(0,-.25); ctx.lineTo(-.34,-.4); ctx.moveTo(0,-.34); ctx.lineTo(.36,-.42); ctx.stroke();
            ctx.strokeStyle = "rgba(106,54,28,.48)"; ctx.lineWidth = .04; ctx.beginPath(); ctx.moveTo(0,.83); ctx.lineTo(0,1.2); ctx.stroke();
            ctx.restore();
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
            const ground=height*.77;
            // در موبایل هم عمارت وسط قاب می‌ماند و پشت کارت‌ها گم نمی‌شود.
            drawTree(width*.035,ground+18,clamp(width/1000,.56,1.2),-.1);
            drawTree(width*.13,ground+22,clamp(width/1250,.46,.92),.08);
            drawTree(width*.91,ground+15,clamp(width/1050,.54,1.08),-.08);
            drawTree(width*.985,ground+12,clamp(width/900,.58,1.22),.12);
            drawHauntedHouse(width*.78,ground+10,clamp(width/660,.68,1.38),time,true);
            drawHauntedHouse(width*.23,ground+22,clamp(width/1200,.44,.84),time,false);
            drawHauntedHouse(width*.52,ground+26,clamp(width/1750,.32,.58),time,false);
        }

        // ابرها در روز عادی و در هر دو حالتِ تم هالووین نمایش داده می‌شوند.
        if (isHalloweenSeason || isDay) {
            clouds.forEach((cloud,i)=>{
                if(!reducedMotion){cloud.x+=cloud.speed*(isDay?1:.72);if(cloud.x>1.42)cloud.x=-.24;}
                drawCloud(cloud,time,isDay?(.3+(i%3)*.10):(.11+(i%3)*.045));
            });
        }

        if(isHalloweenSeason){
            drawGhosts(time);
            bats.forEach((bat,i)=>{
                if(!reducedMotion){bat.x+=bat.vx*(isDay?.7:1);bat.y+=bat.vy;bat.angle+=bat.turn;
                    if(bat.x>1.13)bat.x=-.13;if(bat.x<-.13)bat.x=1.13;if(bat.y<.04||bat.y>.68)bat.vy*=-1;}
                if(!isDay || i<3) drawBat(bat,time);
            });
            if(isDay){drawWitch(time);drawLeaves();}
            else {drawFog(time);drawLightning(time);}
            drawMotes(time); drawPumpkinPatch(time);
        }
    }

    function animate(time) {
        if(!lastFrame || time-lastFrame>=50){renderSky(time);lastFrame=time;}
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
