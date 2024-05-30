clicks = 0;
var coder = 0;
amount = 1;
function play() {
    window.location = "index.html";
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
}
function clickMe() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    clicks += amount;
    console.log("cncn")
    document.getElementById("lbl").innerHTML = "You have " + clicks + " clicks";
    document.getElementById("zxyzx").innerHTML = "<audio controls autoplay ><source src='mixkit-arcade-game-jump-coin-216.wav'> type='any'</audio>";
}
function click1() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    if (clicks >= 50) {
        document.getElementById("1111").innerHTML = "";
        amount += 1;
        clicks -= 50;
    } if (clicks < 50) {
        setTimeout(function () { document.getElementById("1111").innerHTML = "You don't have enough clicks!!!" }, 2000);
    }

}
function click10() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    if (clicks >= 500) {
        document.getElementById("1111").innerHTML = "";
        amount += 10;
        clicks -= 500;
    } if (clicks < 500) {
        setTimeout(function () { document.getElementById("10101010").innerHTML = "You don't have enough clicks!!!" }, 2000);
    }
}
function click100() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    if (clicks >= 10000) {
        document.getElementById("1111").innerHTML = "";
        amount += 100;
        clicks -= 10000;
    } if (clicks < 10000) {
        setTimeout(function () { document.getElementById("100100100100").innerHTML = "You don't have enough clicks!!!" }, 2000);
    }
}

function doubleClick() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    if (clicks >= 50000) {
        document.getElementById("1111").innerHTML = "";
        amount *= 2;
        clicks -= 50000;
    } if (clicks < 50000) {
        setTimeout(function () { document.getElementById("dddd").innerHTML = "You don't have enough clicks!!!" }, 2000);
    }
}
var cp
cp = 0
function secret() {
    document.getElementById("hhh").innerHTML = "Your click value:" + amount;
    amount *= 1000000000000000000;
    if (clicks >= 1000000000000000000) {
        document.getElementById("lbl").innerHTML = "<h1>You have Infinite clicks. You have beaten button clicker.Well done.</h1>";
        coder += 2;
    };
}
document.getElementById("hhh").innerHTML = "Your click value:" + amount;
function code() {
    if (coder >= 2) {
        document.getElementById("ccc").innerHTML = "";
        window.location = "gdjf.html";
    } else {
        document.getElementById("ccc").innerHTML = "You are not ready. You need Infinite clicks to proceed.";
    }

}
function cps() {
    if (amount >= 10) {
        cp += 1
        setInterval(function () { clicks += cp, document.getElementById("lbl").innerHTML = "You have " + clicks + " clicks" }, 1000)
        amount -= 10;
    }
    if(amount < 10){
        setTimeout(function () { document.getElementById("ajfi").innerHTML = "You don't have enough click value!!!" }, 2000);
    }
}
