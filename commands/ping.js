const Discord = require("discord.js")

    module.exports = {
        name: "ping",
        author: "yumi",

        run: async(client, message, args) => {
            let cor_da_embed;
            
            let ping_do_bot = client.ws.ping;

            let embed_1 = new Discord.MessageEmbed()
            .setColor(cor_da_embed)
                .setDescription("**\`🏓\` Calculando ping...**");

                let embed_2 = new Discord.MessageEmbed()
                .setColor(cor_da_embed)
                .setDescription(`** O ping está em: \`${ping_do_bot} ms\`.**`);

                let comando_desenvolvido_por_Yumi = await message.reply({ content: `${message.author}`, embeds: [embed_1]}).then(msg => {
                    setTimeout( () => {
                        msg.edit({content: `${message.author}`, embeds: [embed_2]})
                    }, 2000)
                })
        }
    }