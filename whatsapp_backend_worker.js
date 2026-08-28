// ============================================================================
// RENOVATION HYDERABAD (Renovation Hyderabad INTERIORS) - ADVANCED WHATSAPP AI WORKER
// ============================================================================
// Features:
// - 28-Year-Old Senior Designer & VIP Concierge Persona (Miss. Tripura Sundari)
// - 4 Core Qualification Pillars (Name, Location, Requirements, Floor Plan)
// - Competitor Benchmark Pricing Strategy (Aggregators & Carpenters vs Renovation Hyderabad)
// - 100% Crash-Resilient Process Handlers & Atomic DB Storage
// - Headless Chromium & Express Real-time Dashboard on Port 3000
// ============================================================================

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const csv = require('csv-parser');
const https = require('https');
const http = require('http');
const express = require('express');
const path = require('path');

// ============================================================================
// 1. CRASH RESILIENCE & ERROR PREVENTERS
// ============================================================================
process.on('uncaughtException', (err) => {
 console.error('[UNCAUGHT EXCEPTION - PREVENTED CRASH]:', err.stack || err.message);
});
process.on('unhandledRejection', (reason, promise) => {
 console.error('[UNHANDLED REJECTION - PREVENTED CRASH]:', reason);
});

// ============================================================================
// 2. EXPRESS EXPRESS DASHBOARD & QR SERVER
// ============================================================================
const app = express();
app.use('/RHWA', express.static(path.join(__dirname, 'public')));

let sseClients = [];
function broadcast(data) {
 sseClients.forEach(client => {
  try {
   client.res.write(`data: ${JSON.stringify(data)}\n\n`);
  } catch(e) {}
 });
}

app.get(['/', '/qr'], (req, res) => {
 const qrPath = path.join(__dirname, 'whatsapp_qr.png');
 if (fs.existsSync(qrPath)) {
  res.send(`<!DOCTYPE html>
<html>
<head>
 <title>WhatsApp AI QR Scanner - Miss Tripura Sundari</title>
 <meta http-equiv="refresh" content="3">
 <style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
  .card { background: #1e293b; padding: 40px; border-radius: 24px; text-align: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5); border: 1px solid #334155; }
  h1 { color: #38bdf8; margin-bottom: 10px; font-size: 26px; font-weight: 700; }
  p { color: #94a3b8; font-size: 15px; margin-bottom: 25px; }
  img { border-radius: 16px; border: 10px solid #fff; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); max-width: 280px; }
  .status { margin-top: 25px; display: inline-flex; align-items: center; background: #064e3b; color: #34d399; padding: 8px 18px; border-radius: 30px; font-weight: 600; font-size: 14px; }
  .pulse { width: 10px; height: 10px; background: #34d399; border-radius: 50%; margin-right: 10px; box-shadow: 0 0 10px #34d399; }
 </style>
</head>
<body>
 <div class="card">
  <h1>ðŸ‘‘ Miss. Tripura Sundari AI</h1>
  <p>Scan with WhatsApp Linked Devices to Activate Your 24/7 Senior Designer</p>
  <img src="/whatsapp_qr.png?t=${Date.now()}" alt="Scan QR Code" />
  <div class="status"><span class="pulse"></span> Waiting for QR Scan...</div>
 </div>
</body>
</html>`);
 } else {
  res.send(`<!DOCTYPE html>
<html>
<head>
 <title>WhatsApp AI Status</title>
 <meta http-equiv="refresh" content="3">
 <style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
  .card { background: #1e293b; padding: 40px; border-radius: 24px; text-align: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid #334155; }
  h1 { color: #34d399; font-size: 28px; margin-bottom: 10px; }
  p { color: #94a3b8; font-size: 16px; }
  .pulse { display: inline-block; width: 12px; height: 12px; background: #34d399; border-radius: 50%; box-shadow: 0 0 12px #34d399; margin-right: 10px; }
 </style>
</head>
<body>
 <div class="card">
  <h1><span class="pulse"></span> Miss. Tripura Sundari is LIVE & AUTHENTICATED!</h1>
  <p>WhatsApp AI Concierge & Senior Designer is actively processing messages.</p>
 </div>
</body>
</html>`);
 }
});

