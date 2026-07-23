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
    title.innerText = category.title;

    section.appendChild(title);

    // ساخت کارت هر برنامه
    category.apps.forEach(app => {

        const card = document.createElement("div");
        card.className = "card";

        const left = document.createElement("div");
        left.className = "appInfo";

        const icon = document.createElement("span");
        icon.className = "icon";
        icon.innerText = app.icon;

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
document.querySelectorAll(".download").forEach(btn=>{

    btn.addEventListener("click",function(e){

        if(this.getAttribute("href")==="#"){

            e.preventDefault();

            alert("لینک دانلود هنوز اضافه نشده است.");

        }

    });

});

// افکت کوچک کلیک روی دکمه‌ها
document.querySelectorAll("a").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.95)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },120);

    });

});

// سال فوتر
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

footer.innerHTML = "© " + year + " HIDDIFY_plas";
