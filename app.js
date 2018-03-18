//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();
var Scrambo = require('scrambo');
var threebythree = new Scrambo(); // Defaults to 3x3

//Listener Event: Message Reveived
bot.on('message', message => {

  //Variables
  var sender = message.author; // The person who sent the Message
  var msg = message.content.toUpperCase(); // Converts to all uppercase
  var prefix = '!' // Prefix before all commands

  //TEST command
  if (msg === prefix + 'TEST') {
      message.channel.send('Success!') //sends message to channel where command was sent originally
  }

  //SCRAMBLE3 command
    if (msg === prefix + 'SCRAMBLE3') {
      // Generate a new 3x3 scramble with the seed of 1
      var seeded_scramble = new Scrambo().type('333').get(1).length(20);
      message.channel.send(seeded_scramble); //sends message to channel where command was sent originally
      }

  //SCRAMBLE4 command
    if (msg === prefix + 'SCRAMBLE4') {
      // Generate a new 4x4 scramble with the seed of 1
      var seeded_scramble = new Scrambo().type('444').get(1).length(25);
      message.channel.send(seeded_scramble); //sends message to channel where command was sent originally
      }

  //PING command
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!') //sends message to channel where command was sent originally
        }

  //Set game playing
  //  if (msg === prefix + "SETGAME") {
  //  if (msg.author.id !== "191380396586303489"){
  //        return msg.reply(":x: Bot owner only. Sorry" + msg.author)
  //    }
  //    let args = msg.content.split(" ").slice(1);
  //    let game = args.join(" ")
  //    msg.channel.SendMessage(thingToEcho)

});

//listener event: User joining the discord server
    //bot.on('guildMemberAdd', member => {

      //console.log('Welcome to US Cubers, ' + member.user.username + '! DM an @Admin or @Mod we can add it to your role!')

      //Creates variable for role
      //var role = member.guild.roles.find('name', 'Cubers-Nub');

      //Actually giving the roles
      //member.addRole(role)

  //});

//listener event: Bot launched
bot.on('ready', () => {
  console.log('Initialization complete.') // runs when bot is launched

//status
bot.user.setStatus('Online')

//game and streaming
bot.user.setActivity('with Rubik\'s cubes')

})

//login
bot.login('NDIzNTMwMTE5ODM2MDczOTg2.DYyNww.BqARD5w-pyjSibYB6h4yJ631j-4') //shhh secret
