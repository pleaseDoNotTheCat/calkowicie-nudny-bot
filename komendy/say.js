module.exports = {
	name: "powiedz",
    execute(message, args) {
        const msg = args.join(' ').replaceAll('nigg', 'nword');
		if(!message.member.roles.cache.some(role => role.id === '834446487403364392'))
        if(!message.member.roles.cache.some(role => role.id === '819280242295701506')) return message.reply('tylko dla cituchów i administracji');
        if (!msg) return message.reply('Po co używasz skoro nie podano tekstu?');
        message.channel.send({ content: `<@${message.author.id}>: ${msg}`, allowedMentions: { user: false }, allowedMentions: { roles: false }, allowedMentions: { everyone: false } });
	message.delete();
       console.log(`uzyto saya! uzytkownik: ${message.author.tag} ${message.author.id}`);
	}
}
