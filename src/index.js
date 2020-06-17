import axios from 'axios'

class Dymo {
    constructor(host, port, printerName) {
        this.host = host
        this.port = port
        this.printerName = printerName        
    }

    webServerUrl() {
        return `https://${this.host}:${this.port}/DYMO/DLS/Printing`
    }

    getStatus() {
        // TODO
    }

    getPrinters() {
        // TODO
    }

    printText(){
        axios.request({
            url: `${this.webServerUrl()}/PrintLabel`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `printerName=${(this.printerName)}`
        })
    }

}

const VueDymo = {
    install(Vue) {
        console.log('installing Vue Dymo')
        Vue.prototype.$Dymo = {
             connect: function(methodOptions = {}) {
                const options = {
                    host: '127.0.0.1' || methodOptions.host,
                    port: '41951' || methodOptions.port,
                    printerName: 'Dymo Label Printer 450' || methodOptions.printerName,
                }
                return new Dymo(options.host, options.port, options.printerName)
            }
        }
    }
}
export default VueDymo