global.owner = [
  "918134015876",
  "917636987434"
]
global.anitav4 = "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒"
global.ownername = "𝓡𝓲𝓸(リオ)🍃🌸"
global.packname = "🍁❈°𝐄𝐥𝐢𝐭𝐞 𝐀𝐥𝐥𝐢𝐚𝐧𝐜𝐞°❈🍁"
global.author = "𓆩*"🍁𝓡𝓲𝓸(リオ)™🍁모"

⏤͟͟͞💎안녕하 𓆩ꨄ︎𓆪 세요⃟❄️

⏤͟͟͞🥂안녕하 𓆩ꨄ︎𓆪 세요⃟🌕

⏤͟͟͞🌿안녕하 𓆩ꨄ︎𓆪 세요⃟🍏

⏤͟͟͞🐈‍⬛안녕하 𓆩ꨄ︎𓆪 세요⃟🖤
    
🐾: ̗̀➛+⁹¹⁷⁶³⁶⁹⁸⁷⁴³⁴💌|🍁❈°𝐄𝐥𝐢𝐭𝐞 𝐀𝐥𝐥𝐢𝐚𝐧𝐜𝐞°❈🍁"
global.channelname = "🍁❈°𝐄𝐥𝐢𝐭𝐞 𝐀𝐥𝐥𝐢𝐚𝐧𝐜𝐞°❈🍁"
global.channeljid = "https://whatsapp.com/channel/0029VauhtxdJUM2jS9Upme02"
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = false;   // Set to true to automatically read statuses
global.AUTOSTATUS_REACT = false;   // Set to true to automatically like statuses
global.autoLikeEmoji = "🍁";    // Default emoji for liking statuses

global.LEVELUP = false;


global.ANTIVIEWONCE = false;

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = ["918134015876@s.whatsapp.net", "917636987434@s.whatsapp.net"]; // Add the JIDs of sudo users



global.public = false


global.ANTIDELETE = true;  

global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.WELCOME = true;

global.prefix = '.';

global.autobio = false;

global.ANTICALL = false;

global.antilink = true;

global.antilinkkick = false;

global.antilinkwarn = true;

global.mess = {
    success: '𝙳𝚘𝚗𝚎',
    admin: '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: '_(❗This Command Can Only Be Used In Private Chat !*_',
    wait: '_*Please Wait*_',
    notregist: '_*You are not registered in the Bot Database. Please register first_*',
    premium: '_*Premium only" Want Premium? Chat Owner_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
