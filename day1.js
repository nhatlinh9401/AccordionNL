
var items = document.querySelectorAll(".item-header");
var menus = document.querySelectorAll(".item-menu");

items.forEach((element,index) => {
    var i = element.querySelectorAll(".item-header i");
    console.log(i);
    element.addEventListener("click", () => {
        menus[index].classList.toggle("hidden");
        i.forEach((item) => item.classList.toggle("hidden"));
    })
})