// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // let arr = [...str];

  // let newArr = arr.reverse();

  // let reversedStr = newArr.join("");
  // return reversedStr;

  // ///////////////////////

  let revString = "";
  for (let i = 0; i < str.length; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let init = str;
  let reversed = str
    .split("")
    .reverse()
    .join("");
  return reversed === init;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let arr = [...int.toString()];

  let newArr = arr.reverse();

  let reversedStr = newArr.join("");
  return parseInt(reversedStr);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let arr = str.split(" ");

  let newArr = arr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return newArr.join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let arr = [...str];

  let obj = arr.reduce((acc, char) => {
    acc[char] ? acc[char]++ : (acc[char] = 1);
    return acc;
  }, {});

  let max = 1;
  let letter = "";

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      letter = char;
    }
  }

  // console.log(obj);
  return letter;
}
maxCharacter("javascript");

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// Call Function
const output = maxCharacter("javvvoooooascript");

console.log(output);
