let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-game");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=
[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
      }
}
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();

};
const checkwinner=()=>{
    for(let pattern of winpatterns){
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;
       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
       }

    }
};
const resetgame=()=>{
    turn0=true;
    enabledbox();
    msgcontainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

    