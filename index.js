// 'use strict'
// my first javascript code
    console.log('hello World');
    let name = 'Taco';
    let age = 33;
    let isHuman = false;
    let isman = undefined;
    let selectedColor = null;
// object
    let person = {
        name: 'Taco',
        age: 33,
        lastName: 'Chen',
        extra: 'extra',
        skill:{
            cpp: 'mid',
            cs: 'mid',
            js: 'beginner',
            lang:['eng','tai']
        }

    }

    person['hasCar'] = false;
delete person.extra;

    let numObj = {
        1:'one',
        3:'three',
        5:'five'
    }
    console.log(numObj[3]);



    var myGlobal = 'global'; 

    age ++;
    console.log(++age);
    age --;
    console.log(age);
    console.log('remainder = ' + age % 12);
    age += 10;
    console.log(age);

    console.log('first letter: ' + name[0]);

    let myNestArray = [[],[1,2,3]];
    myNestArray.push([3,3,4]);  // add in the end
    myNestArray.unshift([1,2]); // add in the start
    myNestArray.pop();      // remove last
    myNestArray.shift();    // remove first




    var globalVal = 333;
    const pi = 3.14;
    //pi = 456; // can't do
    // dot notation
    person.name = 'RR';

    // Barket notation
    person['name'] = 'someOne';

    // array
    let selectedColors = ['red','blue'];
    selectedColors[3] = 'green';
    selectedColors[4] = 123;

    console.log(selectedColors);
    console.log(selectedColors.length);

    function anotherFun() {
        var myLocat = 'local';
        let myLocat1 = 'local';
        
    }

    //function
    function myFirstFunction() {
        console.log('my first function');
        if(typeof myGlobal != "undefeined"){
            console.log(myGlobal);
        }
        if(typeof myLocal == "undefined"){
            console.log('myLocal is local');
        }
        else
        {
            console.log(myLocal);
        }
        if(typeof myLocal1 == "undefined"){
            console.log('myLocal1 is local');
        }
        else
        {
            console.log(myLocal1);
        }
        var myGlobal = 'over write by local';

        console.log(myGlobal);
        console.log(name);

    }

    myFirstFunction();
    console.log(myGlobal);

    // parameter
    function funcWithParam(name, lastName, notpassed) {
        console.log('Hello '+ name + ' ' + lastName + ' ' + notpassed);
    }
    // argument: actual value supply to parameter
    funcWithParam('Taco','Chen');

    // function with  return
    function square(number) {
        return number * number;
    }
    console.log(square(2));

function nextInline(arr,item) {
    arr.push(item);
    return arr.shift();
}

let testArr = [1,2,3,4,5];
console.log('Before:' + JSON.stringify(testArr));
console.log(nextInline(testArr,6));
console.log('After:' + JSON.stringify(testArr));

// strict equal
console.log(3 === 3)
console.log(3 === '3')
console.log(3 == 3)
console.log(3 == '3')
console.log(3 !== 3)
console.log(3 !== '3')

if(age < 10 )
{}
else if(age < 20)
{}
else
{
    console.log('age >= 20');
}

age = 33;
switch (Math.floor(age/10)) {
    case 0:
    case 1:
    case 2:
        console.log('young');
        break;
    case 3:
    case 4:
        console.log('strong');
        break;
    default:
        console.log('old');
        break;
}

let lookupVerb = {
    'car': 'drive',
    'dish': 'wash',
    'bike': 'ride'
}
let target = 'cat';

let verb = lookupVerb[target];
// check for a property
if(lookupVerb.hasOwnProperty(target))
{
    verb = lookupVerb[target];
}
else
{
    verb = '??';
}
console.log(verb + ' a ' + target);
// acthion if prop is not exit
console.log(lookupVerb['snake'] || 'no such prop!~');
// fancy way to copy
let anotherOne = JSON.parse(JSON.stringify(person))

// while loop
let myArray = []
let i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// for loop
for (let index = 0; index < 5; index++) {
    myArray.push(index);
}
console.log(myArray);

// do
do {
    console.log('do ones');
} while (false);



myArray.forEach(element => {
});
console.log(myArray);

console.log(Math.random());
let maxNum = 10;
console.log(Math.floor(Math.random()*(maxNum+1)));

console.log(parseInt('12a12'));
console.log(Number('12a'));

let cond = 123;
console.log( cond < 100 ? '<100' : cond < 200 ? '100-200' : '>200');

// var vs. let
var aa;
var aa;
let bb;
try {
    let bb; // error, can't let a variable twice
} catch (error) {
    console.log(error);
}

// var is global

