module.exports = {
	name: "powiedz",
   execute(message, args) {
const msg = args.join(' ').replaceAll('nigg', 'nword').replaceAll('kid', 'kword').replaceAll('@everyone', '@wszyscy').replaceAll('@here', '@hełe').replaceAll('everyone', 'wszyscy').replaceAll('here', 'hełe').replaceAll('https', 'link').replaceAll('http', 'ratlink');
        if (message.channel.id !== '818382652338995210')
        if (message.channel.id !== '818382525310173185') return message.reply(`ależ <@${message.author.id}> idź z tego kanalu na <#818382652338995210> lub na <#818382525310173185>`)
    if(!message.member.roles.cache.some(role => role.id === '834446487403364392'))  
if(!message.member.roles.cache.some(role => role.id === '819280767909494784'))
            if(!message.member.roles.cache.some(role => role.id === '819281185015595058'))
            if(!message.member.roles.cache.some(role => role.id === '825802939267285102'))
        if(!message.member.roles.cache.some(role => role.id === '819280242295701506')) return message.reply('Nie jesteś wspierajacym lub nie jestes w administracji');
        if (!msg) return message.reply('Po co używasz skoro nie podano tekstu?');
        message.channel.send({ content: `<@${message.author.id}>: ${msg}`, allowedMentions: { user: false }, allowedMentions: { roles: false }, allowedMentions: { everyone: false } });
       console.log(`uzyto saya! uzytkownik: ${message.author.tag} ${message.author.id}`);
	}
}
