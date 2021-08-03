'use strict'

let name = prompt("Before you continue plz enter your name");
alert("Welcome to our website " + name );

alert ("We will play a quick guessing game about me, to answer plz type \"yes , y\" or \"no , n\" ");

let trueAnsCounter = 0;

//q1
let choice = prompt('Do you think that my birthday is 30/Dec years old ?').toLowerCase();
if (choice === 'yes' || choice === 'y') {
    alert ('your answer is wrong');
}else if(choice === 'no' || choice === 'n'){
    alert ('your answer is correct');
    trueAnsCounter++;
}

//q2
let choice2 = prompt('Do you think that I am still studing?').toLowerCase();
if (choice2 === 'yes' || choice2 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice2 === 'no' || choice2 === 'n'){
    alert ('your answer is wrong');
}

//q3
let choice3 = prompt('Do you think that my dream is to build my own game ?').toLowerCase();
if (choice3 === 'yes' || choice3 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice3 === 'no' || choice3 === 'n'){
    alert ('your answer is wrong');
}

//q4
let choice4 = prompt('Do you think that I am a software engineer').toLowerCase();
if (choice4 === 'yes' || choice4 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice4 === 'no' || choice4 === 'n'){
    alert ('your answer is wrong');
}

//q5
let choice5 = prompt('Do you think that I have a github account').toLowerCase();
if (choice5 === 'yes' || choice5 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice5 === 'no' || choice5 === 'n'){
    alert ('your answer is wrong');   
}

//q6
alert ('for the next question you have to use numbers to answer');
for (let i = 0 ; i <= 4 ; i++){
   if (i !== 4) { 
    let choice6 = prompt('In your opinion how old am I?');
     if (choice6 == 20 ) {
         alert ('your answer is correct my age is 20');
         trueAnsCounter++;
         i = 4;
     } else if (choice6 > 20 ) {
       alert ('your answer is wrong it is higher than my age');
     } else if (choice6 < 20 ) {
        alert ('your answer is wrong it is lower than my age');
     }
  } else {
    alert ('my ag is 20');
  }  
}

//q7



alert("thanks for playing " + name );
alert("the total of correct answers is : " + trueAnsCounter);