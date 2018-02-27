var ctx;
var w;
var h;
var tree;
var basket;
var apple;
var orange;
var mango;
var litchi;
var kiwi;
var wObj;
var lane;
var pos;
var diff;
var a;

window.onload = function(){
    w = 0.7 * window.innerWidth;
    h = 0.9 * window.innerHeight;
    tree = document.getElementById("tree");
    basket = document.getElementById("basket");
    apple = document.getElementById("apple");
    orange = document.getElementById("orange");
    mango = document.getElementById("mango");
    litchi = document.getElementById("litchi");
    kiwi = document.getElementById("kiwi");
    wObj = 0.25 * h;
    lane = (w-wObj)/2;
    pos = lane;
    diff = 1.25*wObj;

    document.getElementById("myCanvas").width =  w;
    document.getElementById("myCanvas").height = h;
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(tree, (w-(7*h/5))/2, 0, 7*h/5, h);
    a = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        if (pos == lane + diff){
            ctx.clearRect(pos, 2*h - 5*wObj, pos + wObj, 2*h - 5*wObj + 0.7*wObj);
            pos = lane;
            a = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else if (pos == lane){
            ctx.clearRect(pos, 2*h - 5*wObj, pos + wObj, 2*h - 5*wObj + 0.7*wObj);
            pos = lane - diff;
            a = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else{
            // Do Nothing
        }
    }
    else if (e.keyCode == '39') {
        if (pos == lane - diff){
            ctx.clearRect(pos, 2*h - 5*wObj, pos + wObj, 2*h - 5*wObj + 0.7*wObj);
            pos = lane;
            a = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else if (pos == lane){
            ctx.clearRect(pos, 2*h - 5*wObj, pos + wObj, 2*h - 5*wObj + 0.7*wObj);
            pos = lane + diff;
            a = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else{
            // Do Nothing
        }
    }
}
