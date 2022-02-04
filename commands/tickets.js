const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "tickets",
    author: "yumi",

    run: async(client, message, args) => {
        if (!message.author.permissions.has("ADMINISTRATOR")) return message.replay("Você não tem permissão de usar este comando.");

        let embed_1 = new Discord.MessageEmbed()
    }
}