function scopeTest()
{
    'use strict'
    let letVar = 'let in fun';
    var varVar = 'var in fun';
    {
        let letVar = 'let in block';
        console.log(letVar);
        var varVar = 'var in block';
        console.log(varVar);
        var varVar1 = 'var can be access outside';
        let letVar1 = "let can't be access outside";

    }
    console.log(letVar);
    console.log(varVar);
    console.log(varVar1);
    try {
        console.log(letVar1); // error: letVar1 is nott defined
    } catch (error) {
        console.log(error);
    }
}
scopeTest();

// const is same as let but can't be reassign
const CONST_VAL = 123;
try {
    CONST_VAL = 456; // can't be reasigned
} catch (error) {
    console.log(error);
}

const constArray = [1,2,3];
try {
    constArray = [1,1,1]; // error, can't reassign const array
} catch (error) {
    console.log(error);
}
// const array's element may be modified
constArray[1] = 10;
constArray.push(5);
console.log(constArray);

Object.freeze(constArray);
try {
    constArray[1] = 100;
} catch (error) {
    console.log(error);
}

try {
    constArray.push(100);
} catch (error) {
    console.log(error);
    
}


// use strict
function nameX() {
    'use strict' // must put in the start of the function / the start of the doc
    try {
        vv123 = 'hey'; // error this is a strict function
    } catch (error) {
        console.log(error);
    }
}

nameX();

console.log(parseInt('1111',2));
console.log(parseInt('77',8));
console.log(parseInt('FF',16));

let annonymousFunc = function (params) {
  return new Date();  
}
let annonymousFunc1 = (params) => {
  return new Date();  
};

const annonymousFunc2 = (params) => new Date();  

console.log(annonymousFunc());
console.log(annonymousFunc1());
console.log(annonymousFunc2());

let testArr1 = [4, 3.1,-8.2,4.2 ,41, 5,6.2 ,-2];
let squaredInt = testArr1.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);

// default parameter
const increment = function(number, inc = 1)
{
    return number + inc;
}
console.log(increment(3));
console.log(increment(3,10));

const sum = function(...args) {
    return args.reduce((a,b)=>a * b,1);
}

const arr3 = [ 1,1,1,1];
let arr4 = arr3;
arr3[0] = 100;
console.log(arr4);

let arr5 = [...arr3];
arr3[1] = 100;
console.log(arr5);

let LOCAL_FORCAST = {
    today: { min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forcast) {
    "use strict";

    let { tomorrow:{ max : maxOfTmrw}} = forcast;
    return maxOfTmrw;
}
console.log(getMaxOfTmrw(LOCAL_FORCAST));
// only pass in what is needed
function todayAvg({today})
{
    return (today.max+today.min) / 2.0;
}
console.log(todayAvg(LOCAL_FORCAST));



let [x,y,,z] = [1,2,3,4,5,6];
console.log(x,y,z);

let a = 8, b= 6;
[a,b] = [b,a];
console.log(a,b)
let [,,...cutArr] = [1,2,3,4,5,6,7,8,9];
console.log(cutArr);

// template literal
let greeting = `hi,I'm ${person.name}!
I'm ${person.age}`;
console.log(greeting);

let result = {
    failure: ["no-var","var-on-top","linebreak"]
}

let resultDisplayArray = [];
for (let index = 0; index < result.failure.length; index++) {
    resultDisplayArray.push(`<li class="text-warning">${result.failure[index]}</li>`)
}
console.log(resultDisplayArray);

const createPerson = (name,age,gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
const createPersonEasy = (name,age,gender) => ({ name, age,gender});

console.log(createPerson("Taco",33,"M"));
console.log(createPersonEasy("Taco",33,"M"));

let bike ={
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear;   
    },
    easySetGear(newGear){
        this.gear = newGear;   
    }
}
bike.setGear(5)
console.log(bike.gear)
bike.easySetGear(7)
console.log(bike.gear)

// constructor

let SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

let zeus = new SpaceShuttle('Jupiter');
console.log(zeus)

class ClassSpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
let zeus1 = new ClassSpaceShuttle('Jupiter');
console.log(zeus1)

class Book{
    constructor(author){
        this._author = author;
    }
    //getter
    get writer(){
        return "!!!" + this._author;
    }
    //setter
    set writer(updateAuthor){
        this._author = updateAuthor + "!!!";
    }
}
let myBook = new Book('a1');
console.log(myBook.writer)
myBook.writer='a2'
console.log(myBook.writer)


//import
// need to adjust type=module in html;
import { capStr }  from "./string_function.js"
console.log(capStr('abc'));
import * as MyStringFunctions  from "./string_function.js"
console.log(MyStringFunctions.expVar1)
// import default
import someNameHere from "./expDefault.js"
console.log(someNameHere())