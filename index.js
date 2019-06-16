const { app, BrowserWindow } = require('electron');

// electron-reload plugin
require('electron-reload')(__dirname);

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame:false,
    center:true,
    minWidth:700,
    minHeight:600,
    
    webPreferences: {
      nodeIntegration: true,
      devtools:true
    },
    title: "VidKeepr",
    darkTheme:true
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  win.setMenu(null);
}

app.on('ready', createWindow);