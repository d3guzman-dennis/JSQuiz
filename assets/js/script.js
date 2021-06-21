var count1 = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var score1 = document.getElementById('mySkor');
var playerIn = document.getElementById('myInit');
var playResult = {};
var hsList = [];

var QandA = [];

var myScore = 0;

//var playerInV = localStorage.getItem('myInit');
var playerScore = localStorage.getItem('mySkor');

// Q&A Object Array
var myQuestions = [
    {
        Question: "Commonly used data types DO Not Include: ",
        Answers: {
        A: '<a href="#" class="btn btn-primary" id="Q1a">1. strings</a>',
        B: '<a href="#" class="btn btn-primary" id="Q1b">2. booleans</a>',
        C: '<a href="#" class="btn btn-primary" id="Q1c">3. alerts</a>',
        D: '<a href="#" class="btn btn-primary" id="Q1d">4. numbers</a>'
        },
        correctAnswer: "Q1c" 
        
    },
    {
        Question: "The condition in an if / else statement is enclosed with _____",
        Answers: {
        A: '<a href="#" class="btn btn-primary" id="Q2a">1. quotes</a>',
        B: '<a href="#" class="btn btn-primary" id="Q2b">2. curly brackets</a>',
        C: '<a href="#" class="btn btn-primary" id="Q2c">3. parenthesis</a>',
        D: '<a href="#" class="btn btn-primary" id="Q2d">4. square brackets</a>'
        },
        correctAnswer: "Q2c"  
    },
    {
        Question: "Arrays in JavaScript can be used to store ______",
        Answers: {
        A: '<a href="#" class="btn btn-primary" id="Q3a">1. numbers and strings</a>',
        B: '<a href="#" class="btn btn-primary" id="Q3b">2. other arrays</a>',
        C: '<a href="#" class="btn btn-primary" id="Q3c">3. booleans</a>',
        D: '<a href="#" class="btn btn-primary" id="Q3d">4. all of the above</a>'
        },
        correctAnswer: "Q3d"  
    },
    {
        Question: "String values must be enclosed within _____ when being assigned to variables.",
        Answers: {
        A: '<a href="#" class="btn btn-primary" id="Q4a">1. commas</a>',
        B: '<a href="#" class="btn btn-primary" id="Q4b">2. curly brackets</a>',
        C: '<a href="#" class="btn btn-primary" id="Q4c">3. quotes</a>',
        D: '<a href="#" class="btn btn-primary" id="Q4d">4. parenthesis</a>'
        },
        correctAnswer: "Q4c"  
    },
    {
        Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        Answers: {
        A: '<a href="#" class="btn btn-primary" id="Q5a">1. JavaScript</a>',
        B: '<a href="#" class="btn btn-primary" id="Q5b">2. terminal/bash</a>',
        C: '<a href="#" class="btn btn-primary" id="Q5c">3. for loops</a>',
        D: '<a href="#" class="btn btn-primary" id="Q5d">4. console.log</a>'
        },
        correctAnswer: "Q5d"  
    }        
  ]

  function listScore() {
    playerIn = $('#myInit').text();
    score1 = $('#mySkor').text();

    playResult = {player: playerIn, score: score1};

    localStorage.setItem('playResult', JSON.stringify(playResult));

    hsList.push(playResult);
    hsList.sort(function(a,b) { return (b.score - a.score ) });

    $('#mySkor').text(hsList[0].player + " - score: "+ hsList[0].score);
    console.log(hsList);
}

listScore();

 

//Timer starts at 180
function countdown() {
  var timeLeft = 60;

  
  var timeInterval = setInterval(function() {
   
    if (timeLeft > 0) {
     
      count1.textContent = 'Time: ' + timeLeft;
      
      timeLeft--;
    
    } else {
     
      count1.textContent = 'Time: ' + timeLeft;

      clearInterval(timeInterval);
     
      // - display high score
    }
  }, 1000);
}


score1.textContent = "Your final score is " + myScore;  
startBtn.onclick = countdown;