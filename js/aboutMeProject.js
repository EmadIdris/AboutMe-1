'use strict'

let name = prompt("Before you continue plz enter your name")
alert("Welcome to our website " + name )

alert ("We will play a quick guessing game about me, to answer plz type \"yes , y\" or \"no , n\" ")

let trueAnsCounter = 0;

//q1
let choice = prompt('Do you think that my age is 30 years old ?')
if (choice === 'yes' || choice === 'y') {
    alert ('your answer is wrong')
}else if(choice === 'no' || choice === 'n'){
    alert ('your answer is correct')
    trueAnsCounter++;
}

//q2
let choice2 = prompt('Do you think that I am still studing?')
if (choice2 === 'yes' || choice2 === 'y') {
    alert ('your answer is correct')
    trueAnsCounter++;
}else if(choice2 === 'no' || choice2 === 'n'){
    alert ('your answer is wrong')
}

//q3
let choice3 = prompt('Do you think that my fream is to build my own game ?')
if (choice3 === 'yes' || choice3 === 'y') {
    alert ('your answer is correct')
    trueAnsCounter++;
}else if(choice3 === 'no' || choice3 === 'n'){
    alert ('your answer is wrong')
}

//q4
let choice4 = prompt('Do you think that I am a software engineer')
if (choice4 === 'yes' || choice4 === 'y') {
    alert ('your answer is correct')
    trueAnsCounter++;
}else if(choice4 === 'no' || choice4 === 'n'){
    alert ('your answer is wrong')
}

//q5
let choice5 = prompt('Do you think that I have a github account')
if (choice5 === 'yes' || choice5 === 'y') {
    alert ('your answer is correct')
    trueAnsCounter++;
}else if(choice5 === 'no' || choice5 === 'n'){
    alert ('your answer is wrong')   
}

alert("thanks for playing " + name )
alert("the total of correct answers is : " + trueAnsCounter)