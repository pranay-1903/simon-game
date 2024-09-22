let arr=["red", "blue", "green", "yellow"];
let seq=[];
let userpattern=[];

let started=false;
let level=0;

$(document).keypress(function (){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSeq();
        started=true;  
    }

});

$(".btn").click(function (){
    let usercolor=$(this).attr("id");
    userpattern.push(usercolor);

    playsound(usercolor);
    animatepress(usercolor);

    checkanswer(userpattern.length-1);

});

function checkanswer(clevel){
    if(seq[clevel] === userpattern[clevel]){
        if(userpattern.length === seq.length){
            setTimeout(function(){
                nextSeq();
            },1000);
        }
    }
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startover();
        
    }

}
function nextSeq(){
    userpattern = [];
    level++;
    $("#level-title").text("Level"+" "+level);

    let rand=Math.floor(Math.random()*4);
    let randomcolor=arr[rand];
    seq.push(randomcolor);

    $("#"+randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomcolor);
    
}
function playsound(name){
    var audio = new Audio("sounds/" +name + ".mp3");
    audio.play();

}

function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");

    },100);

}

function startover(){
    level=0;
    seq=[];
    started=false;

}






   