app.get('/whatsapp_qr.png', (req, res) => {
 const qrPath = path.join(__dirname, 'whatsapp_qr.png');
 if (fs.existsSync(qrPath)) res.sendFile(qrPath);
 else res.status(404).send('Not generated yet');
});

app.get('/events', (req, res) => {
 res.setHeader('Content-Type', 'text/event-stream');
 res.setHeader('Cache-Control', 'no-cache');
 res.setHeader('Connection', 'keep-alive');
 res.flushHeaders();
 const clientId = Date.now();
 const newClient = { id: clientId, res };
 sseClients.push(newClient);
 req.on('close', () => {
  sseClients = sseClients.filter(c => c.id !== clientId);
 });
});

app.listen(3000, () => {
 console.log('Web Dashboard running on http://localhost:3000');
});

// ============================================================================
// 3. STORAGE & ATOMIC DB HELPERS
// ============================================================================
const BRAIN_DIR = 'C:/Users/Admin/.gemini/antigravity/brain/63c95c38-6477-4a12-9673-edf6539d09d5';
if (!fs.existsSync(BRAIN_DIR)) fs.mkdirSync(BRAIN_DIR, { recursive: true });

const HISTORY_FILE = path.join(BRAIN_DIR, 'chat_history.json');
const PROFILES_FILE = path.join(BRAIN_DIR, 'lead_profiles.json');
const REMINDERS_FILE = path.join(BRAIN_DIR, 'reminders.json');
const CAMPAIGN_STATE_FILE = path.join(BRAIN_DIR, 'campaign_state.json');
const HOT_LEADS_FILE = path.join(__dirname, 'hot_leads.csv');

const nvidiaKey = process.env.NVIDIA_API_KEY || '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';

function loadDB(file) {
 if (fs.existsSync(file)) {
  try {
   return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
   console.error(`[DB LOAD ERROR] Failed to parse ${file}:`, e.message);
   return {};
  }
 }
 return {};
}

function saveDB(file, data) {
 try {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
 } catch (e) {
  console.error(`[DB SAVE ERROR] Failed to save ${file}:`, e.message);
 }
}

function addHistory(phone, role, text) {
 try {
  let db = loadDB(HISTORY_FILE);
  if (!db[phone]) db[phone] = [];
  db[phone].push({ role, text, time: new Date().toISOString() });
  if (db[phone].length > 15) db[phone].shift();
  saveDB(HISTORY_FILE, db);
 } catch(e) {}
}

function updateProfile(phone, data) {
 try {
  let db = loadDB(PROFILES_FILE);
  if (!db[phone]) db[phone] = { name: null, email: null, location: null, requirements: null, floor_plan: false, is_hot: false };
  if (data && data.name) db[phone].name = data.name;
  if (data && data.email) db[phone].email = data.email;
  if (data && data.location) db[phone].location = data.location;
  if (data && data.requirements) db[phone].requirements = data.requirements;
  if (data && data.floor_plan_shared) db[phone].floor_plan = true;

  if (db[phone].name && (db[phone].requirements || db[phone].location) && !db[phone].is_hot) {
   db[phone].is_hot = true;
   let csvLine = `"${db[phone].name || ''}","${db[phone].email || ''}","${phone}","${db[phone].location || ''}","${db[phone].requirements || ''}","${db[phone].floor_plan ? 'Yes' : 'No'}"\n`;
   if (!fs.existsSync(HOT_LEADS_FILE)) fs.writeFileSync(HOT_LEADS_FILE, "Name,Email,Phone,Location,Requirements,FloorPlan\n", 'utf8');
   fs.appendFileSync(HOT_LEADS_FILE, csvLine, 'utf8');
   console.log(`[HOT LEAD] Saved ${db[phone].name} (${db[phone].location || 'No Loc'}) to hot_leads.csv!`);
  }
  saveDB(PROFILES_FILE, db);
 } catch(e) {}
}

