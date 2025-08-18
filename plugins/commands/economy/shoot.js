const config = {
  name: "shoot",
  aliases: ["ballshoot", "ballshot"],
  description: "Shoot a ball for huge rewards - but beware of random losses!",
  usage: "[bet|allin]",
  credits: "Rue // improved by rapido",
  cooldown: 10,
  extra: {
    minbet: 100
  }
};

const langData = {
  "en_US": {
    "ballshoot.not_enough_money": `${["⌨️", "💻", "🖥️", "📠", "📟", "⌨", "🔣", "🔡", "🔢"][Math.floor(Math.random() * 9)]} 𝚈𝚘𝚞 𝚍𝚘𝚗'𝚝 𝚑𝚊𝚟𝚎 𝚎𝚗𝚘𝚞𝚐𝚑 𝚖𝚘𝚗𝚎𝚢 𝚝𝚘 𝚙𝚕𝚊𝚌𝚎 𝚝𝚑𝚒𝚜 𝚋𝚎𝚝.`,
    "ballshoot.min_bet": `${["⌨️", "💻", "🖥️", "📠", "📟", "⌨", "🔣", "🔡", "🔢"][Math.floor(Math.random() * 9)]} 𝙼𝚒𝚗𝚒𝚖𝚞𝚖 𝚋𝚎𝚝 𝚒𝚜 𝙿 {minBet}.`,
    "ballshoot.result_win": [
      `${["🏀", "🔥", "🎯", "💰"][Math.floor(Math.random() * 4)]} 𝗦𝗪𝗜𝗦𝗛! 𝗡𝗢𝗧𝗛𝗜𝗡𝗚 𝗕𝗨𝗧 𝗡𝗘𝗧!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`,
      `${["🏀", "🔥", "🎯", "💰"][Math.floor(Math.random() * 4)]} 𝗕𝗔𝗡𝗞 𝗦𝗛𝗢𝗧! 𝗠𝗢𝗡𝗘𝗬 𝗜𝗡 𝗧𝗛𝗘 𝗕𝗔𝗡𝗞!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`,
      `${["🏀", "🔥", "🎯", "💰"][Math.floor(Math.random() * 4)]} 𝗡𝗢𝗧𝗛𝗜𝗡𝗚 𝗕𝗨𝗧 𝗡𝗘𝗧! 𝗣𝗘𝗥𝗙𝗘𝗖𝗧 𝗦𝗛𝗢𝗧!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`,
      `${["🏀", "🔥", "🎯", "💰"][Math.floor(Math.random() * 4)]} 𝗕𝗨𝗟𝗟𝗦𝗘𝗬𝗘! 𝗥𝗜𝗚𝗛𝗧 𝗢𝗡 𝗧𝗔𝗥𝗚𝗘𝗧!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`
    ],
    "ballshoot.result_lose": [
      `${["💀", "😵", "🤡", "👎"][Math.floor(Math.random() * 4)]} 𝗔𝗜𝗥𝗕𝗔𝗟𝗟! 𝗘𝗠𝗕𝗔𝗥𝗥𝗔𝗦𝗦𝗜𝗡𝗚...\n━━━━━━━━━━━━━━━\nYou lost ₱{bet}.`,
      `${["💀", "😵", "🤡", "👎"][Math.floor(Math.random() * 4)]} 𝗕𝗥𝗜𝗖𝗞! 𝗧𝗛𝗔𝗧 𝗪𝗔𝗦 𝗧𝗘𝗥𝗥𝗜𝗕𝗟𝗘.\n━━━━━━━━━━━━━━━\nYou lost ₱{bet}.`,
      `${["💀", "😵", "🤡", "👎"][Math.floor(Math.random() * 4)]} 𝗖𝗟𝗔𝗡𝗞! 𝗢𝗙𝗙 𝗧𝗛𝗘 𝗥𝗜𝗠.\n━━━━━━━━━━━━━━━\nYou lost ₱{bet}.`,
      `${["💀", "😵", "🤡", "👎"][Math.floor(Math.random() * 4)]} 𝗠𝗜𝗦𝗦𝗘𝗗! 𝗕𝗘𝗧𝗧𝗘𝗥 𝗟𝗨𝗖𝗞 𝗡𝗘𝗫𝗧 𝗧𝗜𝗠𝗘.\n━━━━━━━━━━━━━━━\nYou lost ₱{bet}.`
    ],
    "ballshoot.allin_win": [
      `${["🎰", "🚀", "💎", "👑"][Math.floor(Math.random() * 4)]} 𝗟𝗘𝗚𝗘𝗡𝗗𝗔𝗥𝗬 𝗦𝗛𝗢𝗧!\n𝗨𝗡𝗕𝗘𝗟𝗜𝗘𝗩𝗔𝗕𝗟𝗘!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`,
      `${["🎰", "🚀", "💎", "👑"][Math.floor(Math.random() * 4)]} 𝗝𝗔𝗖𝗞𝗣𝗢𝗧! 𝗠𝗔𝗦𝗦𝗜𝗩𝗘 𝗪𝗜𝗡!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`,
      `${["🎰", "🚀", "💎", "👑"][Math.floor(Math.random() * 4)]} 𝗛𝗢𝗟𝗬 𝗠𝗢𝗟𝗬! 𝗧𝗛𝗔𝗧'𝗦 𝗜𝗡𝗦𝗔𝗡𝗘!\n━━━━━━━━━━━━━━━\nYou won ₱{winnings}`
    ],
    "ballshoot.allin_lose": [
      `${["😥", "😭", "🤢", "💔"][Math.floor(Math.random() * 4)]} 𝗬𝗢𝗨 𝗟𝗢𝗦𝗧 𝗘𝗩𝗘𝗥𝗬𝗧𝗛𝗜𝗡𝗚!\n━━━━━━━━━━━━━━━\n₱{bet} gone!`,
      `${["😥", "😭", "🤢", "💔"][Math.floor(Math.random() * 4)]} 𝗪𝗜𝗣𝗘𝗗 𝗢𝗨𝗧!\n━━━━━━━━━━━━━━━\n₱{bet} disappeared!`,
      `${["😥", "😭", "🤢", "💔"][Math.floor(Math.random() * 4)]} 𝗧𝗢𝗧𝗔𝗟 𝗟𝗢𝗦𝗦!\n━━━━━━━━━━━━━━━\n₱{bet} vanished!`
    ],
    "any.error": `${["⌨️", "💻", "🖥️", "📠", "📟", "⌨", "🔣", "🔡", "🔢"][Math.floor(Math.random() * 9)]} 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗.`
  }
};

