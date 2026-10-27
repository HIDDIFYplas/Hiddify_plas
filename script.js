// ===========================
// HIDDIFY_plas - script.js
// ===========================

// آیکون‌های SVG سیستم‌عامل‌ها؛ فرم اصلی آیکون‌ها حفظ شده است.
const OS_ICONS = {
    // آیکون‌های هالووینی SVG؛ نور داخل خود شکل است (بدون فیلتر و سایهٔ سنگین) تا روی همهٔ دستگاه‌ها روان بماند.
    android: `<span class="os-icon os-icon--android" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs>
        <linearGradient id="adBody" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#c4f979"/><stop offset=".55" stop-color="#5fbf3f"/><stop offset="1" stop-color="#26763a"/></linearGradient>
        <linearGradient id="adHat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8a52c9"/><stop offset="1" stop-color="#2a1448"/></linearGradient>
        <radialGradient id="adGlow"><stop stop-color="#ff8a2a" stop-opacity=".5"/><stop offset="1" stop-color="#ff8a2a" stop-opacity="0"/></radialGradient>
      </defs>
      <circle cx="32" cy="38" r="30" fill="url(#adGlow)"/>
      <rect x="22" y="46" width="7" height="12" rx="3.5" fill="#4aa838"/><rect x="35" y="46" width="7" height="12" rx="3.5" fill="#4aa838"/>
      <rect x="8.5" y="33" width="7" height="16" rx="3.5" fill="#76d54c"/><rect x="48.5" y="33" width="7" height="16" rx="3.5" fill="#76d54c"/>
      <path d="M17 33H47V46Q47 50 43 50H21Q17 50 17 46Z" fill="url(#adBody)" stroke="#dcffa8" stroke-width="1"/>
      <path d="M16 33Q16 15 32 15T48 33Z" fill="url(#adBody)" stroke="#dcffa8" stroke-width="1"/>
      <path d="M20.5 28 29 24.5 28 31Z M43.5 28 35 24.5 36 31Z" fill="#ffc23a" stroke="#fff3a8" stroke-width=".7" stroke-linejoin="round"/>
      <path d="M23 38l3 3 3-3 3 3 3-3 3 3 3-3" fill="none" stroke="#1f4a1c" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M20.5 16Q28 11 29.5 5Q31 -.5 40.5 3.5Q35.5 6.5 43.5 16Z" fill="url(#adHat)" stroke="#c4a0f5" stroke-width="1" stroke-linejoin="round"/>
      <ellipse cx="32" cy="16.5" rx="19.5" ry="4" fill="#3a1c63" stroke="#c4a0f5" stroke-width="1"/>
      <path d="M22.5 14.4Q32 17.6 41.5 14.4L42 11.8Q32 14.8 22 11.8Z" fill="#ff8a2a"/><rect x="30" y="12.2" width="4" height="3.4" rx=".6" fill="#ffd27a"/>
    </svg></span>`,
    windows: `<span class="os-icon os-icon--windows" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs>
        <linearGradient id="wnWall" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#47307d"/><stop offset="1" stop-color="#170c30"/></linearGradient>
        <linearGradient id="wnRoof" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6a3aa6"/><stop offset="1" stop-color="#1f0e3b"/></linearGradient>
        <linearGradient id="wnPane" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffe88a"/><stop offset=".55" stop-color="#ff9b30"/><stop offset="1" stop-color="#ff5a1c"/></linearGradient>
        <radialGradient id="wnGlow"><stop stop-color="#ff7a24" stop-opacity=".5"/><stop offset="1" stop-color="#ff7a24" stop-opacity="0"/></radialGradient>
      </defs>
      <circle cx="32" cy="38" r="30" fill="url(#wnGlow)"/>
      <path d="M43 20V7h6.5v16Z" fill="#2b1650" stroke="#a07ae0" stroke-width=".9"/><path d="M42 7h8.5" stroke="#a07ae0" stroke-width="1.4"/>
      <rect x="11" y="29" width="42" height="28" fill="url(#wnWall)" stroke="#a98ae6" stroke-width="1"/>
      <path d="M5.5 32Q23 26 32 6Q41 26 58.5 32Z" fill="url(#wnRoof)" stroke="#d2b4ff" stroke-width="1.1" stroke-linejoin="round"/>
      <rect x="15.5" y="35" width="15" height="9.5" rx=".8" fill="url(#wnPane)"/><rect x="33.5" y="35" width="15" height="9.5" rx=".8" fill="url(#wnPane)"/>
      <rect x="15.5" y="47" width="15" height="9" rx=".8" fill="url(#wnPane)"/><rect x="33.5" y="47" width="15" height="9" rx=".8" fill="url(#wnPane)"/>
      <path d="M32 34V57M14 45.8H50" stroke="#190c32" stroke-width="2"/>
      <ellipse cx="32" cy="58.5" rx="22" ry="2.8" fill="#ff7b32" opacity=".3"/>
    </svg></span>`,
    iphone: `<span class="os-icon os-icon--iphone" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs>
        <linearGradient id="ipFruit" x1=".2" y1="0" x2=".8" y2="1"><stop stop-color="#ffcb66"/><stop offset=".45" stop-color="#ff7e1f"/><stop offset="1" stop-color="#b8330f"/></linearGradient>
        <radialGradient id="ipGlow"><stop stop-color="#ff7a24" stop-opacity=".55"/><stop offset="1" stop-color="#ff7a24" stop-opacity="0"/></radialGradient>
        <mask id="ipBite"><rect width="64" height="64" fill="#fff"/><circle cx="56.5" cy="26" r="7.5" fill="#000"/></mask>
      </defs>
      <circle cx="32" cy="38" r="30" fill="url(#ipGlow)"/>
      <g mask="url(#ipBite)">
        <path d="M31 18C24 12 12 17 10 30 8 44 17 56 26 55c3 0 4-2 6-2s3 2 6 2c9 1 17-11 14-25-2-10-11-15-19-12Z" fill="url(#ipFruit)" stroke="#ffd68a" stroke-width="1"/>
        <path d="M32 19Q24 35 30 54M32 19Q41 35 36 54M32 19Q16 30 21 50M32 19Q48 30 43 50" fill="none" stroke="#7a2508" stroke-width=".9" opacity=".4"/>
      </g>
      <path d="M32 18Q30.5 10 36 5" fill="none" stroke="#5a3a1a" stroke-width="3" stroke-linecap="round"/>
      <path d="M34 12Q43 5 50 10Q43 17 34 15Z" fill="#7ad14e" stroke="#c9ffa4" stroke-width=".9" stroke-linejoin="round"/>
      <path d="M16 31 26.5 34 19.5 40Z M44 31 33.5 34 40.5 40Z" fill="#fff0a0" stroke="#ffb838" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M17 44 23 42 27.5 46 32 42 36.5 46 41 42 47 44 42 51.5 36.5 49 32 53 27.5 49 22 51.5Z" fill="#fff0a0" stroke="#ffb838" stroke-width=".6" stroke-linejoin="round"/>
    </svg></span>`,
    mac: `<span class="os-icon os-icon--mac" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs>
        <linearGradient id="macFruit" x1=".15" y1="0" x2=".85" y2="1"><stop stop-color="#e6bcff"/><stop offset=".45" stop-color="#8e55d8"/><stop offset="1" stop-color="#241766"/></linearGradient>
        <radialGradient id="macGlow"><stop stop-color="#b57cff" stop-opacity=".55"/><stop offset="1" stop-color="#b57cff" stop-opacity="0"/></radialGradient>
        <mask id="macBite"><rect width="64" height="64" fill="#fff"/><circle cx="56.5" cy="26" r="7.5" fill="#000"/></mask>
      </defs>
      <circle cx="32" cy="38" r="30" fill="url(#macGlow)"/>
      <g mask="url(#macBite)">
        <path d="M31 18C24 12 12 17 10 30 8 44 17 56 26 55c3 0 4-2 6-2s3 2 6 2c9 1 17-11 14-25-2-10-11-15-19-12Z" fill="url(#macFruit)" stroke="#f1d8ff" stroke-width="1"/>
      </g>
      <path d="M32 18Q30 9 36 4Q40 11 35 18" fill="#ff9a3c" stroke="#ffd9a0" stroke-width=".9" stroke-linejoin="round"/>
      <path d="M35 12Q44 6 50 11Q43 17 35 15Z" fill="#8fe47b" stroke="#d7ffac" stroke-width=".8" stroke-linejoin="round"/>
      <path d="M16.5 32 27 33.5 20 38.5Z M44 32 33.5 33.5 40.5 38.5Z" fill="#f6ecff" stroke="#fff" stroke-width=".5" stroke-linejoin="round"/>
      <path d="M20 43Q32 52 43 43" fill="none" stroke="#ffb46a" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 15l1.6-3.6L14 10l-3.4-1.4L9 5 7.4 8.6 4 10l3.4 1.4Z M53 52l1.2-2.6L57 48.4l-2.8-1.2L53 44.6l-1.2 2.6-2.8 1.2 2.8 1.2Z" fill="#ffe19c"/>
    </svg></span>`,
    tv: `<span class="os-icon os-icon--tv" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs><radialGradient id="tvGlow"><stop stop-color="#ff7a24" stop-opacity=".4"/><stop offset="1" stop-color="#ff7a24" stop-opacity="0"/></radialGradient></defs>
      <circle cx="32" cy="36" r="30" fill="url(#tvGlow)"/>
      <rect x="7" y="13" width="50" height="36" rx="4" fill="#261b46" stroke="#c7b7ff" stroke-width="2"/><rect x="11" y="17" width="42" height="28" rx="2" fill="#354c81"/><path d="M12 41 24 28 31 35 40 23 53 40Z" fill="#11152e"/><path d="M28 38V28L34 22 40 28V38Z" fill="#ff9d4a"/><path d="M31 38V31H37V38" fill="#fff0a1"/><circle cx="45" cy="23" r="4" fill="#fff0a1"/><path d="M24 12l8-6 8 6" fill="none" stroke="#bca2ff" stroke-width="2"/><path d="M20 54H44" stroke="#ffad60" stroke-width="3" stroke-linecap="round"/>
    </svg></span>`,
    linux: `<span class="os-icon os-icon--linux" aria-hidden="true"><svg viewBox="0 0 64 64" role="img">
      <defs>
        <linearGradient id="pgBody" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5d5478"/><stop offset=".5" stop-color="#1b1632"/><stop offset="1" stop-color="#07081a"/></linearGradient>
        <linearGradient id="pgBelly" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff8e8"/><stop offset="1" stop-color="#d9d3ef"/></linearGradient>
        <linearGradient id="pgHat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8a52c9"/><stop offset="1" stop-color="#2a1448"/></linearGradient>
        <radialGradient id="pgGlow"><stop stop-color="#ffa03a" stop-opacity=".45"/><stop offset="1" stop-color="#ffa03a" stop-opacity="0"/></radialGradient>
      </defs>
      <circle cx="32" cy="38" r="30" fill="url(#pgGlow)"/>
      <path d="M18 32Q13 15 32 15Q51 15 46 32L50 49Q48 58 32 58Q16 58 14 49Z" fill="url(#pgBody)" stroke="#9b8cc2" stroke-width="1.1"/>
      <path d="M24 33Q32 26 40 33L42 50Q39 55 32 55Q25 55 22 50Z" fill="url(#pgBelly)" stroke="#fff5df" stroke-width=".7"/>
      <path d="M18 32 8.5 45 13.5 49 22 39Z M46 32 55.5 45 50.5 49 42 39Z" fill="#2b2447" stroke="#8277a6" stroke-width="1" stroke-linejoin="round"/>
      <circle cx="27" cy="27" r="3.4" fill="#fff"/><circle cx="37" cy="27" r="3.4" fill="#fff"/><circle cx="27.4" cy="27.4" r="1.7" fill="#ff5a1c"/><circle cx="36.6" cy="27.4" r="1.7" fill="#ff5a1c"/>
      <path d="M28 31.5H36L32 37Z" fill="#ff9a2f" stroke="#ffd37a" stroke-width=".7" stroke-linejoin="round"/>
      <path d="M21 57 15 61H27L28.5 58ZM43 57 49 61H37L35.5 58Z" fill="#ffab35" stroke="#ffe08a" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M21.5 17Q28.5 11.500 30 5.500Q31.500 0 40.500 3.500Q35.500 6.500 43 17Z" fill="url(#pgHat)" stroke="#c4a0f5" stroke-width="1" stroke-linejoin="round"/>
      <ellipse cx="32" cy="17.500" rx="18" ry="3.800" fill="#3a1c63" stroke="#c4a0f5" stroke-width="1"/>
      <path d="M23.500 15.600Q32 18.600 40.500 15.600L41 13Q32 15.800 23 13Z" fill="#ff8a2a"/><rect x="30" y="13.300" width="4" height="3.300" rx=".6" fill="#ffd27a"/>
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

    // عمارت گوتیک: بدنهٔ ثابت یک‌بار در بوم جدا رسم و کش می‌شود؛ فقط نور پنجره‌ها و دود هر فریم زنده است (سبک و بدون هنگ).
    const houseCache = new Map();
    function paintHouseStatic(c, fg) {
        const wallA = isDay ? "#5b4a68" : "#2a1f4d", wallB = isDay ? "#3a2f48" : "#0c0a1e";
        const wingA = isDay ? "#6d5a78" : "#221a42", wingB = isDay ? "#41354f" : "#0a0818";
        const roofA = isDay ? "#4a4062" : "#241a46", roofB = isDay ? "#2a2540" : "#06051a";
        const rim = isDay ? "rgba(255,214,160,.6)" : "rgba(196,150,255,.62)";
        const edge = isDay ? "rgba(255,205,150,.34)" : "rgba(140,100,179,.5)";
        const vg = (y1, y2, a, b) => { const g = c.createLinearGradient(0, y1, 0, y2); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
        c.lineJoin = "round"; c.lineWidth = 1.2; c.strokeStyle = edge;
        // سایهٔ زمین
        c.fillStyle = isDay ? "rgba(50,38,56,.2)" : "rgba(0,0,12,.4)";
        c.beginPath(); c.ellipse(0, 3, 150, 9, 0, 0, Math.PI * 2); c.fill();
        // بدنهٔ اصلی و بال‌ها
        c.fillStyle = vg(-107, 0, wallA, wallB); c.fillRect(-73, -107, 146, 107); c.strokeRect(-73, -107, 146, 107);
        c.fillStyle = vg(-77, 0, wingA, wingB); c.fillRect(-111, -70, 39, 70); c.fillRect(73, -77, 39, 77);
        c.strokeRect(-111, -70, 39, 70); c.strokeRect(73, -77, 39, 77);
        // آجرکاری سبک
        c.strokeStyle = isDay ? "rgba(255,216,174,.12)" : "rgba(170,135,205,.14)"; c.lineWidth = .8; c.beginPath();
        for (let yy = -96; yy <= -10; yy += 14) { c.moveTo(-72, yy); c.lineTo(72, yy); }
        for (let yy = -64; yy <= -10; yy += 14) { c.moveTo(-110, yy); c.lineTo(-73, yy); c.moveTo(74, yy - 6); c.lineTo(111, yy - 6); }
        c.stroke();
        // دودکش کج
        c.fillStyle = roofB; c.strokeStyle = edge; c.lineWidth = 1.2;
        c.beginPath(); c.moveTo(40, -140); c.lineTo(42, -176); c.lineTo(55, -178); c.lineTo(53, -135); c.closePath(); c.fill(); c.stroke();
        c.fillRect(38, -181, 20, 6);
        // برج‌های باریک با سقف مخروطیِ خمیده
        c.fillStyle = vg(-153, -100, wallA, wallB); c.fillRect(-23, -153, 39, 53); c.strokeRect(-23, -153, 39, 53);
        c.fillStyle = vg(-122, 0, wingA, wingB); c.fillRect(-101, -122, 28, 122); c.strokeRect(-101, -122, 28, 122);
        c.fillStyle = vg(-133, 0, wingA, wingB); c.fillRect(73, -133, 31, 133); c.strokeRect(73, -133, 31, 133);
        const roof = (pts) => {
            c.fillStyle = vg(pts.ty, pts.by, roofA, roofB); c.strokeStyle = edge;
            c.beginPath(); c.moveTo(pts.l, pts.by); c.quadraticCurveTo(pts.l + (pts.tx - pts.l) * .45, pts.by - (pts.by - pts.ty) * .18, pts.tx, pts.ty);
            c.quadraticCurveTo(pts.r - (pts.r - pts.tx) * .45, pts.by - (pts.by - pts.ty) * .18, pts.r, pts.by);
            c.closePath(); c.fill(); c.stroke();
            // نور ماه روی لبهٔ راست
            c.strokeStyle = rim; c.lineWidth = 1.3; c.beginPath(); c.moveTo(pts.tx, pts.ty);
            c.quadraticCurveTo(pts.r - (pts.r - pts.tx) * .45, pts.by - (pts.by - pts.ty) * .18, pts.r, pts.by); c.stroke(); c.lineWidth = 1.2;
        };
        roof({ l: -92, r: 86, tx: -4, ty: -168, by: -105 });
        roof({ l: -33, r: 26, tx: -4, ty: -209, by: -151 });
        roof({ l: -110, r: -66, tx: -87, ty: -173, by: -121 });
        roof({ l: 64, r: 112, tx: 88, ty: -191, by: -132 });
        roof({ l: -118, r: -68, tx: -92, ty: -104, by: -69 });
        roof({ l: 66, r: 120, tx: 94, ty: -115, by: -76 });
        // نوک‌ها و پرچم‌های کوچک
        c.strokeStyle = "rgba(255,174,95,.7)"; c.lineWidth = 1.3;
        [[-87, -173], [-4, -209], [88, -191]].forEach(([x, y]) => { c.beginPath(); c.moveTo(x, y); c.lineTo(x, y - 13); c.stroke(); c.beginPath(); c.moveTo(x, y - 12); c.lineTo(x + 9, y - 9); c.lineTo(x, y - 5); c.stroke(); });
        // قاب پنجره‌های نوک‌قوسی (نور در هر فریم روی آن‌ها کشیده می‌شود)
        c.strokeStyle = isDay ? "rgba(255,205,150,.5)" : "rgba(170,130,215,.6)"; c.lineWidth = 1.6;
        WIN_DEF.forEach(([x, y, w, h]) => { c.beginPath(); c.moveTo(x - 1.5, y + h + 1.5); c.lineTo(x - 1.5, y + 5); c.quadraticCurveTo(x + w / 2, y - 6, x + w + 1.5, y + 5); c.lineTo(x + w + 1.5, y + h + 1.5); c.closePath(); c.stroke(); });
        // دریچهٔ گرد زیر شیروانی (پنجرهٔ خفاش)
        c.fillStyle = "#0b0818"; c.beginPath(); c.arc(-4, -128, 9, 0, Math.PI * 2); c.fill(); c.strokeStyle = rim; c.lineWidth = 1.5; c.stroke();
        // در بزرگ قوسی با لولا و دستگیره
        c.fillStyle = isDay ? "#1c1228" : "#04030f";
        c.beginPath(); c.moveTo(-17, 0); c.lineTo(-17, -42); c.quadraticCurveTo(0, -64, 17, -42); c.lineTo(17, 0); c.closePath(); c.fill();
        c.strokeStyle = edge; c.lineWidth = 1.4; c.stroke();
        c.strokeStyle = "rgba(255,160,90,.35)"; c.lineWidth = 1; c.beginPath(); c.moveTo(0, -57); c.lineTo(0, 0); c.moveTo(-17, -30); c.lineTo(17, -30); c.stroke();
        c.fillStyle = "#ffb45d"; c.beginPath(); c.arc(9, -23, 1.8, 0, Math.PI * 2); c.fill();
        // پله‌ها و ستون فانوس
        c.strokeStyle = isDay ? "rgba(255,208,163,.34)" : "rgba(137,104,164,.45)"; c.lineWidth = 1.7;
        for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(-22 - i * 4, -i * 4); c.lineTo(22 + i * 4, -i * 4); c.stroke(); }
        c.strokeStyle = "#0b0818"; c.lineWidth = 2.2; c.beginPath(); c.moveTo(-34, 0); c.lineTo(-34, -40); c.lineTo(-28, -44); c.stroke();
        c.fillStyle = "#1c1228"; c.fillRect(-31, -42, 6, 8);
        // نردهٔ جلویی فقط برای عمارت پیش‌زمینه
        if (fg) {
            c.strokeStyle = "rgba(8,5,20,.92)"; c.lineWidth = 2.4;
            for (let i = -136; i <= 136; i += 17) { const tall = i % 34 === 0; c.beginPath(); c.moveTo(i, 0); c.lineTo(i, -(tall ? 23 : 17)); c.lineTo(i - 3, -(tall ? 18 : 12)); c.stroke(); }
            c.beginPath(); c.moveTo(-143, -13); c.lineTo(143, -13); c.moveTo(-143, -3); c.lineTo(143, -3); c.stroke();
        }
    }
    const WIN_DEF = [[-52, -78, 13, 23], [-20, -79, 13, 24], [18, -79, 13, 24], [47, -77, 12, 22], [-91, -101, 8, 16], [83, -110, 9, 18], [-9, -135, 10, 18]];
    function drawHauntedHouse(cx, ground, scale, time, foreground = false) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.15);
        const key = (isDay ? "d" : "n") + (foreground ? "f" : "b") + Math.round(scale * 100) + "@" + dpr;
        let off = houseCache.get(key);
        if (!off) {
            if (houseCache.size > 14) houseCache.clear();
            off = document.createElement("canvas");
            off.width = Math.ceil(310 * scale * dpr); off.height = Math.ceil(240 * scale * dpr);
            const c = off.getContext("2d");
            c.scale(scale * dpr, scale * dpr); c.translate(155, 226);
            paintHouseStatic(c, foreground);
            houseCache.set(key, off);
        }
        ctx.drawImage(off, cx - 155 * scale, ground - 226 * scale, 310 * scale, 240 * scale);
        // بخش زنده: نور پنجره‌ها، فانوس و دود (بدون shadowBlur)
        ctx.save(); ctx.translate(cx, ground); ctx.scale(scale, scale);
        const glow = .74 + .2 * Math.sin(time * .0017 + cx * .013);
        WIN_DEF.forEach(([x, y, w, h], i) => {
            const purple = i === 3;
            ctx.fillStyle = purple ? `rgba(190,120,255,${.1 * glow})` : `rgba(255,130,50,${.13 * glow})`;
            ctx.fillRect(x - 4, y - 3, w + 8, h + 8);
            ctx.fillStyle = purple ? `rgba(205,150,255,${isDay ? .7 : glow})` : (i % 3 === 0 ? `rgba(255,214,120,${isDay ? .76 : glow})` : `rgba(255,152,62,${isDay ? .66 : glow})`);
            ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x, y + 6); ctx.quadraticCurveTo(x + w / 2, y - 3, x + w, y + 6); ctx.lineTo(x + w, y + h); ctx.closePath(); ctx.fill();
            ctx.fillStyle = "rgba(40,18,30,.85)"; ctx.fillRect(x + w * .45, y + 4, w * .1, h - 4); ctx.fillRect(x, y + h * .5, w, 1.3);
        });
        // دریچهٔ گرد با خفاش
        ctx.fillStyle = `rgba(255,140,55,${.85 * glow})`; ctx.beginPath(); ctx.arc(-4, -128, 7.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#0b0818"; ctx.beginPath(); ctx.moveTo(-4, -128); ctx.lineTo(-9, -132); ctx.lineTo(-7, -127); ctx.lineTo(-4, -125); ctx.lineTo(-1, -127); ctx.lineTo(1, -132); ctx.closePath(); ctx.fill();
        // شکاف نور زیر در
        ctx.fillStyle = `rgba(255,150,60,${.5 * glow})`; ctx.fillRect(-12, -2, 24, 1.8);
        // فانوس ایوان
        roundedGlow(-28, -38, 12, `rgba(255,170,70,${.55 * glow})`, "rgba(255,140,50,0)");
        ctx.fillStyle = `rgba(255,208,110,${glow})`; ctx.fillRect(-30, -41, 4, 6);
        // دود دودکش
        for (let i = 0; i < 4; i++) {
            const t = ((time * .00028) + i * .25) % 1;
            ctx.fillStyle = `rgba(165,150,195,${.2 * (1 - t)})`;
            ctx.beginPath(); ctx.arc(48 + Math.sin(t * 6 + i) * 6 + t * 18, -186 - t * 46, 3 + t * 8, 0, Math.PI * 2); ctx.fill();
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
        ctx.shadowColor = "#ffb936"; ctx.shadowBlur = 3 * flicker;
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

    // کدوها پراکنده و نامرتب‌اند؛ هر بار باز شدن صفحه کمی جابه‌جا می‌شوند، ولی تعدادشان کم می‌ماند.
    const pumpkinSpots = [
        [.04, .955, 1.15], [.18, .985, .52], [.30, .90, .34], [.46, .972, .30], [.58, .925, .38],
        [.70, .992, .62], [.82, .905, .42], [.93, .962, 1.0], [.985, .895, .5]
    ].map((p, i) => ({
        x: clamp(p[0] + rand(-.022, .022), .01, .99), y: clamp(p[1] + rand(-.012, .012), .88, 1),
        s: p[2] * rand(.88, 1.12), v: Math.floor(Math.random() * 4), a: i % 3 === 1 ? .84 : .98
    }));
    function drawPumpkinPatch(time) {
        const scaleBase = clamp(width / 1000, .56, 1.22);
        const list = width < 600 ? pumpkinSpots.filter((_, i) => i % 3 !== 2) : pumpkinSpots;
        list.forEach(p => drawPumpkin(width * p.x, height * p.y, p.s * scaleBase, time, p.a, p.v));
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
