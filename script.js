// making a onload function to take name
function my_code(){
    var name=prompt("Enter your name ");
    if(name!=""){
        document.getElementById("msg").innerHTML="Hello "+name+" let's play Tic Tac Toe with Sachin Prajapati";
        document.getElementById("oppo").innerHTML=name+" symbol - X";
        document.getElementById("me").innerHTML="Sachin Prajapati symbol - O";
    }
    if(name=="" ||name==null){
       my_code();
    }
}

 window.onload=my_code();


var x=document.getElementById('X');
var o=document.getElementById('O');

var turn=document.getElementById('turn');

var player="";
var winOfX=0;
var winofO=0;
var count = 1;
function fill(control) {
    //now we are binding the condition if we fill all 9 box

    if (count <= 9) {
        if (count % 2 != 0) {
            //this will return the clicked box id because i have used this object in click function
            document.getElementById(control.id).innerHTML = "X";
            player="X Win";
        } else {
            document.getElementById(control.id).innerHTML = "O";
            player="O Win";
        }
        //toggling 
        if(document.getElementById(control.id).innerHTML=="X"){
            turn.innerHTML="O-turn"
            o.style.background="green";
            x.style.background="#fff";

        }else{
            turn.innerHTML="X-turn";
            x.style.background="green";
            o.style.background="#fff";

        }

        count++; 
        if (checkWin()) { 
            
            if(player=="X Win"){
                winOfX++;
            }else{
                winofO++;
            }
            document.getElementById('xwin').innerHTML="X-Win - "+winOfX;           
            document.getElementById('owin').innerHTML="O-Win - "+winofO;           
            turn.innerHTML=player;
            reset();
        }
    } else {
        turn.innerHTML="Game Draw";
        reset();
    }

}

//to reset  all boxes after all filled
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('box' + i).innerHTML = "";
    }
    // turn.innerHTML="X-turn"
    x.style.background="green";
    o.style.background="#fff";
    count=1; //set the value of count to 1 after reset 
}

//to check win

function checkWin() {
    if(checkCondition('box1','box2','box3') || checkCondition('box4','box5','box6') || checkCondition('box7','box8','box9') || checkCondition('box1','box4','box7') || checkCondition('box2','box5','box8') || checkCondition('box3','box6','box9') || checkCondition('box1','box5','box9') || checkCondition('box3','box5','box7')){
        return true;
    }
    
}

function getData(box){
    return document.getElementById(box).innerHTML;
}

function checkCondition(box1,box2,box3){
    if(getData(box1)!="" && getData(box2)!="" && getData(box3)!="" && getData(box1)==getData(box2) &&getData(box2)==getData(box3)){
        return true;
    }
}