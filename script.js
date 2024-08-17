console.log("Welcome to Tic Tac Toe");
//let music = new Audio("music.mp3")
let audioTurn = new Audio("Turnn.mp3");
let music = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            music.play();
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
        
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})