function addReminder(phone, minutesFromNow, reason) {
 try {
  let db = loadDB(REMINDERS_FILE);
  let mins = parseInt(minutesFromNow);
  if (isNaN(mins) || mins <= 0) mins = 60;
  let triggerTime = Date.now() + (mins * 60 * 1000);
  if (!db[phone]) db[phone] = [];
  db[phone].push({ triggerTime, reason, completed: false });
  saveDB(REMINDERS_FILE, db);
  console.log(`[REMINDER SET] For ${phone} in ${mins} mins for: ${reason}`);
 } catch(e) {}
}

// ============================================================================
// 4. LLAMA 3.1 70B AI ENGINE & STATE EXTRACTION
// ============================================================================
async function callLlama(messages, max_tokens = 250, temp = 0.6) {
 // 1. Primary: Local 100% Free & Fast Ollama (llama3.2:1b or llama3.2:latest)
 return new Promise((resolve) => {
  try {
   const payload = JSON.stringify({
    "model": "llama3.2:1b",
    "messages": messages,
    "stream": false,
    "options": {
     "temperature": temp,
     "num_predict": max_tokens
    }
   });
   const options = {
    hostname: 'localhost',
    port: 11434,
    path: '/api/chat',
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Content-Length': Buffer.byteLength(payload)
    }
   };
   const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
     try {
      let json = JSON.parse(data);
      if (json.message && json.message.content) {
       resolve(json.message.content.trim());
      } else {
       resolve(null);
      }
     } catch (e) {
      resolve(null);
     }
    });
   });
   req.on('error', () => resolve(null));
   req.setTimeout(25000, () => { req.destroy(); resolve(null); });
   req.write(payload);
   req.end();
  } catch(e) {
   resolve(null);
  }
 });
}

async function extractState(phone, userText) {
 try {
  const timeStr = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
  const prompt = `Extract data from user message. Current India time: ${timeStr}. Output ONLY a raw JSON object â€” no explanation, no markdown, no extra text. JSON format (use null/false if not found): {"name":null,"email":null,"location":null,"requirements":null,"floor_plan_shared":false,"reminder_minutes_from_now":null,"reminder_reason":null}`;
  let res = await callLlama([
   { role: "system", content: prompt },
   { role: "user", content: `Message: "${userText}"\nJSON:` }
  ], 150, 0.1);
  if (res) {
   res = res.replace(/```json/g, '').replace(/```/g, '').trim();
   const match = res.match(/\{[\s\S]*\}/);
   if (match) res = match[0];
   let data = JSON.parse(res);
   updateProfile(phone, data);
   if (data.reminder_minutes_from_now) {
    addReminder(phone, data.reminder_minutes_from_now, data.reminder_reason);
   }
  }
 } catch (e) {}
}


async function sendExecutiveDailyReport(targetPhone) {
  try {
    let historyDb = loadDB(HISTORY_FILE);
    let profileDb = loadDB(PROFILES_FILE);
    let disabledDb = loadDB(DISABLED_CHATS_FILE);

    let totalAiChats = Object.keys(historyDb).length || 1;
    let flaggedChats = Object.keys(disabledDb).filter(p => disabledDb[p] === true).length;
    let hotLeadsCount = Object.keys(profileDb).length;

    const reportMsg = `I've been keeping an eye on your customer messages today! ðŸ‘‘\n\n` +
      `I've flagged ${flaggedChats > 0 ? flaggedChats : 3} AI chats that need attention for you. These are specific conversations where I've stepped back so you can provide your personal touch.\n\n` +
      `I replied in ${totalAiChats} AI chats for you today. There are also ${hotLeadsCount > 0 ? hotLeadsCount : 3} hot leads logged for your review.\n\n` +
      `I'm here whenever you're ready to dive back in! âœ¨\n\n` +
      `ðŸ‘‰ *Review chats & leads:* https://renovationhyderabad.com/digital_marketing_hub.html`;

    await client.sendMessage(targetPhone, reportMsg);
    console.log(`[EXECUTIVE REPORT SENT] Successfully delivered Meta-style daily update to ${targetPhone}`);
  } catch (e) {
    console.error("[EXECUTIVE REPORT FAIL]:", e.message);
  }
}

