const axios = require("axios");

module.exports = {
  config: {
    name: "sim",
    version: "1.0",
    author: "Keijo",
    role: 0,
    shortDescription: "Talk with SimSimi",
    longDescription: "Makipag-usap kay SimSimi gamit ang API",
    category: "ai",
    guide: "{pn} <message>"
  },

  onStart: async function ({ api, event, args }) {
    const query = args.join(" ");
    if (!query) {
      return api.sendMessage("❌ | Maglagay ka ng message para makausap si SimSimi.", event.threadID, event.messageID);
    }

    try {
      const res = await axios.get(`https://simsimi-api-pro.onrender.com/sim`, {
        params: {
          query: query,
          key: "a650beda66094d58b3e5c84b664420e8f2e65edd"
        }
      });

      if (res.data && res.data.success) {
        return api.sendMessage(res.data.success, event.threadID, event.messageID);
      } else {
        return api.sendMessage("⚠️ | Walang sagot si SimSimi.", event.threadID, event.messageID);
      }
    } catch (err) {
      console.error(err);
      return api.sendMessage("❌ | Error sa pag-connect kay SimSimi API.", event.threadID, event.messageID);
    }
  }
};