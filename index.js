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
// let bb; // error, can't let a variable twice

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
    //console.log(letVar1); // error: letVar1 is nott defined
}

// const is same as let but can't be reassign
const CONST_VAL = 123;
// CONST_VAL = 456; // can't be reasigned
scopeTest();
// use strict
function namexx() {
    'use strict' // must put in the start of the function / the start of the doc
    // vv123 = 'hey'; // error this is a strict function
}