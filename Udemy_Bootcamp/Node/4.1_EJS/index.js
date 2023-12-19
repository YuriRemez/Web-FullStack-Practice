import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    let day = new Date('Nov 17, 2023 16:25:07').getDay();

    let dayType = "";
    let advice = "";
    if (day == 5 || day == 6) {
        dayType = "Weekend";
        advice = "have fun!";
    } else {
        dayType = "Weekday"
        advice = "work hard!";
    }

    res.render(__dirname + '/views/index.ejs', {
        dayType: dayType,
        advice: advice
    });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});