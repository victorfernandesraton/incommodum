const base = require("../config/whitelist.json");

const ytdl = require("ytdl-core");

const client = new Discord.Client();

const queue = new Map();

async function execute(client) {
  // if (base && base.yt && base.yt.length) {
  //   const list = base.yt;
  //   const songInfo = await ytdl.getInfo(
  //     base.yt[Math.random() * (list.length - 0) + 0]
  //   );
  //   const song = {
  //     title: songInfo.title,
  //     url: songInfo.video_url,
  //   };

  //   if (!serverQueue) {
  //     const queueContruct = {
  //       textChannel: message.channel,
  //       voiceChannel: voiceChannel,
  //       connection: null,
  //       songs: [],
  //       volume: 5,
  //       playing: true,
  //     };

  //     queue.set(message.guild.id, queueContruct);

  //     queueContruct.songs.push(song);

  //     try {
  //       var connection = await voiceChannel.join();
  //       queueContruct.connection = connection;
  //       play(message.guild, queueContruct.songs[0]);
  //     } catch (err) {
  //       console.log(err);
  //       queue.delete(message.guild.id);
  //       return message.channel.send(err);
  //     }
  //   } else {
  //     serverQueue.songs.push(song);
  //     return message.channel.send(`${song.title} has been added to the queue!`);
  //   }
  // }
  console.log(client)
}

module.exports = {
  execute,
};
