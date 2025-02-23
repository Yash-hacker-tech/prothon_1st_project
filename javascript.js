// console.log("Namaste Dunia");


// var age = 25; //only assecible in fxn


// if(true) {
//     console.log(age);
// }

// function solve() {
//     var age = 25;
//     console.log(age);
// }
// console.log(age); //errpr
// solve();

// var x = 10;
// var x = 20; 

// {
//     let a = 10; //block scopped
//     console.log(a);
// }

// let a = 20;
// a = 30; //allowed


// let a = 10;
// a = "bababr";
// a = true;
// a = null;

// const a = 28; //cannot change
// console.log(a);

// const a = 20;
// console.log(a);


// let marks = 20.2345;
// marks = "Babbar";
// marks = true;


let marks = 923691643589612956198435971349858734895674398175698173971389678913768917638965718936789173598671893768917368973896718976891378917;
console.log(marks);

let mark;
console.log(typeof(mark)); //type dega

//arithmetic operator

let a = 2;
let b = 5;


// // a = a +10;
// a += 10;
// console.log(a);

// // a = a-2;
// a -= 2;
// console.log(a);


//console.log(a**b);//power 

//console.log('5' == 5);
//console.log('5' === 5); // value and type both

// let age = 5;
// let status1 = (age > 18) ? 'I can vote' : 'I cannot Vote';


// console.log(status1);


// let ans = (true && false && true)

// let ans = (false || false || false);
// let ans = !(false);
// console.log(ans);

// console.log(false || 7 || 11 || 18);

// console.log(2 ^ 2);

//console.log(10 << 1);


// let age = 30;
// if(age >= 18 ) {
//     console.log('can vote');
// }

// let number = 5;

// if(number == 1) {
//     console.log('A');
// }
// else if(number == 2) {
//     console.log('B');
// }
// else if(number == 3) {
//     console.log('C');
// }
// else if(number == 4) {
//     console.log('D');
// }
// else {
//     console.log('F');
// }

let num = 3;

switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    case 4: console.log('D');
    break;
    default: console.log('F');
}
// for(let i=1; i<=10; i++) {
//     console.log("babbar");
// }

// let i = 1;
// do{
//     console.log("babbar");
//     //updation
//     i++;
// }while(i<=10);

// let i = 1;
// while(i <= 10) {
//     console.log("babbar");
//     i++;
// }

// for(let i =1; i<6; i++) {
//     console.log(i);
// }

// let i = 1;
// do{
//     console.log(i);
//     //updation
//     i++;
// }while(i<6);

// let i = 1;
// while(i<6) {
//     console.log(i);
//     i++;
// }

// for(let i=5; i>0; i--) {
//     console.log(i);
// }
// let i = 5;
// do{
//     console.log(i)
//     //updation
//     i--;
// }while(i>0);

// let i = 5;
// while(i>0) {
//     console.log(i);
//     i--;
// }

// for(let i=1; i<=6; i++) {
//     if(i == 4) {
//         break;
//     }
//     else {
//         console.log(i);
//     }
// }

// for(let i = 1; i<=4; i++) {
//     if(i == 3) 
//         continue;
//     else   
//         console.log(i);
// }

// let i = 1;
// while(i < 5) {
//     console.log("Inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }
        
//     else
//         console.log(i);
//     i++;
// }

// let firstName = "Love";
// let lastName = 'Babbar';

// let name = `Love 
// Babbar This is
// my 
// Name
// hello`;

// console.log(name);

// let firstName = new String("Love babbar");
// console.log(firstName);

let op1 = 'English ';
let op2 = 'HINDI ';

console.log(op2.length);

// let finalAns = `${op1}${op2}`;
// console.log(finalAns)

// let ans = op1 + op2;
// console.log(ans);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase())

// let str = "Babbar";
// console.log(str.substring(2,4));

//console.log(str.substring(2));

let sentence = "Hello \\Jee \\Kaise\\ \\ho \\saare";

