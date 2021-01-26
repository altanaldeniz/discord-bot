const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
	name: "server",	
	description: 'Displays information about the server that said message was run in.',
	async execute (client, message, args) {
		
		const embed = new MessageEmbed()
			.setDescription(`**Guild information for __${message.guild.name}__**`)
			.setColor('BLUE')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('General', [
				`**❯ Name:** ${message.guild.name}`,
				`**❯ ID:** ${message.guild.id}`,
				`**❯ Owner:** ${message.guild.owner.user.tag}`,
				`**❯ Region:** ${message.guild.region}`,
				`**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.setTimestamp();
		message.channel.send(embed);
	}

};