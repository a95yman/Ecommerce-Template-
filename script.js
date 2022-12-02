var items = document.getElementsByTagName("li");
var cursor = document.getElementById("cursor");
for(var i=0;i<items.length - 1;i++){
    RENDER(items[i]);
}
function RENDER(item){
    item.onmouseover=function(){
        cursor.style.top=item.offsetTop+"px";
    };
}
var cats = document.getElementsByClassName("cat");
var arrow = document.getElementById("arrow");
for(var i=0;i<cats.length;i++){
    RENDER2(cats[i]);
}
function RENDER2(item){
    item.onmouseover=function(){
        arrow.style.left=item.offsetLeft+"px";
    };
}
var products = document.getElementsByClassName("product");
var intr = 500;
function ANIMATE1(item, i){
    setTimeout(function(){
        item.style.opacity="1";
        item.style.left="0";
    }, i);
}
var purchases = document.getElementsByClassName("purchase");
var intr2 = 500;
function ANIMATE2(item, i){
    setTimeout(function(){
        item.style.opacity="1";
        item.style.top="0";
    }, i);
}

window.addEventListener("load", function(){
   for(var i=0;i<products.length;i++){
    ANIMATE1(products[i], intr);
    intr+=100;
}
   for(var i=0;i<purchases.length;i++){
    ANIMATE2(purchases[i], intr2);
    intr2+=100;
}
});
var i = 0;
function TOGGLE(){
    if(i==0)
        {
            i=1;
            document.getElementById("container").style.width="100%";
            document.getElementById("container").style.height="100%";
            document.getElementById("container").style.borderRadius="0";
        }
    else {
            i=0;
            document.getElementById("container").style.width="85%";
            document.getElementById("container").style.height="85%";
            document.getElementById("container").style.borderRadius="10px";
    }
}