const reddit = require("./reddit");

(async () => {
  await reddit.initialize();

  // A dummy account used for the purpose of this bot
  await reddit.login('Realistic-Cheetah-67', '');

  await reddit.vote('node', 'upvote', 10);

  await reddit.close();
  
})();
