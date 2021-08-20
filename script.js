// making a onload function to take name
function my_code() {
    var name = prompt("Enter your name ");
    if (name != "") {
        document.getElementById("msg").innerHTML = `<span id="wish"></span> <span class="win-count">${name}</span>`;
        document.getElementById("oppo").innerHTML =`<strong>${name}</strong> - X`;
        document.getElementById("me").innerHTML = "<strong>Sachin Prajapati</strong>  - O";
    }
    if (name == "" || name == null) {
        my_code();
    }
}

window.onload = my_code();


var x = document.getElementById('X');
var o = document.getElementById('O');

var turn = document.getElementById('turn');

var player = "";
var winOfX = 0;
var winofO = 0;
var draw=0;
var count = 1;
function fill(control) {
    //now we are binding the condition if we fill all 9 box

    if (count <= 9) {
        if (count % 2 != 0) {
            //this will return the clicked box id because i have used this object in click function
            document.getElementById(control.id).innerHTML = "X";
            player = "X Win";
        } else {
            document.getElementById(control.id).innerHTML = "O";
            player = "O Win";
        }
        //toggling 
        if (document.getElementById(control.id).innerHTML == "X") {
            turn.innerHTML = "O-turn"
            o.style.background = "green";
            x.style.background = "#fff";
            x.style.color="#000";
            o.style.color="#fff";

        } else {
            turn.innerHTML = "X-turn";
            x.style.background = "green";
            o.style.background = "#fff";
            o.style.color="#000";
            x.style.color="#fff"

        }

        count++;
        if (checkWin()) {

            if (player == "X Win") {
                winOfX++;
            } else {
                winofO++;
            }
            document.getElementById('xwin').innerHTML = `X-Win - <span class="win-count">${winOfX}</span>`;
            document.getElementById('owin').innerHTML = `O-Win - <span class="win-count">${winofO}</span>`;
            turn.innerHTML = player;
            reset();
        }
    } else {
        draw++;
        document.getElementById('draw').innerHTML = `Draw - <span class="win-count">${draw}</span>`;
        turn.innerHTML = "Game Draw";
        reset();
    }

}

//to reset  all boxes after all filled
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('box' + i).innerHTML = "";
    }
    // turn.innerHTML="X-turn"
    x.style.background = "green";
    x.style.color="#fff"
    o.style.background = "#fff";
    o.style.color="#000";
    count = 1; //set the value of count to 1 after reset 
}

//to check win

function checkWin() {
    if (checkCondition('box1', 'box2', 'box3') || checkCondition('box4', 'box5', 'box6') || checkCondition('box7', 'box8', 'box9') || checkCondition('box1', 'box4', 'box7') || checkCondition('box2', 'box5', 'box8') || checkCondition('box3', 'box6', 'box9') || checkCondition('box1', 'box5', 'box9') || checkCondition('box3', 'box5', 'box7')) {
        return true;
    }

}

function getData(box) {
    return document.getElementById(box).innerHTML;
}

function checkCondition(box1, box2, box3) {
    if (getData(box1) != "" && getData(box2) != "" && getData(box3) != "" && getData(box1) == getData(box2) && getData(box2) == getData(box3)) {
        return true;
    }
}


window.addEventListener('load',()=>{
    liveTime();
})

function liveTime() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    let h = (date.getHours());
    let m = (date.getMinutes());
    let s = (date.getSeconds());
    let clock = `${h}:${m}:${s}`;
    let msg = document.getElementById('wish');
    if (h > 05 && h <= 12) {
        // console.log("Good Morning !!!");
        msg.innerHTML = `Hii,Good Morning <i class="material-icons">light_mode</i>`;
    } else if (h > 12 && h <= 16) {
        // console.log("Good Afternoon !!!");
        msg.innerHTML = `Hii,Good Afternoon <i class="material-icons">wb_sunny</i>`;
    } else if (h > 16 && h <= 23) {
        // console.log("Good evening !!!!");
        msg.innerHTML = `Hii,Good Evening <i class="material-icons">nightlight</i>`;
    }
    else {
        // console.log("Good evening !!!!");
        msg.innerHTML = `Hii,Good Evening <i class="material-icons">nights_stay</i>`;
    }
 
    setTimeout(liveTime, 1000);
}

