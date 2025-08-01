//    conditionals and operators
   let age =23 ;
   let height =12 ;
   
   if (age ===23 || height ===12 )  {
    console.log("adeel your are building logic")
}
 else if (age <23 || height <12) {
    console.log("still strugling")
}
else if (age >23 || height >12) {
       console.log("still strugling greater")
}
else{   console.log("still facing error")}
 
// switch case
    let day = "monday";
    switch (day) {
        case"friday": 
            console.log("adeel good day")
            break;
    
        case "monday":{
            console.log("start of week")
        }
            break;
    }
// ternary operator
    let adeel = "black";
    let color = "black";
    let mix;
    mix = (adeel == color) ? "good job" : "bad job" ;
    console.log(mix);

    // loops
    for (let i = 10; i<= 10; i++) {
        console.log(i);
        
    }
    // excution context
    function adel() {
        let name = "adeel";
        console.log("hello "+ name)
        
    };
    adel();

    function sam() {
        let a = 12;
        let b = 23;
        let c = a+b;
        console.log("sum is " + c )

        
    };
    sam();
function usergreet() { 
    let salam = "adeel"; 
    function style() {
        console.log("hi "+salam);
        

        
    }
    style();
}
usergreet();


// loops
for (let ino = 0; ino <=5; ino++) {
    console.log("now  this start of your day");
    
}
let adil ={
    name: "adeel",
    adres: "kot addu multan",
    age: 12
}

for (let key in adil) {
   console.log(key  + " : " + adil[key]);
    }
// task of lops conditionals and operators 
function math(limit) {
    for (let i = limit; i <=limit; i++) {
        let type = (i % 2 === 0) ?" even " :" odd ";
       if (i % 5 === 0) {
        console.log( i + type + " is multiple of 5")
        
       }
       else{console.log( i + " is " + type)}
         
    }
    
}
math(12);

function ager(age) {
            let ager = (age>=18)? "your are eligible":"your are child";
        console.log(ager );
    }
    

ager(12);


// Step 1: Ask the user to enter 5 integers
let input = prompt("1,2,3,4,5:");
let numbers = input.split(",").map(Number); // Convert input string to array of numbers

// Step 2: Loop through array and print index + 1 for each element
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element: ${numbers[i]} — Index + 1 = ${i + 1}`);
}
