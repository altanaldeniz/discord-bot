const figlet = require('figlet');

module.exports = {
    name: "kmk",
    description: "You can't be a good engineer",
    
    async execute (client, message, args){
        
        msg = ["You have to learn c", "You can't be a good engineer", "This is not equal", "Part A Part B", "Repeat after me", "Half of you will fail this class",
                "Are you stupid?", "I will ask 5 minutes later", "Think then speak", "What's your name", "Am I blind?", "Want some magic?", "I guarantee it",
                "I never teach you that!", "It's garbage value", "Do it at home", "Any ladies?", "This is not studio."
                ]
        let random = msg[Math.floor(Math.random() * msg.length)]
        figlet.text(`${random}`, {
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