const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('api',{
    title: "Report App",
    createNote: (data)=>ipcRenderer.invoke('edit-env',data)
})
