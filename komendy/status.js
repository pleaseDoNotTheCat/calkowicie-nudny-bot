const { MessageEmbed } = require('discord.js')
const d = require('pretty-ms')
module.exports = {
    name: "status",
    category: "user",
    execute(message, args, client) {
const embed = new MessageEmbed()
.setTitle(':ping_pong:')
.setDescription(`Ping: \`${message.client.ws.ping}ms\` \nUptime: \`${d(message.client.uptime)}\` \nPing Wiadomości: \`${Date.now() - message.createdTimestamp}ms\` \nNa razie tyle, cos pozniej wymysle XD`)
.setColor('GREEN')
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.avatarURL() )
message.reply({ embeds: [embed] });
        }
    }
