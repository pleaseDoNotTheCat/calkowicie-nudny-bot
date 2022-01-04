const { MessageEmbed } = require('discord.js')
module.exports = {
	name: "help",
   async execute(message, args) {
   const help = new MessageEmbed()
   .setTitle('Pomoc bota')
	.addFields(
		{ name: 'Pomoc Developerska', value: 'eval - uruchamia ci kod\nexec - uzywa komend systemu' },
		{ name: 'Pomoc Wstępna', value: 'tych komend nie ma w bocie ale sa w pomocy\n\n\nconsole-rainbow - loguje teńczowy tekst w konsoli (jestem leniwy i nie chce mi sie robic)' },
        { name: 'Pomoc Uzytkownika', value: 'help - to gowno co widzisz\ninf = pisze kto jest gayem (najczesciej burrito)' },
	) 
   .setFooter('xd')
   .setColor('GREEN')
   message.reply({ embeds: [help], allowedMentions: { repliedUser: false } });
	}
}