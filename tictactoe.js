let buttons = document.querySelectorAll(".button") ; 
let winPatterns = [
    [0,1,2] , 
    [0,3,6]  , 
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] , 
    [2,4,6] ,
    [3,4,5] , 
    [6,7,8] 
] ; 
let winner = document.querySelector("#winner") ;
let disab = ()=>
{
    for(button of buttons)
    {
        button.disabled = true ; 
    }
}
function showWinner(element)
{
    winner.innerText = `Winner !!! ${element}` ; 
    disab() ; 
}
const checkWinner = () =>
{
    for(let pattern of winPatterns)
    {
        let pos1 = buttons[pattern[0]].innerText ; 
        let pos2 = buttons[pattern[1]].innerText ; 
        let pos3 = buttons[pattern[2]].innerText ; 
        if(pos1 != "" && pos2 !="" && pos3 !="" )
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                showWinner(pos1) ; 
            }
        }
    }
}
let turn0 = true ; 
buttons.forEach((button) =>
{
    button.addEventListener("click" ,() =>
    {
        if(turn0)
        {
            button.innerText = "X"  ; 
            turn0 = false  ; 
        } 
        else
        {
            button.innerText = "0" ; 
            turn0 = true ; 
        }
        if(button.innerText == "X" || button.innerText == "0")
        {
            button.disabled = true ; 
        }
        checkWinner() ; 
    }) ;
})
let enab = () =>
{
    for(button of buttons)
    {
        button.disabled = false ; 
    }
}
const resetGame = () =>
{
    turn0 = true ;
    enab() ; 
    for(button of buttons)
    {
        button.innerText = "" ; 
    }
    winner.innerText = "" ; 
}
let reset = document.querySelector(".resetbtn") ; 
reset.addEventListener("click",resetGame) ;
let newbtn = document.querySelector(".newbtn") ;
newbtn.addEventListener("click",resetGame) ;  