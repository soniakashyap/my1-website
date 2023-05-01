let score=(JSON.parse(localStorage.getItem('score'))) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

/*
if(!score)
{
score = {
  wins:0,
  losses:0,
  ties:0
};
}
*/
function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='Scissors')
{
if(computerMove ==='Rock')
  {result='You Lose';}
else if (computerMove === 'Paper')
  {result='You Win';}
else if(computerMove === 'Scissors')
  {result='Tie';}
}
else if(playerMove==='Paper')
{
if(computerMove ==='Rock')
  {result='You Win';}
else if (computerMove === 'Paper')
  {result='Tie';}
else if(computerMove === 'Scissors')
  {result='You Lose';}
}
else if(playerMove==='Rock')
{
if(computerMove ==='Rock')
  {result='Tie';}
else if (computerMove === 'Paper')
  {result='You Lose';}
else if(computerMove === 'Scissors')
  {result='You Win';}
}
if(result === 'You Win')
{score.wins ++;}
else if(result === 'You Lose')
{score.losses ++;}
else if(result === 'Tie')
{score.ties ++ ;}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result')
.innerHTML = result;

updateScoreElement();
document.querySelector('.js-moves')
.innerHTML = `You
<img src="/images/${playerMove}-emoji.png" class="move-icon">
<img src="/images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins:${score.wins}, Losses:${score.losses},Tie:${score.ties}`
}

function pickComputerMove(){

const Random=Math.random();
let computerMove='';
if(Random>=0 && Random<1/3)
{computerMove='Rock';}
else if(Random>1/3 && Random<2/3)
{computerMove='Paper';}
else if(Random>2/3 && Random<=1)
{computerMove='Scissors';}

return computerMove;

}