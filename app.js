let gameSq = [];
let userSq = [];

let highest = 0;

let btns = ['red','yellow','green','purple'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let h22 = document.createElement("h2");
h2.insertAdjacentElement("afterend",h22);

let body = document.querySelector("body");

let i = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game starded");
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let redIndx = Math.floor(Math.random()*4);
    let randomColor = btns[redIndx];
    gameSq.push(randomColor);
    let rbtn = document.querySelector(`.${randomColor}`);
    console.log(gameSq);
    gameFlash(rbtn);
    userSq = [];
}

function checkAns(){
    if (gameSq[i]!=userSq[i]) {
        body.classList.add("bred");
        setTimeout(function(){
            body.classList.remove("bred");
        },2000);
        started = false;
        highest = level;
        h22.innerHTML=`your highest is <b>${highest}<b>`
        h2.innerHTML=`Your score is <b>${level}<b> <br> now Press any key to again start the game`;
        level = 0;
        gameSq = [];
        userSq = [];
        console.log(gameSq);
        console.log(userSq);
    }else if(gameSq.length==userSq.length){
        i=0;
        setTimeout(levelUp,250);
    }else{
        i++;
    }
}

function btnPress(){
    userSq.push(this.classList[1]);
    console.log(userSq);
    userFlash(this);
    checkAns()
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

