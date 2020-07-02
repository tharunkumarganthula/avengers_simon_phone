var buttonColours =["red", "blue", "green", "yellow"];

var randomNumber;
var randomChosenColour;
var gamePattern = [];
var userChosenColour;
var userClickedPattern = []
var level = 0;
var started = false;


$(document).on("click",function(event){
    if (started == false){
        started = true;
        nextSequence();
    }
    
    
    
    
})



$(".btn").click(function(){
    userChosenColour =$(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.indexOf(userChosenColour));
})

function nextSequence(){
    userClickedPattern.length=0;
    level++;
    $("h1").text("level "+level);
    

randomNumber = Math.floor(Math.random()*4);
randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
animatePress(randomChosenColour);


}
function playSound(name){

    var pay = new Audio("sounds/"+name+".mp3");

pay.play();

}

function animatePress(currentColour){


    
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
               $("#"+currentColour).removeClass("pressed");
               //....and whatever else you need to do
       }, 100);
    
}



function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel]==gamePattern[currentLevel]){
  
    
    console.log("true");
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
}else{
    console.log("false");
    $("body").addClass("game-over");
    playSound("wrong");
   
    setTimeout(function()
    {
        $("body").removeClass("game-over");
    },
    200);
    // intervalI;
    $("h1").text("Game Over,Tap on screen to restart ");
    startOver();
}
// console.log(userClickedPattern[currentLevel]);
// console.log(gamePattern[currentLevel]);
}
function startOver(){
    level = 0;
    started =false;
    gamePattern=[];
}
