let textArea = document.querySelector("textarea");
let btn = document.querySelector("button");
let voiceOption = document.querySelector("select");

let speech = speechSynthesis;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textArea.value.trim()) {
    if (!speech.speaking) {
      textToSpeech(textArea.value);
    }
  }
});

function textToSpeech(text) {
  let utterence = new SpeechSynthesisUtterance(text);
  for (let voice of speech.getVoices()) {
    if (voice.name == voiceOption.value) {
      console.log(voice)
      utterence.voice = voice;
      
    }
  }
  speech.speak(utterence);
}

function voices() {
  for (let voice of speech.getVoices()) {
    let selected = voice.name === "Google हिन्दी" ? "selected" : "";
    let option = ` <option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceOption.insertAdjacentHTML("beforeend", option);
  }
}

speech.addEventListener("voiceschanged", voices);
