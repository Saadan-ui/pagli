
var uname = document.querySelector("#uname");
var upass = document.querySelector("#upass");
var main = document.querySelector("#main");
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
    if(uname.value.toLowerCase()=="yedpak" && upass.value.toLowerCase()=="bandri"){
        window.location=("new/new.html")
    }
});
btn.addEventListener("mousedown",function(){
    btn.style.scale="0.8";
});

btn.addEventListener("mouseup",function(){
    btn.style.scale="1";
});