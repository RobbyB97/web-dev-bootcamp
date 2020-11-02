const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add New Todo',
    });
}

const menuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'New Todo',
        click() {
            createAddWindow();
        }
    }, {
        label: 'Quit',
        accelerator: (() => {
            switch (process.platform) {
                case 'darwin':
                    return 'Command+Q';
                default:
                    return 'Ctrl+Q';
            }
        })(),
        click() {
            app.quit();
        }
    }],
}];

if (process.platform === 'darwin') {
    menuTemplate.unshift({});
}