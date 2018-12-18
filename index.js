'use strict';
const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;

let isDevelopment = true;

if (isDevelopment) {
    require('electron-reload')(__dirname, {
        ignored: /node_modules|[\/\\]\./
    });
}


var mainWnd = null;

function createMainWnd() {
    mainWnd = new BrowserWindow({
        width: 1022,
        height: 670,
        icon: 'public/img/app-icon.png',
        frame:true
    });

    // if (isDevelopment) {
    //     mainWnd.webContents.openDevTools();
    // }

   // mainWnd.loadURL(`file://${__dirname}/dist/browser/index.html`);
    mainWnd.loadURL('http://localhost:9000/');
    mainWnd.on('closed', () => {
       mainWnd = null;
    });
}

app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});
