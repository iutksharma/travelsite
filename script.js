//login container

let loginForm1 = document.querySelector(".login-form");
let formClose1 = document.querySelector("#form-close1");
let loginbtn1 = document.querySelector("#btn1");

window.onscroll = () =>{
    loginForm1.classList.remove('active1');
}
formClose1.addEventListener('click',() =>{
    loginForm1.classList.remove('active1')
})
loginbtn1.addEventListener('click', () =>{
    loginForm1.classList.add('active1');
})

//signup container
let signupForm2 = document.querySelector(".signup-form");
let formClose2 = document.querySelector("#form-close2");
let signupbtn2 = document.querySelector("#btn2");

window.onscroll = () =>{
    signupForm2.classList.remove('active2');
}
formClose2.addEventListener('click',() =>{
    signupForm2.classList.remove('active2');
})
signupbtn2.addEventListener('click', ()=>{
    signupForm2.classList.add('active2');
})

// menu bar

let menubtn = document.querySelector(".ri-menu-line");
let menubar = document.querySelector(".menubar");

window.onscroll = () => {
    menubar.classList.remove('active3');
}
menubtn.addEventListener('click', ()=>{
        menubar.classList.toggle('active3');
})

// search bar

let searchbtn = document.querySelector(".ri-search-line");
let searchbar = document.querySelector(".searchbar");
searchbtn.addEventListener('click', ()=>{
    searchbar.classList.toggle('active4')
})

//night-mode
var icon = document.getElementById('night');

icon.onclick = function(){
document.body.classList.toggle('dark-theme');
}

