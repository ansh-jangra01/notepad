let body = document.querySelector("body");
let ThemeBtn = document.querySelector("#ThemeBtn");

let blurness = document.querySelector(".blurness");
let newNote = document.querySelector(".new-note");


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

let CancelBtn = document.querySelector("#CancelBtn");

CancelBtn.addEventListener("click", function(){
    blurness.classList.remove("active");
});



let StarIcon = document.querySelector(".StarIcon");

StarIcon.addEventListener("click", function(){
    StarIcon.className = "ri-star-fil";
})