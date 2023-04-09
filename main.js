const{app, BrowserWindow, ipcMain} = require('electron');

const path = require('path');
const fs = require('fs');
function createWindow(){
    const win = new BrowserWindow({
        width: 760, 
        height: 560,
        webPreferences: {
            preload: path.join(__dirname,'preload.js')
        }
    });
    ipcMain.handle('create-file', (req, data)=>{
        if(!data || !data.content)
        {
            return false;
        }
        const filePath = path.join(__dirname,'notes', `.env`);
        fs.writeFileSync(filePath,data.content);
        return {sucess:true, filePath};
    })
    
    win.loadFile('src/index.html');
}
app.whenReady().then(createWindow);
//edit later make it so that if window closed app still run

app.on('window-all-closed', () =>{
    
    if(process.platform!='darwin'){
        app.quit();
    }

})