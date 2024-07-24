class Animal {
  speak() {
    console.log("Animal is speaking");
  }
}

class Duck extends Animal {
  speak() {
    console.log("Quack!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Goof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Miaw!");
  }
}

const animal = new Animal()
animal.speak()

const duck = new Cat()
duck.speak()
