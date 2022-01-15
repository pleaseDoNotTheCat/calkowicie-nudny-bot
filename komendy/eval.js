module.exports = {
    name: "eval",
    category: "Developers",
    description: "evalXD",
    execute(message, args) {
        const { client, author:user, member } = message;
        if (message.author.id !== "831943801818841198")
        if (message.author.id !== "804401104976216105")
        if (message.author.id !== "847042688675217439")
        if (message.author.id !== "526711537373806592")
        if (message.author.id !== "540984502252601356") return;
        try {
            const code = args.join(" ").replaceAll('token', 'nie');
            let valueOut = eval(code);

            message.reply(`In: ${code}\nOut: ${require('util').inspect(valueOut)}`);
          } catch (error) {
              const code = args.join(' ');
            message.reply(`In: ${code}\nError:${error}`);
        }
    }
}
