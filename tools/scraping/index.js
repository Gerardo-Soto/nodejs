const puppeteer = require('puppeteer');

// Function self-executing:
//() => {
    // todo code
//}

// Function self-executing:
(async () => {
    // todo
    console.log('Starting browser.');
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });

    const page = await browser.newPage();
    await page.goto('https://platzi.com/clases/2292-terminal/37358-nunca-pares-de-hackear/');

    var likes = await page.evaluate(() => {
        const button = document.querySelector('h1');
        //const button = document.getElementsByClassName('h1');
        //console.log(button);// <- Browser log
        //console.log(button.innerHTML);// <- Browser log
        return button;
    })

    console.log(likes);// <- Principal thread log (NodeJS)
    console.log(likes.innerHTML);// <- Principal thread log (NodeJS)
    console.log('Closing browser.');
    browser.close();
    console.log('Deleted browser.');
}) ();


