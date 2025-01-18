

function wicket() {
    const wicket = document.querySelector('.wickets')
    wicket.innerHTML = Number(wicket.innerHTML) + 1;
    if(wicket.innerHTML<10){
    localStorage.setItem('wickets',wicket.innerHTML) 
}else {
        localStorage.setItem('wickets',0)
    }
}

function runSingle() {
    const run = document.querySelector('.js-run');
     run.innerHTML = Number(run.innerHTML) +1 ;
     localStorage.setItem('runs',run.innerHTML)
    
   
}


function runFour() {
    const run = document.querySelector('.js-run');
    run.innerHTML = Number(run.innerHTML) +4 ;
    localStorage.setItem('runs',run.innerHTML)
   
}

function runSix() {
    const run = document.querySelector('.js-run');
    run.innerHTML = Number(run.innerHTML) +6 ;
    localStorage.setItem('runs',run.innerHTML)
}

function ball() {
    const balls = document.querySelector('.balls');
       balls.innerHTML = Number(balls.innerHTML) + 1;
    const ballValue = balls.innerHTML;
    const overs = document.querySelector('.overs');
    //console.log(ballValue);
     if(ballValue === '6'){
       overs.innerHTML= Number(overs.innerHTML)+1;
       balls.innerHTML = 0;
     }


     localStorage.setItem('balls',balls.innerHTML)
     localStorage.setItem('overs',overs.innerHTML)
}

function End() {
    const run = document.querySelector('.js-run');
    const target = document.querySelector('.js-target');
    target.innerHTML = run.innerHTML;
    run.innerHTML = 0 ;
    const wicket = document.querySelector('.wickets')  
    wicket.innerHTML = 0;
    const balls = document.querySelector('.balls');
    balls.innerHTML=0;
    const overs = document.querySelector('.overs');
    overs.innerHTML=0;
}

function gameOver(){
const wicket = document.querySelector('.wickets');

if(wicket.innerHTML === '10') {
    const run = document.querySelector('.js-run');
    const target = document.querySelector('.js-target');
    target.innerHTML = run.innerHTML;

    localStorage.setItem('target',target.innerHTML)
    // here to write
    run.innerHTML = 0 ;
    localStorage.setItem('runs',run.innerHTML)
    const wicket = document.querySelector('.wickets')
    wicket.innerHTML = 0;

    const balls = document.querySelector('.balls');
    balls.innerHTML=0;
    const overs = document.querySelector('.overs');
    overs.innerHTML=0;
    localStorage.setItem('balls',balls.innerHTML)
    localStorage.setItem('overs',overs.innerHTML)
    
     
}
}

function refresh(){
    //wicket
    const wicket = document.querySelector('.wickets')
    const lsWicket =localStorage.getItem('wickets')
    if(lsWicket>0){
    wicket.innerHTML = lsWicket} else {
        wicket.innerHTML = 0
    }


    //runs
    const run = document.querySelector('.js-run');
    const lsRun = localStorage.getItem('runs')
    if(lsRun>0){
    run.innerHTML=lsRun;} else{ run.innerHTML=0}

    //overs
    const balls = document.querySelector('.balls');
    const overs = document.querySelector('.overs');

    const lsBalls = localStorage.getItem('balls')
    const lsOvers = localStorage.getItem('overs')

    if(lsBalls){
    balls.innerHTML= lsBalls}else{balls.innerHTML=0}
    if(lsOvers){
    overs.innerHTML = lsOvers}else{overs.innerHTML=0}


    //target
    const target = document.querySelector('.js-target');
    const lsTarget = localStorage.getItem('target')
    if(lsTarget){
        target.innerHTML = lsTarget
    }






}
refresh();