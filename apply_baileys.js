const fs = require('fs');
let code = fs.readFileSync('F:\\Agent - RenovationHyd\\TripuraCloudBot\\whatsapp_backend_worker.js', 'utf8');

const wrapper = 
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');

class Client {
  constructor() {
    this.events = {};
  }
  on(event, handler) {
    this.events[event] = handler;
  }
  async initialize() {
    const { state, saveCreds } = await useMultiFileAuthState(path.join(BRAIN_DIR, 'baileys_session'));
    this.sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      logger: pino({ level: 'silent' })
    });
    this.sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;
      if (qr && this.events['qr']) this.events['qr'](qr);
      if (connection === 'close') {
        const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
        if(shouldReconnect) this.initialize();
      } else if (connection === 'open') {
        if (this.events['ready']) this.events['ready']();
        if (this.events['authenticated']) this.events['authenticated']();
      }
    });
    this.sock.ev.on('creds.update', saveCreds);
    this.sock.ev.on('messages.upsert', async m => {
      if (this.events['message']) {
        for (let msg of m.messages) {
          if (!msg.message || msg.key.fromMe) continue;
          const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
          const mappedMsg = {
            from: msg.key.remoteJid,
            to: 'me',
            body: text,
            id: { remote: msg.key.remoteJid }
          };
          this.events['message'](mappedMsg);
        }
      }
    });
  }
  async sendMessage(to, textOrMedia, options) {
    if (typeof textOrMedia === 'string') {
      return this.sock.sendMessage(to, { text: textOrMedia });
    } else {
      let cap = options?.caption || textOrMedia.caption || '';
      return this.sock.sendMessage(to, { text: cap });
    }
  }
}
class LocalAuth {}
class MessageMedia { static fromFilePath() { return { caption: '' }; } }
;

code = code.replace("const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');", wrapper);

// Fix Llama call to use NVIDIA API since Ollama isn't on Render
const nvidiaFix = 
function callLlama(messages, max_tokens, temp) {
 return new Promise((resolve) => {
  try {
   const https = require('https');
   const payload = JSON.stringify({ 
     model: 'meta/llama3-70b-instruct', 
     messages: messages,
     max_tokens: max_tokens,
     temperature: temp
   });
   const options = { 
     hostname: 'integrate.api.nvidia.com', 
     path: '/v1/chat/completions', 
     method: 'POST', 
     headers: { 
       'Content-Type': 'application/json', 
       'Authorization': 'Bearer ' + nvidiaKey,
       'Content-Length': Buffer.byteLength(payload) 
     } 
   };
   const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
     try {
      let json = JSON.parse(data);
      if (json.choices && json.choices[0] && json.choices[0].message) {
       resolve(json.choices[0].message.content.trim());
      } else {
       resolve(null);
      }
     } catch (e) {
      resolve(null);
     }
    });
   });
   req.on('error', () => resolve(null));
   req.setTimeout(8000, () => { req.destroy(); resolve(null); });
   req.write(payload);
   req.end();
  } catch(e) { resolve(null); }
 });
}
;

code = code.replace(/function callLlama[\s\S]*?\}\n\}/, nvidiaFix);

fs.writeFileSync('F:\\\\Agent - RenovationHyd\\\\TripuraCloudBot\\\\whatsapp_backend_worker.js', code, 'utf8');