const Discord = require('discord.js');
const botBota = new Discord.Client();

botBota.on('ready', () => {
	console.log('Bota is ready!');
});

botBota.on('message', message => {
	if(message.content === '!bothelp'){
		message.channel.send('!travel >> Maple traveling tutorial.\r!trainguide >> farming spot for specified level.\r!maplegroup >> The group of maple community\r!freepetquest >> Guide of the quest that give you a free pet.');
	}
});

botBota.on('message', message => {
	if(message.content === '!travel') {
		message.reply('Go to Dimensional Portal > Ziganpu > Talk to the big duck > Six path cross way \n> Climb down 1 map > Get to the top left and go to Pantheon Portal \n> get in Pantheon Portal again and choose the destination town \n>done.');
	}
});

botBota.on('message', message => {
	if(message.content === '!trainguide'){
		message.reply('http://ayumilove.net/best-maplestory-training-spots-guide-v9/');
	}
});

botBota.on('message', message => {
	if(message.content === '!maplegroup'){
		message.reply('https://www.facebook.com/groups/maplethai/');
	}
});

botBota.on('message', message => {
	if(message.content === '!freepetquest'){
		message.reply('https://goo.gl/PP8Sqf');
	}
});

botBota.on('message', message => {
	if(message.content === '!boat'){
		message.reply('Name : ปณิธิ หวังเพื่อสุข\nSteam link : http://steamcommunity.com/id/boatkuyza/');
	}	
});

botBota.login('เMzQyNzU2NTE5ODIzMTQ3MDA5.DG830Q.fbXJ7Aj5KWlmauwUw42bevdpRdM');

/*const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botRem = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
botRem.on('ready', () => {
  console.log('Rem ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
  if (message.content === '!test') {
    message.reply('ถึงยังไงเรมก็รักสุบารุค่ะ');
  }
});
botRem.login('MzQyNzU2NTE5ODIzMTQ3MDA5.DG830Q.fbXJ7Aj5KWlmauwUw42bevdpRdM');*/