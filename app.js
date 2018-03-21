//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();
var Scrambo = require('scrambo');
var threebythree = new Scrambo(); // Defaults to 3x3
var fs = require('fs');
var token = fs.readFileSync('token.txt', 'utf8');

//Listener Event: Message Reveived
bot.on('message', message => {

  //Variables
  var sender = message.author; // The person who sent the Message
  var msg = message.content.toUpperCase(); // Converts to all uppercase
  var prefix = '!' // Prefix before all commands


  //SCRAMBLEhelp command
  if (msg === prefix + 'SCRAMBLER HELP') {
      message.channel.send("Simply type !scramble (2//4/5/skewb/pyra/mega/sq1) or !scramble to generate a 3x3 scramble.") //sends message to channel where command was sent originally
  }

        //SCRAMBLE2 command
          if (msg === prefix + 'SCRAMBLE 2') {
              // Generate a new 2x2 scramble
              var seeded_scramble = new Scrambo().type('222').length(10).get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
      }

        //SCRAMBLE3 command
          if (msg === prefix + 'SCRAMBLE') {
              // Generate a new 3x3 scramble
              var seeded_scramble = new Scrambo().type('333').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLE3 command
          if (msg === prefix + 'SCRAMBLE 3') {
              // Generate a new 3x3 scramble
              var seeded_scramble = new Scrambo().type('333').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLE4 command
          if (msg === prefix + 'SCRAMBLE 4') {
              // Generate a new 4x4 scramble with the seed of 1
              var seeded_scramble = new Scrambo().type('444').length(30).get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLE5 command
            if (msg === prefix + 'SCRAMBLE SKEWB') {
              // Generate a new 5x5 scramble
              var seeded_scramble = new Scrambo().type('skewb').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLESKEWB command
            if (msg === prefix + 'SCRAMBLE 5') {
              // Generate a new Skewb scramble
              var seeded_scramble = new Scrambo().type('555').length(36).get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLEPYRA command
            if (msg === prefix + 'SCRAMBLE PYRA') {
              // Generate a new Pyra scramble
              var seeded_scramble = new Scrambo().type('pyram').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLEMEGA command
            if (msg === prefix + 'SCRAMBLE MEGA') {
              // Generate a new Megaminx scramble
              var seeded_scramble = new Scrambo().type('minx').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }

        //SCRAMBLESQ1 command
            if (msg === prefix + 'SCRAMBLE SQ1') {
              // Generate a new Sq1 scramble
              var seeded_scramble = new Scrambo().type('sq1').get();
              console.log(seeded_scramble);
              message.channel.send(seeded_scramble); //sends scramble to channel where command was sent
    }
})
//listener event: Bot launched
bot.on('ready', () => {
  console.log('Initialization complete!') // runs when bot is launched

//status
bot.user.setStatus('Online')

//game and streaming
bot.user.setActivity('with Rubik\'s cubes')

})

//login
bot.login(token) //reads from text file
