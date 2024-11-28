const word = process.argv[2];
console.log("Hello Boolean");

const username = process.argv[3];
 console.log(`Hello ${username}`);

const number = process.argv[4];
if(number % 2 === 0){
    console.log(` ${number} è pari`);
} else {
console.log(` ${number} è dispari`);
};

const string = process.argv[5];
const vocal = ["a", "e", "i", "o", "u"];
let count = 0;
for(let i = 0; i < string.length; i++ ){
    curChar = string[i];
if(vocal.includes(curChar)){
    count++;
};
};
console.log(`nella parola ${string} ci sono ${count} vocali`);


