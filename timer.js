// Start of .js file
function init()
{
var intervalID;//variable! not function
console.log("JS loaded");

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetTimer);
function resetTimer()
{
count = 0;//rest to 0
stopWatch.innerText = "Stop Watch";
console.log("clickReset");

}

var startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);
function startTimer ()
{
//after time delay, execute code
intervalID = window.setInterval(timer, 1000);
console.log(intervalID);
console.log("clickStart");
}

var pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', pauseTimer)
function pauseTimer ()
{
   window.clearInterval(intervalID)
console.log("clickPause");

}

var stopWatch = document.getElementById('timer');


// its a function that is fired every 1 sec as declared in setInterval
function timer ()
{
  stopWatch.innerText = "Time elapsed: " + count++;
}


var count = 0;

//checking
console.log (resetButton);
console.log (startButton);
console.log (pauseButton);
console.log (stopWatch);

};//end init
window.addEventListener("load",init,false);
