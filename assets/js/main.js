// Boolean=================================
// Lev1_14-------------
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean('hello'));
console.log(Boolean('false'));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

// Comparisons=================================
// Lev1_15-------------
let num = 5
let anotherNum = 8
console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);

console.log(num == '5'); //t
console.log(num != '8'); //t
console.log(num != '5'); //f


// type-types=================================
// Lev1_3-------------------------------------
let i = 1;
console.log(typeof i); //s

let lastName = 'John'
console.log(typeof lastName); //s

let j = '2'
console.log(typeof j); //s

let status = true;
console.log(typeof status); //b

let hello = 'hello'
console.log(typeof hello); //s

let helloWorld = 'hello'
console.log(typeof helloWorld); //s

// type-conversion=================================
// Lev1_4-------------------------------------

console.log(typeof 'john'); // s
console.log(typeof 3.14); //n
console.log(typeof NaN); //n
console.log(typeof false); //b
console.log(typeof [1, 2, 3, 4]); //obj
console.log(typeof { name: 'john', age: '34' }); //obj
console.log(typeof(new Date())); //obj
console.log(typeof(function name(params) {})); //func
console.log(typeof null); //obj
console.log(typeof(3 + 2 == 5)); //b
console.log(typeof(3 + '3')); //s

// arithmetic operators=================================
// Lev1_8-------------------------------------

let x = 20;
let y = 30;
let z = 10;
console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let resultOne = (x * y) / z;
console.log(resultOne); //60

// ------------------------------------

let a = 15;
let b = 9;
console.log(15 % 9); //6

let c = 20;

c += a
c += b
let resultTwo = c * c
console.log(resultTwo);


a++
console.log(a);
b--
console.log(b);

let resultThree = a - b
console.log(resultThree); //8

console.log(resultThree % resultTwo); //8



// DOM elements=================================
// Lev2_1-------------------------------------

let navHome = document.getElementById('navHome')


function changeMe() {
    console.log(navHome);
    // navHome.style.transform = 'rotateY(180deg)'
    // navHome.style.background = 'pink'
    // 2-lösung
    navHome.classList.toggle('transform')
}

// Lev2_2-------------------------------------

let vorname = document.getElementById('vorname')
let nachname = document.getElementById('nachname')
let land = document.getElementById('land')

const getSubmit = () => {
    console.log('Fullname: ' + vorname.value + ' ' + nachname.value + ', Land:' + land.value);

}

// Lev2_10-------------------------------------

let headline = document.getElementById('headline')

function small() {
    headline.className = ''
    headline.classList.add('small')
        // element.classList.remove("middle", "big");
}

function middle() {
    headline.className = ''
    headline.classList.add('middle')
        // element.classList.remove("small", "big");
}

function bigCrazy() {
    headline.className = ''
    headline.classList.add('bigCrazy')
        // element.classList.remove("middle", "small");
}


// Lev2_11-------------------------------------
let section = document.getElementById('section')
const changeBacgroung = () => {
    console.log(section);
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    console.log(red, green, blue);
    section.style.backgroundColor = `rgb(${red},${green},${blue})`
}