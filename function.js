//  function addition (a,b) {
//     let sum = a+b

//     console.log(sum)
// }
// addition(1,2)


//  function additions (){
//     let n1 = 1
//     let n2 = 2
//     let n3 = n1+n2
//     console.log(n3)
// }
// additions()

// // subtraction
//  function subtra (a,b) {
//     let subi = a-b

//     console.log(subi)
// }
//  subtra(2,1)


//  function minuss (){
//     let n1 = 1
//     let n2 = 2
//     let n3 = n2-n1
//     console.log(n3)
// }
// minuss()

// // multiplication

// function multip (a,b) {
//     let muliti= a*b

//     console.log(muliti)
// }
// multip(1,2)


//  function malti (){
//     let n1 = 1
//     let n2 = 2
//     let n3 = n1*n2
//     console.log(n3)
// }
// malti()

// // division
// function divission (a,b) {
//     let divi = a / b

//     console.log(divi)
// }
// divission (4,2)


//  function divisin (){
//     let n1 = 4
//     let n2 = 2
//     let n3 = n1/n2
//     console.log(n3)
// }
//  divisin()




// // arrrow function
// // addition

// add = (x,y) => {
//     let sum = x+y;
//     console.log(sum)

// }
// add (1,2)

// add = () => {
//     let n1 = 1
//     let n2 = 2 
//     let n3 =  n1+ n2
//     console.log(n3)
// }
// add ()

// // subtraction


// sub = (x,y) => {
//     let subtraction = y-x;
//     console.log(subtraction)

// }
// sub (1,2)

// sub = () => {
//     let n1 = 1
//     let n2 = 2 
//     let n3 =  n2-n1
//     console.log(n3)
// }
// sub ()



// // multiplication
// mul = (x,y) => {
//     let multi = x*y;
//     console.log(multi)

// }
// mul(1,2)

// multiplication = () => {
//     let n1 = 1
//     let n2 = 2 
//     let n3 =  n1* n2
//     console.log(n3)
// }
// multiplication  ()


// // division

// div = (x,y) => {
//     let sum = x / y;
//     console.log(sum)

// }
// div (4,2)

// division = () => {
//     let n1 = 4
//     let n2 = 2 
//     let n3 =  n1 / n2
//     console.log(n3)
// }
// division ()



// //  calculate = (x,y) => {
// //     let sum = x+y;
// //     let average1 = sum/2
// // console.log(average1)
// // }
// // calculate(22,23)



// c2 = () => {
//     let b1 = 22
//     let b2 = 23
//     sum2 = b1+b2

//      let average2 = sum2/2
// console.log(average2)
// }
// c2()

// numberType =(x) => {
//     if (x % 2 === 0) {
//         console.log("this number is even ")
//     }
//     else {
//         console.log("this numberis odd")
//     }

// }
// numberType(9)


// square = (x) => {
//     let power = x*x
//     console.log(power)
// }
// square(12)
// // large number
// larger = (x,y) => {
// let big = (x > y) ? x : y
// console.log(big)
// }
// larger(12,23)
// // array print
// let ar = [];
// lengthi = (ar) => {
//     let find = ar.length;
//     console.log(find)
// }
// lengthi([1,2,3,4,55,6])

// // string touppercase
// let teststring = "";

// uperletter = (teststring) => {
//     let actualw = teststring.toUpperCase();
//   console.log(actualw)
// }
// uperletter("adeel")

// // factorial 

// table = (x) => {
// let n1 = x*1
// let n2 = x*2
// let n3 = x*3
// let n4 = x*4
// let n5 = x*5
// let n6 = x*6
// let n7 = x*7
// let n8 = x*8
// let n9= x*9
// let n10 = x*10
// console.log(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10)
// }
// table(2)

// table = (x) =>{
//     for (let index = 1; index < 11; index++) {
//      let n2 = index *x
//      console.log(`${x} * ${index} = ${n2}`) 

        
//     }
// }
// table(2)

// eo = (x) => {
//     if (x % 2 === 0 && typeof x !== x) {
//         console.log(`this number is even = ${x}`)
//     }
//     else{
//          console.log(`this number is odd = ${x}`) 
//     }
// }
// eo(14)

// even number

even = () => {
        let count=0;
    for (let index = 1; index < 51; index++) {
    
if (index % 2 === 0) {
    console.log(`🚀 This Is Even ${index} Number `)
    count++ ;
}

    }
count++ ;
    console.log(`🚀👉 Total Even Number ${count}`)
}
even()
//  fizz,buzz,fizzbuzz

d3= (x) =>{
if (x % 3 === 0 ) {
    console.log(`🚀 ${x} is fizz`)
}
if (x % 5 ===0) {
    console.log(`🚀 ${x} IS BUZZ`)
}
if (x % 3 === 0 && x % 5 ===0) {
    console.log(`🚀👉 ${x} is fizzbuzz`)
}

}
d3(12)

// divisible by 3 and 7

d37 = () =>{
    let count = 0; 
    for (let index = 1; index < 100; index++) {
     if (index % 3 === 0 && index % 7 ===0) {
        console.log(`🚀 ${index} number divisble by both number 3,7 `)
        count++;
     }
        
    }
    console.log(`🚀👉 total number${count}`)
}
d37()