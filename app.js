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

