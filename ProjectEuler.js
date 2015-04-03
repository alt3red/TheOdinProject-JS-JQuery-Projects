//Euler Problem One: Multiples of 3 and 5 
//Solution One
var total = []; 
var sum = 0; 

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
     total.push(i); 
        
    }
}
console.log( eval( total.join('+') ) );


//Solution 2 

var sum = 0; 
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i; 
      } 
};
 console.log(sum); 

 //Euler Problem 2: Even Fibonacci Numbers 

/* 1. create a loop that generates Fibonacci numbers.

2. test each one for whether it's even or odd.

3. Add up up the even ones, counting them as you go. */ 

var x = 1;
var y = 2;
var z = 0;
sum = 0; 

while (x < 4000000) {
 if (x % 2 === 0) {
 	sum += x; 
 }
 z = x + y;
 x = y;
 y = z;  

};

console.log(sum); 

/* The array stores the 3 latest values of the
Fibonacci sequence. The array is first loaded with values 0, 1, 0.
The solution function then starts a while loop that calculates the
next Fibonacci number, determines if its even, adds it to the sum as
needed, and updates the rest of the array. */

fibArray = [0, 1, 0]
sum = 0; 

while (fibArray < 4000000) {
   fibArray[3] = fibArray[0] + fibArray[1] 
   if (fibArray[3] % 2 === 0) {
        sum += fibArray[3];
   }
}

// Euler Problem 3: Find the Largest Prime Number 
/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */ 

varlargestPrimeFactor = function(num) {

var num = 10;
var factors = []; 

for (var i = 2; i < num; i++) {
   if (num % i === 0)  {
       num /= i;
      factors.push(i); 
     }
     else {
      i+=1; 
   }
 }
 return factors(factors.length-1);




  factors.push(i); 
       if (n[i] > largest) {
      largest = n[i]; 

console.log(largest);

 //Correct Code for Problem 3 

function LargestPrime(num) {
var i = 2;
while (i <= num) {
    if (num % i == 0) {
        num /= i;    
    } else {
        i++;
    }
}
console.log(i);
}
var number = 600851475143 ; 
largestPrimeFactor(number)








