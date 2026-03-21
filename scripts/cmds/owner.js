const os = require("os");

module.exports = {
  config: {
    name: "owner",
    version: "6.0",
    author: "lonely",
    countDown: 5,
    role: 0,
    shortDescription: "Full owner & bot info",
    longDescription: "Displays extended information with custom image and links",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message, threadsData, usersData }) {
    const startTime = Date.now();

    // 👑 OWNER INFO (Already set)
    const ownerUID = "61584608305717";
    const ownerName = "ᏞᏫᏁᎬᏞᎽ";
    const fbLink = "https://www.facebook.com/summertime.sadness.2026";

    // 🖼️ YOUR IMAGE (PUT YOUR IMGUR / IMGBB LINK HERE)
    const avatarURL = "https://i.ibb.co/wNkR8Wzg/image0.jpg"; // 🔁 Replace this

    // 🔗 SUPPORT GROUP
    const supportGroup = "https://m.me/j/AbZkXjSgK0h-rGA8/";

    // ⏳ Uptime
    const uptime = process.uptime();
    const h = Math.floor(uptime / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = Math.floor(uptime % 60);

    // 💾 RAM
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);

    // 👥 Stats
    const totalUsers = await usersData.getAll();
    const totalThreads = await threadsData.getAll();

    // 🕒 Time
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();

    // 🤖 Bot config
    const botName = global.GoatBot.config.nickNameBot || "GoatBot";
    const prefix = global.GoatBot.config.prefix || "%";

    // ⚡ Ping
    const ping = Date.now() - startTime;

    const msg =
`👑 𝗢𝗪𝗡𝗘𝗥 & 𝗕𝗢𝗧 𝗗𝗔𝗦𝗛𝗕𝗢𝗔𝗥𝗗 👑

━━━━━━━━━━━━━━━
👤 Owner: ${ownerName}
🆔 UID: ${ownerUID}
🔗 FB: ${fbLink}
━━━━━━━━━━━━━━━

🤖 Bot: ${botName}
⚙️ Prefix: ${prefix}

⏳ Uptime: ${h}h ${m}m ${s}s
⚡ Ping: ${ping}ms

💾 RAM: ${freeMem}MB / ${totalMem}MB
🖥 OS: ${os.type()} (${os.arch()})

👥 Users: ${totalUsers.length}
💬 Groups: ${totalThreads.length}

🕒 Time: ${time}
📅 Date: ${date}

━━━━━━━━━━━━━━━
📢 SUPPORT GROUP 👥
🔗 ${supportGroup}
━━━━━━━━━━━━━━━

📢 Status: Online ✅
🛠 Version: 6.0 Final
━━━━━━━━━━━━━━━`;

    return message.reply({
      body: msg,
      mentions: [{
        id: ownerUID,
        tag: ownerName
      }],
      attachment: await global.utils.getStreamFromURL(avatarURL)
    });
  }
};