module.exports = {
  config: {
    name: "slot",
    version: "1.0",
    author: "lonely",
    countDown: 5,
    role: 0,
    shortDescription: "Slot machine game",
    longDescription: "Spin the slot machine and try your luck",
    category: "game"
  },

  onStart: async function ({ message, event, usersData }) {
    const emojis = ["🍒", "🍋", "🍉", "🍇", "⭐", "💎"];

    // Pick random emojis
    const slot1 = emojis[Math.floor(Math.random() * emojis.length)];
    const slot2 = emojis[Math.floor(Math.random() * emojis.length)];
    const slot3 = emojis[Math.floor(Math.random() * emojis.length)];

    let result = `${slot1} | ${slot2} | ${slot3}\n\n`;

    // Win logic
    if (slot1 === slot2 && slot2 === slot3) {
      result += "🎉 JACKPOT! You won big!";
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
      result += "✨ You got a match! Small win!";
    } else {
      result += "💔 You lost! Try again.";
    }

    return message.reply(result);
  }
};