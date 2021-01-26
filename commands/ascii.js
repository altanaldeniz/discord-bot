const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",
    
    async execute (client, message, args){
        if(!args[0]) return message.channel.send('Please provide a message');
        msg = args.join(" ");

        figlet.text(`${msg}`, {
            font: 'Dancing Font',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters');
            message.channel.send('```' + data + '```');
        });
}
}