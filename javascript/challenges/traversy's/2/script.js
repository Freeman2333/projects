// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  ///////MINE
  // let arr = sen.split(" ");
  // let obj = arr.reduce((acc, curr) => {
  //   let count = 0;
  //   for (let i of curr) {
  //     count++;
  //   }
  //   acc[curr] = count;
  //   return acc;
  // }, {});
  // let chars = 0;
  // let longest = "";
  // for (let th in obj) {
  //   if (obj[th] > chars) {
  //     chars = obj[th];
  //     longest = th;
  //   }
  // }
  // return longest;
  //////brad's
  // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // // sort by length
  // const sorted = wordArr.sort(function(a, b) {
  //   return b.length - a.length;
  // });
  // // if multiple
  // const longestWordArr = sorted.filter(function(word) {
  //   return word.length === sorted[0].length;
  // });
  // // check how many
  // if (longestWordArr.length === 1) {
  //   return longestWordArr[0];
  // } else {
  //   return longestWordArr;
  // }
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // let arr = sen.split(" ");
  // let obj = arr.reduce((acc, curr) => {
  //   let count = 0;
  //   for (let i of curr) {
  //     count++;
  //   }
  //   acc[curr] = count;
  //   return acc;
  // }, {});
  // let chars = 0;
  // let longest = "";
  // let newArr = [];
  // for (let th in obj) {
  //   if (obj[th] > chars) {
  //     chars = obj[th];
  //     longest = th;
  //   }
  // }
  // newArr.push(longest);
  // for (let th in obj) {
  //   if (obj[th] === chars && th !== longest) {
  //     newArr.push(th);
  //   }
  // }
  // return newArr;
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]

// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {
// solution 1

//   const chunkedArr = [];
//   let i = 0;

//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));

//     i += len;
//   }
//   return chunkedArr;
// }

// solution 2

//   const chunkedArr = [];

//   arr.forEach(function(val) {
//     const last = chunkedArr[chunkedArr.length - 1];
//     // console.log(last);

//     if (!last || last.length === len) {

//       chunkedArr.push([val]);
//     } else {
//       last.push(val);
//     }
//   });

//   return chunkedArr;
// }

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
//   // my solution

//   // let newArr = arrays.reduce((acc, curr) => {
//   //   curr.forEach(num => acc.push(num));
//   //   return acc;
//   // }, []);
//   // return newArr;

//   // brad's solution

//   // return arrays.reduce((a, b) => {
//   //   return a.concat(b);
//   // });

//   // another solution

//   // return [].concat.apply([], arrays);

//   // solution 3

//   // return [].concat(...arrays);
// }

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join();
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  return newStr;
}

// Call Function
// const output = longestWord("Hi there, my name is Brad");

console.log(letterChanges("hello there"));
