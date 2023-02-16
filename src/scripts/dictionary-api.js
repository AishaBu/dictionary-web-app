import { searchField } from "./global-variables";
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
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

/*Create audio on click of icon*/
//Moving audio value outside of function creates sound only once.
const globalAudio = new Audio(); 
function playAudio() {
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) => {
    let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].hwi.prs[0].sound.audio[0]}/${data[0].hwi.prs[0].sound.audio}.mp3`
    globalAudio.src = audioURL;
    globalAudio.play();
  });
}

/*Display words searched in the search field*/
function createDictionary() {
 const promise = fetchVocabularyWords(searchField.value);
  nounLine.style.display = 'block';
  playIcon.style.display = 'block';
  /*Display Headword*/
  promise.then((data) => (vocabWord.textContent = data[1].hwi.hw));
  /*Display Phonetic Sound*/
  promise.then((data) => (soundOutPhonetic.textContent = "/" + data[0].hwi.prs[0].mw + "/"));
  /*Display noun and noun-line*/
  promise.then((data) => (noun.textContent = data[0].fl));
  nounLine.style.width = "70%";
  nounLine.style.height = "0.5px";
  nounLine.style.backgroundColor = "var(--gray-num-two)";
  /*Play audio on icon click*/
  playIcon.addEventListener('click', () => {
    playAudio();
  }) 
}
export {createDictionary};

