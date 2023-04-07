// Typescript Tasks



// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

function largerNum(): string {
  const num1: number = parseInt(prompt("Enter number 1")?.trim() || ''); //Handled null or undefined
  const num2: number = parseInt(prompt("Enter Number 2")?.trim() || ''); //Handled null or undefined

  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input!";
  } else if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is greater than ${num1}`;
  } else {
    return `${num1} is equal to ${num2}`;
  }
}

const comparisonResult: string = largerNum();
console.log(comparisonResult);


// -----------------------------------------------------------------------------------------------------------------

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


const num:number=-5
if (num < 0) {
  // console.log("The sign is -")
  console.log(`${num} is negative`) ;
} else {
  // console.log("The sign is +")
  console.log(`${num} is positive`);
}


// Making Function for above

function checkSign(num:number):void{
    if(num < 0 ){
        // console.log("The sign is -")
        return alert(`${num} is negative`)

    }else{
        // console.log("The sign is +")
        return alert(`${num} is positive`)

    }
}
console.log(checkSign(5))
console.log(checkSign(-5))
console.log(checkSign(3))
console.log(checkSign(-3))


// -----------------------------------------------------------------------------------------------------------------

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console


function checkLargeNum(): string {
  const nums: number[] = [];
  for(let i = 1; i <= 5; i++){
    const num = parseInt(prompt(`Enter number ${i}`)?.trim() || '');
    nums.push(num);
  }
  const max: number = Math.max(...nums);
  return `The larger number is ${max}`;
}


const x:string=checkLargeNum()
console.log(x)

// -----------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

let i:number
for (i = 0; i <= 15; i = i + 1) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
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


function calculateAverageGrade(): string | undefined{
    let grades = [];
  
    let chemistryGrade = parseInt(prompt("Enter your Chemistry grade:")?.trim() || '');
    if (!isNaN(chemistryGrade)) {
        grades.push(chemistryGrade);
    }
  
    let englishGrade = parseInt(prompt("Enter your English grade:")?.trim() || '');
    if (!isNaN(englishGrade)) {
        grades.push(englishGrade);
    }
  
    let mathsGrade = parseInt(prompt("Enter your Maths grade:")?.trim() || '');
    if (!isNaN(mathsGrade)) {
        grades.push(mathsGrade);
    }
  
    let physicsGrade = parseInt(prompt("Enter your Physics grade:")?.trim() || '');
    if (!isNaN(physicsGrade)) {
        grades.push(physicsGrade);
    }
  
    let urduGrade = parseInt(prompt("Enter your Urdu grade:")?.trim() || '');
    if (!isNaN(urduGrade)) {
        grades.push(urduGrade);
    }
  
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / grades.length;
  
    if (avg < 60) {
        return "Grade is F";
      } else if (avg < 70 && avg >= 60) {
        return "Grade is D";
      } else if (avg < 80 && avg >= 70) {
        return "Grade is C";
      } else if (avg < 90 && avg >= 80) {
        return "Grade is B";
      } else if (avg <= 100 && avg >= 90) {
        return "Grade is A";
      }
  }

  
// -----------------------------------------------------------------------------------------------------------------

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

let n:number
for(let n=1; n<=100; n++){
    if(n%3===0 && n%5===0){
      console.log("FizzBuzz")
    }else if(n%3===0){
      console.log("Fizz")
    }else if(n%5===0){
      console.log("Buzz")
    }else{
      console.log(n)
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
  
  let a:number
  let b:number
  for(let a=1; a<=5; a++){
    let line = '';
    for(let b=1; b<=i; b++){
      line += '* ';
    }
    console.log(line);
  }
  
  
  // -----------------------------------------------------------------------------------------------------------------
  
