class Animal {
  brain = true;
  legs = 0;

  angry() {
    console.log("angry")
  }
}

class Human extends Animal {
  legs = 2;

  talk() {
    console.log("talk")
  }
}

class Pet extends Animal {
  legs = 4;
  fleas = 0;
}

class Dog extends Pet {
  fleas = 8;
}

class Cat extends Pet {
  fleas = 4;
}

const animal = new Animal()
animal.angry()

const human = new Human()
human.talk()
human.angry()

// class Animal {
//   brain = true;
//   legs = 0;
//   word = ""

//   constructor(word) {
//     this.word = word
//   }

//   angry() {
//     console.log(`angry : ${this.word}`)
//   }
// }

// class Human extends Animal {
//   legs = 2;

//   constructor(word) {
//     super(word)
//   }

//   talk() {
//     console.log("talk")
//   }
// }

// const human = new Human("huahhh!")
// human.angry()