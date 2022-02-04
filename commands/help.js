const Discord = require("discord.js");

module.exports = {
    name: "help", 
    author: "Yumi",
    run: async(client, message, args) => {
        let cor_das_embeds = "RANDOM";
        
        let embed_1 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true}) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(`**`)
    }
}