function encodeGhost(humanSpeak) {
    humanSpeak = humanSpeak.trim();

    if(humanSpeak == "") {
        return "Nothing entered!";
    }

    let ghostSpeak = "";

    for(let i = 0; i < humanSpeak.length; i++) {
        let strBinary = (humanSpeak.charCodeAt(i) ^ 96).toString(2);

        for(let j = 0; j < strBinary.length; j++) {
            if(strBinary[j] == "1") {
                ghostSpeak += "O";
            } else {
                ghostSpeak += "o";
            }
        }

        if(i != humanSpeak.length) {
            ghostSpeak += " ";
        }
    }

    enableCopy();
    return ghostSpeak;
}

function decodeGhost(ghostSpeak) {
    ghostSpeak = ghostSpeak.trim();

    if(ghostSpeak == "") {
        return "Nothing entered!";
    }

    let humanSpeak = "";

    let ghostWords = ghostSpeak.split(" ");
    for(let i = 0; i < ghostWords.length; i++) {
        let strBinary = "";

        for(let j = 0; j < ghostWords[i].length; j++) {
            if(ghostWords[i][j] == "O") {
                strBinary += "1";
            } else if(ghostWords[i][j] == "o") {
                strBinary += "0";
            } else {
                return "This ghost must have a speech impediment :(\n\nGhost speech consists only of O, o, and spaces.";
            }
        }

        humanSpeak += String.fromCharCode(parseInt(strBinary, 2) ^ 96);
    }

    enableCopy();
    return humanSpeak;
}

function enableCopy() {
    document.getElementById("copyButton").style.display = "inline";
}

async function copyText() {
    let tempInput = document.createElement("input");
    tempInput.value = document.getElementById("outputArea").innerText;
    tempInput.select();
    tempInput.setSelectionRange(0,99999);
    
    try {
        await navigator.clipboard.writeText(tempInput.value);
        document.getElementById("copyButton").value = "Copied! ✓";
        
        window.setTimeout(function() {
            document.getElementById("copyButton").value = "Copy results";
        }, 3000);
    } catch (err) {
        alert("Failed to copy to clipboard: ", err);
    }
}
