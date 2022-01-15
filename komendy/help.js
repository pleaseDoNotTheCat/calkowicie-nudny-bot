const { MessageEmbed } = require('discord.js')
module.exports = {
	name: "help",
   async execute(message, args) {
   const help = new MessageEmbed()
   .setTitle('Pomoc bota')
	.addFields(
		{ name: 'Pomoc Developerska', value: 'eval - uruchamia ci kod\nexec - uzywa komend systemu' },
       { name: 'Pomoc Wspierajacego', value: 'say, powiedz - bot papuga' },
        { name: 'Pomoc Uzytkownika', value: 'help - to gowno co widzisz\ninf = pisze kto jest gayem (najczesciej burrito)\nstatus - wysyla status bota\ninfo - wysyla info o uzytkowniku' },
	) 
   .setFooter('xd')
   .setColor('GREEN')
   message.reply({ embeds: [help], allowedMentions: { repliedUser: false } });
	}
}
