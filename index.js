// Step 1: Creating a function declaration to greet the user
function greet () {
  console.log('Hello, user!')
};
greet();

//Step 2: Rewrite the same function using arrow function syntax.
const greet = () => (console.log('Hello, user!'));
greet();

// Step 3: Creating a function to greet each name in an array
function greetEveryone() {
    const names = ["Alice", "Bob", "Charlie"];
    for (let i = 0; i < names.length; i++) {
      console.log("Hello, " + names[i] + "!");
    }
  }
  greetEveryone(); 

  //Step 4: Create an arrow function that does the same task using a for loop.
  const greetEveryone = () => {
    const names = ["Alice", "Bob", "Charlie"];
    for (let i = 0; i < names.length; i++) {
      console.log("Hello, " + names[i] + "!");
    }
  }
  greetEveryone(); 

  //Step 5: Create a function that loops through an array of colors and prints a message for each, like: "I like [color]!"
  const identifyColor = function print() {
    const colors= ["red", "blue", "green"];
    for (let i = 0; i < colors.length; i++) {
        console.log("This color is: ", colors[i]);
    }
  }
  identifyColor();

  //Step 6: Create a function that loops through an array of foods and prints a message for each, like: "I love eating [food]!"
  const myFavoriteBakeryProducts = () => {
    const foods = ["cake", "bread", "biscuit"];
    for (let i = 0; i < foods.length; i++) {
        console.log("I love eating: ", foods[i]);
    }
  }
  myFavoriteBakeryProducts();