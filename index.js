
let myLead = ["a", "b", "c"]

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){
    console.log("Button Clicked")
    // myLead.push("www.awesomsite.com")
    const inputInfo = inputEl.value; // to get a value from input field
    myLead.push(inputInfo);
    console.log(myLead);
})


for(let i=0; i<myLead.length; ++i){
    // ulEl.textContent += myLead[i] + " ";
    ulEl.innerHTML += "<li>" + myLead[i] + "</li>" // inject html using js code
}