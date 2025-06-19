var threebar=document.getElementById("threebar")
var sidenavbar=document.getElementById("sidenavbar")
var closebar=document.getElementById("close-sidebar")
threebar.addEventListener("click",function(){
    sidenavbar.style.right="0"
})
closebar.addEventListener("click",function(){
    sidenavbar.style.right="-35%"
})