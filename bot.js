const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

 const client = new Client({
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu"
    ]
  }
});
client.on('qr', qr => {
  qrcode.generate(qr, { small: false });
});

client.on('ready', () => {
  console.log('SEAL AI WhatsApp Assistant is ready!');
});

client.on('message', async msg => {

  const text = msg.body.toLowerCase();

  if(text.includes("price") || text.includes("cost")){
    msg.reply("Our SEAL QR ordering system costs ₹7000 one-time. There is no mandatory monthly payment.");
  }

  else if(text.includes("monthly")){
    msg.reply("There is no mandatory monthly payment. Only a one-time setup.");
  }

  else if(text.includes("demo")){
    msg.reply("Sure! Please share your hotel name and location and our team will contact you for a demo.");
  }

  else{
    msg.reply("Hello! This is SEAL Digital Solutions AI assistant. You can ask about our QR ordering system, pricing, or request a demo.");
  }

});

client.initialize();
