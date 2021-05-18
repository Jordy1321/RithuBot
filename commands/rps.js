const Discord = require('discord.js');

module.exports = {
    name: 'rps',
    description: "this is a meme command!",
    async execute(message, args){
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won! I chose Paper!');
                else return message.reply('You won! I chose Paper');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won! I chose Scissors!');
                else return message.reply('You won! I chose Scissors!');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I won! I chose Rock!');
                else return message.reply('You won! I chose Rock!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
}