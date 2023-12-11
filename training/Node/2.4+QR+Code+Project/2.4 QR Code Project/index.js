/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'qrString',
        message: 'Enter your string',
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        var qr_png = qr.image(answers.qrString);
        qr_png.pipe(fs.createWriteStream('my_qr_image.png'));
        fs.writeFile('my_url.txt', answers.qrString, (err) => {
            if (err) throw err;
        });
        console.log('Your QR was created');
    })