const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {
var x = client.channels.get("828246760018280468");
if (x) x.join();
});

////////////////////////////////////////////////////////


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "test")) {
  message.channel.send('pong!').then((msg) => {
  var ping = `${Date.now() - msg.createdTimestamp}`
  var apl = `${Math.round(client.ping)}`
  msg.edit(`Time take; ${ping}ms.\nDiscord API; ${apl}ms.`)
  })
  }
});




\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



client.login(process.env.BOT_TOKEN);
