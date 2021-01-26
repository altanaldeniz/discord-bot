const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'embed',
    description: 'Displays embedded profile.',
    async execute (client, message, args) {
        if(!args[0]) return message.reply("You need to specify an account.")
        if(args[1]) return message.reply('Please give only 1 argument');
        const member = message.mentions.members.first();
        if(!member) return message.reply("Couldn't find the account.")
        const embed = new Discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(member.displayHexColor || 'BLUE')
            .addField('User', [
                `**❯ Username:** ${member.user.username}`,
                `**❯ Discriminator:** ${member.user.discriminator}`,
                `**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                `**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
            ])
        return message.channel.send(embed);
    },
    
}


