const { app, BrowserWindow } = require('electron');

let mainWidow;

app.on('ready', createMyWindow);

function createMyWindow() {
    mainWidow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWidow.loadFile('index.html');
}


 