let words = sentence.split('\\');

console.log(words);

console.log(words.join('-'));


//function definition
// function sayMyName() {
//     console.log("Love Babbar")
// }

// //function use - function call
// sayMyName();


// function printCounting() {
//     for(let i=1; i<=100; i++) {
//         console.log(i);
//     }
// }

// printCounting();

// function printNumber(num) {
//     console.log("Printing NUmber:", num);
// }

// printNumber(5);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average: ", avg);
// }

// getAverage(3,70);


//return functions

// function getSum(a,b,c) {
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing Sum: ", ans);

// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
//     //unreachable statements
// //     let a = 10;
// //     let b= 15;
// //     let sum = a + b;
// //     console.log(sum);
// }

// let fullName = getMyName(7, 7);
// console.log("Full Name: ", fullName);


// const getMultiplication = function (a,b) {
//     return a*b;
// }

// let ans = getMultiplication(2,20);
// console.log(ans);

// let squareNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(5);
// console.log(ans);

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getExp(2,10));
// let obj = {
//     name: "Love",
//     age: 25,
//     weight: 85,
//     height: "6ft 1in",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// };

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// // let obj2 = obj;

// //creation of arrays 
// let arr = [1,2,3,4,5];
// //array constructor 
// let brr = new Array('love',100,true);
// brr.push('Babbar');
// brr.pop();

// brr.shift(); //remove 1st
// brr.unshift('Love Babbar'); //add last
// brr.push(20);
// brr.push(40);


// brr.push(70);

// // console.log(brr.slice(2,4) );

// brr.splice(1,0,'kunal');

// console.log(brr);

// // console.log(brr);

// // console.log(typeof(brr));


// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
//     // if(number%2 === 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// });


// console.log(evenArray)

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray  = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray)



// let arr = [1,2,'love','kunal', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);



// let arr = [10,20,30,40];

// let ans  = arr.reduce((acc,curr)=> {
//     return acc + curr;
// }, 0);

// console.log(ans);

// let arr = [9,1,7,4,2,8];
// arr.sort();
// //HW: how to do sort in descending order ?

// console.log(arr);

// console.log(arr.indexOf(9));


// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: " , length);
// //tradiotional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// })

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "babbar";

// for(let val of fullName) {
//     console.log(val);
// }

let arr = [10,20,30,40,50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);


// var greet;
// console.log(greet)


// var greet = function() {
//     console.log("Namaste Dunia");
// }



// let obj = {
//     age:25,
//     wt: 36,
//     ht:180,
//     greet: ()=>{
//         console.log("hello Dunia");
//     }
// }

// console.log(obj.age);
// obj.greet();


// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     }
// ];

// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);

// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }

// let ans = solve(5);

// let finalAns = ans(10);
// console.log(finalAns);


// function greetMe(greet, fullName) {
//     console.log("hello ", fullName);
//     greet();
// }


// function greet() {
//     console.log("Greeting for the day")
// }

// greetMe(greet, "Babbar");

// greet();

// const object1 = new Human();
// class Human {

// }




// sayHello();
// let sayHello = function() {
//     console.log("Hello Jee, kaise ho saare");
// }





// console.log(age);
// const age = 25;




// {

// console.log(age);
// var age = 25;




// // sayMyName("Babbar");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

// }



let curr = new Date();

let date = new Date('June 20 1998 07:15');

let newDate = new Date(1998, 5, 20, 7);

// console.log( newDate );


console.log(newDate.setFullYear(2001));

console.log(first)















// console.log("babbar");

// console.log(Math.PI);

// console.log(Math.max(60,30,24,600,712,89));

// console.log(Math.min(60,30,24,600,712,89));

// console.log(Math.round(1.4));


// console.log(Math.ceil(1.1));

// console.log(Math.abs(-5));

// console.log(Math.random());

// console.log(Math.sqrt(5));

// console.log(Math.pow(2,10));
