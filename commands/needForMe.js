                var users = bot.users
                var searchTerm = args[1];
                var matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
                var umatches = matches.map(u => u.tag).join(", ");
                if (!umatches) return message.channel.send(":warning:**User aren'\t found**")
                let dmmention = matches.first();


      case "balance":
       var user = message.mentions.users.first() || message.author;
        
        var balance = await db.fetch(`userBalance_${user.id}`)
        
        if (balance === null) balance = 0;
        
        var embed = new Discord.RichEmbed()
        .setTitle('Coin Balance')
        .setDescription(`${user.username}, **your balance:\n:dollar: $${balance}**`)
        .setColor('#42c5f4')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)
        break;
              case "daily":
        let cooldown = 8.64e+7,
        amount = 250;
        
        let lastDaily = await db.fetch(`lastDaily_${message.author.tag}`)
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
          let timeObj = ms(cooldown - (Date.now() - lastDaily));
          
          message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`)
          
        } else {
          var embed = new Discord.RichEmbed()
          .setTitle('Todays Daily')
          .setDescription(`Sucessfully collected :dollar:$${amount}`)
          .setColor('#42c5f4')
          .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
          
          db.set(`lastDaily_${message.author.id}`, Date.now());
          db.add(`userBalance_${targetMember.id}`, amount);
        }
        break;
              case "daily":
    let cooldown = 1//8.64e+7,
    amount = 250;

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`universalCurrency_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`universalCurrency_${message.member.id}`, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new discord.RichEmbed()
        .setAuthor(`The Galatic Banking Administration`, `http://www.netanimations.net/Animated-spinning-galaxy.gif`)
        .setColor(`DARK_RED`)
        .setDescription(`You Do Not Require Payment Recovery. Please Wait **${timeObj.hours}h ${timeObj.minutes}m**!`)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`universalCurrency_${message.member.id}`, amount).then(i => {
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`The Galatic Banking Administration`, `http://www.netanimations.net/Animated-spinning-galaxy.gif`)
            .setColor(`DARK_RED`)
            .addField(`Account Holder: `, `${message.author}`)
            .addField(`Accound ID: `, `${message.author.id}`)
            .addField(`Funds Have Been Recovered:`, `${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
        })}
    })} catch(err) {console.log(err)}
        break;
