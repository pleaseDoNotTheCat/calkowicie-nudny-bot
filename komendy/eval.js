const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "eval",
    category: "Developers",
    description: "evalXD",
    execute(message, args) {
        const { client, author:user, member } = message;
        if (message.author.id !== "831943801818841198")
        if (message.author.id !== '508258776134975499')
        if (message.author.id !== "804401104976216105")
        if (message.author.id !== "847042688675217439")
        if (message.author.id !== "540984502252601356") return;
        try {
            const code = args.join(" ").replaceAll('token', 'ping');
            let valueOut = eval(code);
const embed = new MessageEmbed()
.setTitle('Uruchamianie kodu')
.setDescription(` \`\`\`js\n${require('util').inspect(valueOut)}\`\`\` \nTyp \`\`\`js\n${typeof valueOut}\`\`\`  `)
.setColor('GREEN')
				} catch (error) {
              const code = args.join(' ');
const e = new MessageEmbed()
.setTitle('Uruchamianie kodu')
.setDescription(` \`\`\`js\n${error}\`\`\` `) 
.setColor('RED')
}
    }
}
