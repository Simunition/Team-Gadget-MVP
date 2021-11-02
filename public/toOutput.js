function getInput(){
    var intro = document.getElementById("intro").value;
    var who = document.getElementById("who").value;
    var what = document.getElementById("what").value;
    var when1 = document.getElementById("when").value;
    var when2 = document.getElementById("when2").value;
    var where = document.getElementById("where").value;
    var why = document.getElementById("why").value;
    var impact = document.getElementById("impact").value;
    var additional = document.getElementById("additional").value;
    toOutput(intro, who, what, when1, when2, where, why, impact, additional);
}

function toOutput(intro, who, what, when1, when2, where, why, impact, additional) {
    var output = intro + "" + who + " " + what + " " + when1 + " " + when2 + " " + where +
        " " + why + " " + impact + " " + additional + ".";
    document.getElementById('output').value = output;
}

// function submitData() {
//     var who = document.getElementById("who").value;
//     var what = document.getElementById("what").value;
//     var when1 = document.getElementById("when").value;
//     var when2 = document.getElementById("when2").value;
//     var where = document.getElementById("where").value;
//     var why = document.getElementById("why").value;
//     var impact = document.getElementById("impact").value;
//     var additional = document.getElementById("additional").value;
//     var output = document.getElementById("output").value;

//     data = {who, what, when1, when2, where, why, impact, additional, output}

//     const options = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };

//     const response = await fetch('/api', options);
//     const json = await response.json();
//     console.log(json);
// }