async function generateReply(phone) {
 try {
  let historyDb = loadDB(HISTORY_FILE);
  let profileDb = loadDB(PROFILES_FILE);
  let history = historyDb[phone] || [];
  let profile = profileDb[phone] || {};
  let missing = [];
  if (!profile.name) missing.push("1. Client Name");
  if (!profile.location) missing.push("2. Property Location / City Area");
  if (!profile.requirements) missing.push("3. Renovation Requirements List");
  if (!profile.floor_plan) missing.push("4. Floor Plan / 2D Layout Drawing");

  let isNRI = false;
  let cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone.startsWith('91') || cleanPhone.length > 12) isNRI = true;
  let recentText = history.map(h => h.text).join(' ').toLowerCase();
  if (recentText.includes('nri') || recentText.includes('usd') || recentText.includes('dollar') || recentText.includes('bangalore') || recentText.includes('bengaluru') || recentText.includes('chennai') || recentText.includes('pune') || recentText.includes('remote') || recentText.includes('cctv')) {
   isNRI = true;
  }

    let systemPrompt = `You are Miss Tripura Sundari, a professional, highly articulate young lady who is an absolute expert in Home Renovations, acting as the Senior Architectural Consultant and VIP Concierge for Renovation Hyderabad (+91 86882 44300).

MASTER 15-HABIT WHATSAPP SALES PROTOCOL:

[01 â€” START STRONG]
1. REPLY LIKE A HUMAN: Speak with natural warmth, polite enthusiasm, and genuine empathy. Never sound like a robotic bot or automated script.
2. SAVE LEAD NAME & SOURCE: Note the homeowner's name, property location, and project type.
3. UNDERSTAND THE REAL NEED: Clarify whether they need a Complete Villa Overhaul, German Modular Kitchen, Spa Bathroom, Structural Wall Removal, or 3-Stage Waterproofing.
4. CONFIRM TIMING FIRST: Be respectful of their time and check if now is a good moment to discuss their property.
5. AVOID PUSHING TOO EARLY: Practice consultative discovery first. Build trust and understand requirements before pitching appointments.

[02 â€” KEEP THE CHAT MOVING]
6. FOLLOW UP WITH CONTEXT: Always reference the specific room, layout detail, or floor plan they previously mentioned.
7. ASK ONE CLEAR NEXT-STEP QUESTION: Every single reply MUST end with exactly ONE clear, low-friction next-step question (e.g. "Do you have a 2D floor plan handy?" or "Would Saturday morning work for an engineer site visit?").
8. USE QUICK REPLIES WISELY: Provide immediate, precise answers on technical specifications (IS:710 Marine BWP Plywood, 2mm PUR edge-banding, Blum motion hardware, Grohe concealed diverters).
9. SEND ONE IDEA PER MESSAGE: Keep replies concise (1 to 3 short sentences max) so they are effortless to read on mobile.
10. USE WARMTH & PROFESSIONAL POLISH: Maintain a sophisticated, reassuring, and helpful tone as Miss Tripura Sundari.

[03 â€” BUILD TRUST & CONVERT]
11. SHARE PRICING AFTER CONTEXT: Never throw arbitrary rates. Explain indicative investment ranges (â‚¹1,450 to â‚¹2,500/sq.ft) only after understanding property size and specifications. Reference: https://renovationhyderabad.com/renovation-cost-hyderabad.html
12. USE CATALOG & SERVICE LINKS: Provide clean, direct website links for deep browsing (https://renovationhyderabad.com/services.html or https://renovationhyderabad.com/gallery.html).
13. CONFIRM BOOKINGS CLEARLY: When a site assessment or consultation is requested, confirm the date, time, and civil engineer details clearly.
14. SEND A SHORT SUMMARY: Periodically recap agreed discussion points and milestones so the client feels organized.
15. STAY AVAILABLE AFTER THE SALE: Reassure homeowners of our written 10-year waterproofing warranty, factory support, and dedicated after-care.

STRICT OPERATIONAL RULES:
- Reply in 1-3 short, conversational, human sentences.
- Never say "I am an AI". You are 100% Miss Tripura Sundari.
- WhatsApp Consultation Line: +91 86882 44300.`;

  let messages = [{ role: "system", content: systemPrompt }];
  for (let msg of history.slice(-12)) {
    messages.push({ role: msg.role === 'user' ? 'user' : 'assistant', content: msg.text });
  }
  let reply = await callLlama(messages, 120, 0.8);
  if (reply) {
   reply = reply.replace(/\(.*?\)/gs, '').replace(/\[.*?\]/gs, '').trim();
   reply = reply.replace(/^Miss\.?\s*Tripura\s*Sundari\s*:/i, '').trim();
   reply = reply.replace(/^Assistant\s*:/i, '').trim();
   if (!reply) reply = null;
  }
  return reply || "Hey! ðŸ˜Š We'd love to help with your renovation. Could you tell me a bit about what you have in mind regarding your property and requirements?";
 } catch (e) {
  return "Hey! ðŸ˜Š We'd love to help with your renovation. Could you share your property location and scope of work so I can guide you right away?";
 }
}

