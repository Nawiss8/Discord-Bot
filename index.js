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
      message.reply("https://www.instagram.com/sushi_yuzu/");
      

  }
  
 

} 

)



client.on("message",message => {
  if(message.author.bot) return;

  //!tutube
  if(message.content == prefix + "tutube"){
      message.reply("https://www.youtube.com/channel/UCWr0...");
      

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
      message.reply("https://www.twitch.tv/sushi_nawiss");
      
  }  
} 
)

client.on("message",message => {
  if(message.author.bot) return;

  //!shadow t'es la ?
  if(message.content == prefix + "shadow t'es la ?"){
      message.reply("oui je suis la");
      
  }  
} 
)
client.on("message",message => {
  if(message.author.bot) return;

  //!Great
  if(message.content == prefix + "Great"){
      message.reply("https://media.discordapp.net/attachments/848578767667724329/849054256451289118/710408788842381402.png ^^");
      
  }  
} 
)