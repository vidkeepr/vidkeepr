const { app, BrowserWindow, globalShortcut } = require('electron');

// electron-reload plugin
require('electron-reload')(__dirname);

var win = null;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    show: false,
    height: 700,
    frame: false,
    center: true,
    minWidth: 700,
    minHeight: 600,
    backgroundColor: '#333',

    webPreferences: {
      nodeIntegration: true,
      devtools: true
    },
    title: "VidKeepr",
    darkTheme: true
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  win.setMenu(null);

  win.once("ready-to-show", () => {
    win.show();
    win.webContents.openDevTools();
  });
}

app.on('ready', () => {
  createWindow();

  const ret = globalShortcut.register("F1", () => 
  {
    if (win.isVisible())
      win.hide();
    else 
      win.show();
  });

  if (!ret)
    console.log("Keyboard shortcut registration failed");
});

app.on("will-quit", () => 
{
  globalShortcut.unregister("F1");
  globalShortcut.unregisterAll();
})