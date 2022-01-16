const { MessageEmbed, message } = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs')
const db = require('nope.db')
const client = new Discord.Client({
    intents: 32767,
});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    if(command.name) {
        client.commands.set(command.name, command);
        console.log(`Zaladowano poprawnie komendy ✅ ${file}`);
    } else {
        console.log(`Nie zaladowano poprawnie komend ❌ ${file}`);
    }
}
console.log('ready')
process.on("unhandledRejection", async (rejection) => {
    if (rejection === undefined) {
        return;
    }
    console.log("błąd node:", rejection)
});
client.on('messageCreate', (message, guild) => {
    const prefix =  "s>"
    const prefix2 = "S>"
    message.client.uptime+29134
    if (!message.content.startsWith(prefix) || message.author.bot) 
    if (!message.content.startsWith(prefix2) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return message.reply('Ta komenda nie istnieje');

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
message.reply(`Wystąpił błąd, zgłoś go do <@831943801818841198>`)
console.error(error)
    }
});
client.on('guildMemberRemove', member => {
  const papa = new MessageEmbed()
.setAuthor({ name: `Trupciowo`, iconURL: 'https://cdn.discordapp.com/icons/818374882873442314/a9fd4d4376228762c46a757c4d164014.webp'})
.setDescription(`Żegnaj <@${member.id}>, mamy nadzieje że kiedyś do nas wrócisz (Chyba że dostałeś bana to nie wrócisz XD) `)
.setFooter({ text: `${member.user.tag}`, iconURL: member.user.avatarURL() })
client.channels.cache.get('818386603847974942').send({embeds: [papa] })
});
client.login('token')
