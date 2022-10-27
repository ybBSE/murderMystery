const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

let audio = new Audio('ScaryNightParty.mp3');
let rickAudio = new Audio('rick.mp3');
let a = document.querySelector(".masterContainer");
let b = document.querySelector(".questionContainer");

function test(){
    audio.play();
    $(".masterContainer").css("display", "none");
    $(".questionContainer").css("display", "block");

    runTimeLine();
}

function runTimeLine(){
    tl.to(".test", {opacity:0, duration:3});
    tl.to(".test", {display:'none'});
    tl.to(".clown", {display:'block', duration:0.1}) ;
    tl.to(".clown", {display:'none'}) ;
    tl.to(".testB", {display:'block'}) ;
    tl.to(".testB", {opacity:1, duration:3});
    tl.to(".testB", {opacity:0, duration:3});
    tl.to(".questions", {display:'none'}) ;
    tl.to(".answerQuestion", {display:'block'}) ;
}

function audioHandler(){
    audio.pause();
    audio.currentTime = 0;
    rickAudio.play();
    $(".answerQuestion").css("display", "none");
    $(".rickRolled").css("display", "block");
}
