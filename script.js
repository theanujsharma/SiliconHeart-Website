const myButton = document.getElementsByClassName("toggle");
const header = document.getElementsByClassName("header");
myButton[0].addEventListener("click", 
()=>{
    myButton[0].classList.toggle('active');
    header[0].classList.toggle('active');
})