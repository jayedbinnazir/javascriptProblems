console.log('Loops') ;

// Even, Odd Numbers  between 20
for(let i = 1 ; i<=20 ; i++) {
    if(i%2==0) {
        console.log(`even-`, i)
    } else {
        console.log(`Odd-`, i)
    }
}

// 5 er naamta 
console.log("5 er naamta------------------------")
let n = 5 ;
for(let i=1 ; i<=10 ; i++) {
    let value = n*i ;
    console.log(`${n} * ${i} =` , value)
}

// naamta 1-20 er
 console.log(`Naamta 1-20 er--------------------- `) ;

for (let i=1;i<=20 ; i++) {
    for(let j=1 ; j<=10 ; j++) {
        let value = i*j ;
        console.log( `${i} * ${j} = `, value)
    }
}

//naamta lekhum jog koira 

console.log('naamta jog koira-----------') ;

//number 14 line n=5
let value = 0;
for (i = 1; i<= 10 ; i++) {
    value = value+n ;
    console.log(`${n} * ${i} = `, value)
}

// sum of 30 integers 
console.log('SUm of a numbers========')
let sum = 0 ;
  for(i=1 ; i<=30 ; i++) {
    sum = sum + i ;
}
console.log(sum)

// Output - 
// 1,2,3 
// 1,3,2
// 2,1,3
// 2,3,1
// 3,1,2
// 3,2,1

console.log(`Permutation ---`)

for(i=1 ; i<=3 ; i++) {
    for(j = 1 ; j<=3 && j !=i ; j++) {
        for (k = 1 ; k<=3 && k !=j && k != i ;k++ ) {
            console.log(`${i} , ${j} , ${k}`)
        }
    }
}

//The wrong Solution 

//The Solution is 
console.log(`Main Solution`)
for(i=1 ; i<=3 ; i++) {
    for(j = 1 ; j<=3; j++) {
        if(j != i ){
            for (k = 1 ; k<=3  ;k++ ) {
                if(k !=j && k != i)
                    console.log(`${i} , ${j} , ${k}`)
            }
        }
       
    }
}

// 1. Write a program in C to display the first 10 natural numbers. Go to the editor
// Expected Output :
// 1 2 3 4 5 6 7 8 9 10
console.log('output nataural numbers---------')
for(a=1 ; a<=10 ; a++) {
    console.log(a)
}

// 2. Write a C program to find the sum of first 10 natural numbers. Go to the editor
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55

console.log("Sum of 10 natural numbers-------------") 
let add = 0 ;
for(i=1 ; i<=10 ; i++) {
    add= add+i ;
}
console.log(add)

// 3. Write a program in C to display n terms of natural number and their sum.Go to the editor
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

// console.log("Show N terms of natural numbers and their summation---------") ;
// let cond = prompt('Inter a Number' ) ;

// let add1=0 ;

// for(let i=1 ; i <= +cond; i++) {
//     console.log(i);
//     add1 = add1 + i ;
// }
// console.log(`Summation`,add1)

// 4. Write a program in C to read 10 numbers from keyboard and find their sum and average. Go to the editor
// Test Data :
// Input the 10 numbers :
// Number-1 :2

console.log('Input  10 nmbrs from keyboard and find there sum and average ---00') ;

// let arr1 = [];
// let add2 = 0; 
// let inputNumber ;
// for(i = 0; i<10 ; i++) {
//     arr1[i] = prompt('Enter the numbers');
//     add2 = add2+ +arr1[i] ;
//     inputNumber = i+1 ;
// }
// console.log(add2 , add2/inputNumber)

// 5. Write a program in C to display the cube of the number upto given an integer. Go to the editor
// Test Data :
// Input number of terms : 5
// Expected Output :
// Number is : 1 and cube of the 1 is :1
// Number is : 2 and cube of the 2 is :8
// Number is : 3 and cube of the 3 is :27
// Number is : 4 and cube of the 4 is :64
// Number is : 5 and cube of the 5 is :125

// Factorial of a number 

// 3! = 3*2*1 
console.log('Factorial of a number -------')
let inputFact = 5;
let fact=1 ;
for(let i = 1 ; i<=inputFact; i++) {
    fact = fact * i  ;
}
console.log(fact);

let updater ;
for (let i = inputFact-1 ; i >= 1 &&  i <= inputFact ; i-- ) {
    inputFact = inputFact*i ;
}
console.log(inputFact)

