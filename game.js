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
var basketimg;
var appleimg;
var litchiimg;
var orangeimg;
var mangoimg;
var kiwiimg;
var catches;
var drops;
var start;
var scorecount;

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
    basketimg = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);

    catches = 0; 
    drops = 0;
    start = setInterval(RandomFruits, 750);
    scorecount = setInterval(score, 5);
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        if (pos == lane + diff){
            ctx.clearRect(pos, 2*h - 5*wObj, wObj, 0.7*wObj);
            pos = lane;
            basketimg  = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else if (pos == lane){
            ctx.clearRect(pos, 2*h - 5*wObj, wObj, 0.7*wObj);
            pos = lane - diff;
            basketimg = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else{
            // Do Nothing
        }
    }
    else if (e.keyCode == '39') {
        if (pos == lane - diff){
            ctx.clearRect(pos, 2*h - 5*wObj, wObj, 0.7*wObj);
            pos = lane;
            basketimg  = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else if (pos == lane){
            ctx.clearRect(pos, 2*h - 5*wObj, wObj, 0.7*wObj);
            pos = lane + diff;
            basketimg  = ctx.drawImage(basket, pos, 2*h-5*wObj, wObj, 0.7*wObj);
        }
        else{
            // Do Nothing
        }
    }
}

function score(){
    ctx.font="30px Arial";
    ctx.clearRect(10, 10, 50, 40);
    ctx.clearRect(200, 10, 50, 40);
    ctx.fillText(catches,10,50);
    ctx.fillText(drops,200,50);
}

function applefall(n){
    var level = 1.1 * wObj;
    var l = lane + (n-1)*diff;
    function fall(){
        if (level < 2*h - 5.4*wObj){
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            level += 5;
            appleimg = ctx.drawImage(apple, l, level, 0.4 * wObj, 0.4 * wObj);
        }
        else{
            if(l == pos){
                catches += 1;
            }
            else{
                drops += 1;
            }
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            clearInterval(a);
        }
    }
    var a = setInterval(fall, 10);
}
function orangefall(n){
    var level = 1.1 * wObj;
    var l = lane + (n-1)*diff;
    function fall(){
        if (level < 2*h - 5.4*wObj){
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            level += 5;
            orangeimg = ctx.drawImage(orange, l, level, 0.4 * wObj, 0.4 * wObj);
        }
        else{
            if(l == pos){
                catches += 1;
            }
            else{
                drops += 1;
            }
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            clearInterval(a);
        }
    }
    var a = setInterval(fall, 10);
}
function mangofall(n){
    var level = 1.1 * wObj;
    var l = lane + (n-1)*diff;
    function fall(){
        if (level < 2*h - 5.4*wObj){
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            level += 5;
            mangoimg = ctx.drawImage(mango, l, level, 0.4 * wObj, 0.4 * wObj);
        }
        else{
            if(l == pos){
                catches += 1;
            }
            else{
                drops += 1;
            }
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            clearInterval(a);
        }
    }
    var a = setInterval(fall, 10);
}
function litchifall(n){
    var level = 1.1 * wObj;
    var l = lane + (n-1)*diff;
    function fall(){
        if (level < 2*h - 5.4*wObj){
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            level += 5;
            litchiimg = ctx.drawImage(litchi, l, level, 0.4 * wObj, 0.4 * wObj);
        }
        else{
            if(l == pos){
                catches += 1;
            }
            else{
                drops += 1;
            }
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            clearInterval(a);
        }
    }
    var a = setInterval(fall, 10);
}
function kiwifall(n){
    var level = 1.1 * wObj;
    var l = lane + (n-1)*diff;
    function fall(){
        if (level < 2*h - 5.4*wObj){
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            level += 5;
            kiwiimg = ctx.drawImage(kiwi, l, level, 0.4 * wObj, 0.4 * wObj);
        }
        else{
            if(l == pos){
                catches += 1;
            }
            else{
                drops += 1;
            }
            ctx.clearRect(l, level, 0.4 * wObj, 0.4 * wObj);
            clearInterval(a);
        }
    }
    var a = setInterval(fall, 10);
}

function RandomFruits(){    
    var n = Math.floor((Math.random() * 100)%5);
    var l = Math.floor((Math.random() * 100)%3);
    
    if (drops >= 5){
        clearInterval(start);
        clearInterval(scorecount);
    }

    switch(n){
        case 0:
            applefall(l);
            break;
        case 1:
            setInterval(litchifall(l), 20);
            break;
        case 2:
            setInterval(mangofall(l), 20);
            break;
        case 3:
            setInterval(orangefall(l), 20);
            break;
        case 4:
            setInterval(kiwifall(l), 20);
            break;
    }

}
