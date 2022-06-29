'use strict'


function generateGreeting(){
    let firstName = getFirstName(); 
    let message = timeOfDay(); 
    return document.write('Hello ' + firstName + ', ' + message + '!');
}

function getFirstName(){
    let firstName = prompt('What is your Name?'); 
    return firstName;
}


function timeOfDay(){
    let time = prompt('What hour is it (0-24?)');
    let message = '';
    
    
    if(time <= 11 && time > 0){
        message = 'Good Morning!!';
    } else if(time <= 18){
     message = 'Good Afternoon!!';
    } else if(time <= 24){
     message = 'Good Evening!!';
    } else{
      message = 'Good Day!!';
    }

    return message;
}

function dePixelate(){
    //  let answer = prompt ('pick 1 or 2');
     let image = '';
     if (confirm('Do you want to see?')) {
         image = '<img id="hero" alt="main image" src="https://mwbbcwxck32zpp124d9nlwip-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/12173166_web1_summerguide-sea-180606-P1.jpg">'
     } else {
         image = '<img id="hero2" alt="main image" src="https://www.robandnick.com/files/62wk_img_1.jpg">'

     }
     return document.write(image);
 }

// guess();
// function guess(){
//     let answer=prompt("Guess how many fingers I am holding");
//     if(answer=="3"){
//         alert("correct");
//         return;
//     } else {
//     alert("wrong answer");
//     }
//     guess();  
// }

// function beachLoop(){
//     let answer = prompt('How many secret beaches are there in Seattle?');
//     while (answer != 149) {
//         if (answer < 149) {
//             alert ('more than that');
//         } else {
//             alert ('less than that');
//         }
//         answer = prompt('How many secret beaches are there in Seattle?');
//         }
//         alert ("that's correct!");
//    }


function beachLoop2(){

    let answer = '';
    do{
        answer = prompt('How many secret beaches are there in Seattle?');
        if(answer < 100 ){
            alert('more than that!');
        } else if( answer > 200){
            alert('less than that!');
        } else if (answer == 149){
            alert('CORRECT! The answer is 149!');
        } else{
            alert('Close! The answer is 149!');
        }
    }while(answer != 149)

    console.log("Completed");

}


function forLoopSealPup(){

    let answer = prompt('How many seal pups do you want?'); 
    let output = '';
    for(let x = 0; x < answer; x++){
       output += "<img class='sealpup' src='seal pup.jpeg'/>"
    //  output = output + "<img class='star' src='star.jpg' />"
    }
    return document.write(output);
}
        

// function guess2(){
//   let number = prompt("Guess how many fingers I am holding");
//   if(number !== 3){
//       prompt("incorrect. try again");
//   } else {
//       confirm("that is correct");
//   }
// }


// function backgroundColor(){
//   let color = prompt("What's your favorite color?");
//   return document.body.style.backgroundColor = color;
// }

// how do i use a button for the seaPup function and display the images inside the page?
// how do i give the use a chance to cancel out of the loop?
