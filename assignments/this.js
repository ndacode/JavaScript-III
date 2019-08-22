/* The 4 principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding  - uses a Constructor, which is a function that returns an object.
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

// function makePizza(tomatoes) {
//     console.log(this);
//     return tomatoes;
// }
// function sayName(name) {
//     console.log(this);
//     return name;
//   }
//   sayName("D'Artagnan");
  

// Principle 2

// code example for Implicit Binding
const fruitObject = {
    fruit: 'Orange',
    color: 'orange',
    flavor: 'citrusy',
    shape: 'round',
    getWell: function () {
        console.log(`Eat an ${this.fruit} and protect yourself from colds!`)
        console.log (this);
    }
}
fruitObject.getWell();

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');
  

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
  
function fruitObjectBuilder(fruit) {
    this.fruit = fruit,
    this.flavor = fruit.flavor,
    this.color = fruit.color,
    this.shape = fruit.shape,
    this.getWell = function(){
        console.log(`${this.fruit} is ${this.color}, ${this.round} and ${this.flavor}!`)
        console.log (this);
    }
}

const Apple = new fruitObjectBuilder('Apple');
const Banana = new fruitObjectBuilder('Banana');

Apple.getWell();
Banana.getWell();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman); newman.speak.apply(jerry);
