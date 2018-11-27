const Discord = require('discord.js');

// Create an instance of a Discord client
const bot = new Discord.Client();
const prefix = "!";

bot.on('ready', () => {
  console.log('I am ready!');
});


bot.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`:hammer: Successfully kicked ${user.tag} For Breaking Rules :hammer:`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply(':o2: **Im Not Able To Kick This Member** ``/`` **I Dont Have Permissions Or The Member Have A Role Higher Than Me !**  ');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply(' :o2: **You Should Mention A User Before Using This Command** ``<<Example>> :`` **!kick @User**');
    }
    message.react("⚒");
  }
  
    bot.on(`message`, async message => {
      if(message.content === prefix + "reboot") { 
    if (message.author.id === "404950596043669545") {
      message.channel.send(":gear: Reload in process")
      
      bot.destroy()
      bot.login(process.env.TOKEN)
    message.channel.send(":gear: Reload has been done")
    } else {
      
    message.channel.send("Only the Owner of this bot can do that !")
      
      }
      }
});
if (message.content.startsWith('!count')) {
  message.reply(`Server counted: **${bot.guilds.size}**`)
  message.react("✅");
  message.delete();
  }
  bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.ban('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`:hammer: **Successfully banned ${user.tag} For Breaking Rules**:hammer:`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(':o2: **Im Not Able To Kick This Member** ``/`` **I Dont Have Permissions Or The Member Have A Role Higher Than Me !**  ');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply(' :o2: **You Should Mention A User Before Using This Command** ``<<Example>> :`` **!kick @User**');
      }
      message.react("⚒");
    }
  });
 
 
});


bot.login('NTEwODI1OTU2MTM1NjY1NjY1.Dt7diA.XWsDVveqWQ76Wsg4Tsj9-RLjaXE');