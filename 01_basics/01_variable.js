const accountId = 144553;
let accountEmail = "sohilpatel.patel5@gmail.com";
var accountPassword = "12345";
accountCity = "Surat";
let accountSate;// output is undefined

//accountId = 2;// not allwed
accountEmail = "sp@sp.com"
accountPassword = "14567"
accountCity = "Lisbon"
console.log(accountId);

/*
Prefer don´t use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountSate]);