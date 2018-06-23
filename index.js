const Discord = require('discord.js'),
      arraySort = require('array-sort'), 
      table = require('table');
const fs = require('fs');
const exec = require('child_process').exec;
const meme = require('memejs');
const help = require('./commands/help.js').run;
const pay = require('./commands/pay.js').run;
const superagent = require('superagent');
const math = require('math-expression-evaluator');
const Jimp = require('jimp');
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const cpuStat = require("cpu-stat")
const sm = require('string-similarity');
const Fortnite = require('fortnite');
const randomPuppy = require('random-puppy');
const send = require("quick.hook");
const ms = require('parse-ms');
const db = require('quick.db');
const figlet = require('figlet');
const weather = require('weather-js');
const Client = require('fortnite');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const snekfetch = require('snekfetch');
const DiscordTools = require('discordtools');
const querystring = require("querystring");
const request = require('request');
const iso = require('iso-639-1');
const economy = require('discord-eco')
const humanizeduration = require("humanize-duration");
const translate = require('google-translate-api');
const currencyFormatter = require('currency-formatter')
const Mexp = require('math-expression-evaluator')
const Langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];
const shorten = require('isgd');
const ownerID = "353271087758573578"
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});
const talkedRecently = new Set();
const tools = new DiscordTools(process.env.TOKEN);
const youtube = new YouTube(process.env.YTAK);
const queue = new Map();
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setUsername('Nissan')
    client.user.setStatus('idle')
    client.user.setActivity(`Type ;help || Coding Me...`, { type: "streaming", url: "https://www.twitch.tv/sh1eldee" });
    console.log(`Logged in as ${client.user.tag}!`);
});


var prefix = ";";
client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
  
    switch (args[0].toLowerCase()) {
      case "exec":
        if (message.author.id !== "353271087758573578" && message.author.id !== "378998523028307973") return message.channel.send(':no_entry: `Sorry, but you are not owner!`')
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
        break;
                case 'restart':
            if (message.author.id !== "353271087758573578" && message.author.id !== "378998523028307973") return message.channel.send(":no_entry: ``Sorry, but you cant restart bot!``");
       resetBot(message.channel);
            function resetBot(channel) {
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.TOKEN));
              var embed = new Discord.RichEmbed()
                .setDescription("Nissan is **sucessfully restarted!**")
                .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
                .setColor("#42c5f4")
              message.channel.send(embed)
            }
            break;
      case "watch":
var nameResult = args.join(' ').slice(5);
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
if (message.author.id !== "353271087758573578" && message.author.id !== "378998523028307973") return message.channel.send(":no_entry: `Sorry, but you cant change watch status!`");
var embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`**${nameResult} is now my new Playing Game.** (Set as WATCHING)`)
.setFooter('Requested By' + message.author.tag, message.author.avatarURL)
.setColor('#42c5f4')
message.channel.send(embed)
break;
        case "play":
            var gamestr = args.join(" ").replace("play ", "");
            if (message.author.id === "378998523028307973" || message.author.id === "353271087758573578") {
                client.user.setPresence({ game: { name: gamestr, type: 0 } });
                message.channel.send("**The game was set to **" + gamestr);
            }
            else {
                message.reply("Access denied.");
            }
            break;
        case "stream":
            if (message.author.id !== "353271087758573578" && message.author.id !== "378998523028307973") return message.channel.send(":no_entry: `Sorry, but you cant chang the stream status!`");
            var sgame = args.join(' ').substring(7);
            if (sgame.length === 0) {
                var embed = new Discord.RichEmbed()
                    .setColor('#42c5f4')
                    .setDescription('**❎ Name streaming status!**')
                    .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
                message.channel.send({ embed });
            }
            else {
                client.user.setPresence({ game: { name: sgame, url: 'https://twitch.tv/sh1eldee', type: 1 } });
                var embed = new Discord.RichEmbed()
                    .setColor('#42c5f4')
                    .setDescription('✅ `You sucessfully changed streaming status.`')
                   .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
                message.channel.send({ embed });
            };
            break;
      case "nickname":
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions to change Nissan's nickname!!`");
  if(!args[1]) return message.channel.send(":warning: `You need to type some text to change Nissan's Usarname first!`")

  let nickname = args.join(' ').slice(8)
  message.guild.members.get('455447742542774292')
  .setNickname(nickname);
  await message.channel.send({
  embed: new Discord.RichEmbed()

  .setTitle(`Changed Server Nickname to ${nickname}`)
  .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
  .setColor("#42c5f4")
  })
        break;
      case "prefix":
  if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '353271087758573578') return message.channel.send(':no_entry: `Sorry, you don\'t have permission to change server prefix`')
        
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) db.set(`prefix_${message.guild.id}`, ';');

