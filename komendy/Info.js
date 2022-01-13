const { MessageEmbed } = require('discord.js')
const db = require('nope.db')
module.exports = {
	name: "info",
    execute(message, args) {
   const noping = message.mentions.users.first()
           const avatar2 = message.author.avatarURL()
        const e1 = new MessageEmbed()
        .setTitle('Informacje o tobie')
        .setDescription(`👦👧**Nazwa:** ${message.author.username}\n\n👦👧**Tag**: ${message.author.tag}\n\n**Dyskryminator**: #${message.author.discriminator}\n\n 👜**Id** ${message.author.id}\n\n🤖**Bot**: Nie\n\n:detective:**Utworzono konto**: <t:${Math.floor(message.author.createdTimestamp/1000)}:d>\n\n:detective::new: **Dolączono na serwer**: <t:${Math.floor(message.member.joinedTimestamp/1000)}:d> `)
        .setColor('YELLOW')
        .setThumbnail(avatar2)
        .setFooter('Informacje')
        if (!noping) return message.reply({ embeds: [e1], allowedMentions: { repliedUser: false } })
        const avatar = noping.avatarURL()
	
        const e2 = new MessageEmbed()
        .setTitle('Informacje')
        .setDescription(`👦👧**Nazwa:** ${noping.username}\n\n👦👧**Tag**: ${noping.tag}\n\n**Dyskryminator**: #${noping.discriminator}\n\n👜**Id**: ${noping.id}\n\n🤖**Bot**: ${noping.bot ? 'Tak' : 'Nie'}\n\n:detective:**Utworzono konto**: <t:${Math.floor(noping.createdTimestamp/1000)}:d>\n\n:detective::new: **Dolączono na serwer:** <t:${Math.floor(message.mentions.members.first().joinedTimestamp/1000)}:d> `)
        .setThumbnail(avatar)
        .setFooter('Informacje')
        .setColor('RANDOM')
        message.reply({ embeds: [e2], allowedMentions: { repliedUser: false } })
	}
}
