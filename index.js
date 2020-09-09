const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dmall")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'invisible').size}\` ** DONE !** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log('Ready to use now!');
    let statuses = [
        " Photron's code ",
        " eg- '+dmall Hello!'",
        " command- '+dmall' " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.login(process.env.token);