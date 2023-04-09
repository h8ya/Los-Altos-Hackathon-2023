const { app, BrowserWindow, ipcMain } = require('electron');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load the .env file
dotenv.config();

function createWindow() {
  const win = new BrowserWindow({
    width: 760,
    height: 560,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  
  ipcMain.handle('edit-env', (event, data) => {
    if (!data) {
      return { success: false, error: 'No data provided' };
    }

    const filePath = path.join( __dirname,'.env');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContents.split('\n');

    // Find the line that contains the accountSid variable
    // if count > 0 and new one is blankthen you keep the env file as it already was
    if(data.sid !== "")
    {
        const accountSidLineIndex = lines.findIndex(line => line.startsWith('accountSid='));
        if (accountSidLineIndex === -1) {
        // If the accountSid variable is not found, return an error
        return { success: false, error: 'accountSid variable not found in .env file' };
        }

        // Update the accountSid value
        lines[accountSidLineIndex] = `accountSid=${data.sid}`;
    }
    //authentication token begins
    if(data.auth !== "")
    {
        const authTokenLine = lines.findIndex(line => line.startsWith('authToken='));
        if (authTokenLine=== -1) {
        // If the accountSid variable is not found, return an error
        return { success: false, error: 'accountSid variable not found in .env file' };
        }

        // Update the accountSid value
        lines[authTokenLine] = `authToken=${data.auth}`;
        console.log(data.auth);
    }
    //twilio num begins
    if(data.tw !== "")
    {
        const twilioN = lines.findIndex(line => line.startsWith('twilioNum='));
        if (twilioN=== -1) {
        return { success: false, error: 'twilioNum variable not found in .env file' };
        }

        // Update the twilioNum value
        lines[twilioN] = `twilioNum=${data.tw}`;
        console.log(data.tw);
    }
    //message
    if(data.mes !== "" || data.ip5 != "")
    {
        const message1 = lines.findIndex(line => line.startsWith('message='));
        if (message1=== -1) {
        return { success: false, error: 'twilioNum variable not found in .env file' };
        }

        // Update the twilioNum value
        lines[message1] = `message=${data.mes}`;
        console.log(data.mes);
    }  
    fs.writeFileSync(filePath, lines.join('\n'));

    // Update the environment variables as well
    process.env.accountSid = data.sid;
    process.env.authToken = data.auth;
    process.env.twilioNum = data.tw;
    process.env.message = data.mes;

    return { success: true, filePath };
  });
  win.onkeydown = function(gfg){
    if(gfg.keyCode===32)
    {
        win.show();
    }
  }
  win.loadFile('src/index.html');
  win.on('close', e => {
    e.preventDefault() // Prevents quit
    win.hide()
  })

}

app.on('ready', createWindow)
