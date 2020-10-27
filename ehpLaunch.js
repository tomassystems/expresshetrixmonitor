const { bot_startup_file } = require('./ehpData.json');
require('./content/data/backend/starter');
require('./content/data/public');
console.log('Attempting to start the EHP backend webserver.');
require('./content/src/app');
console.log('EHP backend webserver has started with no errors!');
console.log('Attempting to start your bot. Please make sure you have included your absolute path to such, e.g ./src/index in ehpData.json.')
require(bot_startup_file);
console.log('Bot has been started successfully.')