if (!args.join(' ').slice(7)) return message.channel.send(':warning: `Please provide a prefix to change server prefix`')

db.set(`prefix_${message.guild.id}`, args.join(' ').slice(7))
	.then(i => {
		var embed = new Discord.RichEmbed()
    .setColor("#42c5f4")
    .setDescription(`Server Prefix has been changed to ${i}`)
    .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
	})
        break;
        case "serverinfo":
            var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
            var day = message.guild.createdAt.getDate();
            var month = 1 + message.guild.createdAt.getMonth();
            var year = message.guild.createdAt.getFullYear();
            var sicon = message.guild.iconURL;
            var embed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, sicon)
                .setFooter('Server Created • ' + month + "." + day + "." + year)
                .setColor('#42c5f4')
                .setThumbnail(sicon)
                .addField('ID', message.guild.id, true)
                .addField('Name', message.guild.name, true)
                .addField('Owner', message.guild.owner.user.tag, true)
                .addField('Region', message.guild.region, true)
                .addField('Channels', message.guild.channels.size, true)
                .addField('Members', message.guild.memberCount, true)
                .addField('Humans', message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
                .addField('Bots', message.guild.members.filter(m => m.user.bot).size, true)
                .addField('Online', online.size, true)
                .addField('Roles', message.guild.roles.size, true)
                .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
            message.channel.send({ embed });
            break;
      case "botinfo":
  var embed = new Discord.RichEmbed()
  .setColor('#42c5f4')
  .setTitle(`About Nissan Bot`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Info", `**Creation Date**: ${moment.utc(client.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n**ID**: ${message.client.user.id}\n**Owner**: RealSparky\n**Version**: 2.0.1+ (Final Version)\n**Support Server**: https://discord.gg/Sjewjq`)
  .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed);
break;
                case "avatar":
            var user = message.mentions.users.first() || matches.first() || message.author;
            var embed = new Discord.RichEmbed()
                .setDescription('[Avatar Link](' + user.avatarURL + ')')
                .setImage(user.displayAvatarURL)
                .setColor('#42c5f4')
                .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
            message.channel.send({ embed })
            break;
                case "info":
            var user = message.mentions.users.first() || matches.first() || message.author;
            var embed = new Discord.RichEmbed()
                .setThumbnail(user.avatarURL)
                .setColor('#42c5f4')
                .setTitle(`User Info for __${user.username}__`)
                .addField('•ID', user.id, true)
                .addField('•Discriminator', user.discriminator, true)
                .addField('•Status', user.presence.status, true)
                .addField("•Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
                .addField('•Bot?', user.bot, true)
                .addField('•Created At', user.createdAt, true)
                .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
            message.channel.send({ embed });
            break;
                case "clean":
            if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            if (isNaN(args[1])) return message.channel.send(':warning: `Please supply a valid amount of messages to purge`');
            if (args[1] > 100) return message.channel.send(':warning: `Please supply a number less than 100`');
            message.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()            
            .setAuthor('Clean Embed')
            .setDescription(`Cleaned **${args[1]}** messages :white_check_mark:`)
            .setFooter('Requested By' + message.author.tag, message.author.avatarURL)
            .setColor('#42c5f4');
            message.channel.send(cleanEmbed);
            break;
      case "weather":
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send(':no_entry: `Please enter a right location!`')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor('#42c5f4')
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Feels Like', `${current.feelslike} Degrees`, true)
          .addField('Winds',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
        break;
                case "invite":
          if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: `I do not have the correct permissions.`').catch(console.error);
            message.channel.createInvite({ maxAge: 0 }).then(invite => {
                var embed = new Discord.RichEmbed()
                    .setColor('#42c5f4')
                    .setDescription(`**Permanent Invite Link**: ${invite}`);
                message.channel.send(embed);
            });
            break;
              case "date":
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
var embed = new Discord.RichEmbed()
.setColor('#42c5f4')
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
.setFooter("Requested By " + message.author.tag, message.author.avatarURL)
message.channel.send({ embed })
    message.react("🕰")   
        break;
      case "stats":
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }



  var duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  var embedStats = new Discord.RichEmbed()
    .setTitle("*** Statistics Of Nissan ***")
    .setColor('#42c5f4')
    .addField(":cd: Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(":watch: Uptime ", `${duration}`, true)
    .addField(":telescope: Users", `${client.users.size.toLocaleString()}`, true)
    .addField(":pager: Servers", `${client.guilds.size.toLocaleString()}`, true)
    .addField(":anger: Guilds ", `${client.channels.size.toLocaleString()}`, true)
    .addField(":flag_ua: Country", `Ukraine`, true)
    .addField(":beginner: Library", `Discord.js`, true)
    .addField(":beginner: Version Of Discord.js", `v${version}`, true)
    .addField(":shield: Version Of Bot", `2.0.1+ (Final Version)`, true)
    .addField(":octagonal_sign: Commands Count", `73 commands`, true)
    .addField(":rocket: Node", `${process.version}`, true)
    .addField(":floppy_disk: CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField(":minidisc: CPU usage", `\`${percent.toFixed(2)}%\``,true)
    .addField(":desktop: Kind Of System", `\`${os.arch()}\``,true)
    .addField(":mouse_three_button: Platform", `\`\`${os.platform()}\`\``,true)
    message.channel.send(embedStats)
  });

break;
      case "complete":
  if (!args[1]) return message.channel.send(':warning: `Please input some text`'); 
 
  let members = [];
  let indexes = [];
 
  message.guild.members.forEach(function(member){ 
    members.push(member.user.username);
    indexes.push(member.id); 
  });
 

  let match = sm.findBestMatch(args.join(' '), members);

  let username = match.bestMatch.target; 

 
  let member = message.guild.members.get(indexes[members.indexOf(username)]); 
        
  message.channel.send('`Do you mean:` ' + member); 
break;
      case "emoji":
       var List = message.guild.emojis.map(e => e.toString()).join(" ");

        var EmojiList = new Discord.RichEmbed() 
            .setAuthor('Emojis on this server') 
            .setColor('42c5f4')
            .setDescription(List)
            .setTimestamp() 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
        break;
              case "membercount":
  var sicon = message.guild.iconURL;
	var embed = new Discord.RichEmbed()
    .setAuthor('Nissan', client.user.avatarURL)
		.setColor('#42c5f4')
		.setThumbnail(sicon)
		.addField('Members', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.setFooter(`Owner: ${message.guild.owner.user.tag}`)
	message.channel.send(embed);
break;
      case "math":
        var embed = new Discord.RichEmbed()
        .setColor("#42c5f4");
    
    if (!args[1]) {
        
        embed.setFooter(':warning: `Please input an expression.`');
        
        return message.channel.send(embed);
        
    }
    
    var result;
    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) {
        
        result = 'Error: "Invalid Input"';
        
    }
        
    
    embed.addField('Input', `\`\`\`js\n${args.join(' ').slice(4)}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``)
         .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
         
    message.channel.send(embed);
        break;
      case "help":
  switch (args[1]) {
        case "owners":
    var embed = new Discord.RichEmbed()
    .setTitle(':tools: Owners Commands')
    .setDescription('This is commands which can use ``only owners.``')
    .addField('Commands in this group:', `;stats - **Shows bot stats**\n;play - **Changing game to play**\n;watch - **Setting watch status**\n;restart - **Rebooting bot**\n;exec - **Running CMD**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
        case "usefull":
    var embed = new Discord.RichEmbed()
    .setTitle(':gear: Usefull Commands')
    .setDescription('This group lists ``the most needed and used commands.``')
    .addField('Commands in this group:', `;help - **Sending help list to DM**\n;serverinfo - **Sending info about server**\n;botinfo - **Sending info about bot**\n;membercount - **Counting all users on this guild**\n;avatar - **Sending others/your avatar link**\n;info - **Shows others/your info**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
        case "help":
    var embed = new Discord.RichEmbed()
    .setTitle(':warning: Help Commands')
    .setDescription('Here we have ``commands for help.``')
    .addField('Commands it this group:', `;nickname - Changing Nissans Nickname\n;emoji - **Sending in chat all emojis on this guild**\n;date - **Shows todays date**\n;invite - **Creating invite to this server**\n;weather - **Shows weather in once of your location**\n;hastebin - **Trasnfers JS code or text to Hastebin**\n;invitelist - **Sending in chat an embed of invites**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;        
       case "coin":
    var embed = new Discord.RichEmbed()
    .setTitle(':moneybag: Coin Commands')
    .setDescription('But there... ``commands with coin system.``')
    .addField('Commands it this group:', `;balance - **Sending your coin balance**\n;daily - **Giving your daily once for day**\n;pay - **Giving someone your amount**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
        case "nodejs":
    var embed = new Discord.RichEmbed()
    .setTitle(':cyclone: NodeJS Commands')
    .setDescription('Here are the commands for help in ``coding on Node JS``')
    .addField('Commands in this group:', `;embed - **Sending an example of Discord RichEmbed**\n;rsb - **Sending some help of Restart/Shutdowm Bot**\n;cbs - **Sending some help of Changing Bot Status**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
        case "moderate":
    var embed = new Discord.RichEmbed()
    .setTitle(':shield: Moderate Commands')
    .setDescription('On all servers there are violators, and here, ``I have the command for punishment.``')
    .addField('Commands in this group', `;warn - **Creats warning for violator**\n;report - **Creates report for violator**\n;ban - **Bans once of violators**\n;unban - **Unbans once of user**\n;kick - **Kicks once of violators**\n;clean - **Deletes spammimng messages**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
       case "fun":
    var embed = new Discord.RichEmbed()
    .setTitle(':balloon: Fun Commands')
    .setDescription('Commands that will ``make you smile.``')
    .addField('Commands in this group:', `;ping - **Playing a Ping Pong Game**\n;8ball - **Predicts the feature**\n;meme - **Sending a meme in chat**\n;joke - **Sending a joke in chat**\n;trump - **Sending in chat a joke with trump**\n;say - **Sending in chat you sentence by bot**\n;pat - **Shows a picture with Anime**\n;clapify - **Command to reacreate sentence with Clap emoji**\n;ascii - **Commad to reacreate your sentece with lines**\n;cat - **Sending in chat picture with cat**\n;dog- **Sending in chat a picture with dog**\n;coinflip - **Playing a game with coin**\n;candy - **Giving for you some candys**\n;yesorno - **Predicts the feature 2**\n;react - **React your last message**\n;complete - **Compliting once of usernames**\n;reverse - **Reversing your sentence**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
       case "music":
    var embed = new Discord.RichEmbed()
    .setTitle(':notes: Music Commands')
    .setDescription('I see that you love rhythm, ``such as music.``')
    .addField('Commands in this group', `;mplay - **Sending in chat а selection of your named music**\n;mskip - **Skipping once of your music**\n;mstop - **Stopping the music and removing the queue**\n;mnp - **Sending in chat music which now playing**\n;mvolume - **Changing a volume**\n;mqueue - **Sending in chat a queue of your selected songs**\n;mpause - **Pausing your song**\n;mresume - **Continuing your song**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
       case "n.s.f.w":
    var embed = new Discord.RichEmbed()
    .setTitle(':underage: N.S.F.W Commands')
    .setDescription('**If you are an adult**, ``then this is the command for you.``')
    .addField('Commands in this group', `;puppy - **Sending some puppys in N.S.F.W channel**\n;lewd - **Sending some lewd in N.S.f.W channel**\n;hg - **Sending some hentai GIF's in N.S.F.W channel**\n;pawg - **Sending some PAWGs in N.S.F.W channel**`)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    .setColor('#42c5f4')
    message.channel.send(embed)
    break;
      default:
help(client, message, args)
    message.react("✅")
      break;
    }
        break;
      case "embed":
var embed = tools.embed({
	title: "DiscordTools",
	description: "This is Rich Embed!",
	color: '#42c5f4',
	author: "RealSparky#3858",
	image: "https://www.iconfinder.com/icons/939736/embed_icon_icon#size=512",
	url: "https://www.npmjs.com/package/discordtools",
	timestamp: "2018-06-01T11:36:07.830Z",
	footer: "Made by RealSparky#3858",
	thumbnail: "https://goo.gl/jQW1DR"
});
message.channel.send({ embed });
break;
      case "rsb":
var embed = new Discord.RichEmbed()
.setTitle("Restart/Shutdown Bot Command")
.setColor('#42c5f4')
.addField("The command that turns off your bot", "https://sourcecode.plexidev.org/view?key=5420993348471751")
.addField("The command thas restarts your bot", "https://sourcecode.plexidev.org/view?key=1877077968028027")
.setFooter("Requested By " + message.author.tag, message.author.avatarURL)
message.channel.send(embed)
        break;
      case "cbs":
var embed = new Discord.RichEmbed()
.setTitle("Changing Bot Status Command")
.setColor('#42c5f4')
.addField('Command thats changing play status', "https://sourcecode.plexidev.org/view?key=2365575475833255")
.addField('Command thats changing watch status', "https://sourcecode.plexidev.org/view?key=6311378966773397")
.addField('Command thats changing stream status', "https://sourcecode.plexidev.org/view?key=1014133015924863")
.addField('Command thats changing listen status', "https://sourcecode.plexidev.org/view?key=4336326320656338")
.setFooter("Requested By " + message.author.tag, message.author.avatarURL)
message.channel.send(embed)
        break;
      case "balance":
       var user = message.mentions.users.first() || matches.first() || message.author;
        
        var balance = await db.fetch(`userBalance_${user.id}`)
        
        if (balance === null) balance = 50;
        
        var embed = new Discord.RichEmbed()
        .setTitle('Coin Balance')
        .setDescription(`${user.username}, **your balance:\n:dollar: $${balance}**`)
        .setColor('#42c5f4')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)
        break;
      case "daily":
    let cooldown = 8.64e+7,
    amount = 250

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`Next Daily`)
        .setColor('#42c5f4')
        .setDescription(`You sucessfully collected this, you must wait to collect next dily. Time Left: **${timeObj.hours}h ${timeObj.minutes}m**!`)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Todays Daily')
          .setDescription(`Sucessfully collected :dollar:$${amount}`)
          .setColor('#42c5f4')
          .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}
        break;
      case "pay":
        pay(client, message, args)
        break;
      case "invitelist":
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send(':no_entry: `Sorry, I don\'t have the proper permissions to view invites!`');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    var embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor("#42c5f4")
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp()
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
    message.channel.send(embed);
        break;
      case "reverse":
  if(!args[1]) return message.channel.send(':warning: `Correct usage:` **;reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' ').slice(7))
   
  if(args[1] === sreverse) {
  
  sreverse = `${args.join(' ').slice(7)}..Wait... You broke it!`
  
  }
  var reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor('#42c5f4')
  .addField('Input: ', '```' + `${args.join(' ').slice(7)}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
          break;
                case "ping":
        var embed = new Discord.RichEmbed()
    .addField('Pong! ```Latency: ```', new Date().getTime() - message.createdTimestamp + " ms ")
    .setColor('#42c5f4')
message.channel.send(embed)
            break;
      case "pawg":
    let replies = ["https://cdn.boob.bot/pawg/5CBA.jpg", "https://cdn.boob.bot/pawg/4A44.jpg", "https://i.imgur.com/JYk7NiJ.png", "https://i.imgur.com/6eMFDyG.png", "https://i.imgur.com/V2MRHzR.png", "https://i.imgur.com/vfPa4ng.jpg", "https://i.imgur.com/M2SlhtV.png", "https://i.imgur.com/pYOGIK8.png", "https://i.imgur.com/oM7kEL5.jpg", "https://i.imgur.com/pQiOFRx.png", "https://i.imgur.com/Raz6EKR.png", "https://i.imgur.com/x1WqJfv.png", "https://i.imgur.com/Czk7YlX.jpg"];
    if (!message.channel.nsfw) return message.reply("You can use this command only on n.s.f.w channel!");

    var result = Math.floor((Math.random() * replies.length));

    let pawgembed = new Discord.RichEmbed()
        .setTitle("Here! Take some PAWG's! 🍑")
        .setColor('#42c5f4')
        .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(pawgembed);
break;
      case "yesorno":
    var color = ''
      var { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    var embed = new Discord.RichEmbed()
    .setColor('#42c5f4')
    .setImage(`${body.image}`)
    message.channel.send(`The magic API says: **${body.answer}**`, {embed});
break;
      case "react":
        message.delete()
        message.react("➡")
        message.react("👌")
        message.react("😂")
        break;
                case "8ball":
            if (!args[1]) {
               message.channel.send(':warning: Error! Usage: ``;8ball <question>``')
                return;
            }
            var sayings = ["It is certain",
                "•It is decidedly so",
                "•Without a doubt",
                "•Yes, definitely",
                "•You may rely on it",
                "•As I see it, yes",
                "•Most likely",
                "•Outlook good",
                "•Yes",
                "•Signs point to yes",
                "•Reply hazy try again",
                "•Ask again later",
                "•Better not tell you now",
                "•Cannot predict now",
                "•Concentrate and ask again",
                "•Don't count on it",
                "•My reply is no",
                "•My sources say no",
                "•Outlook not so good",
                "•Very doubtful"];

            var result = Math.floor((Math.random() * sayings.length) + 0);
            const ballEmb = new Discord.RichEmbed()
                .setColor('#42c5f4')
                .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
                .addField(args, sayings[result]);
            message.channel.send({ embed: ballEmb })
            break;
                case "joke":
            var { body } = await superagent
                .get(`https://icanhazdadjoke.com/slack`);

            var o = new Discord.RichEmbed()
                .setColor('#42c5f4')
                .setDescription("**" + body.attachments.map(a => a.text) + "**")
            message.channel.send(o)

            break;
        case "meme":
            meme(function (data) {
                var embed = new Discord.RichEmbed()
                    .setTitle(data.title[0])
                    .setColor('#42c5f4')
                    .setImage(data.url[0])
                message.channel.send({ embed });
            });
            break;
        case "coinflip":
            let coin = ['https://www.dhresource.com/0x0s/f2-albu-g4-M01-CB-6B-rBVaEFf172SADIH4AAxRIyzuR3s387.jpg/united-states-of-america-coins-liberty-head.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg']
            var flip = Math.floor((Math.random() * coin.length));
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setImage(coin[flip])
                .setColor('#42c5f4')
            message.channel.send({ embed });
            break;
                case "candy":
  if (message.mentions.users.size < 1) return message.channel.send(':warning: `You must mention someone to give candy them.`').catch(console.error);
  if(!args[0]) {

  var buyEmb = new Discord.RichEmbed()
  .setColor('#42c5f4')
  .setTitle(`:candy: ${message.author.username} bought him self a candy! :candy:`)
  .setImage('https://data.whicdn.com/images/29808733/original.gif')
  message.channel.send({embed: buyEmb})
  return;
  }
  
  
  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  var candyEmb = new Discord.RichEmbed()
  .setColor('#42c5f4')
  .setTitle(`:candy: ${message.author.username} gave ${message.mentions.members.first().user.username} a candy! :candy:`)
  .setImage('https://78.media.tumblr.com/427ed12ad003c4dae17f31a198396656/tumblr_nxxqz5SRlY1uf9lmco1_500.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  var buyEmb = new Discord.RichEmbed()
  .setColor('#42c5f4')
  .setTitle(`:candy: ${message.author.username} bought him self a candy! :candy:`)
  .setImage('https://data.whicdn.com/images/29808733/original.gif')
  message.channel.send({embed: buyEmb})
            break;
              case "dog":
            var { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    var embed = new Discord.RichEmbed()
    .setColor('#42c5f4')
    .setTitle("Woof :dog2:")
    .setImage(body.message)
    message.channel.send(embed)
        break;
    case "cat":
       var { body } = await superagent
       .get('http://aws.random.cat/meow');
       var embed = new Discord.RichEmbed()
       .setColor('#42c5f4')
       .setTitle("Meow :cat:")
       .setImage(body.file)
       message.channel.send({embed})
        break;
      case "trump":
    if (message.channel.type === "dm") return;
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.channel.send(':no_entry: `Please, specify a thing that trump will make illegal`');
    }
    if (meow.length > 1) {
        return message.reply(':no_entry: `Max 1 word!`');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump has now made " + meow + " illegal!", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");
    emb.setImage(illegal);
    emb.setColor('#42c5f4')
    message.channel.send({
        embed: emb
    })
break;
                case "say":
            message.bulkDelete();
            if (message.author.bot) return;

            var msg = message.content.toUpperCase();
            var args = msg.split(" ")
            if (!args[1]) return message.channel.send(":warning: `You have to provide a message to say!`");
            var arg = message.content.split(" ").slice(1);
            message.channel.send(arg.join(" "));
            break;
                case "pat":
if (!args[1]) return message.channel.send(':warning: `Please mention someone!`')

var images = ["https://cdn.discordapp.com/attachments/424667806320033814/437807617965031424/unnamed_1.gif", "https://cdn.glitch.com/5df641e3-8d98-4abb-9045-d5482434003a%2FJake_pat.gif?1524497996034", "https://media.tenor.com/images/cdc004bbbaba6f60d8e62a1f127516e0/tenor.gif", "https://cdn.discordapp.com/attachments/456378931256360964/458970321450434591/8b426c9bedc37054cd7e73925fa10da5.gif", "https://cdn.discordapp.com/attachments/456378931256360964/458970517437808641/tenor.gif", "https://cdn.discordapp.com/attachments/456378931256360964/458970517169504277/85777dd28aa87072ee5a9ed759ab0170b3c60992_hq.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

var patEmb = new Discord.RichEmbed()
.setColor('#42c5f4')
.setImage(randomImage);
var sadEmb = new Discord.RichEmbed()
.setColor('#42c5f4')
.setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
if(!!message.mentions.users.first() > 1) {
  message.channel.send(`<@${message.author.id}> pated... Oh wait! You can't pat yourself!`, {embed: sadEmb});
  return;
}
        
message.channel.send(`<@${message.author.id}> pated ${args[1]}`, {embed: patEmb})
  break;
                case "report":
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!rUser) return message.channel.send(":no_entry: `Couldn't find user.`");
            var rreason = args.join(" ").slice(22);

            var reportEmbed = new Discord.RichEmbed()
                .setDescription("Reports")
                .setColor('#42c5f4')
                .addField("•Reported User", `${rUser} with ID: ${rUser.id}`)
                .addField("•Reported By", `${message.author} with ID: ${message.author.id}`)
                .addField("•Channel", message.channel)
                .addField("•Time", message.createdAt)
                .addField("•Reason", rreason);

            var reportschannel = message.guild.channels.find(`name`, "mod-log");
            if (!reportschannel) return message.channel.send(":no_entry: `Can't find mod-log channel.`");


            message.delete().catch(O_o => { });
            reportschannel.send(reportEmbed);


            break;
        case "kick":
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!kUser) return message.channel.send(":no_entry: `Couldn't find user.`");
            var kReason = args.join(" ").slice(22);
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":warning: `No can do pal!`");
            if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(":warning: `That person can't be kicked!`");
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(':no_entry: `I do not have the correct permissions!`').catch(console.error);

            var kickEmbed = new Discord.RichEmbed()
                .setDescription("~Kick~")
                .setColor('#42c5f4')
                .addField("•Kicked User", `${kUser} with ID ${kUser.id}`)
                .addField("•Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
                .addField("•Kicked In", message.channel)
                .addField("vTiime", message.createdAt)
                .addField("•Reason", kReason);

            var kickChannel = message.guild.channels.find(`name`, "mod-log");
            if (!kickChannel) return message.channel.send(":no_entry: `Can't find mod-log channel.`");

            message.guild.member(kUser).kick(kReason);
            kickChannel.send(kickEmbed);


            break;
        case "ban":
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            var bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!bUser) return message.channel.send(":no_entry: `Couldn't find user.`");
            var bReason = args.join(" ").slice(22);
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":warning: `No can do pal!`");
            if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":warning: `That person can't be banned!`");
            if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: `I do not have the correct permissions!`').catch(console.error);

            var banEmbed = new Discord.RichEmbed()
                .setDescription("~Ban~")
                .setColor('#42c5f4')
                .addField("•Banned User", `${bUser} with ID ${bUser.id}`)
                .addField("•Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
                .addField("•Banned In", message.channel)
                .addField("•Time", message.createdAt)
                .addField("•Reason", bReason);

            message.guild.member(bUser).ban(bReason);

            var incidentchannel = message.guild.channels.find(`name`, "mod-log");
            if (!incidentchannel) return message.channel.send(":no_entry: `Can't find mod-log channel.`");

            
            incidentchannel.send(banEmbed)
            break;
        case "unban":
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: `I do not have the correct permissions!`').catch(console.error);
  var reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  var user = args[0];
  var modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply(":no_entry: `Can't find mod-log channel.`");
  if (reason.length < 1) return message.reply(':warning: `You must supply a reason for the unban.`');
  if (!user) return message.reply(':warning: `You must supply a User Resolvable, such as a user id.`').catch(console.error);
  message.guild.unban(user);
        if (console.error) {
          message.channel.send(":no_entry: `Error! Please provide supply ID or username!`");
          }
            break; 
      case "warn":
        var reason = args.slice(1).join(' ');
        var user = message.mentions.users.first();
        var incidentchannel = message.guild.channels.find(`name`, "mod-log");
        if (!incidentchannel) return message.channel.send(":no_entry: `Can't find mod-log channel.`");

        if (reason.length < 1) 
            return message.reply(':warning: `You must supply a reason for the warning.`');

        if (message.mentions.users.size < 1) 
            return message.reply(':no_entry: `You must mention someone to warn them.`').catch(console.error);

        var embed = new Discord.RichEmbed()
            .setColor('#42c5f4')
            .setTimestamp()
            .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

            incidentchannel.send(embed)
        break;
              case "hastebin":
      if (!args[1]) return message.channel.send(":warning: `You have to provide a message for me to transfer!`");
	if (!args.slice(1)
	.join(' ')) return message.channel.send(':no_entry: `Please, provide the text!` **Usage: &hastebin <text>**')
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(1)
			.join(' '))
		.then(body => {
			message.channel.send('**Posted text to Hastebin\nURL:** https://hastebin.com/' + body.body.key);
		});
        break;
      case "clapify":
var randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

    if (args[1]) {
    message.channel.send(":warning: `I need some text to clapify.` **;clapify <sentence>**")
      return;
    }
    message.channel.send(args.map(randomizeCase).join(':clap:'));
  break;
      case "emojify":
            if (!args[1]) {
               message.channel.send(':warning: Error! Usage: ``;emojify <text>``')
                return;
            }

message.channel.send(
    args.join(' ').slice(7)
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
break;
      case "puppy":
    if (!message.channel.nsfw) return message.reply(":no_entry: `You can use this command only on nsfw channels!`");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor('#42c5f4')
                .setAuthor("N.S.F.W", client.user.avatarURL)
                .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
                .setImage(url);
            message.channel.send({
                embed
            });
        })
break;
      case "lewd":
    var {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply(":no_entry: `You can use this command only on nsfw channels!`");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor('#42c5f4')
    .setTitle("Why does someone put a command like this?")
    .setImage(body.neko)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)

    message.channel.send(hentaiEmbed);
break;
      case "hg":
    var {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(":no_entry: `You can use this command only on nsfw channels!`");
  
    var hentai = new Discord.RichEmbed()
    .setColor('#42c5f4')
    .setTitle("HentaiGif is here.")
    .setImage(body.url)
    .setFooter("Requested By " + message.author.tag, message.author.avatarURL)
    message.channel.send(hentai);
break;
      case "ascii":
      if (!args[1]) return message.channel.send(":warning: `You have to provide a message for me to create line art!`");
  if(args.join(' ').slice(5).length > 14) return message.channel.send('Only 14 characters are limited!') 
  if (!args.join(' ').slice(5)) return message.channel.send(':no_entry: `Please, provide text to format in ASCII!` Usage: **;ascii <text>**').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' ').slice(5), (err, data) => {
      message.channel.send('```' + data + '```')
    })
        break;
              case "mplay":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send(':no_entry: `I\'m sorry but you need to be in a voice channel to play music!`');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send(':no_entry: `I cannot connect to your voice channel, make sure I have the proper permissions!`');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send(':no_entry: `I cannot speak in this voice channel, make sure I have the proper permissions!`');
		}
    if (!args[1]) {
      message.channel.send(':warning: `Please, type name of your song!`')
        return;
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					message.channel.send(`
:mag_right: __**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
:inbox_tray: Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send(':no_entry: `No or invalid value entered, cancelling video selection.`');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send(':no_entry: `I could not obtain any search results.`');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "mskip":
		if (!message.member.voiceChannel) return message.channel.send(':warning: `You are not in a voice channel!`');
		if (!serverQueue) return message.channel.send(':no_entry: `There is nothing playing that I could skip for you.`');
		serverQueue.connection.dispatcher.end('`Skip command has been used!');
    message.channel.send(':fast_forward: `Skip command has been used!`')
		return undefined;
        break;
      case "mstop":
		if (!message.member.voiceChannel) return message.channel.send(':warning: `You are not in a voice channel!`');
		if (!serverQueue) return message.channel.send(':no_entry: `There is nothing playing that I could stop for you.`');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "mvolume":
		if (!message.member.voiceChannel) return message.channel.send(':warning: `You are not in a voice channel!`');
		if (!serverQueue) return message.channel.send(':no_entry: `There is nothing playing that I could change volume for you.`');
    if (args[1] > 100) return message.channel.send(':warning: `Please supply a number less than 100`');
		if (!args[1]) return message.channel.send(`:sound: The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`:sound: I set the volume to: **${args[1]}**`);
break;
      case "mnp":
		if (!serverQueue) return message.channel.send(':no_entry: `There is nothing playing that I could show which song is now playing for you.`');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
break;
      case "mqueue":
		if (!serverQueue) return message.channel.send(':no_entry: `There is nothing playing that I could show a queue of songs for you.`');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
break;
      case "mpause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ `Paused the music for you!`');
		}
		return message.channel.send(':no_entry: `There is nothing playing that I could pause for you.`');
break;
      case "mresume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ `Resumed the music for you!`');
		}
		return message.channel.send(':no_entry: `There is nothing playing that I could resume for you.`');
	

	return undefined;
break;
      }
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`:no_entry: **I could not join the voice channel:** ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
    message.channel.send(':o: `The queue of songs has been removed! If you want to listen the music again, type` **;mplay <name of music>** `to play it!`')
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
  }
var mappedResponses = {}
var latestAnswers = {}

function getResponse(msg, input) {
    var handler = mappedResponses[input]
    if (!handler) {
        return input
    }

    if (typeof handler === 'function') {
        return handler(msg)
    }
    return handler.toString()
  }
});
client.login(process.env.TOKEN)
        
