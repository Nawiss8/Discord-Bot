const Discord = require('discord.js');
const client = new Discord.Client();

//Définir le statut (activité) du robot !

    client.setActivity('Heyllo', { type : 'PROTEGE'});

const  prefix = "!"

//Afficher un message dans la console quand le bot est en ligne

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

  //!Paypal
  if(message.content == prefix + "Paypal"){
      message.reply("https://www.paypal.com/paypalme/nawiss888");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!love
  if(message.content == prefix + "love"){
      message.reply("♥️");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!j'ai faim comme luffy
  if(message.content == prefix + "j'ai faim comme luffy"){
      message.reply("avale tout ce que tu peux et qui soit mangeable comme luffy le fait hahaha");
      
  }  
} 
);


client.on("message",message => {
  if(message.author.bot) return;

  //!xD
  if(message.content == prefix + "xD"){
      message.reply("xD aussi");
      
  }  
} 
);

client.on("message",message => {
  if(message.author.bot) return;

  //!paypal
  if(message.content == prefix + "paypal"){
      message.reply("https://www.paypal.com/paypalme/nawiss888");
      
  }
})



client.on("message",message => {
  if(message.author.bot) return;

  //!gramgram
  if(message.content == prefix + "gramgram"){
      message.reply("https://www.instagram.com/sushi_yuzu/");
      

  }
})


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow legend
  if(message.content == prefix + "shadow legend"){
      message.reply("ça doit etre une ref a ce jeu tres mis en avant par les youtubeurs, et portant le nom de raid shadow legend");
      

  }
})


client.on("message",message => {
  if(message.author.bot) return;

  //!help
  if(message.content == prefix + "help"){
      message.reply("je suis la");
      

  }
})

client.on("message",message => {
  if(message.author.bot) return;

  //!Kill
  if(message.content == prefix + "Kill"){
      message.reply("désolé Sushi mais cette commande n'est disponible que sur minecraft, à moins que tu veuille tuer quelqu'un??");
      

  }
})


client.on("message",message => {
  if(message.author.bot) return;

  //!NON
  if(message.content == prefix + "NON"){
      message.reply("Ooh");
      

  }
})


client.on("message",message => {
  if(message.author.bot) return;

  //!OUI
  if(message.content == prefix + "OUI"){
      message.reply("yup");
      

  }
})




