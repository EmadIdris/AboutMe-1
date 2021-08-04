'use strict'

let name = prompt("Before you continue plz enter your name");
alert("Welcome to our website " + name );

alert ("We will play a quick guessing game about me, to answer plz type \"yes , y\" or \"no , n\" ");

let trueAnsCounter = 0;

//q1
function Q1()
{


let choice = prompt('Do you think that my birthday is 30/Dec years old ?').toLowerCase();
if (choice === 'yes' || choice === 'y') {
    alert ('your answer is wrong');
}else if(choice === 'no' || choice === 'n'){
    alert ('your answer is correct');
    trueAnsCounter++;
}
} 
Q1();

//q2

function Q2()
{

let choice2 = prompt('Do you think that I am still studing?').toLowerCase();
if (choice2 === 'yes' || choice2 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice2 === 'no' || choice2 === 'n'){
    alert ('your answer is wrong');
}
}
Q2();

//q3

function Q3()
{

let choice3 = prompt('Do you think that my dream is to build my own game ?').toLowerCase();
if (choice3 === 'yes' || choice3 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice3 === 'no' || choice3 === 'n'){
    alert ('your answer is wrong');
}
}
Q3();


    //q4
function Q4()
{ 
let choice4 = prompt('Do you think that I am a software engineer').toLowerCase();
if (choice4 === 'yes' || choice4 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice4 === 'no' || choice4 === 'n'){
    alert ('your answer is wrong');
}
}
Q4();

//q5

function Q5()
{ 
let choice5 = prompt('Do you think that I have a github account').toLowerCase();
if (choice5 === 'yes' || choice5 === 'y') {
    alert ('your answer is correct');
    trueAnsCounter++;
}else if(choice5 === 'no' || choice5 === 'n'){
    alert ('your answer is wrong');   
}
}
Q5();

//q6

function Q6()
{

alert ('for the next question you have to use numbers to answer');
let attemptsQ6 = 4;
let myAge = 20;
for (let i = 0 ; i <= 4 ; i++){
   if (i !== 4) { 
    let choice6 = Number(prompt('In your opinion how old am I?'));
     if (choice6 === myAge ) {
         alert ('your answer is correct my age is: ' + myAge);
         trueAnsCounter++;
         i = 4;
     } else if (choice6 > myAge ) {
        attemptsQ6--;    
        alert ('your answer is wrong it is higher than my age, attempts left: ' + attemptsQ6);
     } else if (choice6 < myAge ) {
        attemptsQ6--; 
        alert ('your answer is wrong it is lower than my age, attempts left: ' + attemptsQ6);
     }
  } else {
     alert ('my ag is:' + myAge);
    }  
}
}
Q6();

//q7

function Q7()
{
alert('In this question you have to guess my fav dishes, HINT: all dishes are traditional palestine dishes');
let myFavDishes = ['musakhan', 'kebab', 'qidreh', 'maqluba', 'mujaddara'];
let attemptsQ7 = 6;
let control = false;
for (let i = 0 ; i < 6 ; i++) {
    let userAnsw = prompt('Can you guess one of my favorite dishes?').toLowerCase();
    for (let j = 0; j < myFavDishes.length; j++) {
        if (userAnsw === myFavDishes[j]) {
            alert('nice your answer is right ^_^');
            trueAnsCounter++;
            control = true;
            break;
        }    
    }
    if (control == true){
        break;
    }
    attemptsQ7--;
    alert('Sorry youe answer is wrong, try again, attempts left: ' + attemptsQ7 );
    if (i === 5){
        alert('My favorite dishes are: musakhan, kebab, qidreh, maqluba, mujaddara');
    }
    
}
}
Q7();


alert("thanks for playing " + name + " the total of correct answers is: " + trueAnsCounter);