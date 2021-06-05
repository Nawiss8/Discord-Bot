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
} );


client.on("message",message => {
  if(message.author.bot) return;

  //!merci shadow
  if(message.content == prefix + "merci shadow"){
      message.reply("derien,je suis ta protectrice^^");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!twitch
  if(message.content == prefix + "twitch"){
      message.reply("https://www.twitch.tv/sushi_nawiss");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!shadow t'es la ?
  if(message.content == prefix + "shadow t'es la ?"){
      message.reply("oui je suis la");
      
  }  
} 
);
client.on("message",message => {
  if(message.author.bot) return;

  //!lisez bien les regles
  if(message.content == prefix + "lisez bien les regles"){
      message.reply("oui s'il vous plait,et passez un bon moment peut importe si c'est le matin le, le midi, le soir ou n'importe quelle moment de la journée");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!shadow
  if(message.content == prefix + "shadow"){
      message.reply("oui ?");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!oh
  if(message.content == prefix + "oh"){
      message.reply("que se passe t'il ?");   
  }  
});




client.on("message",message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  
  if(message.member.hasPermission("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "ban" )){
         let mention = message.mentions.members.first();

         if(mention == undefined){
             message.reply("Membre non ou mal mentionné.")
         }
         else{
             if(mention.bannable){
                 message.ban();
                 message.channel.send(mention.displayName + "a été banni désolé pour ça il y'a surement une tres grosse raison")

             }
             else{
                message.reply("Impossible de bannir ce membre.");
                  
                 
             }
         }
      }
      else if(message.content.startsWith(prefix + "kick")){
          let mention = message.mentions.members.first()
          
          if(mention == undefined){
            message.reply("Membre non ou mal mentionné");
          }
          else{
              if(mention.kickable){
                mention.kick;
                message.channel.send(mention.displayName + "a été kick pardon pour ça mais il y'a certainement une grosse raison" )
              }
              else {
                  message.reply("Impossible de kick ce membre.");
              }
          }
          

            
      }
       else if(message.content.startsWith(prefix + "mute")){
         let mention = message.mentions.members.first();

         if(mention == undefined){
          messsage.reply("Membre non ou mal mentionné.");
         }

         else {
          mention.roles.add("849341514865442816");
          message.reply(mention.displayName + "mute avec succes");
      }

           
      }
      
      
  }
  else if(message.content.startsWith(prefix + "unmute")){
       let mention = message.mentions.members.first();

       if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
         }

         else{
          mention.roles.add("849341514865442816");
          message .reply(mention.displayName + "unmute avec succes");
       }

  }
  else if(message.content.startsWith(prefix + "tempmute")){
    let mention = message.mentions.members.first(); 

    if(mention == undefined){
       message.reply("Membre non ou mal mentionné")
    }
    else{
     let args = message.content.split("");

     mention.roles.add("49341514865442816")
     setTimeout(function(){
       mention.roles.remove("49341514865442816")
       message.channel.send("<@" + mention.id + "> welcome back !");


     }, args[2] * 1000 );  
   }

 }
   
});

















client.on("message",message => {
  if(message.member.permissions.has("MANAGE_MESSAGES")){
      if(message.content.startsWith(prefix + "clear")){
          let args = message.content.split(" ");
          
          if(args[1] == undefined){
              message.reply("Nombre de message non ou mal defini.");

          }
           else {
              let number = parseInt(args[1]);

              if(isNaN(number)){
                 message.reply("Nombre de message non ou mal defini.");
                  
              }
              else {
                 message.channel.bulkDelete(number).then(messages => {
                      console.log("Supression de" + messages.size + "messages réussi !")

                 }).catch(err =>{
                     console.log("Erreur de clear : " + err);
                 });
              }

          }
      }

  }
  
});
