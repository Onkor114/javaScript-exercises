/////Varialbles.js

var name = "ahmed";
console.log("Name: " +name);

console.log("-------------------------------------------------")

let age = 24;
console.log("Age: " +age);

console.log("-------------------------------------------------")

const country = "Somalia";
console.log("country: " +country);

console.log("-------------------------------------------------")

console.log("---------------------variable that canbe changeable----------------------------")

let myAge = 24;
myAge = 25;
console.log("myAge reached:" + myAge);

console.log("------------variable var can't be change----------------------");



//////functions

console.log("-----------------Function Declaration------------------")

function myfunction() {
    console.log("hello function Declaration"); //you created a function declaration then....
};
myfunction() // you called myfunction

console.log("-----------------Function Expression------------------")

const greeting = function() {
    console.log("hello fucntion expression " ); 
};
greeting();

console.log("-----------------Arrow Functions------------------")
const arrow = () => {
    console.log("hello arrow function");

};
arrow();

console.log("-----------------Sida Function u Shaqeeyo------------------")
//Inputs (Arguments): Functions-ka waxay qaadan karaan xog loo gudbiyay markii lagu wacayo.

function great(name) {
    console.log("Hello, " + name + "!");

};
great("Abdi");
great("Hooyo");

//Outputs (Return): Functions-ka waxay soo celin karaan natiijo.

function sum(a,b) {
    return a-b;
}
const result = sum(5,4)/3;
console.log(result);

console.log("-----------------Default Parameters------------------");
//Haddii function lagu waco iyada oo aan la siin dhammaan xogtii uu rabay, waxaad isticmaali kartaa qiimayaal hore loo sii diyaariyay.
function add(a=5, b= 4) {
    return a+b;
}
console.log(add());
console.log(add(7));


console.log("-----------------Chatgpt Exercises------------------");

console.log("exercise one:------input")
function iskucelis(name) {
    console.log("Hello, " + name);

};
iskucelis("Ali ! ");
console.log("exercise two:------ output")
function numbers(a,b,c) {
    return a+b+c;
}
console.log(numbers(1,2,3));

console.log("exercise three:------ input")

function addition (a,b) {
    return a+b;
}
console.log(addition(5,3));

console.log("exercise four:------ input")

function checkAudlt(age){
    if (age > 18){
        console.log("you are adult ")
    }else {
        console.log("you are middle");
    }
    
}
checkAudlt(20);
checkAudlt(15);

