name = 'Chris';
var name;
console.log(name);

let fruits = ['apples', 'bananas', 'oranges']; //Array of Fruits
let favFruit; //Global Scope
let leastFav; //Global scope

function printFruits() {   //create function declaration
    favFruit = fruits[2];
    leastFav = fruits[1];  //create new variable
    console.log(fruits[0]); //Checking for Errors
}
function printFavFruit() {  /// Declare another function and call function
    console.log(favFruit);
}






printFruits();
printFavFruit();
console.log(fruits[1]);


anotherFunc();
function anotherFunc() {
    console.log(`My name is ${(name)}`); //Create new fuction saying my name

}

 let myAlert = function (message){
     alert(message);
 }
myAlert('Hello World');


console.log("Still good");
