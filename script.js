const R = document.getElementById('rock');
const P = document.getElementById('paper');
const S = document.getElementById('scis');

const machineAnswer = document.querySelector('.machine');
const result = document.querySelector('.result');
const choices = ["Scissors","Rock","Paper",];

const Win = document.querySelector('.win');
const Loose = document.querySelector('.loose');

let score_win = 0;
let score_loose = 0;

P.addEventListener("click", () => fight(3));
R.addEventListener("click", () => fight(2));
S.addEventListener("click", () => fight(1));




function fight(player){
    const re = check(player, machinePick());
    if(re === undefined) result.textContent = "Tie";
    else if(re){
        result.textContent = "Win";
        playerScore(1);
    }
    else {
        result.textContent = "Loose";
        playerScore();
    }
    if( isEnd() ){
        let inform = (score_win > score_loose) ? "You Win" : "You Loose";
        alert(inform);
        reset();
    }
}
function machinePick(){
    let pos = Math.floor(Math.random()*3);
    let machine = choices[pos];
    machineAnswer.textContent = machine;
    return pos+1;
}
function check(player, machine){
    if(player == machine) return;
    if(player == 1 && machine == 3) return true;
    if(player == 3 && machine == 1) return false; 
    if(player > machine) return true;
    return false;
}

function playerScore(re=0){
    if(re == 1){
        score_win++;
        Win.textContent = score_win;
    }
    else{
        score_loose++;
        Loose.textContent = score_loose;
    }
}
function isEnd(){
    if(score_win == 5 || score_loose == 5) return true;
    return false;
}
function reset(){
    score_loose = 0;
    score_win = 0;
    Win.textContent = score_win;
    Loose.textContent = score_loose;
    machineAnswer.textContent = "";
    result.textContent = "";
}