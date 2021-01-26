const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Returns the delay.',
    async execute (client, message, args) {
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`)
        message.reply(ping);
    },
}
