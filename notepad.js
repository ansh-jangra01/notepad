let body = document.querySelector("body");
let ThemeBtn = document.querySelector("#ThemeBtn");

let cardContainer = document.querySelector(".card-container");

let blurness = document.querySelector(".blurness");
let newNote = document.querySelector(".new-note");
let CancelBtn = document.querySelector("#CancelBtn");


let submitBtn = document.querySelector("#submitBtn");
let inputvalue = document.querySelector("#tite");
let textarea = document.querySelector("#textArea");

let overlay = document.querySelector(".overlay");
let customAlert = document.querySelector("#customAlert")
let alertOk = document.querySelector("#alertOk");

let incrCounting = document.querySelector("#incrCounting");
let AlreadySavedNotes = Number(incrCounting.textContent);

let allfavouties = document.querySelectorAll(".StarIcon");

let SubmitMsg = document.querySelector(".submit-done");
let deletedone = document.querySelector(".delete-done");
let Removebtn = document.querySelectorAll(".removeCard");

let filterbtns = document.querySelectorAll(".filter-btn");

let editCard = document.querySelectorAll(".editCard");
let editBlurness = document.querySelector(".edit-blurness");

let editTitleInput = document.querySelector("#editTitle");
let editTextArea = document.querySelector("#editTextArea");

let discardChanges = document.querySelector("#discardChanges");
let saveChanges = document.querySelector("#saveChanges");

let editoverlay = document.querySelector(".edit-overlay");
let editalertOk = document.querySelector("#editalertOk");
let EditcustomAlert = document.querySelector("#EditcustomAlert");


let savedTheme = localStorage.getItem("theme");

ThemeBtn.addEventListener("click", function(){
    body.classList.toggle("light-mode");
    
    if(body.classList.contains("light-mode")){
        ThemeBtn.classList.add("ri-moon-fill");
        ThemeBtn.classList.remove("ri-sun-line");
        localStorage.setItem("theme", "light");
    }
    else{
        ThemeBtn.classList.remove("ri-moon-fill");
        ThemeBtn.classList.add("ri-sun-line");
        localStorage.setItem("theme", "dark");
    }
});

if(savedTheme === "light"){
    document.body.classList.add("light-mode");
    ThemeBtn.classList.add("ri-moon-fill");
    ThemeBtn.classList.remove("ri-sun-line");
}
else{
    document.body.classList.remove("light-mode");
    ThemeBtn.classList.remove("ri-moon-fill");
    ThemeBtn.classList.add("ri-sun-line");
}





// create new note in backend

newNote.addEventListener("click", function(){
    blurness.classList.add("active");
});


CancelBtn.addEventListener("click", function(){
    blurness.classList.remove("active");
    inputvalue.value = "";
    textarea.value = "";
});




submitBtn.addEventListener("click", function(){

    let noteTitle = inputvalue.value.trim();
    let noteDiscription = textarea.value.trim();

    if(noteTitle !== "" && noteDiscription !== ""){

        let card = document.createElement("div");
        card.classList.add("card");

        let cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");

        let h3 = document.createElement("h3");
        h3.textContent = noteTitle;

        let icon = document.createElement("i");
        icon.classList.add("ri-star-line");

        let p = document.createElement("p");
        p.textContent = noteDiscription;

        let edit = document.createElement("p");
        edit.classList.add("edited");
        edit.textContent = "Last edited just now";

        let buttonDiv =  document.createElement("div");
        buttonDiv.classList.add("delete-btn");

        let DeleteBtn = document.createElement("button");
        DeleteBtn.textContent = "Delete";

        let editBtn = document.createElement("button");
        editBtn.innerHTML = `<i class="ri-pencil-fill"></i> Edit`;  

        card.appendChild(cardTitle);
        cardTitle.appendChild(h3);
        cardTitle.appendChild(icon);
        card.appendChild(p);
        card.appendChild(edit);
        card.appendChild(buttonDiv);
        buttonDiv.appendChild(DeleteBtn);
        buttonDiv.appendChild(editBtn);

        cardContainer.prepend(card);

        AlreadySavedNotes++;
        incrCounting.textContent = AlreadySavedNotes;
        SubmitMsg.classList.add("active");

        setTimeout(() => {
            SubmitMsg.classList.remove("active");
        }, 1500);

        blurness.classList.remove("active");
        inputvalue.value = "";
        textarea.value = "";
    }
    else{
        overlay.classList.add("active");
        customAlert.classList.add("active");
    }
});






// alert aayega jab input empty ho....

alertOk.addEventListener("click", function(){
    overlay.classList.remove("active");
    customAlert.classList.remove("active")
});


Removebtn.forEach(function(button){

    button.addEventListener("click", function(){

        button.closest(".card").remove();
        AlreadySavedNotes--;
        incrCounting.textContent = AlreadySavedNotes;

        deletedone.classList.add("active");

        setTimeout(() => {
            deletedone.classList.remove("active");
        }, 1500);
        
    });
});






// clickable filter buttons 



filterbtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        filterbtns.forEach(function(button){
            button.classList.remove("active");
        });
        btn.classList.add("active")
    });
});




// mark as favourite 


allfavouties.forEach(function(fav){

    fav.addEventListener("click", function(){
        if(fav.classList.contains("ri-star-line")){

            fav.classList.remove("ri-star-line");
            fav.classList.add("ri-star-fill")
        }
        else{
            fav.classList.remove("ri-star-fill");
            fav.classList.add("ri-star-line");
        }
    });
});







editCard.forEach(function(editBtn){

    editBtn.addEventListener("click", function(){
        editBlurness.classList.add("active")
    });
});

discardChanges.addEventListener("click", function(){
    editBlurness.classList.remove("active");
});

saveChanges.addEventListener("click", function(){

    if(editTitleInput.value.trim() === "" || editTextArea.value.trim() === ""){
        editoverlay.classList.add("active");
        EditcustomAlert.classList.add("active")
    }
    
});

editalertOk.addEventListener("click", function(){
    editoverlay.classList.remove("active");
    EditcustomAlert.classList.remove("active");
});

