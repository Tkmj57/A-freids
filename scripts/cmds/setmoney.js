const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "set",
    version: "1.0",
    author: "lonely",
    role: 2,
    shortDescription: "Set user money",
    longDescription: "Set money for a user (Owner only)",
    category: "admin",
    guide: "{pn} [amount] (reply/tag user)"
  },

  onStart: async function ({ message, event, usersData }) {
    const OWNER_UID = "61584608305717"; // your UID

    // Check if sender is owner
    if (event.senderID !== OWNER_UID) {
      return message.reply("❌ You are not allowed to use this command.");
    }

    let targetID;

    // Get target user (reply or mention)
    if (event.type === "message_reply") {
      targetID = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length > 0) {
      targetID = Object.keys(event.mentions)[0];
    } else {
      return message.reply("⚠️ Reply or tag a user to set money.");
    }

    const amount = parseInt(event.args[0]);

    if (isNaN(amount)) {
      return message.reply("⚠️ Please enter a valid amount.");
    }

    // Get user data
    let userData = await usersData.get(targetID) || {};

    // Set money
    userData.money = amount;

    await usersData.set(targetID, userData);

    return message.reply(`✅ Successfully set money to ${amount} for user.`);
  }
};