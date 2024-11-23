// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    send: (channel, data) => {
        console.log("electronAPI send", data)
        ipcRenderer.send(channel, data)
    },
    on: (channel, callback) => {
        ipcRenderer.on(channel, (event, ...args) => callback(...args))

    },
	onSerialPorts: (callback) => ipcRenderer.on('serial-ports', (_event, value) => {
		console.log(value)
		callback(value)
	})
});

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if(element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }

})