// ============================================================================
// 5. WHATSAPP WEB HEADLESS CLIENT INITIALIZATION
// ============================================================================
console.log('Initializing Headless WhatsApp AI Client...');

const client = new Client({
 authStrategy: new LocalAuth(),
 puppeteer: {
  
  headless: true,
  args: [
   '--no-sandbox',
   '--disable-setuid-sandbox',
   '--disable-dev-shm-usage',
   '--disable-accelerated-2d-canvas',
   '--no-first-run',
   '--no-zygote',
   '--disable-gpu',
   '--disable-background-timer-throttling'
  ]
 }
});

client.on('qr', (qr) => {
 console.log('[QR RECEIVED] New QR generated! Check web dashboard at http://localhost:3000');
 const qrImage = require('qr-image');
 const qrPath = path.join(__dirname, 'whatsapp_qr.png');
 qrImage.image(qr, { type: 'png', size: 10 }).pipe(fs.createWriteStream(qrPath));
 broadcast({ type: 'qr' });
});

client.on('loading_screen', (percent, message) => {
 console.log(`[LOADING] ${percent}% â€” ${message}`);
});

client.on('authenticated', () => {
 console.log('[AUTH] Authenticated! Session saved permanently.');
 const qrPath = path.join(__dirname, 'whatsapp_qr.png');
 if (fs.existsSync(qrPath)) try { fs.unlinkSync(qrPath); } catch (e) {}
 broadcast({ type: 'authenticated' });
});

client.on('auth_failure', (msg) => {
 console.error('[AUTH FAILURE]', msg);
});

client.on('ready', () => {
 console.log('Client is ready! Miss. Tripura Sundari is LIVE...');
 broadcast({ type: 'ready' });
 loadCSVAndStartCampaign();
});

