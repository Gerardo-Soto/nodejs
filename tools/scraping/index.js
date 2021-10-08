const puppeteer = require('puppeteer');

// Function self-executing:
//() => {
    // todo code
//}

// Function self-executing:
(async () => {
    // todo
    console.log('Starting browser.');
    const browser = await puppeteer.launch();

    console.log('Closing browser.');
    browser.close();
    console.log('Deleted browser.');
}) ();


