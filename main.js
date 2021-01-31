const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('Cryptic Clan bot is online!'); 
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    

    if(cmd === `${prefix}command goes here`){
        return message.reply("reply goes here")
    }

})

bot.login(process.env.token);