// selecting the buttons using querrySelectorAll with the help of the class name.
const buttons = document.querySelectorAll('.btnn');
const buttonsr = document.querySelector('.rstbtn');
const buttonNew = document.querySelector('.newGame');
const heading   = document.querySelector('p');

let toggle = true;
// using forEach loop for selecting all buttons (we have to use loop for selecting all buttons)
let pattern = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
              ]


buttons.forEach(button => {
    button.addEventListener('click',()=>{

        if(toggle==true){
            button.innerText = "x";
            toggle = false;
            

        
        }
        else{
            button.innerText = "o";
             toggle = true;
        }
// used for disabling any button after every click. means a button that had already clicked
//  will not be clicked.
        button.disabled = true;
        
        checkWinner();

    });
});

const checkWinner = ()=>{
    for(win of pattern){
          let value1 =  buttons[win[0]].innerText;
          let value2 =  buttons[win[1]].innerText;
          let value3 =  buttons[win[2]].innerText;

          if(value1!="" & value2!="" & value3!=""){
            if(value1 == value2 & value2 == value3){
                document.querySelector("p").innerText=`congratualation! ${value1} you are the winner`;
                disableBoxes();
                heading.style.fontSize = "40px";
                heading.style.color = "red";
            }
          }
    }
   }
// this function is  made for disable buttons after any person win the match;
 const disableBoxes = ()=>{ 
          for(dis of buttons){
            dis.disabled= true;
          }

}
// it is used for the new game button . it will actice all button and empty their innerText;
 const newgame = ()=>{
     for(btns of buttons){
        btns.disabled = false;
        btns.innerText = "";
        heading.innerText = "";
     }
 }

 buttonNew.addEventListener('click',newgame);

 // it is used to activate the reset button . it empty the inner text of the buttons;
const reset = ()=>{
    for (btn of buttons){
        btn.innerText = "";
    }
}
buttonsr.addEventListener('click',reset);