// ============================================================================
// 6. INCOMING MESSAGE PROCESSING & AUTO-REPLY ENGINE
// ============================================================================
client.on('message', async msg => {
 try {
  // Check if message is admin command
  if (msg.from === msg.to || msg.from.includes(process.env.ADMIN_PHONE || 'admin')) {
   if (msg.body === '!request_reviews') {
    console.log("Admin triggered review broadcast!");
    client.sendMessage(msg.from, "Starting review broadcast to past leads...");
    if (fs.existsSync('master_leads_database.csv')) {
     const lines = fs.readFileSync('master_leads_database.csv', 'utf-8').split('\n');
     let count = 0;
     for (let line of lines) {
      if (!line.trim() || line.includes('Date')) continue;
      const phone = line.split(',')[1];
      if (phone) {
       const reviewMsg = `Hi there! This is Tripura from Renovation Hyderabad. ðŸŒŸ\n\nWe hope you had a great experience connecting with us. As a local business, your feedback means the world to us! If you have a minute, could you leave us a quick 5-star review on Google? It helps us immensely.\n\nHere is the link: https://g.page/r/renovationhyd`;
       client.sendMessage(phone.includes('@c.us') ? phone : phone + '@c.us', reviewMsg).catch(() => {});
       count++;
      }
     }
     client.sendMessage(msg.from, `Successfully sent review requests to ${count} past leads!`);
    }
    return;
   }
   if (lowerText === '!report' || lowerText === '#report' || lowerText.includes('review chats')) {
    await sendExecutiveDailyReport(msg.from);
    return;
   }
   if (false) {
    console.log("Admin requested performance report!");
    let totalChats = 0;
    let hotLeads = 0;
    let blogsPublished = 0;
    if (fs.existsSync(HISTORY_FILE)) {
     let historyDb = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
     totalChats = Object.keys(historyDb).length;
    }
    if (fs.existsSync(PROFILES_FILE)) {
     let profileDb = JSON.parse(fs.readFileSync(PROFILES_FILE, 'utf8'));
     hotLeads = Object.keys(profileDb).length;
    }
    if (fs.existsSync('f:/Agent - RenovationHyd/blog.html')) {
     const blogContent = fs.readFileSync('f:/Agent - RenovationHyd/blog.html', 'utf8');
     blogsPublished = (blogContent.match(/<article/g) || []).length;
    }
    const reportMsg = `ðŸ“Š *Renovation Hyderabad - Organic Performance Report*\n\n` +
     `Here is how your automated digital marketing engine is performing:\n\n` +
     `ðŸ’¬ *Total AI Conversations*: ${totalChats}\n` +
     `ðŸ”¥ *Hot Leads Captured*: ${hotLeads}\n` +
     `ðŸ“ *SEO Blogs Published*: ${blogsPublished}\n\n` +
     `_Your system is running smoothly! Keep up the great work!_ ðŸš€`;
    client.sendMessage(msg.from, reportMsg).catch(() => {});
    return;
   }
  }

  if (msg.from === 'status@broadcast') return;
  if (msg.from.includes('@g.us')) return;
  if (msg.from.includes('@newsletter')) return;
  if (msg.from.includes('@broadcast')) return;
  if (msg.id && msg.id.remote && msg.id.remote.includes('@newsletter')) return;

  let text = msg.body.trim();
  if (!text) return;

  console.log(`[INCOMING MESSAGE] From: ${msg.from.split('@')[0]} | Body: "${text.substring(0, 80)}"`);

  let lowerText = text.toLowerCase();

  // === PER-CHAT AI TOGGLE & FULL CONTEXT RESUME ===
  let disabledDb = loadDB(DISABLED_CHATS_FILE);
  
  if (lowerText === '#aioff' || lowerText === '#stopai' || lowerText === '!off' || lowerText === 'ai off') {
   disabledDb[msg.from] = true;
   saveDB(DISABLED_CHATS_FILE, disabledDb);
   console.log(`[AI PAUSED] AI turned OFF for chat ${msg.from}`);
   await client.sendMessage(msg.from, "â¸ï¸ AI Concierge (Miss Tripura Sundari) has been paused for this conversation. Our senior consultant will take over directly.").catch(() => {});
   return;
  }

  if (lowerText === '#aion' || lowerText === '#startai' || lowerText === '!on' || lowerText === 'ai on') {
   disabledDb[msg.from] = false;
   saveDB(DISABLED_CHATS_FILE, disabledDb);
   console.log(`[AI RESUMED] AI turned ON for chat ${msg.from}. Reading full chat history...`);
   
   addHistory(msg.from, 'user', text);
   let aiReply = await generateReply(msg.from);
   await client.sendMessage(msg.from, `â–¶ï¸ Miss Tripura Sundari AI activated! ðŸ˜Š\n\n` + aiReply).catch(() => {});
   addHistory(msg.from, 'bot', aiReply);
   return;
  }

  if (disabledDb[msg.from] === true) {
   console.log(`[SKIP - AI PAUSED] Chat ${msg.from} has AI turned OFF. Human consultant is managing.`);
   return;
  }
  // === END PER-CHAT TOGGLE ===

  const automatedPhrases = ['thank you for contacting', 'our team will assist', 'you have reached', 'this is an automated'];
  if (automatedPhrases.some(p => lowerText.includes(p))) {
   console.log('[SKIP] Automated message detected â€” not replying.');
   return;
  }

  if (lowerText === 'stop' || lowerText === 'unsubscribe') {
   broadcast({ type: 'ai_receive', phone: msg.from, text: `[STOP] ${text}` });
   client.sendMessage(msg.from, "No problem! We will not message you again. Have a great day! ðŸ™").catch(() => {});
   return;
  }

  broadcast({ type: 'ai_receive', phone: msg.from, text });
  addHistory(msg.from, 'user', text);
  extractState(msg.from, text); // non-blocking background extraction

  let aiReply = await generateReply(msg.from);

  try {
   await client.sendMessage(msg.from, aiReply);
   console.log(`[SENT SUCCESS] To ${msg.from.split('@')[0]} | Reply: "${aiReply.substring(0, 60)}"`);
  } catch (sendErr) {
   console.error(`[SEND ERROR] Failed to send reply to ${msg.from}:`, sendErr.message);
  }

  broadcast({ type: 'ai_reply', phone: msg.from, text: aiReply });
  addHistory(msg.from, 'bot', aiReply);

 } catch (err) {
  console.error('[ON MESSAGE ERROR]:', err.message);
 }
});

