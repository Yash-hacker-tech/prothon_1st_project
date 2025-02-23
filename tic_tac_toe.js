let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let turnx = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


let count = 0;
const resetBoard = () =>
{
    turnx = true;
    count = 0;
    enableBoxes();
}

const enableBoxes = () =>
{
    boxes.forEach((box)=>
    {
        box.innerText = ".";
        box.style.backgroundColor = "rgb(255, 255, 255)";
        box.style.color = "#fff";
        box.style.textShadow = "";
        box.disabled = false;
        count = 0;
    })
}
const disableButtons = () =>
{
    boxes.forEach((box)=>
    {
        box.disabled = true;
    })
}
boxes.forEach((box, index)=>
{
    box.addEventListener("click",()=>
    {
        if(turnx)
        {
            box.innerText = "X";
            turnx = false;
        }
        else 
        {
            box.innerText = "O";
            turnx = true;
        }
        box.style.backgroundColor = "black";
        box.style.color = "rgb(255, 255, 255)";
        box.style.textShadow = "1px 1px 5px#E84481,2px 2px 10px  #E84481, 3px 3px 15px  #E84481";
        box.disabled = true;
        count++;
        checkWinner();
        if(count === 9 && checkWinner !== true)
        {
            msg.innerHTML = `game ended in draw please play again`;
            resetBoard();
        }
    })
})

const checkWinner = () =>
{
    let count = 0;
    for (let i = 0; i < winPattern.length; i++)
    {
        let [a, b, c] = winPattern[i];
        if(boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText && boxes[a].innerText!== ".")
        {
            if(boxes[a].innerText == 'O')
            {
                msg.innerHTML = `Player O wins! <br> Player X eliminated`;
            }
            if(boxes[a].innerText == 'X')
            {
                msg.innerHTML = `Player X wins! <br> Player O eliminated!`;
            }

            disableButtons();
            return true;
        }
        count++;
    }
    return false;
}