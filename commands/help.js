const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { execute } = require('./clear');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`-kick`', 'Kicks a member from your server')
        .addField('`-clear`', 'If no argument given clears 5 lines')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`-meme`', 'Generates a random meme')
        .addField('`-ascii`', 'Converts text into ascii')
        .addField('`-trap`', "IT'S A TRAP")
        .addField('`-kmk`', 'Creates a random kmk quote')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .addField('`-covid`', 'Track the amount of COVID-19 cases globally')
        .addField('`-ping`', 'Get the bot\'s API ping')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}