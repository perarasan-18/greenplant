var threebar = document.getElementById("threebar")
var sidenavbar = document.getElementById("sidenavbar")
var closebar = document.getElementById("close-sidebar")
threebar.addEventListener("click",function(){
    sidenavbar.style.right="0"
})
closebar.addEventListener("click",function(){
    sidenavbar.style.right="-35%"
})

var productsearch = document.getElementById("product-search")
var search = document.getElementById("product-search-bar")
var productlist = productsearch.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var h1list = productlist[count].querySelector("h1").textContent
        if (h1list.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }

})