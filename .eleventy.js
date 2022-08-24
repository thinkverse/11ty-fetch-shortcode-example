const fetch = require('node-fetch'); // npm install node-fetch@2

module.exports = eleventy => {

  eleventy.addAsyncShortcode("tweet", async url => {
    const oEmbedAPI = await fetch(`https://publish.twitter.com/oembed?url=${url}`);
    const oEmbed = await oEmbedAPI.json();

    return oEmbed.html;
  });

};
