
let myLead = []

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){
    console.log("Button Clicked")
    // myLead.push("www.awesomsite.com")
    const inputInfo = inputEl.value; // to get a value from input field

    if(inputInfo !== "") myLead.push(inputInfo);
    
    inputEl.value = "";
    renderLeads();

})


function renderLeads(){
    let listItems = ""

    for(let i=0; i<myLead.length; ++i){
    listItems += `<li>
                        <a href='${myLead[i]}' target='_blank'>
                            ${myLead[i]}
                        </a>
                    </li>` 
    console.log(listItems)
    }
    ulEl.innerHTML = listItems;

}
