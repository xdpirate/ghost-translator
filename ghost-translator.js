function encodeGhost(humanSpeak) {
    humanSpeak = humanSpeak.trim();
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

    return ghostSpeak;
}

function decodeGhost(ghostSpeak) {
    ghostSpeak = ghostSpeak.trim();
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
                return false;
            }
        }

        humanSpeak += String.fromCharCode(parseInt(strBinary, 2) ^ 96);
    }

    return humanSpeak;
}
