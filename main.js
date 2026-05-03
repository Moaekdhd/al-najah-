// تأثير شاشة الدخول
const brand = document.getElementById('khwarizm-brand');
const texts = ["Khwarizm Presents", "خوارزم تقدم لكم"];
let i = 0;

setInterval(() => {
    brand.innerText = texts[i];
    i = (i + 1) % texts.length;
}, 2000);

// إخفاء شاشة الدخول بعد 4 ثوانٍ
setTimeout(() => {
    document.getElementById('intro-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
    }, 1000);
}, 4000);

// تحريك العلامة المائية للحماية
const wm = document.getElementById('wm');
setInterval(() => {
    wm.style.top = Math.random() * 80 + "%";
    wm.style.left = Math.random() * 80 + "%";
}, 3000);

// منع تسجيل الشاشة (تعطيل الزر الأيمن)
document.addEventListener('contextmenu', event => event.preventDefault());
