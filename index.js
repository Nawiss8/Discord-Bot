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

    //!heyllo shadow^^
    if(message.content == prefix + "heyllo shadow^^"){
        message.reply("heyllo Nawiss^^");
        

    }

   

  } 

)



client.on("message",message => {
  if(message.author.bot) return;

  //!gramgram
  if(message.content == prefix + "gramgram"){
      message.reply("lien");
      

  }
  
 

} 

)



client.on("message",message => {
  if(message.author.bot) return;

  //!tutube
  if(message.content == prefix + "tutube"){
      message.reply("lien aussi");
      

  }
  
} 

)


client.on("message",message => {
  if(message.author.bot) return;

  //!merci shadow
  if(message.content == prefix + "merci shadow"){
      message.reply("derien,je suis ta protectrice^^");
      
  }  
} 
)

client.on("message",message => {
  if(message.author.bot) return;

  //!twitch
  if(message.content == prefix + "twitch"){
      message.reply("lien 3");
      
  }  
} 
)