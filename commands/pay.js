    const db = require('quick.db');
    const Discord = require('discord.js');
    
    module.exports.run = async (bot, message, args) => {
      
    let account = await db.fetch(`userBalance_${message.author.id}`)

    if (!args[1]) { // If they didn't define anyone, set it to their own.
            message.channel.send(':warning: `Please Define An Account Holder`')
            return;
        } else { // Run this if they did define someone...
            let firstMentioned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!firstMentioned) return message.channel.send(":warning: `Enter A Valid Name!`")
            defineduser = firstMentioned;
        }
    if (!Number(args[1])) {
        message.channel.send(':warning: `Please Enter An Amount Of Transferring.`')
            return;
        } else {
            let x = 500
            if(x >= args[1]) return message.channel.send(":no_entry: `Please Enter Higher Then $500.`")
        }
    if (account <= args[1]) { 
        message.channel.send(":no_entry: `You do not have enough $ to transfer.`")
        return;
    } else {
        let transfer = Number(args[1])
    
    db.add(`userBalance_${message.author.id}`, transfer).then(o =>{
            var Discord = require('discord.js');
            let walletEmbed = new Discord.RichEmbed()
            .setAuthor(`At todays we will all together pay!`)
            .addField(`Account ID: `, `${message.author.id}`, true)
            .addField(`Account Holder`, `${message.author}`)
            .addField(`Transfer...:`, `Sucessfully Complete!`)
            .setColor("#42c5f4")
            message.channel.send(walletEmbed)
    })
    db.subtract(`userBalance_${message.author.id}`, transfer).then(i => {
            var Discord = require('discord.js');
            let walletEmbed = new Discord.RichEmbed()
            .setAuthor(`At todays we will all together pay!`)
            .addField(`Account ID: `, `${message.author.id}`, true)
            .addField(`Account Holder`, `${message.author}`)
            .addField(`Transfer...:`, `Sucessfully Complete!`)
            .setColor("#42c5f4")
            message.channel.send(walletEmbed)
    })
    }}

module.exports.config = { // This is the config for a command. Able to add things like proper usage & etc.
    command: "pay",
}
