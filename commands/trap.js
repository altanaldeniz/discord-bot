const Discord = require('discord.js');

module.exports = {
    name: "trap",
    description: "It's a",
    
    async execute (client, message, args){
        message.delete();
        const attachment = new Discord.MessageAttachment('https://i.hizliresim.com/qYaoL1.png');
        message.channel.send(attachment);
}
}