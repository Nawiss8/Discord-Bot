const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('connecté protectrice de Nawiss', msg => {
  if (msg.content === 'heyllo et merci shadow') {
    msg.reply('derien!');
  }
});

client.login('ODQ5MDI1NjQxNTE1ODQzNjM0.YLVKvw.hydtTxdvOHXE12y066VH-LI-YZQ');