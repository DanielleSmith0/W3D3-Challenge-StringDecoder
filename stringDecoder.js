// Start by creating a function called decoder that has a single parameter called code.
//make a loop at looks for each digit and selects the varable tat is that many indexes of the number. 
//use two loops, so the second loop starts to the right of the outer loop.
//reduce to just those and return a string.
// const code = '0h2xce5ngbrdy'

// function decoder(code) {
//     for(let i = 0; i < code.length; i++) {
//         let num = parseInt(code);
//         for(let j = i + num; j < code.length; j++){
//             return
//         }
//     }
// }

//Didn't finish.

//Answer Walkthrough:
//let's break the code into parts, seperated by the numbers.
//Then we will need to map each value in our array to a letter and save those mapped values into a new array.
//the value will be the letter that comes nth + 1, n being the number at the beginning of each string in our array.
//Then join the strings of the new array into one string and return that string.

// let brokenArray = []
// let eachString = ""

// for(let i = 0; i < code.length; i++){
//     if (!isNaN(code[i])) {
//         if(eachString !== "") {
//             brokenArray.push(eachString)
//         }

//         eachString = code[i]
//     } else{
//         eachString += code[i]
//     }
// }

// if (eachString !== "") {
//     brokenArray.push(eachString)
// }

//     let newArr = brokenArray.map((str) => {
//         //the value will be the letter that comes nth + 1,
//         //n being the number at the beginnig of each string in our
//         //array
//         let num = +str[0]

//         return str[num + 1] 
//     })

//     //then, join the strings of the new array into one string
//     //and return that string
//     return newArr.join('')
// }

// console.log(decoder('0h2xce5ngbrdy'))

// OR

// let codeArray = code.split("");
//     let decodedString = "";
//     for(let i = 0; i < codeArray.length; i++){
//         if (isNaN(codeArray[i])){
//             decodedString += (codeArray[i]);
//         } else {
//             i += +codeArray[i]
//         }
//     }
//     return decodedString;
// }

// console.log(decoder("0h2xce5ngbrdy")); 

// OR

// let decoder = (code) => {
//     let decodedWord = '';
//     for (let i = 0; i < code.length; i++) {
//         letterIndex = i + 1 + +code[i];
//         decodedWord += code[letterIndex];
//         i = letterIndex++;
//     }
//     return decodedWord;
// }

// OR

// function decoder(str){
//   const ltrArr = str.split("");
//   let answer = "";

//   ltrArr.forEach((ltr, i) => {
//     if(Number.isInteger(+ltr)){
//       answer += ltrArr[i + 1 + +ltr]
//     }
//   })
  
//   return answer;
// }
