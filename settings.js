const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUd4Nm1iVW16Wm9LYnRvVHJadWZoL25xS0F2ZFJEd2dOemVYU1Rqa0puZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmpSS1ErdDJ5ZzQzKzdpUmpMczBSN2FPZ0xMdmxMdmdrbFN3RXo4c09qZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TytIcG5DMGtiT2YwVXpBVDVTS0pmaWxFYWtQaWxCOWRYdTQ2REVoSUdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOFJFUUV0UytCVFpVZE5LUWNmNVloYUw4dzRhVi84bWNlUTFWK2hRZmxFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKcEJKOVdZT1hORDBKMDVwb3MvbDJGMW1Rdml0VzhJREN0RUo4cnhqVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCa0NYbUszaTdnSlJJcVJKakRLeGN1aUxDb1N5ZElweXZPME1MZ3pHQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01CZEtLTjhjMkZnYW9lOFJhR2lSMHFlbmdDV1VidlZqNTB3aEF3S1hXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmM0a2Jab0NpMFkvL3Bnd0ErR211YXFlRXNsQktwMTFxR0RWTms4K1lHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF4d3ZrVHc0TlpBdmVwTFBVa25Fa1ozUnlEakVBWndrNVVRMHd5c3pvZnBVL2gwY1o3YThFNU9wQlhWeDYzRUlqTC92TVZONXFTMy9KbExzN0MvSER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiU3hJSXdwZ1FRczNRL2RRN0huSlIvc093NEpHKzc2RnhOUEovVnNKYUFYdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2OTU5Nzk5NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTdBQzdDNjEzQTczN0I4ODM1Q0Q5QzAzMzhCMzc1RTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODcyMTI0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Njk1OTc5OTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxQTQ3MTIxRkEzQkYyOTBCRDlGMDlEQzE3OUIwRTM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg3MjEyNDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY5NTk3OTk2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMDZDQkIxMDMwRkJDMTVCODUzQ0JCMjI3OTRCRjY2NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NzIxMjYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6SGJPZDFWZ1N0ZTIzeS1lRldUMmJnIiwicGhvbmVJZCI6IjEwZDljN2Q2LTMyMGQtNGEwYi1iMTc0LTkyOGNkODgyZGQxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSS8zWmN6d1BOVWZScTBQMHlYSlFpc3lMZ1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFAvdWNlSmlkR2ZGTU4yTWFQSEtBdElxcXVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpHNlA1QVBCIiwibWUiOnsiaWQiOiIyNTU2OTU5Nzk5Njc6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqp8J2aqvCdmqvwnZqw8J2atPCdmrDwnZqr8J2QguKEoiAg8J2QmfCdmq/wnZq08J2atSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDd1MjRjRUVNM2lxTGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWFxeGcxdGxYR0lpWjBpb05xV3pHUkNhVXl4Vmp5U3ViUzd0N3lySEowND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU2puRU5jWFlvdjZyQzhDVlZCU3hzS2N3VTd2QTZrZ3ZpZ09WUDNXTkxCTUhBdklNVGkwQzBuWWlYVWJzanI5SGh0SHlxNXpwazU1UTRHcDhJTm01QlE9PSIsImRldmljZVNpZ25hdHVyZSI6InMzd1FCNFBndC8rQjc2NkRUV0p5T0pyR1pOYlpDVXoxOW1UWVZ3ZkFFc1BxMEp1UHF0L2dKam5neWYzd0Z0VFNyZUFQblZEWmJFaGVFRzRtMllKUkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njk1OTc5OTY3OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEdxc1lOYlpWeGlJbWRJcURhbHN4a1FtbE1zVlk4a3JtMHU3ZThxeHlkTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODcyMTI0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCRysifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || false  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || false  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'nonbutton' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
