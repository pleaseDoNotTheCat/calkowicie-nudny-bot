const { MessageEmbed, message } = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
const client = new Discord.Client({
    intents: [32767, Discord.Intents.FLAGS.DIRECT_MESSAGES],
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
    if (!message.content.startsWith(prefix) || message.author.bot) 
    if (!message.content.startsWith(prefix2) || message.author.bot) return;
    db.add(`bot_${message.guild.id}_${message.author.id}`, 1);
    // ^ liczy ile razy uzyto bota na serwerze

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return message.reply('Ta komenda nie istnieje');

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        const eh = new MessageEmbed()
        .setTitle('Wystąpił błąd')
        .setDescription('Komenda nie jest odpowiedno zrobiona lub zostala zle uzyta')
        .setFooter(`Blad: ${error}`)
        .setColor('RED')
        .setThumbnail(`${message.author.avatarURL()}`)
        message.reply({ embeds: [eh] })
        console.error(error);
    }
});
client.login('token')
