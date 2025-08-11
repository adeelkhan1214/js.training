
// // let str = "amzing";
// // let str1 = "boy";
// // console.log(str.concat(str1));

// // let str0 = "amzing";
// // let str00 = "boy";
// // console.log(str00.indexOf("o"));

// // let adeel = [1,2,3,4,5,6];
// // for (let a = 0; a < adeel.length; a++) {
  
// //     console.log(adeel[a]);
// // }

// // var myArray = [1, 2, 3, 4, 5];
// // for (var i = 0; i < myArray.length; i++) {
// //     console.log(myArray[i]+1);
// // }


// // question 
//     let usersentence = "hello wolrd from js";
//     let capitalword = usersentence
//     .split(" ")
//     .map( word => word.length >0 ? word[0].toUpperCase() + word.slice(1): "")
//     .join(" ")
//     console.log(capitalword);

// let number = [1,2,3,4,5,6];
// let as = number.filter(number => number % 2 ===0);
//     console.log(as) ;


// let asan = [1,3,4,5,5,6,6,6];
// let start = 0;
// for (let i = 0; i < asan.length; i++) {
//     start += asan[i];
//     console.log(start)
// }      

// let greater = [1,2,3,4,5,6];
// let maxvalue = greater[0];
// for (let index = 1; index < greater.length; index++) {
//     if (greater[index] >maxvalue) {
//         maxvalue=greater[index]
//     }
  

// }
//   console.log( "greatest number is"+ maxvalue)


// let string = "shubhan";
// let number1 = 12;
// let thistrue = number1 >= 12? "true":"false";
// let total = {string,number1,thistrue};
// console.log(total);
    


// let reverse = [1,2,3,4,5]
// console.log(reverse.reverse())



// let ay = [1,3,,4,5,6,7,7];
// for (let even = 0; even < ay.length; even++) {
//     if (ay[even] % 2 === 0) {
//       console.log(ay[even]);  
//     }
   
// }
// let ay1 = [1,3,,4,5,6,7,7];
// for (let even of ay) {
//     if (ay % 2 === 0) {
//         console.log(even);
//     }
// }
// let num = [23,27,24,30]
// let cout = 0;
// for (let count of num) {
//     if (count > 25){cout++; }
        
// }
// console.log(cout)

// let valyes = [22, 45, 17, 50, 31, 60];
// let newvalue =[];
// for (const finder of valyes) {
//     if ( finder > 30) 
//         newvalue.push(finder)
    
// }
// console.log(newvalue);


// let names = ["adeel","abbas","shan"]
// for (let again  of names) {
//     console.log(again)
// }

// let orders = [
//   { name: "Shampoo", stock: 12 },
//   { name: "Soap", stock: 0 },
//   { name: "Toothpaste", stock: 5 },
//   { name: "Hair Oil", stock: 0 },
//   { name: "Face Wash", stock: 7 }
// ];;

// for (let grder of orders) {
//   if (grder.stock > 0) {
//     console.log(`Order received: ${grder.stock} items`);
//   } 
// }
// let todat = [12,3,4,5,6];
// console.log(todat.toString());


// let nums = [2, 4, 6];
//  for (let i = 0; i < nums.length; i++) {
//  	let result = nums[i] * 2;
//  	console.log(result);
//  }

//  let large = [1,2,3,4,5,60,55,52]
//  let max = large[1]
//  for (let i = 0; i < large.length; i++) {
//    if (large[i] < max) {
//     max = large[i]
//     console.log(max)
//    }
    
//  }
//  let even = [1,2,34,5,6,7,8];

//  for (let i = 0; i < even.length; i++) {
//    if (even[i] % 2 === 0) {
   
//      console.log(even[i])  
//    }
 
//  }


//  let reverses = [1,2,3,4,4,5,7,12,8,9];
//  console.log(reverses.reverse())



//  let average = [1,3,6,5,5];
//  let avg = 0 ;
//  for (let inde = 0; inde < average.length; inde++) {
//      avg += average[inde] ;
//     console.log(avg)
//  }
//  let average1 = avg/average.length;
//  console.log(average1)


//  let evencount = [1,2,3,4,5,6,7,8]
//  let counter = 0;
//  for (let index = 0; index < evencount.length; index++) {
   
//     if (evencount[index] % 2 ===0) {
//         counter++;
//     }
   
//  };
//   console.log(counter)



//   let great = [12, 55, 78, 44, 90, 22, 61, 39];
//   let find = [] ;
//   let summer=0;
//   for (let index = 0; index < great.length; index++) {
//     if (great[index] > 50) {
//         find.push(great[index]);
       

//     }

//   };

//   for (let index = 0; index < find.length; index++) {
//   summer +=  find[index];
//   }
//   console.log(summer)




// function vowl (str){
//     let count = 0;
//     let vowel = "aeiou";
//     str=str.toLowerCase();
//     for(let i = 0; i < str.length;i++){
//         if(
//             str[i]===  'a' ||
//              str[i]===  'e' ||
//               str[i]=== 'i'  ||
//                str[i]=== 'o'  ||
//                 str[i]=== 'u' 
//             ) {
//                 count++;
//             }
//     }
//     return count;
// }
// console.log(vowl("aeiou"))
 

