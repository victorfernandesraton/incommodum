const path = require("path");
require("dotenv").config({
  path: path.resolve("", '.env'),
});

module.exports = {
  prefix: "$play",
  dd: {
    id : process.env.DD_CLIENT_ID,
    secret: process.env.DD_CLIENT_SECRET,
  },
  bot: {
    token: process.env.DD_BOT_TOKEN
  }
};
