'use strict'
// use strict tells us to follow some baseline 'strict rules'

// variables = storing data as values. 

// Comment out in mass
// ctrl + k + c

// declaring the variable firstname to be equal to the value of ezgi

// let firstName = 'Ezgi'; //string
// let lastName = "Coban"; //single or double quotes are acceptable
// let numberofCats = 2; //number
// let lovesMelis = true; //boolean

 let firstName = prompt('What is your name?')

// === strict equals
// == lose equals (truthy or a falsey) '1' == 1

// if(firstName.toLowerCase() === 'ezgi'){
//     console.log('your name is ezgi')
// }

// output to the console some value
// console.log('your name is: ' + firstName);
// console.log('You have ' + numberofCats + ' cats');

let time = prompt('What hour is it (0-24)')
let message = '';
// if time of day is before noon then we want to say "Good Morning"


if(time <= 11){
    message = 'Good Morning!! ';
   // console.log('Good Morning!!');
} else if(time <= 18){
    message = 'Good Afternoon!! ';
  //  console.log('Good Afternoon!!');
} else if(time <= 24){
    message = 'Good Night!! ';
  //  console.log('Good Night!!);
} else{
    message = 'Good Day!! ';
   // console.log('Good Day!!');
}

console.log('done with program')

document.write('Hello ' + firstName +'! ' + message);



 
 if (confirm("Are you a cat?")) {
     document.write("Meow!");
 } else {
     document.write("");
 }
  



// code is ran from top to bottom after running 
// the first script, it is done

// if...else if...else