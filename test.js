const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const pretty = require("pretty-ms");
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("828246760018280468");
if (x) x.join();
});
