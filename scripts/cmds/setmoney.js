module.exports = {
  config: {
    name: "setmoney",
    aliases: ["set"], // ✅ added alias
    version: "1.1",
    author: "lonely",
    countDown: 5,
    role: 2,
    shortDescription: "Set user money",
    longDescription: "Set money for yourself or tagged/replied user",
    category: "economy"
  },

  onStart: async function ({ message, event, args, usersData }) {
    let uid;

    // Get target user
    if (event.type === "message_reply") {
      uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length > 0) {
      uid = Object.keys(event.mentions)[0];
    } else {
      uid = event.senderID;
    }

    // Check amount
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
      return message.reply("❌ Please enter a valid amount.");
    }

    // Set money
    await usersData.set(uid, { money: amount });

    return message.reply(`💰 Money has been set to ${amount}`);
  }
};