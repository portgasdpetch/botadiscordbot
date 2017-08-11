const Discord = require('discord.js');
const botBota = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = 10;

botBota.on('ready', () => {console.log('Bota is ready!'); });

botBota.on('message', message => {
	switch (message.content){
		case "!bothelp" : 
		message.channel.send("!travel >> Maple traveling tutorial.\r!trainguide >> farming spot for specified level.\r!maplegroup >> The group of maple community\r!freepetquest >> Guide of the quest that give you a free pet.\n!infor >> to descripe about players' information");
		break;
		case "!travel" : 
		message.reply('Go to Dimensional Portal > Ziganpu > Talk to the big duck > Six path cross way \n> Climb down 1 map > Get to the top left and go to Pantheon Portal \n> get in Pantheon Portal again and choose the destination town \n>done.');
		break;
		case "trainguide" :
		message.reply('http://ayumilove.net/best-maplestory-training-spots-guide-v9/');
		break;
		case "!maplegroup" :
		message.reply('https://www.facebook.com/groups/maplethai/');
		break;
		case "!freepetquest" :
		message.reply('https://goo.gl/PP8Sqf');
		break;
		case "!infor" :
		message.reply("Type ***!***<***nickname***> followed by '**infor**' to see their real name and steam profile");
		break;
		case "!boatinfor" :
		message.reply('Name : ปณิธิ หวังเพื่อสุข\nSteam Link : http://steamcommunity.com/id/boatkuyza/')
		break;
		case "!iceinfor" :
		message.reply('Name : พาทิศ จงศิริวาณิช\nSteam Link : http://steamcommunity.com/profiles/76561198296004879/')
		break;
		case "!petchinfor" :
		message.reply('Name : ธัชชัย จันทรวิวัฒน์\nSteam Link : http://steamcommunity.com/id/petchportgach/')
		break;
		case "!nilinfor" :
		message.reply('Name : ธนิศร์ จงบรรเจิดเพชร\nSteam Link : http://steamcommunity.com/id/nilzakarb/')
		break;
		case "gonginfor" :
		message.reply('Name : กฤติพงศ์ เหมวิริยะ\nSteam Link : http://steamcommunity.com/profiles/76561198074048720/')
		break;
	}
});


botBota.login('MzQyNzU2NTE5ODIzMTQ3MDA5.DGXTTQ.zIIiEWeVJyV-PRPxJyKSNJ77Cdo');

/*botBota.on('message', message => {
	if(message.content === '!bothelp'){
		message.channel.send("!travel >> Maple traveling tutorial.\r!trainguide >> farming spot for specified level.\r!maplegroup >> The group of maple community\r!freepetquest >> Guide of the quest that give you a free pet.\n!infor >> to descripe about players' information");
	} if(message.content === '!travel') {
		message.reply('Go to Dimensional Portal > Ziganpu > Talk to the big duck > Six path cross way \n> Climb down 1 map > Get to the top left and go to Pantheon Portal \n> get in Pantheon Portal again and choose the destination town \n>done.');
	} if(message.content === '!trainguide'){
		message.reply('http://ayumilove.net/best-maplestory-training-spots-guide-v9/');
	} if(message.content === '!maplegroup'){
		message.reply('https://www.facebook.com/groups/maplethai/');
	} if(message.content === '!freepetquest'){
		message.reply('https://goo.gl/PP8Sqf');
	} if(message.content === '!infor'){
		message.reply("Type ***!***<***nickname***> followed by '**infor**' to see their real name and steam profile"); // &#39 is double quote ("")
	} if(message.content === '!boatinfor'){
		message.reply('Name : ปณิธิ หวังเพื่อสุข\nSteam Link : http://steamcommunity.com/id/boatkuyza/');
	} if(message.content === '!iceinfor'){
		message.reply('Name : พาทิศ จงศิริวาณิช\nSteam Link : http://steamcommunity.com/profiles/76561198296004879/');
	} if(message.content === '!petchinfor'){
		message.reply('Name : ธัชชัย จันทรวิวัฒน์\nSteam Link : http://steamcommunity.com/id/petchportgach/');
	} if(message.content === '!nilinfor'){
		message.reply('Name : ธนิศร์ จงบรรเจิดเพชร\nSteam Link : http://steamcommunity.com/id/nilzakarb/');
	} if(message.content === '!gonginfor'){
		message.reply('Name : กฤติพงศ์ เหมวิริยะ\nSteam Link : http://steamcommunity.com/profiles/76561198074048720/');
	}
});*/