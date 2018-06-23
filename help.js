const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  var help = new Discord.RichEmbed()
.setTitle(':clipboard: Help List') 
.setDescription('If you want to get more information, you must type `;help <only name of group like "Fun">`. Bot works every 12 hours, **and do not doubt for its long rest.**')
.setThumbnail(`${client.user.displayAvatarURL}`)
.addField(':tools: Owners Commands', "``stats, play, watch, stream, restart, exec``")
.addField(':gear: Useful Commands', "``help, serverinfo, botinfo, membercount, avatar, info``")
.addField(':warning: Help Commands', "``nickname, emoji, date, invite, weather, hastebin, invitelist``")
.addField(':moneybag: Coin Commands', "``balance, daily, pay``")
.addField(':cyclone: NodeJS Commands', "``embed, rsb, cbs``")
.addField(':shield: Moderate Commands', "``warn, report, ban, unban, kick, clean``")
.addField(':balloon: Fun Commands', '``ping, 8ball, meme, joke, trump, say, pat, clapify, ascii, cat, dog, coinflip, candy, yesorno, react, complate, reverse``')
.addField(':notes: Music Commands', '``mplay, mskip, mstop, mnp, mvolume, mqueue, mpause, mresume``')
.addField(':underage: N.S.F.W Commands', '``puppy, lewd, hg, pawg``')
.setColor('#42c5f4')
        message.author.send(help)
  var info = new Discord.RichEmbed()
  .setColor('#42c5f4')
  .setTitle(':closed_book: Additional Information')
  .addField('Invite Link', "https://discordapp.com/api/oauth2/authorize?client_id=455447742542774292&permissions=2146958583&scope=bot")
  .addField('Support Link', "https://discord.gg/WfRkWpV")
  .addField(':satellite: Main Information', `**Prefix: ;\nOwner: RealSparky#3858\nTeam: Alpha Development**`)
  .setTimestamp()
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.author.send(info)
  
  
       if (console.err) {
     message.channel.send("Error! Please, open your DM channel or try again!")
     return;
    }

  }
