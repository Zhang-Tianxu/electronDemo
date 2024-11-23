const SerialPort = require('serialport')
export function SerialPortSelector() {
    SerialPort.SerialPort.list()
        .then(ports => {
            console.log(ports)
            // win.webContents.send('serial-ports', ports);
        })
        .catch(err => {
            console.error('Error listing serial ports:', err);
        });
}