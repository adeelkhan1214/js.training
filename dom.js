document.getElementById("heading").innerText ="hello DOM";
let s1= document.getElementsByClassName("info")
for (let index = 0; index < s1.length; index++) {
    s1[index].innerHTML= "info has been updated";
    
}
let s2 = document.getElementsByTagName("li")
for (let index = 0; index < s2.length; index++) {
   s2[index].style.backgroundColor = "white"
}
// question no 1

let togler = document.getElementById("btn");
togler.addEventListener("click", () =>  {
   document.body.style.backgroundColor = " yellow"
} )
// question no2

const list = document.getElementById('todo');

list.addEventListener('click', (e) => {

  const li = e.target.closest('li');

  
  if (!li || !list.contains(li)) return;

  
  li.remove()
});
// questuion no 3

let r = document.getElementById("never");
let user = document.getElementById("u");
let toglering = document.getElementById("s3");

toglering.addEventListener("click", (event) =>  {
    event.preventDefault();
    r.textContent = user.value;
});