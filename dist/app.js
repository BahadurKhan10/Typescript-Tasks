"use strict";
// Typescript Tasks
// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.
function largerNum() {
    var _a, _b;
    const num1 = parseInt(((_a = prompt("Enter number 1")) === null || _a === void 0 ? void 0 : _a.trim()) || ''); //Handled null or undefined
    const num2 = parseInt(((_b = prompt("Enter Number 2")) === null || _b === void 0 ? void 0 : _b.trim()) || ''); //Handled null or undefined
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input!";
    }
    else if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    }
    else if (num2 > num1) {
        return `${num2} is greater than ${num1}`;
    }
    else {
        return `${num1} is equal to ${num2}`;
    }
}
const comparisonResult = largerNum();
console.log(comparisonResult);
// -----------------------------------------------------------------------------------------------------------------
// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -
const num = -5;
if (num < 0) {
    // console.log("The sign is -")
    console.log(`${num} is negative`);
}
else {
    // console.log("The sign is +")
    console.log(`${num} is positive`);
}
// Making Function for above
function checkSign(num) {
    if (num < 0) {
        // console.log("The sign is -")
        return alert(`${num} is negative`);
    }
    else {
        // console.log("The sign is +")
        return alert(`${num} is positive`);
    }
}
console.log(checkSign(5));
console.log(checkSign(-5));
console.log(checkSign(3));
console.log(checkSign(-3));
// -----------------------------------------------------------------------------------------------------------------
// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console
function checkLargeNum() {
    var _a;
    const nums = [];
    for (let i = 1; i <= 5; i++) {
        const num = parseInt(((_a = prompt(`Enter number ${i}`)) === null || _a === void 0 ? void 0 : _a.trim()) || '');
        nums.push(num);
    }
    const max = Math.max(...nums);
    return `The larger number is ${max}`;
}
const x = checkLargeNum();
console.log(x);
// -----------------------------------------------------------------------------------------------------------------
// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
let i;
for (i = 0; i <= 15; i = i + 1) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}
// -----------------------------------------------------------------------------------------------------------------
// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// Range Grade
// <60     F
// <70     D
// <80     C
// <90     B
// <100    A
function calculateAverageGrade() {
    var _a, _b, _c, _d, _e;
    let grades = [];
    let chemistryGrade = parseInt(((_a = prompt("Enter your Chemistry grade:")) === null || _a === void 0 ? void 0 : _a.trim()) || '');
    if (!isNaN(chemistryGrade)) {
        grades.push(chemistryGrade);
    }
    let englishGrade = parseInt(((_b = prompt("Enter your English grade:")) === null || _b === void 0 ? void 0 : _b.trim()) || '');
    if (!isNaN(englishGrade)) {
        grades.push(englishGrade);
    }
    let mathsGrade = parseInt(((_c = prompt("Enter your Maths grade:")) === null || _c === void 0 ? void 0 : _c.trim()) || '');
    if (!isNaN(mathsGrade)) {
        grades.push(mathsGrade);
    }
    let physicsGrade = parseInt(((_d = prompt("Enter your Physics grade:")) === null || _d === void 0 ? void 0 : _d.trim()) || '');
    if (!isNaN(physicsGrade)) {
        grades.push(physicsGrade);
    }
    let urduGrade = parseInt(((_e = prompt("Enter your Urdu grade:")) === null || _e === void 0 ? void 0 : _e.trim()) || '');
    if (!isNaN(urduGrade)) {
        grades.push(urduGrade);
    }
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / grades.length;
    if (avg < 60) {
        return "Grade is F";
    }
    else if (avg < 70 && avg >= 60) {
        return "Grade is D";
    }
    else if (avg < 80 && avg >= 70) {
        return "Grade is C";
    }
    else if (avg < 90 && avg >= 80) {
        return "Grade is B";
    }
    else if (avg <= 100 && avg >= 90) {
        return "Grade is A";
    }
}
// -----------------------------------------------------------------------------------------------------------------
// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
let n;
for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (n % 3 === 0) {
        console.log("Fizz");
    }
    else if (n % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(n);
    }
}
// -----------------------------------------------------------------------------------------------------------------
// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
let a;
let b;
for (let a = 1; a <= 5; a++) {
    let line = '';
    for (let b = 1; b <= i; b++) {
        line += '* ';
    }
    console.log(line);
}
// -----------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=app.js.map
