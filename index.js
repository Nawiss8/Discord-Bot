const Discord = require('discord.js');
const client = new Discord.Client();

const  prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('connecté protectrice de Nawiss', msg => {
  if (msg.content === '!heyllo ') {
    msg.reply('derien');
  }
});

client.login(process.env.TOKEN);




client.on("message",message => {
    if(message.author.bot) return;

    //shadow
    if(message.content == prefix + "shadow"){
        message.reply("heyllo Nawiss^^");
        message.channel.send("heyllo Nawiss^^");

    }

   

  } 

)



client.on("message",message => {
  if(message.author.bot) return;

  //!gramgram
  if(message.content == prefix + "gramgram"){
      message.reply("lien");
      message.channel.send("lien");

  }
  
 

} 

)
