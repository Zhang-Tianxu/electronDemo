import * as React from 'react'
// import {SerialPortSelector} from "../components/serialPortSelector"
import { Button } from 'antd'

export default function Index() {
    return (
        <div>
            <h2>Hello Index</h2>
            {/* <SerialPortSelector></SerialPortSelector> */}
            <Button onClick={(e)=>{
                console.log(window)
                console.log(window.electronAPI)
                window.electronAPI.send('list-serial-ports', "hello")
            }}>serialport</Button>

        </div>
    )
}