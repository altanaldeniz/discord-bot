const Discord = require('discord.js');

module.exports = {
    name: "atrap",
    description: "It's a",
    
    async execute (client, message, args){
        message.delete();
        const attachment = new Discord.MessageAttachment('https://i.hizliresim.com/AmBSHf.png');
        message.channel.send(attachment);

}
}