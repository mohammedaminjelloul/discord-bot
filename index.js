const {Client, Intents, MessageEmbed ,WebhookClient} = require('discord.js');

// inside a command, event listener, etc.
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MEMBERS,
  

] });
const prefix="!";

client.on("ready",()=>{
  console.log("bot works")
client.user.setActivity('EGSG BY MONCEF#1125', {type : 'PLAYING' } )
    client.user.setStatus('online')
})
/* client.on("messageCreate",message=>{
  if (message.content === prefix+"help"){
    const embed= new MessageEmbed()
    .setTitle("sadad");
    message.channel.send({embeds:[embed]});
  }
}) */

/*client.on('guildMemberAdd', async member => {
  var message = "Make sure to check the rules at - تأكد من مراجعة القواعد في "  
  
  const kawafelEmbed = new MessageEmbed()
	.setColor('#fff73f')
	.setTitle("```" +"دمت اهلا وحللت سهلا - Welcome to our discord server"+"```")
  .addField(message, member.guild.channels.cache.get('channel id here ').toString(), true)
  .setAuthor({ name: " مرحبا "+member.displayName, iconURL: member.displayAvatarURL()})

  .setImage('image link ')

	.setDescription("●▬▬▬▬▬▬▬▬●●▬▬▬▬▬▬▬▬●")
  .setTimestamp()
  const azr="<@"+member.id+">"
  
  member.guild.channels.cache.get('channel id ').send({ embeds: [kawafelEmbed]}); 
  member.guild.channels.cache.get('channel id').send(azr); 




});*/
client.on('guildMemberAdd', async member => {
  
  var welcome="👈  دمت اهلا وحللت سهلا   👉 \n                            \n👇  تأكد من مراجعة القواعد في 👇 \n                       "
  
  const kawafelEmbed = new MessageEmbed()
	.setColor("#fff73f")

  .addField( welcome, member.guild.channels.cache.get('channel id ').toString(), true)
  .setAuthor({ name: " مرحبا "+member.displayName, iconURL: member.displayAvatarURL()})
  /* .setThumbnail('https://i.imgur.com/tCXYMAA.png') */
  .setImage('image link')

	/* .setDescription("دمت اهلا وحللت سهلا - Welcome to our discord server \n Make sure to check the rules at - تأكد من مراجعة القواعد في") */
  .setTimestamp()
  const azr="<@"+member.id+">"
  try {
		
		const webhook = new WebhookClient({ url: 'webhook link' });

		if (!webhook) {
			return console.log('No webhook was found that I can use!');
		}

		await webhook.send({
			content: azr,
			embeds: [kawafelEmbed],
		});
	} catch (error) {
		console.error('Error trying to send a message: ', error);
	}
  
/*   member.guild.channels.cache.get('channel id').send({ embeds: [kawafelEmbed]}); 
  member.guild.channels.cache.get('channel id').send(azr);  */




});


client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + 'embed')) {
    var args = message.content.slice(0);
    /////////////////////////////////////title
    for (let i = 0; i < args.length; i++) {
      if(args[i]=="["){
      a=i
      }
      if(args[i]=="]"){
      b=i
      if(b){
        break
      }
      }
     
      
    }

    ////////////////////////////////////////// CHANNEL ID
    for (let i = 0; i < args.length; i++) {
      if(args[i]=="("){
      c=i
      }
      if(args[i]==")"){
      d=i
      if(d){
        break
      }
      }
     
      
    }

    ///////////////////////////////////////////
    let result = args.substring(a+1, b);
    let result1 = args.substring(c+1, d);
    
    if(result1.length != 18 && result1 !=""){
      result1='channel id'
       message.guild.channels.cache.get(result1).send('مشكلة في ال channel ID')

    }
    else if(result1.length != 18 && result1==""){
        result1='random channel id '
    };
    var args = message.content.slice(d+1);
    const exampleEmbed = new MessageEmbed()
	.setColor('#fff73f')
	.setTitle(result)
	.setDescription(args)
    
  message.guild.channels.cache.get(result1).send({ embeds: [exampleEmbed] })
    
    ;}
});
client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + 'image')) {
    var args = message.content.slice(0);
    /////////////////////////////////////title
    for (let i = 0; i < args.length; i++) {
      if(args[i]=="["){
      a=i
      }
      if(args[i]=="]"){
      b=i
      if(b){
        break
      }
      }
     
      
    }

    ////////////////////////////////////////// CHANNEL ID
    for (let i = 0; i < args.length; i++) {
      if(args[i]=="("){
      c=i
      }
      if(args[i]==")"){
      d=i
      if(d){
        break
      }
      }
     
      
    }
    for (let i = 0; i < args.length; i++) {
      if(args[i]=="{"){
      e=i
      }
      if(args[i]=="}"){
      f=i
      if(f){
        break
      }
      }
     
      
    }

    ///////////////////////////////////////////
    let result = args.substring(a+1, b);
    let result1 = args.substring(c+1, d);
    let imageID = args.substring(e+1, f);
    if(result1.length != 18 && result1 !=""){
      result1='channel id'
       message.guild.channels.cache.get(result1).send('مشكلة في ال channel ID')

    }
    else if(result1.length != 18 && result1==""){
        result1='random channel id'
    };
    var args = message.content.slice(f+1);
    const exampleEmbed = new MessageEmbed()
	.setColor('#fff73f')
	.setTitle(result)
	.setDescription(args)
    .setThumbnail(imageID)
  message.guild.channels.cache.get(result1).send({ embeds: [exampleEmbed] })
    
    ;}
});
client.login('bot id ');
