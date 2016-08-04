var numberOfBowls = 0;
var numberOfRounds = 0;
var totalScore = 0;
var scoreBoard = [];

var updateScores = function(score) {
  changeScore(score);

  totalScore = totalScore + score;
  addScore(totalScore);
}

var updateScoreBoard = function(score) {
  if (numberOfBowls % 2 !== 0) {
    var scoreObject = {};
    scoreObject.round1 = score;
    scoreObject.totalScore = totalscore
    scoreBoard.push(scoreObject);
  } else {
    console.log('update scoreboard', scoreBoard, numberOfRounds)
    scoreBoard[numberOfRounds].round2 = score
    scoreBoard[numberOfRounds].totalScore = totalScore
    numberOfRounds = numberOfRounds + 1
  }
  saveTextScoreboard(scoreBoard)

  console.log('scoreBoard', scoreBoard);
}

var checkIfGameOver = function() {
  if (numberOfBowls  === 6) {
    console.log('Game over. Thanks for playing. You score was ' + totalScore + '.');
  };
}

var changeScore = function(text){
  $('#score').text(text);
};

var addScore = function(current){
  $('#totalscore').text(current);
};

var saveTextScoreboard = function(scoreboard){
  var text = ""
  scoreboard.forEach(function(scoreObj) {
    text = text + ' ' + scoreObj.round1
    if (scoreObj.round2 !== undefined) {
      text = text + ' ' + scoreObj.round2
    }
    text = text + ' | '
  })
  $('#scoreboard').text(text);
};

$(document).ready(function(){
  $('#bowl').click(function(){
    var score = Math.floor(Math.random() * 11);
    numberOfBowls = numberOfBowls + 1
    updateScores(score)
    updateScoreBoard(score)
    checkIfGameOver()
  });
});