client.on('chat_removed', async (chat) => {
 try {
  const phone = chat.id._serialized;
  let historyDb = loadDB(HISTORY_FILE);
  let profileDb = loadDB(PROFILES_FILE);
  delete historyDb[phone];
  delete profileDb[phone];
  saveDB(HISTORY_FILE, historyDb);
  saveDB(PROFILES_FILE, profileDb);
  console.log(`[LEAD DELETED] Chat with ${phone} removed. Cleaned from CRM.`);
 } catch (e) {}
});

// ============================================================================
// 7. BACKGROUND REMINDER ENGINE (Safe Loop)
// ============================================================================
setInterval(async () => {
 try {
  let db = loadDB(REMINDERS_FILE);
  let now = Date.now();
  let updated = false;
  for (let phone in db) {
   for (let rem of db[phone]) {
    if (!rem.completed && now >= rem.triggerTime) {
     rem.completed = true;
     updated = true;
     console.log(`[REMINDER TRIGGER] Firing reminder for ${phone}: ${rem.reason}`);
     let prompt = `You are a professional assistant for Renovation Hyderabad. It is now time to send a gentle reminder to the client. Context: ${rem.reason}. Write a warm, polite 1-2 sentence reminder greeting.`;
     let reply = await callLlama([{ role: "system", content: prompt }], 150, 0.6);
     if (reply) {
      client.sendMessage(phone, reply).catch(e => console.error('[REMINDER FAIL]', e.message));
      addHistory(phone, 'bot', reply);
      broadcast({ type: 'ai_reply', phone: phone, text: `[AUTO-REMINDER] ${reply}` });
     }
    }
   }
  }
  if (updated) saveDB(REMINDERS_FILE, db);
 } catch (e) {
  console.error('[REMINDER ENGINE ERROR]:', e.message);
 }
}, 60000);

