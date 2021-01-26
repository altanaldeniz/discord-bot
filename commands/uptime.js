const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'uptime',
    description: "Bot's uptime.",
    async execute (client, message, args) {
        message.channel.send(`I've been online since \`${ms(client.uptime, { long: true })}\``);
    },
}