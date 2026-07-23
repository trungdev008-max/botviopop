const TelegramBot = require("node-telegram-bot-api");

// ============================================================
// CẤU HÌNH
// ============================================================
const token = "8902792475:AAG9bxsGSNMTbYTU-HsnB_5LsEELER2Mlxk";
const WEBAPP_URL = "https://shop.shopaccvt.site";
const BOT_USERNAME = "shopcheatnt_bot";

const bot = new TelegramBot(token, { polling: true });

// ============================================================
// HÀM GỬI TIN NHẮN ĐỊNH DẠNG ĐẸP
// ============================================================
function sendStyledMessage(chatId, text, keyboard = null) {
    const options = {
        parse_mode: "HTML",
        disable_web_page_preview: true,
    };
    
    if (keyboard) {
        options.reply_markup = keyboard;
    }
    
    bot.sendMessage(chatId, text, options);
}

// ============================================================
// TẠO KEYBOARD ĐẸP
// ============================================================
function createMainKeyboard() {
    return {
        inline_keyboard: [
            [
                {
                    text: "🚀 Mở Shop Cheat iOS",
                    web_app: { url: WEBAPP_URL }
                }
            ],
            [
                {
                    text: "📱 Mở trong Telegram",
                    url: `https://t.me/${BOT_USERNAME}?start=store`
                }
            ],
            [
                {
                    text: "👤 Liên hệ Admin",
                    url: "https://t.me/vantrung23128"
                }
            ]
        ]
    };
}

function createHomeKeyboard() {
    return {
        inline_keyboard: [
            [
                {
                    text: "🏪 Mở Shop",
                    web_app: { url: WEBAPP_URL }
                }
            ],
            [
                {
                    text: "📖 Hướng dẫn",
                    callback_data: "guide"
                },
                {
                    text: "💰 Giá cả",
                    callback_data: "pricing"
                }
            ],
            [
                {
                    text: "📞 Liên hệ",
                    url: "https://t.me/vantrung23128"
                }
            ]
        ]
    };
}

// ============================================================
// LỆNH /START
// ============================================================
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || "Bạn";
    const username = msg.from.username ? `@${msg.from.username}` : "";
    
    const message = `
╔═══════════════════════════════════╗
║  🌟 <b>𝙎𝙝𝙤𝙥 𝘾𝙝𝙚𝙖𝙩 𝙄𝙊𝙎</b> 🌟
╚═══════════════════════════════════╝

👋 <b>Xin chào ${firstName}!</b> ${username}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 <b>Cửa hàng cung cấp:</b>
  
  🎮 <b>KEY GAME</b>
  • Proxy FF - Tốc độ cao
  • Tipa - Ổn định
  • Migul - Chất lượng

  👤 <b>ACC FREE FIRE</b>
  • Cấp độ VIP 5
  • Bảo mật 100%
  • Hỗ trợ đổi pass

  💳 <b>NẠP TIỀN</b>
  • Tự động 24/7
  • Cộng thêm 5% thưởng

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👇 <i>Nhấn nút bên dưới để bắt đầu!</i>
    `;
    
    const keyboard = createMainKeyboard();
    sendStyledMessage(chatId, message, keyboard);
});

// ============================================================
// LỆNH /HELP
// ============================================================
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    
    const message = `
╔═══════════════════════════════════╗
║  📖 <b>HƯỚNG DẪN SỬ DỤNG</b>
╚═══════════════════════════════════╝

🔹 <b>Bước 1:</b> Nhấn "Mở Shop Cheat iOS"
🔹 <b>Bước 2:</b> Chọn sản phẩm muốn mua
🔹 <b>Bước 3:</b> Thanh toán bằng số dư
🔹 <b>Bước 4:</b> Nhận key/acc ngay lập tức

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 <b>Nạp tiền:</b>
  • Chuyển khoản ngân hàng
  • Tự động cộng 5% thưởng
  • Hỗ trợ 24/7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 <b>Hỗ trợ:</b> @vantrung23128
    `;
    
    const keyboard = createHomeKeyboard();
    sendStyledMessage(chatId, message, keyboard);
});

// ============================================================
// LỆNH /PRICE
// ============================================================
bot.onText(/\/price/, (msg) => {
    const chatId = msg.chat.id;
    
    const message = `
╔═══════════════════════════════════╗
║  💰 <b>BẢNG GIÁ SẢN PHẨM</b>
╚═══════════════════════════════════╝

🎮 <b>KEY PROXY</b>
  • 1 Tháng  → 50.000đ
  • Vĩnh Viễn → 120.000đ 🔥

📱 <b>KEY TIPA</b>
  • 1 Ngày   → 20.000đ
  • 7 Ngày   → 50.000đ
  • 30 Ngày  → 100.000đ
  • 365 Ngày → 300.000đ ⭐

⚡ <b>KEY MIGUL</b>
  • Basic 7D     → 35.000đ
  • Pro 30D      → 80.000đ 🔥
  • Premium 90D  → 180.000đ ⭐

👤 <b>ACC FF LV5</b>
  • VIP Cấp 5    → 250.000đ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💳 <b>Nạp tiền:</b> 
  • Tối thiểu 20.000đ
  • Cộng thêm 5% thưởng
    `;
    
    const keyboard = {
        inline_keyboard: [
            [
                {
                    text: "🛒 Mua ngay",
                    web_app: { url: WEBAPP_URL }
                }
            ],
            [
                {
                    text: "🏠 Trang chủ",
                    callback_data: "home"
                }
            ]
        ]
    };
    
    sendStyledMessage(chatId, message, keyboard);
});

// ============================================================
// XỬ LÝ CALLBACK
// ============================================================
bot.on("callback_query", (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;
    
    // Trả lời callback để biến mất loading
    bot.answerCallbackQuery(callbackQuery.id);
    
    switch(data) {
        case "home":
            bot.emit("text", {
                chat: { id: chatId },
                text: "/start",
                from: { first_name: "Bạn" }
            });
            break;
            
        case "guide":
            bot.emit("text", {
                chat: { id: chatId },
                text: "/help"
            });
            break;
            
        case "pricing":
            bot.emit("text", {
                chat: { id: chatId },
                text: "/price"
            });
            break;
            
        default:
            break;
    }
});

// ============================================================
// XỬ LÝ TIN NHẮN THƯỜNG
// ============================================================
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text || "";
    
    // Bỏ qua các lệnh đã xử lý
    if (text.startsWith("/")) return;
    
    // Tin nhắn thường -> gửi hướng dẫn
    const message = `
🤖 <b>Shop Cheat iOS Bot</b>

📌 <i>Vui lòng sử dụng các lệnh:</i>

  /start  → Mở Shop
  /help   → Hướng dẫn
  /price  → Bảng giá

👇 <i>Hoặc nhấn nút bên dưới!</i>
    `;
    
    const keyboard = createMainKeyboard();
    sendStyledMessage(chatId, message, keyboard);
});

// ============================================================
// LOGGING
// ============================================================
console.log("╔═══════════════════════════════════╗");
console.log("║  🚀 Shop Cheat iOS Bot           ║");
console.log("║  📌 Bot đang chạy...             ║");
console.log("║  👤 Username: @shopcheatnt_bot   ║");
console.log("║  🔗 WebApp: shop.shopaccvt.site  ║");
console.log("╚═══════════════════════════════════╝");

// Bắt lỗi
bot.on("error", (error) => {
    console.error("❌ Bot Error:", error);
});

process.on("uncaughtException", (error) => {
    console.error("❌ Uncaught Exception:", error);
});