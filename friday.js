
// let str = "amzing";
// let str1 = "boy";
// console.log(str.concat(str1));

// let str0 = "amzing";
// let str00 = "boy";
// console.log(str00.indexOf("o"));

// let adeel = [1,2,3,4,5,6];
// for (let a = 0; a < adeel.length; a++) {
  
//     console.log(adeel[a]);
// }

// var myArray = [1, 2, 3, 4, 5];
// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]+1);
// }


// question 
    let usersentence = "hello wolrd from js";
    let capitalword = usersentence
    .split(" ")
    .map( word => word.length >0 ? word[0].toUpperCase() + word.slice(1): "")
    .join(" ")
    console.log(capitalword);

let number = [1,2,3,4,5,6];
let as = number.filter(number => number % 2 ===0);
    console.log(as) ;

    //  let asan = [1,2,4,5,7,8,9]
    //   let assum = asan.reduce((accumulator,currentvalue) => accumulator+currentvalue, 0);
    //  console.log(assum);
   
let asan = [1,3,4,5,5,6,6,6];
let start = 0;
for (let i = 0; i < asan.length; i++) {
    start += asan[i];
    console.log(start)
}      

let greater = [1,2,3,4,5,6];
let maxvalue = greater[0];
for (let index = 1; index < greater.length; index++) {
    if (greater[index] >maxvalue) {
        maxvalue=greater[index]
    }
  

}
  console.log( "greatest number is"+ maxvalue)


let string = "shubhan";
let number1 = 12;
let thistrue = number1 >= 12? "true":"false";
let total = {string,number1,thistrue};
console.log(total);
    


let reverse = [1,2,3,4,5]
console.log(reverse.reverse())
