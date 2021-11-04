function getInput(){
    const intro = document.getElementById("intro").value;
    const who = document.getElementById("who").value;
    const what = document.getElementById("what").value;
    const when1 = document.getElementById("when1").value;
    const when2 = document.getElementById("when2").value;
    const where = document.getElementById("where").value;
    const why = document.getElementById("why").value;
    const impact = document.getElementById("impact").value;
    const additional = document.getElementById("additional").value;
    toOutput(intro, who, what, when1, when2, where, why, impact, additional);
}

function toOutput(intro, who, what, when1, when2, where, why, impact, additional) {
    const output = intro + " " + who + " " + what + " " + when1 + " " + when2 + " " + where +
        " " + why + " " + impact + " " + additional + ".";
    document.getElementById('output').value = output;
}

async function submitData() {

    const frm = document.getElementById('writeupform')[0];

    if (validateForm()) {
        const type = document.querySelector('input[name="type"]:checked').value;
        const severity = document.querySelector('input[name="severity"]:checked').value;
        const reference = document.getElementById("reference").value;
        const intro = document.getElementById("intro").value;
        const who = document.getElementById("who").value;
        const what = document.getElementById("what").value;
        const when1 = document.getElementById("when1").value;
        const when2 = document.getElementById("when2").value;
        const where = document.getElementById("where").value;
        const why = document.getElementById("why").value;
        const impact = document.getElementById("impact").value;
        const additional = document.getElementById("additional").value;
        const output = document.getElementById('output').value;
        const data = {type, severity, reference, intro, who, what, when1, when2, where, why, impact, additional, output};
        const options = {
            method:'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const responseData = await response.text();
        console.log(responseData);
        alert('Submission Successful, Thank You!');
    } else {
        alert('Please fill out all mandatory fields marked with *');
    }
}

function validateForm() {
    const intro = document.getElementById("intro").value;
    const who = document.getElementById("who").value;
    const what = document.getElementById("what").value;
    const when1 = document.getElementById("when1").value;
    const where = document.getElementById("where").value;
    const why = document.getElementById("why").value;
    const impact = document.getElementById("impact").value;
    const output = document.getElementById('output').value;

    const inputArray = [intro, who, what, when1, where, why, impact, output];


    for (const item of inputArray) {
        if (item == "") {
            return false;
        }
    }
    return true;
}

function getHelp() {
    alert('The purpose of this form is to guide the user to a constructive input for a write-up. Enter the appropriate information into each of the fields and click "Update" to populate the output box. Further edit the output for clarity. The additional box is for any additional comments you would like to make outside of the constructed output. Additionally, you can hover over any of the input fields for specific instructions on how to fill out that field.');
}

function resetForm() {
    const reference = document.getElementById("reference").value;
    const intro = document.getElementById("intro").value;
    const who = document.getElementById("who").value;
    const what = document.getElementById("what").value;
    const when1 = document.getElementById("when1").value;
    const when2 = document.getElementById("when2").value;
    const where = document.getElementById("where").value;
    const why = document.getElementById("why").value;
    const impact = document.getElementById("impact").value;
    const additional = document.getElementById("additional").value;
    const output = document.getElementById('output').value;

    const inputArray = [reference, intro, who, what, when1, when2, where, why, impact, additional, output];

    for (const item of inputArray) {
        item = "";
    }

}