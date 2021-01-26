const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'covid',
    description: 'Track a country or worldwide covid-19 cases',
    execute (client, message, args) {
        
        let countries = args.join(" ");
        
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing the arguments ex: -covid all or -covid "Turkey"')
        .setTimestamp()

        if(!args[0]) return message.reply(noArgs);

        if(args[0] === "all"){
            fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString();
                let recovered = data.recovered.value.toLocaleString();
                let deaths = data.deaths.value.toLocaleString();
                
                const covid = new Discord.MessageEmbed()
                .setTitle('Worldwide COVID-19 Stats')
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                message.reply(covid);
            
            })
        }
        else{
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString();
                let recovered = data.recovered.value.toLocaleString();
                let deaths = data.deaths.value.toLocaleString();
                
                const covid = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for ${countries}`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                message.reply(covid);
            }).catch(e => {
                return message.reply('Invalid country provided.')
            })
        }
    }
}