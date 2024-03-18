let fname = "Ilya";
console.log("Hello, " + fname + "!");


let number = 124
function isEven (number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isEven(number));


let person = {
    fname: "Brian",
    age: 27,
    city: "California"
}

console.log("My name is " + person.fname + ". " + "I'm " + person.age + " years old. " + "I live in " + person.city + ".");


const arr = [7, 13, 27, 33, 42];

const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sum);


let a = 12
let b = 24
function max(a, b) {
    if (a >= b){
        console.log("Number a is bigger = " + a);
    }
    else {
        console.log("Number b is bigger = " + b);
    }
}

max(a, b)