const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        
    ]
});


Client.on("ready", () => {
    console.log("Logged in as Shadowfey!");
    
    // statut 
  Client.user.setActivity("Protection Sushi", {
    type: "PLAYING"
  });
  
})
  



//Messages
const  prefix = "!";

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //Ping
    if(message.content == prefix + "Ping"){
        message.reply("Pong");
    }
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Paypal
    if(message.content == prefix + "Paypal"){
        message.reply("https://www.paypal.com/paypalme/nawiss888");
        
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!love
    if(message.content == prefix + "love"){
        message.reply("♥️");
        
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'ai faim comme luffy
    if(message.content == prefix + "j'ai faim comme luffy"){
        message.reply("avale tout ce que tu peux et qui soit mangeable comme luffy le fait hahaha");
        
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!xD
    if(message.content == prefix + "xD"){
        message.reply("xD aussi");
        
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!paypal
    if(message.content == prefix + "paypal"){
        message.reply("https://www.paypal.com/paypalme/nawiss888");
        
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!gramgram
    if(message.content == prefix + "gramgram"){
        message.reply("https://www.instagram.com/sushi_yuzu/");
        
  
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow legend
    if(message.content == prefix + "shadow legend"){
        message.reply("ça doit etre une ref a ce jeu tres mis en avant par les youtubeurs, et portant le nom de raid shadow legend");
        
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!help
    if(message.content == prefix + "help"){
        message.reply("je suis la");
        
  
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Kill
    if(message.content == prefix + "Kill"){
        message.reply("désolé Sushi mais cette commande n'est disponible que sur minecraft, à moins que tu veuille tuer quelqu'un??");
        
  
    }
});
 

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!NON
    if(message.content == prefix + "NON"){
        message.reply("Ooh");
        
    }
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!OUI
    if(message.content == prefix + "OUI"){
        message.reply("yup");
        
    }
}); 


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!tutube
    if(message.content == prefix + "tutube"){
        message.reply("https://www.youtube.com/channel/UCWr0...");
      
    } 
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!merci shadow 
    if(message.content == prefix + "merci shadow"){
        message.reply("derien,je suis ta protectrice^^");
        
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!lisez bien les regles
    if(message.content == prefix + "lisez bien les regles"){
        message.reply("oui tu as raison, s'il vous plait lisez les bien,merci, et passez un bon moment peut importe si c'est le matin le, le midi, le soir ou n'importe quelle moment de la journée");
        
    }  
});
  
 
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow
    if(message.content == prefix + "shadow"){
        message.reply("oui ?");
        
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oh
    if(message.content == prefix + "oh"){
        message.reply("que se passe t'il ?");   
    }  
});




//Embed (simple sans lien, juste texte)

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Help Shadow'
    if(message.content == prefix + "Help Shadow"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Je suis la!!");
        
        message.channel.send({ embeds: [embed]});
        
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!twitch
    if(message.content == prefix + "twitch"){
        message.reply("https://www.twitch.tv/sushi_nawiss");
        
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow t'es la ?
    if(message.content == prefix + "shadow t'es la ?"){
        message.reply("oui je suis la");
       
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!zut
    if(message.content == prefix + "zut"){
        message.reply("je me sens de obligé de t'aider");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!modération
    if(message.content == prefix + "modération"){
        message.reply("veux tu que j'améliore la modération?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oui
    if(message.content == prefix + "oui"){
        message.reply("OK");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oui
    if(message.content == prefix + "non"){
        message.reply("d'accord");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!non c'est rien
    if(message.content == prefix + "non c'est rien"){
        message.reply("d'accord je comprend.");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!tu vas bien shadow ?
    if(message.content == prefix + "tu vas bien shadow ?"){
        message.reply("si tu es hereux je suis hereuse aussi, et si tu ne l'es pas je le suis pas aussi");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!hhhh ^^
    if(message.content == prefix + "hhhh ^^"){
        message.reply("哈哈哈哈");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!ok
    if(message.content == prefix + "ok"){
        message.reply("(づ｡◕‿‿◕｡)づ");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!wow
    if(message.content == prefix + "wow"){
        message.reply("(ᵔᴥᵔ)");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!attaque spéciale
    if(message.content == prefix + "attaque spéciale"){
        message.reply("(∩｀-´)⊃━☆ﾟ.*･｡ﾟ");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow peux tu mettre mon discord
    if(message.content == prefix + "shadow peux tu mettre mon discord"){
        message.reply("oui c'est celui-ci : Suyu_Shizu#3061 pour le moment il n'a pas changé");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow as tu le lien discord s'il te plait ?
    if(message.content == prefix + "shadow as tu le lien discord s'il te plait ?"){
        message.reply("oui de suite  https://www.twitch.tv/sushi_nawiss");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!^^
    if(message.content == prefix + "^^"){
        message.reply("-`ღ´-");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!un jour on sera loin dans l'au dela
    if(message.content == prefix + "un jour on sera loin dans l'au dela"){
        message.reply("je le pense aussi ^^");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!c'est quoi gramgram?
    if(message.content == prefix + "c'est quoi gramgram?"){
        message.reply("gramgram c'est tout simplement Instagram mais nawiss prefère dire gramgram que instagram.");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!c'est quoi tutube?
    if(message.content == prefix + "c'est quoi tutube?"){
        message.reply("tutube c'est Youtube, je suppose que Nawiss appel ça comme cela car c'est plus drole.");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!merci
    if(message.content == prefix + "merci"){
        message.reply("pas la peine de me remercier c'est normale");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!thank you
    if(message.content == prefix + "thank you"){
        message.reply("you are welcome");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Shadow
    if(message.content == prefix + "Shadow"){
        message.reply("Oui ?");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!demande à shadow
    if(message.content == prefix + "demande à shadow"){
        message.reply("???");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!mh...
    if(message.content == prefix + "mh..."){
        message.reply("as tu besoin de moi ?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!No one can hide from my sight
    if(message.content == prefix + "No one can hide from my sight"){
        message.reply("︻デ═一 One shot One kill");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!HAHA
    if(message.content == prefix + "HAHA"){
        message.reply("hahaha");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow peux tu mettre un lien discord
    if(message.content == prefix + "shadow peux tu mettre un lien discord"){
        message.reply("oui celui la est infini  :  https://discord.gg/begQYuVSgg");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!GREAT
    if(message.content == prefix + "GREAT"){
        message.reply("comme dirait JooE des Momoland");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!nop
    if(message.content == prefix + "nop"){
        message.reply("OK...");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!pourrais tu m'aider shadow ?
    if(message.content == prefix + "pourrais tu m'aider shadow ?"){
        message.reply("que veux tu que je fasse ?");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadowfey
    if(message.content == prefix + "shadowfey"){
        message.reply("?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!mes jeux vidéos préférés
    if(message.content == prefix + "mes jeux vidéos préférés"){
        message.reply("Overwatch, Minecraft,naruto ninja storm, Street Fighter V,Final Fantasy 7 remak, GTA 5, Sherwood Dungeon, Roblox, Assassin's Creed Unity, Batman Arkham Knight, Dragon Quest Monster Joker 2, Warface");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oopsy my bad
    if(message.content == prefix + "oopsy my bad"){
        message.reply("as tu fait quelque chose d'eroné?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je voudrais passser mon éternité à dessiner
    if(message.content == prefix + "je voudrais passser mon éternité à dessiner"){
        message.reply("et moi a te regarder dessiner");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow t'as besoin de moi ?
    if(message.content == prefix + "shadow t'as besoin de moi ?"){
        message.reply("merci ^^, mais c'est toi qui a besoin de moi, c'est gentil je te le dirais si j'ai besoin");   
    }  
});




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Vous allez bien tous ?
    if(message.content == prefix + "!Vous allez bien tous ?"){
        message.reply("oui je vais bien tant que toi tu es ok aussi.");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!discord
    if(message.content == prefix + "discord"){
        message.reply("en voila un : https://discord.gg/begQYuVSgg");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien youtube
    if(message.content == prefix + "aurais tu un lien youtube"){
        message.reply("yes : https://www.youtube.com/channel/UCWr0...");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien instagram
    if(message.content == prefix + "aurais tu un lien instagram"){
        message.reply("tiens en voici un :   https://www.instagram.com/sushi_yuzu/");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!heyllo ^^
    if(message.content == prefix + "heyllo ^^"){
        message.reply("heyllo à toi ^^");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'ai besoin d'aide
    if(message.content == prefix + "j'ai besoin d'aide"){
        message.reply("dis...?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!mince
    if(message.content == prefix + "mince"){
        message.reply("mince ?");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien youtube
    if(message.content == prefix + "t'as un lien youtube"){
        message.reply("https://www.youtube.com/channel/UCWr0...");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien youtube ?
    if(message.content == prefix + "t'as un lien youtube ?"){
        message.reply("https://www.youtube.com/channel/UCWr0...");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien youtube shadow ?
    if(message.content == prefix + "t'as un lien youtube shadow ?"){
        message.reply("https://www.youtube.com/channel/UCWr0...");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien instagram ?
    if(message.content == prefix + "t'as un lien instagram ?"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien instagram shadow ?
    if(message.content == prefix + "t'as un lien instagram shadow ?"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!t'as un lien instagram shadow 
    if(message.content == prefix + "t'as un lien instagram shadow"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!link
    if(message.content == prefix + "link"){
        message.reply("link ?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'ai une question
    if(message.content == prefix + "j'ai une question"){
        message.reply("?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!attend
    if(message.content == prefix + "attend"){
        message.reply("oui j'attend");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!peux tu m'aider
    if(message.content == prefix + "peux tu m'aider"){
        message.reply("oui tout de suite, qu'attend tu de moi ?");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!ça va
    if(message.content == prefix + "ça va"){
        message.reply("je vais bien si tu vas bien");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!merci je vais bien
    if(message.content == prefix + "merci je vais bien"){
        message.reply("^^");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oui ca va
    if(message.content == prefix + "oui ca va"){
        message.reply("^^ ok...");   
    }  
});




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow merci
    if(message.content == prefix + "shadow merci"){
        message.reply("HAHAHA...derien");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!drawing
    if(message.content == prefix + "drawing"){
        message.reply("tu vas dessiner ?");   
    }  
});




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!art
    if(message.content == prefix + "art"){
        message.reply("veux tu des suggestions d'artistes ?");   
    }  
});






  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!non merci
    if(message.content == prefix + "non merci"){
        message.reply("ok dis moi quand tu as besoin de moi");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!oui s'il te plait
    if(message.content == prefix + "oui s'il te plait"){
        message.reply("ok de quoi as tu besoin");   
    }  
});




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'ai faim je vais manger
    if(message.content == prefix + "j'ai faim je vais manger"){
        message.reply("go to eat Nawiss, enjoy your meal");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!thank you shadow
    if(message.content == prefix + "thank you shadow"){
        message.reply("hhhh, c'est rien");   
    }  
});






Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je reviens
    if(message.content == prefix + "je reviens"){
        message.reply("Nawiss est AFK ne l'embetez pas");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!désolé
    if(message.content == prefix + "désolé"){
        message.reply("ce n'est rien peu importe ce que tu as fait");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!priestess
    if(message.content == prefix + "priestess"){
        message.reply("je suis une shadowfey priestess mais non méchante");   
    }  
});







Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'etais parti
    if(message.content == prefix + "j'etais parti"){
        message.reply("bon retour parmi nous");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'etais sorti
    if(message.content == prefix + "j'etais sorti"){
        message.reply("Welcome back");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'etais pas la 
    if(message.content == prefix + "j'etais pas la "){
        message.reply("Nawiss re-bienvenue");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je vais dormir goodnight a tous
    if(message.content == prefix + "je vais dormir goodnight a tous"){
        message.reply("Nawiss dors bien!!");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je vais dormir goodnight
    if(message.content == prefix + "je vais dormir goodnight"){
        message.reply("Bonne nuit Nawiss ^^");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!good morning
    if(message.content == prefix + "good morning"){
        message.reply("HEYLLO Nawiss ^^");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!vous avez bien dormi ?
    if(message.content == prefix + "vous avez bien dormi ?"){
        message.reply("oui je me suis introduite dans tes rêves hhhh");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je vais y aller goodbye
    if(message.content == prefix + "je vais y aller goodbye"){
        message.reply("Goodbye Nawiss ^^");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!goodbye
    if(message.content == prefix + "goodbye"){
        message.reply("tu y va ? goodbye");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!nope
    if(message.content == prefix + "nope"){
        message.reply("oui, ok");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!samurai
    if(message.content == prefix + "samurai"){
        message.reply("🏯");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!demande à shadow
    if(message.content == prefix + "demande à shadow"){
        message.reply("que dois-je faire ?");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!great
    if(message.content == prefix + "great"){
        message.reply("GREAT ^^");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Goodbye
    if(message.content == prefix + "Goodbye"){
        message.reply("bye ;)");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!merde
    if(message.content == prefix + "merde"){
        message.reply("de cheval...");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!à shadow
    if(message.content == prefix + "à shadow"){
        message.reply(":)");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!SHADOW
    if(message.content == prefix + "SHADOW"){
        message.reply("???");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien twitch
    if(message.content == prefix + "aurais tu un lien twitch"){
        message.reply("https://www.twitch.tv/sushi_nawiss");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien twitch ?
    if(message.content == prefix + "aurais tu un lien twitch ?"){
        message.reply("https://www.twitch.tv/sushi_nawiss");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien instagram
    if(message.content == prefix + "aurais tu un lien instagram"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});
  




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien instagram
    if(message.content == prefix + "aurais tu un lien instagram"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien instagram ?
    if(message.content == prefix + "aurais tu un lien instagram ?"){
        message.reply("https://www.instagram.com/sushi_yuzu/");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien youtube
    if(message.content == prefix + "aurais tu un lien youtube"){
        message.reply("https://www.youtube.com/channel/UCWr0...");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien youtube ?
    if(message.content == prefix + "aurais tu un lien youtube ?"){
        message.reply("https://www.youtube.com/channel/UCWr0...");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien discord
    if(message.content == prefix + "aurais tu un lien discord"){
        message.reply("https://discord.gg/begQYuVSgg");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien discord ?
    if(message.content == prefix + "aurais tu un lien discord ?"){
        message.reply("https://discord.gg/begQYuVSgg");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!thx 
    if(message.content == prefix + "thx"){
        message.reply("c'est rien ƪ(ړײ)ƪ");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!thx shadow 
    if(message.content == prefix + "thx shadow"){
        message.reply("derien Nawiss");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!ah merde
    if(message.content == prefix + "ah merde"){
        message.reply("oh ?");   
}  });


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!help shadow
    if(message.content == prefix + "help shadow"){
        message.reply("help tu as besoin de moi ?");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow tu vas bien ?
    if(message.content == prefix + "shadow tu vas bien ?"){
        message.reply("si tu est ok je suis OK.");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!il y'a des enemis
    if(message.content == prefix + "il y'a des enemis"){
        message.reply("dois-je les supprimer");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!merci encore shadow
    if(message.content == prefix + "merci encore shadow"){
        message.reply("it's nothing Nawiss");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!hi
    if(message.content == prefix + "hi"){
        message.reply("HI Nawiss ^^");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!hello
    if(message.content == prefix + "hello"){
        message.reply("hello Nawiss");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!i'm ok
    if(message.content == prefix + "i'm ok"){
        message.reply("n'oublie pas si tu vas bien je vais bien aussi");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien google simple
    if(message.content == prefix + "aurais tu un lien google simple"){
        message.reply("https://www.google.com/");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien google simple ?
    if(message.content == prefix + "aurais tu un lien google simple ?"){
        message.reply("https://www.google.com/");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien youtube simple
    if(message.content == prefix + "aurais tu un lien youtube simple"){
        message.reply("https://www.youtube.com/");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!aurais tu un lien youtube simple ?
    if(message.content == prefix + "aurais tu un lien youtube simple ?"){
        message.reply("https://www.youtube.com/");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!stp
    if(message.content == prefix + "stp"){
        message.reply("yes...");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!please shadow
    if(message.content == prefix + "please shadow"){
        message.reply("yup ?");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow please
    if(message.content == prefix + "shadow please"){
        message.reply("yes Nawiss ?");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!hahaha
    if(message.content == prefix + "hahaha"){
        message.reply("HAHAHA ^^");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!mes deux personnages préférés de toutE oeuvre
    if(message.content == prefix + "mes deux personnages préférés de toutE oeuvre"){
        message.reply("haku, Luffy, Widowmaker, Seth");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Merci
    if(message.content == prefix + "Merci"){
        message.reply("hhh derien");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Hi
    if(message.content == prefix + "Hi"){
        message.reply("Hi Nawiss!");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Je t'invoque
    if(message.content == prefix + "Je t'invoque"){
        message.reply("as tu besoin de mes services??");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Nawiss
    if(message.content == prefix + "Nawiss"){
        message.reply("Tu viens de dire ton nom?? hereusement que ce n'est pas une autre personne, je ne dirais rien de comprométant sur toi");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!nawiss
    if(message.content == prefix + "nawiss"){
        message.reply("je supopose que tu vas bien");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Je ne vais pas bien
    if(message.content == prefix + "Je ne vais pas bien"){
        message.reply("que puis-je faire pour toi?");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!as tu vu quelque chose??
    if(message.content == prefix + "as tu vu quelque chose??"){
        message.reply("Hi Nawiss!");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Ying
    if(message.content == prefix + "Ying"){
        message.reply("Yang");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Yang
    if(message.content == prefix + "Yang"){
        message.reply("Ying");   
    }  
});
  
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!arrete
    if(message.content == prefix + "arrete"){
        message.reply("ok");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!non arrete
    if(message.content == prefix + "non arrete"){
        message.reply("oui j'arrete");   
    }  
});
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!quand as tu été crée shadow
    if(message.content == prefix + "quand as tu été crée shadow ?"){
        message.reply("je ne sais pas, mais tu es celui qui m'a donné vie et je t'en remercie, je ne veux rien de plus^^");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!je vais eat
    if(message.content == prefix + "je vais eat"){
        message.reply("bon eat alors :)");   
    }  
});
  
  
Client.on("message",message => {
    if(message.author.bot) return;
  
    //!j'ai fini
    if(message.content == prefix + "j'ai fini"){
        message.reply("j'en suis hereuse");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!WHAT
    if(message.content == prefix + "WHAT"){
        message.reply("ミ●﹏☉ミ");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!hug
    if(message.content == prefix + "hug"){
        message.reply("(⊃｡•́‿•̀｡)⊃");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!wtf
    if(message.content == prefix + "wtf"){
        message.reply("ᵒᴥᵒ");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!sushi
    if(message.content == prefix + "sushi"){
        message.reply("🍱");   
    }  
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!yuzu
    if(message.content == prefix + "yuzu"){
        message.reply("🍋");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!wtf
    if(message.content == prefix + "wtf"){
        message.reply("ᵒᴥᵒ");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!préfix de Murkness
    if(message.content == prefix + "préfix de Murkness"){
        message.reply("son préfix est ¡");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!préfix de murkness
    if(message.content == prefix + "préfix de murkness"){
        message.reply("¡");   
    }  
});




Client.on("message",message => {
    if(message.author.bot) return;
  
    //!doll unit zero
    if(message.content == prefix + "doll unit zero"){
        message.reply("https://streetfighter.fandom.com/wiki/The_Dolls");   
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!shadow c'est qui ?
    if(message.content == prefix + "shadow c'est qui ?"){
        message.reply("je suis une entité étant presque toujours avec Sushi");   
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //uwu
    if(message.content == prefix + "uwu"){
        message.reply("uwuuuuu!!");   
    }  
});

//Embed (image seulement)

Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Very Happy
    if(message.content == prefix + "Very Happy"){
        const embed = new Discord.MessageEmbed()
            .setColor("#F40D42")
            .setThumbnail("https://i.imgur.com/QQK6T5u.jpg")
        
        message.channel.send({ embeds: [embed]});   
        
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Very Angry
    if(message.content == prefix + "Very Angry"){
        const embed = new Discord.MessageEmbed()
            .setColor("#A43A23")
            .setThumbnail("https://i.imgur.com/AVCoaN0.jpg")
        
        message.channel.send({ embeds: [embed]});   
        
    }  
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Doll Unit Zero
    if(message.content == prefix + "Doll Unit Zero"){
        const embed = new Discord.MessageEmbed()
            .setColor("#F40D42")
            .setThumbnail("https://static.wikia.nocookie.net/streetfighter/images/6/60/Cammy_Legends_The_Dolls.png/revision/latest/scale-to-width-down/1000?cb=20211228040504")
        
        message.channel.send({ embeds: [embed]});   
        
    }  
});



Client.on("message",message => {
    if(message.author.bot) return;
  
    //!Very Mad
    if(message.content == prefix + "Very Mad"){
        const embed = new Discord.MessageEmbed()
            .setColor("#A43A23")
            .setThumbnail("https://i.pinimg.com/236x/65/92/c9/6592c9f4ee7675f79284a2e817ddbe82--fighting-games-street-fighter.jpg")
        
        message.channel.send({ embeds: [embed]});   
        
    }  
});








//Suppression de messages

Client.on("message",message => {
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



Client.login(process.env.TOKEN);