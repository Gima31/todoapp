const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById("add-btn");

function addTask() {
   if(inputBox.value === ''){
    alert("You must add something !! ");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    let span = document.createElement("span");
    span.innerHTML="X";
    li.appendChild(span);
    span.addEventListener("click", function(){
        listContainer.removeChild(li);
        saveData();
    });
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

addBtn.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



