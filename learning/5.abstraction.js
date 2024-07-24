class Phone {
    brand = ""
    battery = 0
    signal = 0

    constructor(brand, battery, signal) {
        this.brand = brand
        this.battery = battery
        this.signal = signal
    }

    connectWifi() {
        if(this.signal > 50 && this.battery > 5) {
            this.#wifiConnectSuccess()
        } else {
            this.#wifiConnectFailed()
        }

        // hal hal lain
    }

    #wifiConnectSuccess() {
        console.log("Berhasil konek wifi")
    }

    #wifiConnectFailed() {
        console.log("Gagal konek wifi")
    }
}

const phone = new Phone("Xamsung", 1, 51)
phone.connectWifi()