import { searchField } from "./global-variables";
import { form } from "./global-variables";
import { vocabWord } from "./global-variables";
import { soundOutPhonetic } from "./global-variables";
import { noun } from "./global-variables";
import { nounLine } from "./global-variables";
import { playIcon } from "./global-variables";


/*API CALL*/
async function fetchVocabularyWords(searchFieldValue) {
  const apiKey = "585651c1-6ea4-4761-b3e7-d7af4eea540e";
  try {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchFieldValue}?key=${apiKey}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

/*Display words searched in the search field*/
function displayWords() {
  const promise = fetchVocabularyWords(searchField.value);
  /*Display Headword*/
  promise.then((data) => (vocabWord.textContent = data[1].hwi.hw));
  /*Display Phonetic Sound*/
  promise.then(
    (data) => (soundOutPhonetic.textContent = "/" + data[0].hwi.prs[0].mw + "/")
  );
  /*Display noun and noun-line*/
  promise.then((data) => (noun.textContent = data[0].fl));
  nounLine.style.width = "70%";
  nounLine.style.height = "0.5px";
  nounLine.style.backgroundColor = "var(--gray-num-two)";
  playIcon.style.display = "block";
}

/*Create audio on click of icon*/
function playAudio() {
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) =>
    playIcon.addEventListener("click", () => {
      const audio = new Audio(
        `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].hwi.prs[0].sound.audio[0]}/${data[0].hwi.prs[0].sound.audio}.mp3`
      );
      audio.load();
      audio.play(); 

      audio.addEventListener('ended', ()=> {
        location.reload();
      })
    })
  );
}


/*Display dictionary words and play audio onsubmit*/
form.addEventListener("submit", (event) => {
  event.preventDefault();
  displayWords();
/*Play audio on icon click*/
playIcon.addEventListener("click", playAudio());
});

//const promise = fetchVocabularyWords();
//promise.then((data) => (noun.textContent = console.log (data[0])));
//promise.then((data) => (console.log(data[0].hwi.prs[0].sound)));

/*Console Log*
    promise.then((data) => console.log((data[0].hwi.prs[0].sound.audio[0])));
    promise.then((data) => console.log((data[0].hwi.prs[0].sound.audio)));
    */

//const audio = new Audio('https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3');
//audio.play();
//new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${(data[0].hwi.prs[0].sound.audio[0])}/${(data[0].hwi.prs[0].sound.audio)}.mp3`)
