function setWColors(sound, aud) {
    document.getElementById(sound).style.backgroundColor="grey";
    aud.onended = function() {
        document.getElementById(sound).style.backgroundColor="white";
    };
}
function setBColors(sound, aud) {
    document.getElementById(sound).style.backgroundColor="grey";
    aud.onended = function() {
        document.getElementById(sound).style.backgroundColor="black";
    };
}

document.addEventListener("keydown", function(e) {
    let audio = new Audio("sounds/A.mp3");
    let audio1 = new Audio("sounds/S.mp3");
    let audio2 = new Audio("sounds/D.mp3");
    let audio3 = new Audio("sounds/F.mp3");
    let audio4 = new Audio("sounds/G.mp3");
    let audio5 = new Audio("sounds/H.mp3");
    let audio6 = new Audio("sounds/J.mp3");
    let audio7 = new Audio("sounds/W.mp3");
    let audio8 = new Audio("sounds/E.mp3");
    let audio9 = new Audio("sounds/T.mp3");
    let audio10 = new Audio("sounds/Y.mp3");
    let audio11 = new Audio("sounds/U.mp3");

    switch (e.code) {
        case "KeyA":
            console.log("The 'A' key is pressed.");
            audio.play();
            setWColors("A", audio);
            break;
        case "KeyS":
            console.log("The 'S' key is pressed.");
            audio1.play();
            setWColors("S", audio1);
            break;
        case "KeyD":
            console.log("The 'D' key is pressed.");
            audio2.play();
            setWColors("D", audio2);
            break;
        case "KeyF":
            console.log("The 'F' key is pressed.");
            audio3.play();
            setWColors("F", audio3);
            break;
        case "KeyG":
            console.log("The 'G' key is pressed.");
            audio4.play();
            setWColors("G", audio4);
            break;
        case "KeyH":
            console.log("The 'H' key is pressed.");
            audio5.play();
            setWColors("H", audio5);
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed.");
            audio6.play();
            setWColors("J", audio6);
            break;
        case "KeyW":
            audio7.play();
            setBColors("W", audio7);
            break;
        case "KeyE":
            audio8.play();
            setBColors("E", audio8);
            break;
        case "KeyT":
            audio9.play();
            setBColors("T", audio9);
            break;
        case "KeyY":
            audio10.play();
            setBColors("Y", audio10);
            break;
        case "KeyU":
            audio11.play();
            setBColors("U", audio11);
            break;
        default:
            console.log("Error")
    }
    
})