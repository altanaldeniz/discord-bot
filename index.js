    const fs = require('fs');
    const Discord = require('discord.js');
    const config = require('./config.json');


    const client = new Discord.Client();
    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command)
    }



    client.on('ready', () => {
        console.log("Bot is online!");
        client.user.setActivity("ozalp's PC since 2019", { type: 'WATCHING' })
        .catch(console.error);

    });

    let stats = {
        serverID: "763770764499353630",
        total: "766031623044202507",
        member: "766052047912042517",
        bots: "766052089180323877",

    }

    client.on('guildMemberAdd', member =>{
        if(member.guild.id !== stats.serverID) return;
        client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
        client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
        client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    })
    client.on('guildMemberRemove', member => {
        if(member.guild.id !== stats.serverID) return;
        client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
        client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
        client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    })

    client.on('message', async message =>{
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(client, message, args);
        } 
        catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }

    })
    client.login(config.token);
