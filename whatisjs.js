async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview",
        {
            headers: {
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
function copyy() {
    var text = document.getElementById("left");
    text.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
}
function copyy2() {
    var text = document.getElementById("right");
    text.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
}
function del() {
    var val = document.getElementById("left");
    val.value = '';
}
function apisokr() {
    var pole = document.getElementById("number").value;
    var val = document.getElementById("left").value;
    var text = document.getElementById("right");
    /*fetch(`http://localhost:8000/${pole}/${val}`, {mode: "no-cors"});*/
    /*query({"inputs": `Сократи следующий текст на ${pole} процентов:\n${val}. \n Сокращённый текст на русском языке: `}).then((response) => {
        str = JSON.stringify(response)
        text.innerHTML = "" + str.slice(40 + val.length, -3);
    });*/
    var res = fetch(
        "https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview",
        {
            headers: {
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": `Сократи следующий текст на ${pole} процентов:\n${val}. \n Сокращённый текст на русском языке: ` }),
        }
    ).then(res => res.json())
        .then(data => data[0])
        .then(dat => text.innerHTML = dat.generated_text);
}
function apiper() {

}
function testfetch() {

}
function sync1() {
    var pole = document.getElementById("number");
    var polz = document.getElementById("range");
    polz.value = pole.value;
}
function sync2() {
    var pole = document.getElementById("number");
    var polz = document.getElementById("range");
    pole.value = polz.value;
}


let speechSynthesis = window.speechSynthesis;
let utterance;
var isSpeak1 = false;
var isSpeak2 = false;
utterance = new SpeechSynthesisUtterance();
utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === "ru-RU" && voice.name.includes("Female"));
utterance.lang = "ru-RU";
utterance.pitch = 1; // Высота голоса
utterance.rate = 2; // Скорость речи
utterance.addEventListener("end", () => {isSpeak1 = false; isSpeak2 = false; console.log(1)})
function speakText1() {
    window.speechSynthesis.cancel();
    console.log(isSpeak1)
    if (isSpeak1) {
        isSpeak1 = false;
    }
    else {
        isSpeak1 = true;
        let text = document.getElementById("left").value;
        utterance.text = text;
        speechSynthesis.speak(utterance);
    }
}
function speakText2() {
    window.speechSynthesis.cancel();
    console.log(isSpeak2)
    if (isSpeak2) {
        isSpeak2 = false;
    }
    else {
        isSpeak2 = true;
        let text = document.getElementById("right").value;
        utterance.text = text;
        speechSynthesis.speak(utterance);
    }
}


async function get_ip() {
    var url_ip = "https://magical-gecko-trivially.ngrok-free.app";
    var ipi;
    await fetch("https://api.ipify.org?format=json")
        .then(a => a.json())
        .then(a => ipi = a.ip);
    fetch(url_ip + "/ip/" + ipi, {
        headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "true" }
    });
}
get_ip();


let sostoanie = true;
let area1 = document.getElementById('left');
let area2 = document.getElementById('file');
function files(){
    if(sostoanie){
        area1.style.display = 'none';
        area2.style.display = 'flex';
        sostoanie = false;
    }
    else{
        area1.style.display = 'block';
        area2.style.display = 'none';
        sostoanie = true;
    }
}

var fileinput = document.getElementById("fileinput");
var confirm_button = document.getElementById("confirm_button");
function fileokno() {
    fileinput.click();
}
fileinput.addEventListener("change", offer_confirm);
function offer_confirm() {
    if (fileinput.files.length) {
        confirm_button.style.display = 'block';
        confirm_button.innerText += "\n" + fileinput.files[0].name;
    }
    else {
        confirm_button.style.display = 'none';
    }
}