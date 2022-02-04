const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "tickets",
    author: "yumi",

    run: async(client, message, args) => {
        let confirmando_sistema = db.get(`sistema feito por yumi :D${message.guild.id}`)
        
        if (!message.author.permissions.has("ADMINISTRATOR")) return message.replay("Você não tem permissão de usar este comando.");
        if(confirmando_sistema === "Ativado") return message.replay("O sistema já está ativado")

        let embed_1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author} Deseja ativar o ticket?`);

        let embed_2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${message.author} O sistema de tickets foii \`ativado\`!`);

        let embed_3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${message.author} O sistema de tickets foii \`desativado\`! `);

        message.reply({ embeds: [embed_1]}).then(msg => {
            let emoji_sim = "✅"
            let nome_emoji_sim = "white_check_mark";

            let emoji_nao = "❌";
            let nome_emoji_nao = "x"

            let emoji_trash = "🗑️";
            let nome_emoji_trash = "wastebasket"
            
            msg.react(emoji_sim)
            msg.react(emoji_nao)
            msg.react(emoji_trash)

            let filtro_1 = (emoji_yumi, user_yumi) => emoji_yumi.emoji.name === nome_emoji_sim&& user_yumi.id === message.author.id; //confirma
            let_collector_1 = msg.createReactionCollecttor(filtro_1);

            let filtro_2 =(emoji_yumi, user_yumi) => emoji_yumi.emoji.name === nome_emoji_nao && user_yumi.id === message.author.id; //desconfirma
            let_collector_2 = msg.createReactionCollecttor(filtro_2);

            let filtro_3 = (emoji_yumi, user_yumi) => emoji_yumi.emoji.name === nome_emoji_nao && user_yumi.id === message.author.id; //apaga
            let_collector_3 = msg.createReactionCollecttor(filtro_3);

            collector_1.on("collect", () => {
                db.set(`sistema feito por yumi :D${message.guild.id}`)

                msg.delete();

                message.reply({ embeds: [embed_2]})
            });
            collector_2.on("collect", () => {
                msg.delete();
                msg.reply({embeds: [embed_3]})
            });
            collector_3.on("collect", () =>{
                db.delete(`sistema feito por yumi :D${message.guild.id}`);
                
                msg.delete()

                message.reply({ embeds: [embed_4]})
            })
        })
    }
}