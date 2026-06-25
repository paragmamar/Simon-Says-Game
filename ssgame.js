let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let btns=["red","green","yellow","blue"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranindx=Math.floor(Math.random()*4);
    let rancolor=btns[ranindx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    console.log(ranindx);
    console.log(rancolor);
    console.log(ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq);
    btnFlash(ranbtn);


}

function btnpress(){
    btnFlash(this);
    console.log(this);
    let btn=this;
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    matching(userseq.length-1);
}

let buttons=document.querySelectorAll(".button");
for(btn of buttons){
    btn.addEventListener("click",btnpress);
}

function matching(idx){
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER!<br> YOUR SCORE:<b>${level}</b><br>Press any key to restart`;
        let body=document.querySelector("body");
        body.classList.add("wrong");
        setTimeout(function(){
            body.classList.remove("wrong");
        },1000);
        gameseq=[];
        userseq=[];
        level=0;
        started=false;

    }
    
}

