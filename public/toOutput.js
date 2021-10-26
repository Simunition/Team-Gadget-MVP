function getInput(){
    var who = document.getElementById("who").value;
    var what = document.getElementById("what").value;
    var when1 = document.getElementById("when").value;
    var when2 = document.getElementById("when2").value;
    var where = document.getElementById("where").value;
    var why = document.getElementById("why").value;
    var impact = document.getElementById("impact").value;
    toOutput(who, what, when1, when2, where, why, impact);
}

function toOutput(who, what, when1, when2, where, why, impact) {
    var output = who + " " + what + " " + when1 + " " + when2 + " " + where +
        " " + why + " " + impact + " ";
    document.getElementById('output').value = output;
}