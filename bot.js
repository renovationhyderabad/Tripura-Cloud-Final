const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const QRCode = require('qrcode');
const axios = require('axios');
const fs = require('fs');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Miss Tripura WhatsApp Bot is Running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Dummy Web Server running on port ${PORT} for Render deployment.`));

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const SYSTEM = fs.readFileSync('system_prompt.md', 'utf8');

function loadDB(f) { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return {}; } }
function saveDB(f, d) { fs.writeFileSync(f, JSON.stringify(d, null, 2)); }
function addH(jid, r, t) {
  let h = loadDB('./history.json');
  if (!h[jid]) h[jid] = [];
  h[jid].push({ r, t });
  if (h[jid].length > 20) h[jid] = h[jid].slice(-20);
  saveDB('./history.json', h);
}

async function groq(jid) {
  let h = loadDB('./history.json');
  let msgs = [{ role: 'system', content: SYSTEM }];
  for (let m of (h[jid] || []).slice(-10)) msgs.push({ role: m.r === 'u' ? 'user' : 'assistant', content: m.t });
  try {
    let r = await axios.post('https://api.groq.com/openai/v1/chat/completions',
    { model: 'openai/gpt-oss-20b', messages: msgs, max_tokens: 800 },
    { headers: { 'Authorization': 'Bearer ' + GROQ_API_KEY, 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, timeout: 15000 });
    return r.data.choices[0].message.content.trim();
  } catch (e) {
    console.error('Groq Error:', e.response?.data || e.message);
    return 'Hello! Miss Tripura Sundari here from Renovation Hyderabad. How can I help with your renovation today?';
  }
}

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    browser: ['RenovationHyd PC', 'Chrome', '120.0.0'],
    getMessage: async () => ({ conversation: '' })
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async ({ connection, lastDisconnect, qr }) => {
    if (qr) {
        console.log('Generating QR...');
        await QRCode.toFile('./qr.png', qr, { width: 400, margin: 2 });
        console.log('QR_READY_FOR_ARTIFACT');
    }
    if (connection === 'close') {
        const code = lastDisconnect?.error?.output?.statusCode;
        if (code !== DisconnectReason.loggedOut) {
            console.log('Reconnecting...');
            setTimeout(start, 5000);
        } else {
            console.log('Logged out. Please delete auth folder and restart.');
        }
    } else if (connection === 'open') {
        console.log('\n✅ MISS TRIPURA IS LIVE ON WHATSAPP (PC)!\n');
        if (fs.existsSync('./qr.png')) fs.unlinkSync('./qr.png');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages: ms, type }) => {
    if (type !== 'notify') return;
    for (const m of ms) {
      if (!m.message || m.key.fromMe) continue;
      const jid = m.key.remoteJid;
      if (!jid || jid.includes('@g.us') || jid === 'status@broadcast') continue;
      const txt = (m.message?.conversation || m.message?.extendedTextMessage?.text || '').trim();
      if (!txt) continue;
      console.log('MSG from', jid, ':', txt.substring(0, 40));
      addH(jid, 'u', txt);
      const repRaw = await groq(jid);
      const rep = repRaw.replace(/<think>[\s\S]*?<\/think>\n*/g, '').trim();
      await sock.sendMessage(jid, { text: rep });
      addH(jid, 'b', rep);
      console.log('REPLIED OK');
    }
  });
}

start();
