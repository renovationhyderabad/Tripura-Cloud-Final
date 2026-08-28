const fs = require('fs'); let c = fs.readFileSync('whatsapp_backend_worker.js', 'utf8'); c = c.split('\\\\n').join('\n').split('\\\'').join('\''); fs.writeFileSync('whatsapp_backend_worker.js', c); 
