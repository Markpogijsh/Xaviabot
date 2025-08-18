import axios from 'axios';

const langData = {
    "en_US": {
        "prefix": `${global.config.NAME} 𝚙𝚛𝚎𝚏𝚒𝚡 𝚒𝚜: {prefix}`
    }
};

async function onCall({ message, getLang, data }) {
    const messageBody = message.body.toLowerCase().trim();
    const prefixTriggers = [
        "prefix",
        "prefix?",
        "Prefix"

        ];

    if (prefixTriggers.includes(messageBody) && message.senderID !== global.botID) {
        const prefix = data?.thread?.data?.prefix || global.config.PREFIX;
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

        try {
            const { data: gifData } = await axios.get(`https://i.imgur.com/68S6RBS.jpeg`);
            const response = await axios.get(gifData.url, { responseType: 'stream' });
            await message.reply({
                body: getLang("prefix", { prefix }),
                attachment: response.data
            });
        } catch (error) {
            console.error(error);
            await message.reply(getLang("prefix", { prefix }));
        }
    }
}

export default {
    langData,
    onCall
};
