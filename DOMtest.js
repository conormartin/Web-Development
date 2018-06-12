// // selects element with id 'header'
// var tag = document.getElementById("header");

// // selects all elements in class 'className'
// var tags = document.getElementsByClassName("className");

// //selects all with li tags and returns them in a list, use [num] to access specific object in list
// var tagname = document.getElementsByTagName("li")

// // querySelector can select first element of given selector, can be any type (class, id, etc) 
// // 1st selects an id, 2nd selects anchor tags of class special inside an li, 3rd selects all bolded text
// var body = document.querySelector("#idName");
// var li = document.querySelector("li a.special");
// var body = document.querySelectorAll("bolded");

// toggles background image using boolean value
var button = document.querySelector("button");
// var isPurple = false;
// button.addEventListener("click",function(){
//     if(isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     }
//     else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });

// toggles css property on and off (in html head)
button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});