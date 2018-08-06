var button = document.getElementById('btn');
var buttonReset = document.getElementById('btnReset');
var buttonNone = document.getElementsByClassName('flexButtonNone');
var butNo = document.getElementById('buttonNo');
var butYes = document.getElementById('buttonYes');

var str = '';
var x1 = 0,
    y1 = 0;

butYes.addEventListener('click', thankYou);
button.addEventListener('click', obtainmentValue);
buttonReset.addEventListener('click', reset);

function translator(a) {
    var substringArray = a.split(" ");
    var str = '';
    for (var i = 0; i < substringArray.length; i++) {
        var sub2 = substringArray[i].split("/");
        for (var j = 0; j < sub2.length; j++) {
            str += (String.fromCharCode(+sub2[j] + 1071));
        }
        str += " ";
    }
    return str;
}

function reset() {
    str = '';
    document.getElementById('collapse').innerHTML = str;
    buttonNone[0].style.display = "none";
}

function obtainmentValue() {
    var input = document.getElementById('inputValue').value;
    str += translator(input) + " ";
    document.getElementById('collapse').innerHTML = str;
    if (str == 'пойдешь со мной на сведание?  ') {
        buttonNone[0].style.display = "flex";
    }
}

function moveIt() {
    var x = Math.floor(Math.random() * 200);
    var y = Math.floor(Math.random() * 200);
    while (Math.abs(x1 - x) <= 70) { x = Math.floor(Math.random() * 200); }
    while (Math.abs(y1 - y) <= 50) { y = Math.floor(Math.random() * 200); }
    x1 = x;
    y1 = y;
    butNo.style.top = y + "px";
    butNo.style.left = x + "px";
}


function thankYou() {
    document.getElementsByClassName('flexWrap')[0].style.display = "none";
    document.getElementById('carouselExampleIndicators').style.display = "block";
    document.getElementById('collapse2').innerHTML = "Отлично! тогда наше сведание пройдёт в пятницу.";
}
