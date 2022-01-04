const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "eval",
    category: "Developers",
    description: "evalXD",
    execute(message, args) {
        const { client, author:user, member } = message;
        if (message.author.id !== "831943801818841198")
        if (message.author.id !== "804401104976216105")
        if (message.author.id !== "526711537373806592")
        if (message.author.id !== "540984502252601356") return;
        try {
            const code = args.join(" ");
            let valueOut = eval(code);
    const embed1 = new MessageEmbed()
     .setTitle(typeof valueOut)
     .setDescription(`\`\`\`js\n${require('util').inspect(valueOut)}\`\`\` `)
     .setColor('GREEN')
     .setFooter('Medal sie należy')
            message.reply({embeds: [embed1]});
          } catch (error) {
            const embed2 = new MessageEmbed()
.setDescription(` \`\`\`js\nnie bo error: ${error}\`\`\` `)
.setColor('RED')
.setFooter('troche jeszcze popracuj')
            message.reply({embeds: [embed2]});
        }
    }
}