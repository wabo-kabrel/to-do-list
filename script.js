const inputBox = document.getElementById("input-box");   //We've created a constant and assigned it to the "input-box" we had created in our html file. We used document.getElementById bcuz we gave that input the id "input-box". If we gave it a class instead, we would've used getElementByClass="class_name"
const listContainer = document.getElementById("list-container");
 
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");   //that is, if the inputBox is empty then it shld give the message "you must write something"
    }
    else{
        let li = document.createElement("li");  //Creates a new html element with the tag name "li" and stores that element in the variable "li". Remember, "let" is used to create variables in JS.
        li.innerHTML = inputBox.value;   //adds the text we've written in the input field (which has been added to the "li variable") to the inputBox.
        listContainer.appendChild(li);   // the new "li" created is displayed under the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";      // "\u00d7" is the code for the x symbol 
        li.appendChild(span);
    }
    inputBox.value="";  // so that the input field/box becomes back empty after we've added a desired task
    saveData();    //whenever we add any task, the saveData we created right below will be called and the added task will be saved so it doesn't disappear when we refresh the browser.
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  //that is, if the clicked element is am unchecked task, it will check the task, otherwise, it will uncheck the task.
        saveData();  // calls saveData when we check or uncheck a task and the new data is saved so it doesn't disappear when the browser is refreshed.
    }
    else if(e.target.tagName === "SPAN"){    //if the clicked element is the cross(x), it will remove(delete) that task
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){   //a function which stores data so data isn't lost when the browser is refreshed
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){    // a function which enables the saved data/task to be displayed on the browser whenever the browser is opened
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); //simply calling the function