// let list = [1, 2, 2, 3, 4, 4, 5];
// let new1 = [];
// for(let i = 0 ;i < list.length;i++){
//     if(!new1.includes(list[i])){
//         new1.push(list[i]);
//     }
//     console.log(new1);
// }


// question no 1

let jofath = [1,2,3,4,5,6,7,8];
for (let index = 0; index < jofath.length; index++) {
  if (jofath[index] % 2 === 0 ) {
   console.log(jofath[index])
  }  
}

// question no 2


let ascending = [1,1,2,3,4,5,4,6,];
let asorted = [];

for (let index = 0; index < ascending.length; index++) {

 if (!asorted.includes(ascending[index])) {
  asorted.push(ascending[index])
 }
   console.log (asorted)
}
//  question no 3
let vsound = "hello word";
let cont = 0 ;

for (let index = 0; index < vsound.length; index++) {
  if (
    vsound[index] === 'a' ||
     vsound[index] === 'e' ||
      vsound[index] === 'i' ||
       vsound[index] === 'o' ||
        vsound[index] === 'u'
  ) { 
    cont++;
    
  }
 console.log(cont)
  
}
//  question no 4

let sypiliging = "madam" ;
sypiliging =sypiliging.toLowerCase();
let part = true ;
for (let index = 0; index < sypiliging.length /2; index++) {
  if (sypiliging[index] !== sypiliging[sypiliging.length-1 -index]) {
    part = false ;
    break;
  
}

};
if (part) {
  console.log("yes palindrome")
}
else {
  console.log("not palindrome")
}

// question no 5

let valyes = [22, 45, 17, 50, 31, 60];
let newvalue =[];
for (const finder of valyes) {
    if ( finder > 30) 
        newvalue.push(finder)
    
}
console.log(newvalue);

// question no 6
let list = [1, 2, 2, 3, 4, 4, 5];
let new1 = [2,4];
for(let i = 0 ;i < list.length;i++){
    if(new1.includes(list[i])){
        new1.push(list[i]);
    }
  
}
  console.log(new1);

let divisble = [6,12,18,24]
for (let index = 0; index < divisble.length; index++) {
  if (divisble[index] % 2 ===0 && divisble[index] % 3 ===0 ) {
     console.log(divisble[index]);
}
  }

    let naume = "pakistan"
    let cowt =0;
    for (let index = 0; index < naume.length; index++) {
    if (naume[index] === 'a' ||naume[index] === 'e'||naume[index] === 'i'
      ||naume[index] === 'o'||naume[index] === 'u') {
   cowt++;
    }

    }

    console.log(cowt);


let words = ["pen", "table", "fan", "bottle", "cup", "laptop", "asdfghjk"];
let g4 =[] ;
for (let index = 0; index <words.length; index++) {
if (words[index].length % 2 === 0 && words[index].length >4 ) {
  g4.push(words[index])
}

}
  console.log(g4)


 let wordss = ["pen", "table", "fan", "bottle", "cup", "laptop"];
let g41 =[] ;
for (let index = 0; index <wordss.length; index++) {
if (words[index][0] === 'a' ||
  wordss[index][0] === 'e' ||
  wordss[index][0] === 'i' ||
  wordss[index][0] === 'o' ||
  wordss[index][0] === 'u') { 
  g41.push(wordss[index])
}

}
  console.log(g41)


  let words1 = ["apple", "banana", "apple", "orange", "banana", "grape", "apple"];
let counts = {};

for (let i = 0; i < words.length; i++) {
  let word = words1[i];
  if (counts[word]) {
    counts[word] += 1;
  } else {
    counts[word] = 1;
  }
}

for (let word in counts) {
  if (counts[word] > 1) {
    console.log(word + " repeated " + counts[word] + " times");
  }
}

// Daily Temperature Logger (Array + Integer) Scenario: You’re building a weather tracking app. 
// Each day, the temperature is logged into an array. Problem:
// Write a function that takes an array of daily temperatures and returns the average 
// temperature for the week. Example: Input: [30, 32, 29, 35, 28, 31, 30] Output: 30.71


//  this is array from which we calculate average weather

 let weather = [30, 32, 29, 35, 28, 31, 30 ]
//  it is new variable whose vAlue intialy start from 0
let sum = 0;  
// this is for loop where multiple itration take place
for (let index = 0; index < weather.length; index++) {
  // this is a point where from sum variable zero value index one in arrray is added in next itration output
 sum += weather[index] ; 
}
// this is point where total sum of array is divided by array length
let average = sum / weather.length;


console.log(average)



// Message Word Counter (String) Scenario: A chat app wants to show how many words a user typed in a message.
// Problem: Write a function that counts the number of words in a sentence. Words are separated by spaces.
// Example: Input: "Hey! How are you doing today?" Output: 6

// string as array
let s1 = "Hey! How are you doing today?";
// .trim() removes extra spaces at start and end
// .split() split string in array using spaces
// .length gives numer of element
let w1 = s1.trim().split(" "); 
let wc = w1.length;
console.log(wc)









 let prices = [100, 200, 300];
  

    for (let index = 0; index < prices.length; index++) {
      let adition = prices.map(prices => prices+ 10)
      
    console.log(adition);
        
    }


    let pr =  [50, 120, 180, 90, 250];
    let re = pr 
    .filter(pr => pr > 100)
    .map(pr => pr +20)
    console.log(re);