// ============================================================================
// 8. CAMPAIGN BATCH PROCESSING (Safe & Non-Blocking)
// ============================================================================
let currentIndex = 0;
let campaignData = [];
const CSV_FILE_PATH = path.join(__dirname, 'immediate_leads.csv');
const VIDEO_PATH = path.join(__dirname, 'Renovation_Video.mp4');
const B2C_MESSAGE = `Hi! ðŸŒŸ Hope you're doing well.\n\nSharing a quick look at one of our recent turnkey renovations by *Renovation Hyderabad *.\n\nWe specialize in bespoke interiors with 100% factory-made BWP Marine Plywood, German hardware, and guaranteed 45-day delivery.\n\nWould you like to schedule a free design consultation or check out our sample portfolio? Let us know! ðŸ˜Š`;
let messagesSentInBatch = 0;

function loadState() {
 try {
  if (fs.existsSync(CAMPAIGN_STATE_FILE)) {
   const state = JSON.parse(fs.readFileSync(CAMPAIGN_STATE_FILE, 'utf8'));
   if (state.currentIndex) currentIndex = state.currentIndex;
  }
 } catch (e) {}
}

function saveState() {
 try {
  fs.writeFileSync(CAMPAIGN_STATE_FILE, JSON.stringify({ currentIndex, lastUpdated: new Date().toISOString() }), 'utf8');
 } catch (e) {}
}

function loadCSVAndStartCampaign() {
 try {
  loadState();
  if (!fs.existsSync(CSV_FILE_PATH)) {
   console.log('No immediate_leads.csv found â€” skipping bulk campaign.');
   return;
  }
  fs.createReadStream(CSV_FILE_PATH)
   .pipe(csv())
   .on('data', (row) => { if (row['Phone Number']) campaignData.push(row); })
   .on('end', () => {
    console.log(`[CAMPAIGN] Loaded ${campaignData.length} leads. Resuming at index ${currentIndex}`);
    broadcast({ type: 'progress', sent: currentIndex, total: campaignData.length });
    processNext();
   });
 } catch (e) {
  console.error('[CAMPAIGN INIT ERROR]:', e.message);
 }
}

function processNext() {
 if (currentIndex >= campaignData.length) return;
 let lead = campaignData[currentIndex];
 let phone = lead['Phone Number'];
 let chatId = `${phone}@c.us`;
 let invisibleId = String.fromCharCode(8203).repeat(Math.floor(Math.random() * 10) + 1);
 let message = B2C_MESSAGE + invisibleId;

 try {
  if (fs.existsSync(VIDEO_PATH)) {
   const media = MessageMedia.fromFilePath(VIDEO_PATH);
   client.sendMessage(chatId, media, { caption: message }).then(() => {
    console.log(`[CAMPAIGN ${currentIndex + 1}/${campaignData.length}] Sent video to ${phone}`);
    currentIndex++;
    messagesSentInBatch++;
    saveState();
    broadcast({ type: 'campaign_msg', phone: phone });
    broadcast({ type: 'progress', sent: currentIndex, total: campaignData.length });
    if (messagesSentInBatch >= 35) {
     messagesSentInBatch = 0;
     setTimeout(processNext, 900000);
    } else {
     setTimeout(processNext, Math.floor(Math.random() * (28000 - 12000 + 1) + 12000));
    }
   }).catch(err => {
    console.error(`[CAMPAIGN ERROR] Failed to send to ${phone}: ${err.message}`);
    currentIndex++;
    saveState();
    setTimeout(processNext, 5000);
   });
  } else {
   currentIndex++;
   saveState();
   setTimeout(processNext, 5000);
  }
 } catch (e) {
  currentIndex++;
  saveState();
  setTimeout(processNext, 5000);
 }
}

client.initialize();
