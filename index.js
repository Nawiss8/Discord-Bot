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
})



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
});

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
      message.reply("oui tu as raison, s'il vous plait lisez les bien,merci, et passez un bon moment peut importe si c'est le matin le, le midi, le soir ou n'importe quelle moment de la journée");
      
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

  //!zut
  if(message.content == prefix + "zut"){
      message.reply("je me sens de obligé de t'aider");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!modération
  if(message.content == prefix + "modération"){
      message.reply("veux tu que j'améliore la modération?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!oui
  if(message.content == prefix + "oui"){
      message.reply("OK");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!oui
  if(message.content == prefix + "non"){
      message.reply("d'accord");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!non c'est rien
  if(message.content == prefix + "non c'est rien"){
      message.reply("d'accord je comprend.");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!tu vas bien shadow ?
  if(message.content == prefix + "tu vas bien shadow ?"){
      message.reply("si tu es hereux je suis hereuse aussi, et si tu ne l'es pas je le suis pas aussi");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!hhhh ^^
  if(message.content == prefix + "hhhh ^^"){
      message.reply("哈哈哈哈");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!ok
  if(message.content == prefix + "ok"){
      message.reply("(づ｡◕‿‿◕｡)づ");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!wow
  if(message.content == prefix + "wow"){
      message.reply("(ᵔᴥᵔ)");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!attaque spéciale
  if(message.content == prefix + "attaque spéciale"){
      message.reply("(∩｀-´)⊃━☆ﾟ.*･｡ﾟ");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow peux tu mettre mon discord
  if(message.content == prefix + "shadow peux tu mettre mon discord"){
      message.reply("oui c'est celui-ci : Suyu_Shizu#3061 pour le moment il n'a pas changé");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!shadow as tu le lien discord s'il te plait ?
  if(message.content == prefix + "shadow as tu le lien discord s'il te plait ?"){
      message.reply("oui de suite  https://www.twitch.tv/sushi_nawiss");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!^^
  if(message.content == prefix + "^^"){
      message.reply("-`ღ´-");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!un jour on sera loin dans l'au dela
  if(message.content == prefix + "un jour on sera loin dans l'au dela"){
      message.reply("je le pense aussi ^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!c'est quoi gramgram?
  if(message.content == prefix + "c'est quoi gramgram?"){
      message.reply("gramgram c'est tout simplement Instagram mais nawiss prefère dire gramgram que instagram.");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!c'est quoi tutube?
  if(message.content == prefix + "c'est quoi tutube?"){
      message.reply("tutube c'est Youtube, je suppose que Nawiss appel ça comme cela car c'est plus drole.");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!merci
  if(message.content == prefix + "merci"){
      message.reply("pas la peine de me remercier c'est normale");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!thank you
  if(message.content == prefix + "thank you"){
      message.reply("you are welcome");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!Shadow
  if(message.content == prefix + "Shadow"){
      message.reply("Oui ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!demande à shadow
  if(message.content == prefix + "demande à shadow"){
      message.reply("???");   
  }  
});




client.on("message",message => {
  if(message.author.bot) return;

  //!mh...
  if(message.content == prefix + "mh..."){
      message.reply("as tu besoin de moi ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!No one can hide from my sight
  if(message.content == prefix + "No one can hide from my sight"){
      message.reply("︻デ═一 One shot One kill");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!HAHA
  if(message.content == prefix + "HAHA"){
      message.reply("hahaha");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!shadow peux tu mettre un lien discord
  if(message.content == prefix + "shadow peux tu mettre un lien discord"){
      message.reply("oui celui la est infini  :  https://discord.gg/begQYuVSgg");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!GREAT
  if(message.content == prefix + "GREAT"){
      message.reply("comme dirait JooE des Momoland");   
  }  
});









client.on("message",message => {
  if(message.author.bot) return;

  //!nop
  if(message.content == prefix + "nop"){
      message.reply("OK...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!pourrais tu m'aider shadow ?
  if(message.content == prefix + "pourrais tu m'aider shadow ?"){
      message.reply("que veux tu que je fasse ?");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!shadowfey
  if(message.content == prefix + "shadowfey"){
      message.reply("?");   
  }  
});




client.on("message",message => {
  if(message.author.bot) return;

  //!mes 10 jeux vidéos préférés
  if(message.content == prefix + "mes 10 jeux vidéos préférés"){
      message.reply("Overwatch, Minecraft, Street Fighter V, GTA 5, Sherwood Dungeon, Roblox, Assassin's Creed Unity, Batman Arkham Knight, Dragon Quest Monster Joker 2, Warface");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!oopsy my bad
  if(message.content == prefix + "oopsy my bad"){
      message.reply("as tu fait quelque chose d'eroné?");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!je voudrais passser mon éternité à dessiner
  if(message.content == prefix + "je voudrais passser mon éternité à dessiner"){
      message.reply("et moi a te regarder dessiner");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow t'as besoin de moi ?
  if(message.content == prefix + "shadow t'as besoin de moi ?"){
      message.reply("merci ^^, mais c'est toi qui a besoin de moi, c'est gentil je te le dirais si j'ai besoin");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!Vous allez bien tous ?
  if(message.content == prefix + "!Vous allez bien tous ?"){
      message.reply("oui je vais bien tant que toi tu es ok aussi.");   
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






