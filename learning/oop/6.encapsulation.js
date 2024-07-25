class Invoice {
    #price = 0

    get price() {
        return this.#price
    }

    set price(value) {
        if (value < 1) {
            throw new Error("Minimal harga invoice bernilai 1")
        }

        // tambahkan validasi lainnya

        this.#price = value
    } 
}

const invoice = new Invoice()
invoice.price = -1000
console.log(invoice.price)


// class Invoice {
//     #price = 0

//     constructor(price) {
//         this.#price = price
//     }

//     showInvoicePrice() {
//         console.log(`Anda akan membayarkan sejumlah ${this.#price}`)
//     }
// }

// const invoice = new Invoice(10000)
// invoice.price = 50000000
// invoice.showInvoicePrice()