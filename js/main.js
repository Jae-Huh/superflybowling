$(document).ready(function(){

  $('#bowl').click(function(){
    var score = Math.floor(Math.random() * 11);
    changeScore(score);

    totalscore = totalscore + score;

    addScore(totalscore);
  });

});

var totalscore = 0;

var changeScore = function(text){
  $('#score').text(text);
};

var addScore = function(current){
  $('#totalscore').text(current);
};
