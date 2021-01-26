const Discord = require('discord.js');
const { version } = require('../package.json');

const moment = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {

    name: 'botinfo',
    description: 'Displays embedded profile.',

    async execute (client, message, args) {
        if(args[0]) return message.reply("Do not provide any arguments");
        
        const core = os.cpus()[0];
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor || 'BLUE')
            .addField('General', [
                `**❯ Client:** ${client.user.tag}`,
                `**❯ Commands:** ${client.commands.size}`,
                `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
                `**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
                `**❯ Creation Date:** ${moment.utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')} ${moment(client.user.createdTimestamp).fromNow()}`,
                '\u200b'
            ])
            .addField('System', [
                `**❯ Platform:** ${process.platform}`,
                `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
                `**❯ CPU:**`,
                `\u3000 Cores: ${os.cpus().length}`,
                `\u3000 Model: ${core.model}`,
                `\u3000 Speed: ${core.speed}MHz`,
            ])
            .setTimestamp();

        message.channel.send(embed);
        }

}