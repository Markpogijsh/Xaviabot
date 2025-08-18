import axios from "axios";
import fs from "fs";
import path from "path";

const langData = {
    "en_US": {
        "prefix.get": "𝐌𝐀𝐗𝐈 prefix is: {prefix}"
    },
    "vi_VN": {
        "prefix.get": "𝐌𝐀𝐗𝐈 prefix hiện tại là: {prefix}"
    }
};

async function onCall({ message, getLang, data }) {
    const body = message.body?.trim().toLowerCase();

    if (body === "prefix" && message.senderID !== global.botID) {
        const prefix = data?.thread?.data?.prefix || global.config.PREFIX;

        // Ensure image exists locally
        const imagePath = path.resolve("cache/prefix_banner.jpg");
        if (!fs.existsSync(imagePath)) {
            const imageStream = (await axios.get("https://i.imgur.com/EnGpBb3.jpg", {
                responseType: "stream"
            })).data;
            await new Promise((resolve, reject) => {
                const writer = fs.createWriteStream(imagePath);
                imageStream.pipe(writer);
                writer.on("finish", resolve);
                writer.on("error", reject);
            });
        }

        // Send the reply with image and styled prefix
        message.reply({
            body: getLang("prefix.get", { prefix }),
            attachment: fs.createReadStream(imagePath)
        });
    }

    return;
}

export default {
    langData,
    onCall
};