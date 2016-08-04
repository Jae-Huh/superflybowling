$(document).ready(function(){

  $('#bowl').click(function(){
    var score = Math.floor(Math.random() * 11);
    changeScore(score);
    numberOfBowls = numberOfBowls + 1
    totalscore = totalscore + score;

    addScore(totalscore);
    console.log(numberOfBowls)
  });

});
var numberOfBowls = 0;
var totalscore = 0;

var changeScore = function(text){
  $('#score').text(text);
};

var addScore = function(current){
  $('#totalscore').text(current);
};
