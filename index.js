const Discord = require('discord.js');
const {bot} = require('./config/env');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const {token } = bot;

client.login(token);

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      // ReadableStreams, in this example YouTube audio
      connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly', volume: 2 }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.on('disconnect', () => console.info("DISCONNECTED"))
