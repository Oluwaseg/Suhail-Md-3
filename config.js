const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_30_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHU1QrMS9QOEkzVFVveW1jVUFDUmJHNlJYUDEwU0JnVVdhUE1lSVErUUVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3NDhibHY5elE0MnN0RnJ4a0hYRGNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyZTJlMjdjLWFkOTgtNDUzMy1iMmRjLTViOTg4ZjE3MjA1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA3NyxcbiAgICAgIDMwLFxuICAgICAgMTcsXG4gICAgICAxNDUsXG4gICAgICAxMDUsXG4gICAgICAyNyxcbiAgICAgIDgsXG4gICAgICAxMzcsXG4gICAgICAyNTEsXG4gICAgICAyMDAsXG4gICAgICA5NCxcbiAgICAgIDEwNyxcbiAgICAgIDI0NyxcbiAgICAgIDg1LFxuICAgICAgNjYsXG4gICAgICA1MixcbiAgICAgIDEzNCxcbiAgICAgIDEzMCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMjI4LFxuICAgICAgNDIsXG4gICAgICAxNTksXG4gICAgICAyNSxcbiAgICAgIDEyNyxcbiAgICAgIDEwLFxuICAgICAgMjUsXG4gICAgICAyNTAsXG4gICAgICA3NyxcbiAgICAgIDE5NixcbiAgICAgIDYyLFxuICAgICAgOTIsXG4gICAgICAxMzEsXG4gICAgICA0MCxcbiAgICAgIDE2NixcbiAgICAgIDIwNCxcbiAgICAgIDEyMCxcbiAgICAgIDE5OSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBTVYzRDIyWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0ODA5NTQwNzo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzAzOTE0OTA1ODQ3Mzc6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZ6dnJrSEVNam9vcjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrQVdQaDRaS0UrS290YkFVblpKU1ZldW9FaDJpRjFWMWNYWE9rQW1rLzNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVUMjVPTFo5dzlPK1hoeW54RTFwcjN1Zm5zRG9zckRjRk5YdUtqRnRCa2dOUWdkWkRwLzZXVmtRQUNrRnNmMnNEUTEzeVF4NU82KytteE41T0pqZkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhSL2N0YmFLNmg2T3RBSld1eDRpUlRzcWRxRjZxeThVVjFpdGNVWmt5L3NEMysxVDFNNWY5NnZYcFY2ZitNN1lOemdzdkNoek9ZRWF1b2VlZk1jYkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDgwOTU0MDc6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTIwNjYwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9rclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQWJlUWVjc0JtS1FSaU1MY1pGVFJ5dkgvdDRMbUpOTDRZK25BbU5wZy9JYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk5NjE2NDQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
