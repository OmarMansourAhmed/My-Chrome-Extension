import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase,
         ref,
         push,
         onValue} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";


const firebaseConfig = {
    databaseURL: "https://leads-tracker-be701-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "Leads")


let myLead = []

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))


// if(leadsFromLocalStorage){
//     myLead = leadsFromLocalStorage;
//     render(myLead);
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        // localStorage.setItem("myLead",JSON.stringify(myLead))
        render(myLead)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    // localStorage.clear();
    myLead = []
    render(myLead);
})


inputBtn.addEventListener("click", function(){
    // console.log("Button Clicked")
    // myLead.push("www.awesomsite.com")
    const inputInfo = inputEl.value; // to get a value from input field

    if(inputInfo !== ""){
        myLead.push(inputInfo);
        push(referenceInDB, inputInfo)
    } 
    inputEl.value = "";

    // localStorage.setItem("myLead", JSON.stringify(myLead))
    // console.log(localStorage.getItem("myLead"))

    render(myLead);

})

onValue(referenceInDB, function(snapshot){
    console.log(snapshot.val());
})


function render(leads){
    let listItems = ""

    for(let i=0; i<leads.length; ++i){
    listItems += `<li>
                        <a href='${leads[i]}' target='_blank'>
                            ${leads[i]}
                        </a>
                    </li>` 
    // console.log(listItems)
    }
    ulEl.innerHTML = listItems;

}


