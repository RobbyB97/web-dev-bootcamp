const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    mainWindow.on('closed', () => app.quit());

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add New Todo',
    });
    addWindow.loadURL(`file://${__dirname}/add.html`);


}

ipcMain.on('todo:add', (e, todo) => {
    mainWindow.webContents.send('todo:add', todo);
});

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

if (process.env.NODE_ENV !== 'production') {
    menuTemplate.push({
        label: 'Developer',
        submenu: [{
            label: 'Toggle developer tools',
            accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }]
    });
}