async function onCall({ message, args, extra, getLang }) {
  const { Users } = global.controllers;

  try {
    const userMoney = await Users.getMoney(message.senderID);
    if (!userMoney) return message.reply(getLang("any.error"));

    let bet;
    const isAllIn = args[0]?.toLowerCase() === "allin";

    if (isAllIn) {
      bet = userMoney;
    } else {
      bet = parseInt(args[0]) || extra.minbet;
    }

    if (userMoney < bet) return message.reply(getLang("ballshoot.not_enough_money"));
    if (bet < extra.minbet) return message.reply(getLang("ballshoot.min_bet", { minBet: extra.minbet }));

    await Users.decreaseMoney(message.senderID, bet);

    const willLose = Math.random() < 0.5;

    if (willLose) {
      if (isAllIn) {
        const allinLoseMessages = getLang("ballshoot.allin_lose");
        const randomMessage = allinLoseMessages[Math.floor(Math.random() * allinLoseMessages.length)];
        return message.reply(randomMessage.replace("{bet}", bet));
      } else {
        const loseMessages = getLang("ballshoot.result_lose");
        const randomMessage = loseMessages[Math.floor(Math.random() * loseMessages.length)];
        return message.reply(randomMessage.replace("{bet}", bet));
      }
    } else {
      const multiplier = isAllIn ? 5 : 2;
      const winnings = bet * multiplier;

      await Users.increaseMoney(message.senderID, winnings);

      if (isAllIn) {
        const allinWinMessages = getLang("ballshoot.allin_win");
        const randomMessage = allinWinMessages[Math.floor(Math.random() * allinWinMessages.length)];
        return message.reply(randomMessage.replace("{winnings}", winnings));
      } else {
        const winMessages = getLang("ballshoot.result_win");
        const randomMessage = winMessages[Math.floor(Math.random() * winMessages.length)];
        return message.reply(randomMessage.replace("{winnings}", winnings));
      }
    }
  } catch (error) {
    console.error(error);
    return message.reply(getLang("any.error"));
  }
}

export default {
  config,
  langData,
  onCall
};