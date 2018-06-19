const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  var help = new Discord.RichEmbed()
.setTitle(':clipboard: Help List') 
.setDescription('If you want to get more information, you must type `;help <only name of group like "Fun">`. The bot has 70 commands. Bot works every 12 hours, **and do not doubt for its long rest.**')
.setThumbnail(`${client.user.displayAvatarURL}`)
.addField(':tools: Owners Commands', "``stats, play, watch, stream, restart, exec``")
.addField(':gear: Useful Commands', "``help, serverinfo, botinfo, membercount, avatar, info``")
.addField(':warning: Help Commands', "``emoji, date, invite, weather, hastebin``")
.addField(':moneybag: Coin Commands', "``balance, daily, pay``")
.addField(':cyclone: NodeJS Commands', "``embed, rsb, cbs``")
.addField(':shield: Moderate Commands', "``warn, report, ban, unban, kick, clean``")
.addField(':balloon: Fun Commands', '``ping, 8ball, meme, joke, trump, say, pat, clapify, ascii, cat, dog, coinflip, candy, yesorno, react, complate, reverse``')
.addField(':notes: Music Commands', '``mplay, mskip, mstop, mnp, mvolume, mqueue, mpause, mresume``')
.addField(':underage: N.S.F.W Commands', '``puppy, lewd, hg, pawg``')
.addField(':closed_book: Additional Information', `
**Prefix: ;
Owner: RealSparky#3858
Support: https://discord.gg/WfRkWpV
Invite Link: https://discordapp.com/api/oauth2/authorize?client_id=455447742542774292&permissions=2146958583&scope=bot**`)
.setTimestamp()
.setFooter('Requested by ' + message.author.tag, message.author.avatarURL)
.setColor('#42c5f4')
        message.author.send(help)
  
       if (console.err) {
     message.channel.send("Error! Please, open your DM channel or try again!")
     return;
    }

  }
