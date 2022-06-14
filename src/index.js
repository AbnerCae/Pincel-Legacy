const dbd = require('dbd.ts');
const bot = new dbd.Bot({
	prefix: '@', //I will remove
	intents: ['GUILD_MESSAGES']
});

bot.addEvent([
	'onMessage',
	'onInteraction'
]);

bot.commands.load({
	path: './src/commands/'
});

bot.login(process.env.token);
