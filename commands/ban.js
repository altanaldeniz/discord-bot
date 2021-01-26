const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Bans a member from the server",

    async execute (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to use this command.")
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify the user.');

        if(!member) return message.channel.send("Can't find the user.");
        if(!member.bannable) return message.channel.send("This user can't be banned. It is either because they are a mod/admin or their role is higher than your role.");

        if(member.id === message.author.id) return message.channel.send("You cannot ban yourself.");

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        message.guild.members.ban(member)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        });

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Banned by', message.author)
        .addField('Reason', reason || "Unspeciifed")
        .setFooter('Time banned', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}