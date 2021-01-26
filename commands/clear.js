module.exports = {
    name: 'clear',
    description: 'Clears the last n rows. If no argument specified then clears last 5 rows.',
    execute (client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.reply('You don´t have the permissions.')
        if(!args[0]) return message.channel.bulkDelete(5);    
            message.channel.bulkDelete(args[0]);
    },
}