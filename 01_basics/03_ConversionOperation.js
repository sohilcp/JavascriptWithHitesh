let score = true;

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// ture => 1 ; false => 0

let isLoggedIn = "sohil";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// "" => flase
//"sohil" => true

let someNumber = 18
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// «««««««««««« Operations »»»»»»»»»»»»»

let value = 3;
let negValue = -value
console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);*/

let str1 = "Hello"
let str2 = " Sohil"
let srt3 = str1 + str2

console.log(srt3);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2 );//122
console.log(1 + 2 + "2");// 32

let gameCounter = 100
gameCounter++
console.log(gameCounter);
gameCounter--
console.log(gameCounter);
