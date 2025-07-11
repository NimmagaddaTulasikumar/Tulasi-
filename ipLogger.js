const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const logEntry = `IP: ${ip}, User-Agent: ${userAgent}, Time: ${new Date().toISOString()}\n`;

    // Log to file
    fs.appendFileSync('ip_logs.txt', logEntry);
    console.log(logEntry);

    res.send("Fuck You");
});

app.listen(PORT, () => {
    console.log("🖕");
});