client.on("message",message => {
  if(message.author.bot) return;
  var embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("bonjour^^")
      .setURL("")
  
  message.channel.send(embed);

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

  //!ok
  if(message.content == prefix + "oki doki"){
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

  //!mes jeux vidéos préférés
  if(message.content == prefix + "mes jeux vidéos préférés"){
      message.reply("Overwatch, Minecraft,naruto ninja storm, Street Fighter V,Final Fantasy 7 remak, GTA 5, Sherwood Dungeon, Roblox, Assassin's Creed Unity, Batman Arkham Knight, Dragon Quest Monster Joker 2, Warface");   
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

  //!discord
  if(message.content == prefix + "discord"){
      message.reply("en voila un : https://discord.gg/begQYuVSgg");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien youtube
  if(message.content == prefix + "aurais tu un lien youtube"){
      message.reply("yes : https://www.youtube.com/channel/UCWr0...");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien instagram
  if(message.content == prefix + "aurais tu un lien instagram"){
      message.reply("tiens en voici un :   https://www.instagram.com/sushi_yuzu/");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!heyllo ^^
  if(message.content == prefix + "heyllo ^^"){
      message.reply("heyllo à toi ^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!j'ai besoin d'aide
  if(message.content == prefix + "j'ai besoin d'aide"){
      message.reply("dis...?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!mince
  if(message.content == prefix + "mince"){
      message.reply("mince ?");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien youtube
  if(message.content == prefix + "t'as un lien youtube"){
      message.reply("https://www.youtube.com/channel/UCWr0...");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien youtube ?
  if(message.content == prefix + "t'as un lien youtube ?"){
      message.reply("https://www.youtube.com/channel/UCWr0...");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien youtube shadow ?
  if(message.content == prefix + "t'as un lien youtube shadow ?"){
      message.reply("https://www.youtube.com/channel/UCWr0...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien instagram ?
  if(message.content == prefix + "t'as un lien instagram ?"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien instagram shadow ?
  if(message.content == prefix + "t'as un lien instagram shadow ?"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!t'as un lien instagram shadow 
  if(message.content == prefix + "t'as un lien instagram shadow"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!link
  if(message.content == prefix + "link"){
      message.reply("link ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!j'ai une question
  if(message.content == prefix + "j'ai une question"){
      message.reply("?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!attend
  if(message.content == prefix + "attend"){
      message.reply("oui j'attend");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!peux tu m'aider
  if(message.content == prefix + "peux tu m'aider"){
      message.reply("oui tout de suite, qu'attend tu de moi ?");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!ça va
  if(message.content == prefix + "ça va"){
      message.reply("je vais bien si tu vas bien");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!merci je vais bien
  if(message.content == prefix + "merci je vais bien"){
      message.reply("^^");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!oui ca va
  if(message.content == prefix + "oui ca va"){
      message.reply("^^ ok...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow merci
  if(message.content == prefix + "shadow merci"){
      message.reply("HAHAHA...derien");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!drawing
  if(message.content == prefix + "drawing"){
      message.reply("tu vas dessiner ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!art
  if(message.content == prefix + "art"){
      message.reply("veux tu des suggestions d'artistes ?");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!art
  if(message.content == prefix + "art"){
      message.reply("veux tu des suggestions d'artistes ?");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!non merci
  if(message.content == prefix + "non merci"){
      message.reply("ok dis moi quand tu as besoin de moi");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!oui s'il te plait
  if(message.content == prefix + "oui s'il te plait"){
      message.reply("ok de quoi as tu besoin");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!shadow qui est tu ?
  if(message.content == prefix + "shadow qui est tu ?"){
      message.reply("Nawiss m'a nommé shadow il peut m'appeler comme il le souhaite et je suis sa protectrice...je ne vais pas laisser les gens s'approcher de trop pres");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!qui est tu shadow ?
  if(message.content == prefix + "qui est tu shadow ?"){
      message.reply("Nawiss m'a nommé shadow il peut m'appeler comme il le souhaite et je suis sa protectrice...je ne vais pas laisser les gens s'approcher de trop pres");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!j'ai faim je vais manger
  if(message.content == prefix + "j'ai faim je vais manger"){
      message.reply("go to eat Nawiss, enjoy your meal");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!thank you shadow
  if(message.content == prefix + "thank you shadow"){
      message.reply("hhhh, c'est rien");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!je reviens
  if(message.content == prefix + "je reviens"){
      message.reply("Nawiss est AFK ne l'embetez pas");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!désolé
  if(message.content == prefix + "désolé"){
      message.reply("ce n'est rien peu importe ce que tu as fait");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!priestess
  if(message.content == prefix + "priestess"){
      message.reply("je suis une shadowfey priestess mais non méchante");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!j'etais parti
  if(message.content == prefix + "j'etais parti"){
      message.reply("bon retour parmi nous");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!j'etais sorti
  if(message.content == prefix + "j'etais sorti"){
      message.reply("Welcome back");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!j'etais pas la 
  if(message.content == prefix + "j'etais pas la "){
      message.reply("Nawiss re-bienvenue");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!je vais dormir goodnight a tous
  if(message.content == prefix + "je vais dormir goodnight a tous"){
      message.reply("Nawiss dors bien!!");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!je vais dormir goodnight
  if(message.content == prefix + "je vais dormir goodnight"){
      message.reply("Bonne nuit Nawiss ^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!good morning
  if(message.content == prefix + "good morning"){
      message.reply("HEYLLO Nawiss ^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!vous avez bien dormi ?
  if(message.content == prefix + "vous avez bien dormi ?"){
      message.reply("oui je me suis introduite dans tes rêves hhhh");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!je vais y aller goodbye
  if(message.content == prefix + "je vais y aller goodbye"){
      message.reply("Goodbye Nawiss ^^");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!goodbye
  if(message.content == prefix + "goodbye"){
      message.reply("tu y va ? goodbye");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!nope
  if(message.content == prefix + "nope"){
      message.reply("oui, ok");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!samurai
  if(message.content == prefix + "samurai"){
      message.reply("🏯");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!demande à shadow
  if(message.content == prefix + "demande à shadow"){
      message.reply("que dois-je faire ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!great
  if(message.content == prefix + "great"){
      message.reply("GREAT ^^");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!Goodbye
  if(message.content == prefix + "Goodbye"){
      message.reply("bye ;)");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!merde
  if(message.content == prefix + "merde"){
      message.reply("de cheval...");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!à shadow
  if(message.content == prefix + "à shadow"){
      message.reply(":)");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!SHADOW
  if(message.content == prefix + "SHADOW"){
      message.reply("???");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien twitch
  if(message.content == prefix + "aurais tu un lien twitch"){
      message.reply("https://www.twitch.tv/sushi_nawiss");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien twitch ?
  if(message.content == prefix + "aurais tu un lien twitch ?"){
      message.reply("https://www.twitch.tv/sushi_nawiss");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien instagram
  if(message.content == prefix + "aurais tu un lien instagram"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien instagram
  if(message.content == prefix + "aurais tu un lien instagram"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien instagram ?
  if(message.content == prefix + "aurais tu un lien instagram ?"){
      message.reply("https://www.instagram.com/sushi_yuzu/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien youtube
  if(message.content == prefix + "aurais tu un lien youtube"){
      message.reply("https://www.youtube.com/channel/UCWr0...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien youtube ?
  if(message.content == prefix + "aurais tu un lien youtube ?"){
      message.reply("https://www.youtube.com/channel/UCWr0...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien discord
  if(message.content == prefix + "aurais tu un lien discord"){
      message.reply("https://discord.gg/begQYuVSgg");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien discord ?
  if(message.content == prefix + "aurais tu un lien discord ?"){
      message.reply("https://discord.gg/begQYuVSgg");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!thx 
  if(message.content == prefix + "thx"){
      message.reply("c'est rien ƪ(ړײ)ƪ");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!thx shadow 
  if(message.content == prefix + "thx shadow"){
      message.reply("derien Nawiss");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!ah merde
  if(message.content == prefix + "ah merde"){
      message.reply("oh ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!help shadow
  if(message.content == prefix + "help shadow"){
      message.reply("help tu as besoin de moi ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow tu vas bien ?
  if(message.content == prefix + "shadow tu vas bien ?"){
      message.reply("si tu est ok je suis OK.");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!il y'a des enemis
  if(message.content == prefix + "il y'a des enemis"){
      message.reply("dois-je les supprimer");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!merci encore shadow
  if(message.content == prefix + "merci encore shadow"){
      message.reply("it's nothing Nawiss");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!hi
  if(message.content == prefix + "hi"){
      message.reply("HI Nawiss ^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!hello
  if(message.content == prefix + "hello"){
      message.reply("hello Nawiss");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!i'm ok
  if(message.content == prefix + "i'm ok"){
      message.reply("n'oublie pas si tu vas bien je vais bien aussi");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien google simple
  if(message.content == prefix + "aurais tu un lien google simple"){
      message.reply("https://www.google.com/");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien google simple ?
  if(message.content == prefix + "aurais tu un lien google simple ?"){
      message.reply("https://www.google.com/");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien youtube simple
  if(message.content == prefix + "aurais tu un lien youtube simple"){
      message.reply("https://www.youtube.com/");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!aurais tu un lien youtube simple ?
  if(message.content == prefix + "aurais tu un lien youtube simple ?"){
      message.reply("https://www.youtube.com/");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!stp
  if(message.content == prefix + "stp"){
      message.reply("yes...");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!please shadow
  if(message.content == prefix + "please shadow"){
      message.reply("yup ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!shadow please
  if(message.content == prefix + "shadow please"){
      message.reply("yes Nawiss ?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!hahaha
  if(message.content == prefix + "hahaha"){
      message.reply("HAHAHA ^^");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!mes deux personnages préférés de toutE oeuvre
  if(message.content == prefix + "mes deux personnages préférés de toutE oeuvre"){
      message.reply("haku, Luffy, Widowmaker, Seth");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!Merci
  if(message.content == prefix + "Merci"){
      message.reply("hhh derien");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!Hi
  if(message.content == prefix + "Hi"){
      message.reply("Hi Nawiss!");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!Je t'invoque
  if(message.content == prefix + "Je t'invoque"){
      message.reply("as tu besoin de mes services??");   
  }  
});
client.on("message",message => {
  if(message.author.bot) return;

  //!Nawiss
  if(message.content == prefix + "Nawiss"){
      message.reply("Tu viens de dire ton nom?? hereusement que ce n'est pas une autre personne, je ne dirais rien de comprométant sur toi");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!nawiss
  if(message.content == prefix + "nawiss"){
      message.reply("je supopose que tu vas bien");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!Je ne vais pas bien
  if(message.content == prefix + "Je ne vais pas bien"){
      message.reply("que puis-je faire pour toi?");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!as tu vu quelque chose??
  if(message.content == prefix + "as tu vu quelque chose??"){
      message.reply("Hi Nawiss!");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!Ying
  if(message.content == prefix + "Ying"){
      message.reply("Yang");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!Yang
  if(message.content == prefix + "Yang"){
      message.reply("Ying");   
  }  
});



client.on("message",message => {
  if(message.author.bot) return;

  //!arrete
  if(message.content == prefix + "arrete"){
      message.reply("ok");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!non arrete
  if(message.content == prefix + "non arrete"){
      message.reply("oui j'arrete");   
  }  
});

client.on("message",message => {
  if(message.author.bot) return;

  //!quand as tu été crée shadow
  if(message.content == prefix + "quand as tu été crée shadow ?"){
      message.reply("je ne sais pas, mais tu es celui qui m'a donné vie et je t'en remercie, je ne veux rien de plus^^");   
  }  
});


client.on("message",message => {
  if(message.author.bot) return;

  //!je vais eat
  if(message.content == prefix + "je vais eat"){
      message.reply("bon eat alors :)");   
  }  
})


client.on("message",message => {
  if(message.author.bot) return;

  //!j'ai fini
  if(message.content == prefix + "j'ai fini"){
      message.reply("j'en suis hereuse");   
  }  
})



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