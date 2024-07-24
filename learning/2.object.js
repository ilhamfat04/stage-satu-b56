class Dog {
    // special method
    constructor(name, color, weight, isHappy) {
        this.name = name
        this.color = color
        this.weight = weight
        this.isHappy = isHappy
    }


    // methods
    sit() {
        console.log(`${this.name} berwarna ${this.color}`)
        console.log(`dan beratnya ${this.weight}`)
        console.log(`dan dia ${this.isHappy}`)
    }
}


const bobby = new Dog("Bobby", "Merah", 50, true)
bobby.sit()