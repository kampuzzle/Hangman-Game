var wordGame = "";
var pEndG = "";
var countError = 0;

function start(){
    var arrayw = words();
    var num = getRandom(0,5);
    wordGame = arrayw[num];
    var pEnd = document.getElementById("pEnd");
    var pGame = document.getElementById("pGame");
    pEnd.style.visibility = "hidden";

    for(i = 0; i < wordGame.length; i++){
        var pD = document.createElement("p" + i);
        pD.innerText = "_";
        pGame.append(pD);
    }
}

function play(){
    var pGame = document.getElementById("pGame");
    var pEnd = document.getElementById("End");
    var pBoss = document.getElementById("pBoss");
    var txtletter = document.getElementById("txtletter");

    if(wordGame.includes(txtletter.value)){
        alert("You got it!");
        for(i = 0; i < wordGame.length; i++){
            if(wordGame[i] == txtletter.value){
                var pD = pGame.children[i];
                pD.innerText = txtletter.value;
            }
        }
    }else{
        alert("Oh-oh");
        countError += 1;
    }
    pBoss.innerHTML = getBoss();
    if(countError === 7){
        alert("You died! Game Over :(");
    }
}


function words(){
    return["cat","dog","outside","cellphone", "dress","carrot"];
}

function getRandom(min, max){
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) + min;
}

function getBoss(){
    if(countError === 0){
        return "";
    }else if(countError === 1){
        return "___<br>"
                +"| <br>";
    }else if(countError === 2){
        return "___<br>"
                +"|<br>"
                +"0<br>";
    }else if(countError === 3){
        return "___<br>"
                +"|<br>"
                +"0<br>"
                +"/<br>";
    }else if(countError === 4){
        return "___<br>"
                +"|<br>"
                +"0<br>"
                +"/<br>"
                +"/|<br>";
    }else if(countError === 5){
        return "___<br>"
                +"|<br>"
                +"0<br>"
                +"/<br>"
                +"/|<br>"
                +"/|\<br>";
    }else if(countError === 6){
        return "___<br>"
                +"|<br>"
                +"0<br>"
                +"/<br>"
                +"/|<br>"
                +"/|\<br>"
                +"|<br>";
    }else if(countError === 7){
        return "___<br>"
                +"|<br>"
                +"0<br>"
                +"/<br>"
                +"/|<br>"
                +"/|\<br>"
                +"|<br>"
                +"||<br>";
    }
}