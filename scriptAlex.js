function showMessage(){
    document.getElementById("secretMessage").innerHTML="HELLO WORLD!!!!!!!!!"
}

var clicks =0;

function countClicks(){
    clicks+= 1
    document.getElementById("showClicks").innerHTML=clicks
}