//Prime Number which is only divided by 1 or by itself 
console.log("prime Number or Not----------------")
let primeNumber = 50 ;
let count = 0 ;
for(let i =2 ; i<primeNumber ; i++) {
    if(primeNumber%i==0){
        count++
        break ;
    }
}

if(count==0) {
    console.log(`${primeNumber} is a prime number`)
} else {
    console.log(`${primeNumber} is not a primeNumber`)
}

//Print Out The proimme number from 0 to 20 

console.log('Print Out prime numbers betwwen given range') ;

//Checking the number is prime or not 

function isPrime(a) {
    if(a == 1 || a == 0) return false;

    for(let i = 2 ; i < a ; i++) {
        if(a%i == 0) return false
    }

    return true ;
}

let range = 20 ;

for(let i=0 ; i<=range ; i++) {
    if(isPrime(i)) {
        console.log(i)
    }
}
console.log(`GCD of any two numbers`)
//GCD 
let num1 = 60 ;
let num2 =24
let n1 = num1 ;
let n2 = num2 ;
while(n2 != 0) {
    let rem = n1%n2 ;
    n1 = n2 ;
    n2 = rem ;
}

console.log(n1)
let n3 = num1 ;
let n4 = num2 ;
 while (n3 != n4) {
    if(n3>n4) {
        n3 = n3-n4 ;
    } else {
        n4 = n4 - n3 
    }
 }

 console.log(`GCD-`,n3 , n4)

 let LCM = (num1+num2)/n3
 console.log(`LCM-`,LCM)

 //Sum of digits 

 console.log('Find Out The sum of the digits of a input number----') ;

// example - 123 ---> 6 ;  

let number = 123 ;
let adder1 = 0 ;
let clone1 = number ;

while(clone1 != 0 ) {
    let r = clone1%10 ;
    adder1 = adder1 + r ;
    clone1 = parseInt(clone1/10)
}

console.log('sum of digits of the number 123-' , adder1);

// Reverse an input number 

console.log('Reverse a number') ;

let reverseInput = 123 ;

let reversed = 0 ;
let clone2 = reverseInput ;

while(clone2 != 0 ) {
    r = clone2%10 ;
    reversed = reversed*10 + r ;
    clone2 = parseInt(clone2/10)
};

console.log(`reverse digints of ${reverseInput}`, reversed) ;

//Palindrom number -> after reversing number if it remains same
//Ex- 121 ---reversed--- 121

//Armsttrong number ---> the summation of cube of the digits remains same 
//Ex - 153 --> 1^3 + 5^3 + 3^3 

let armstrong = 153 ;
let cubeSum = 0 ;
let clone3 = armstrong ;

function cube(x) {
    let result = 1 ;

    for(let i =0 ; i<3 ; i++ ) {
        result *= x ;
    }

    return result ;
}

console.log(cube(2))

while(clone3 != 0 ) {
    r = clone3%10 ;
    cubeSum = cubeSum + cube(r) ;
    clone3 = parseInt(clone3/10)

}
console.log(cubeSum) ;
if(cubeSum === armstrong) {
    console.log(`${armstrong} is a armstrong number`) ;
} else {
    console.log(`${armstrong} is not a armstrong number`) ;
}


// Strong Number --> sum of the digits factorial of a given number remains same
//Ex - 145 = 1! + 4! + 5! = 1+24+120 = 145  //

//Factorial Programe 

function facts(n) {
    let factorial = 1 ;

    for(i = 1 ; i<= n ; i++) {
        factorial *=i ; 
    }
    return factorial ;
}

let strongNumber = 145 ;
let clone4 = strongNumber ;
let factSum = 0 ;

while(clone4 != 0 ) {
    r = clone4%10 ;
    factSum+=facts(r) ;
    clone4 = parseInt(clone4/10)
}

console.log(factSum) ;

if(factSum === strongNumber ) {
    console.log(`${strongNumber} is a strong number`) ;
} else {
    console.log(`${strongNumber} is not a strong number`) ;
}

//Series  
// 1-2+3-4+5-6+...+N 

let lastNumber = 6 ;

let odd = 0 ;
let even = 0 ;

for(let i = 1 ; i<=lastNumber ; i++ ) {
    if(i%2==0){
        console.log('even-',i) ;
        even += i ;

    } else {
        console.log('odd-',i)
        odd += i ;
    }
}

console.log('Summation of Series' , odd - even ) ;

//Fibonacci Serie ;;;

// 0 1 1 2 3 5 8 ......

a = 0 ; b = 1 ;
c=a+b ; 
b = c-b ; 

console.log("fibonacci Series---->")