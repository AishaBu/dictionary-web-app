import { searchField} from "./global-variables";
import { vocabWord } from "./global-variables";
import { soundOutPhonetic } from "./global-variables";
import { noun } from "./global-variables";
import { nounLine } from "./global-variables";
import { playIcon } from "./global-variables";
import { meaningText } from "./global-variables";
import { defOne, defTwo, defThree, defList } from "./global-variables";
import { synonymsText,synonymOne, synonymTwo, synonymThree} from "./global-variables";

/*API CALL*/
/*Dictionary Api Call*/
async function fetchVocabularyWords(searchFieldValue) {
  const apiKeyDictionary = process.env.DICTIONARY_API_KEY;
  try {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchFieldValue}?key=${apiKeyDictionary}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

/*Thesaurus Api Call*/
async function fetchSynonymsThesaurus(searchFieldValue) {
  const apiKeyThesaurus = process.env.THESAURUS_API_KEY;
  try {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json//${searchFieldValue}?key=${apiKeyThesaurus}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

/*Create audio on click of icon*/
//Moving audio value outside of function creates sound only once.
const globalAudio = new Audio();
function playAudio() {
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) => {
    let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].hwi.prs[0].sound.audio[0]}/${data[0].hwi.prs[0].sound.audio}.mp3`;
    globalAudio.src = audioURL;
    globalAudio.preload = "none";
    globalAudio.play();
  });
}

/*Check if no data is available for list*/
function checkIfNoDataEmptyList() {
  const promise = fetchVocabularyWords(searchField.value);
  /*If data for defone is empty*/
  promise.then((data) => {
    if (data[0].shortdef[0] == undefined) {
      defOne.style.display = "none";
    } else {
      defOne.style.display = "block";
    }
  });

  /*If data for deftwo is empty*/
  promise.then((data) => {
    if (data[0].shortdef[1] == undefined) {
      defTwo.style.display = "none";
    } else {
      defTwo.style.display = "block";
    }
  });

  /*If data for defthree is empty*/
  promise.then((data) => {
    if (data[0].shortdef[2] == undefined) {
      defThree.style.display = "none";
    } else {
      defThree.style.display = "block";
    }
  });
}

/*Capitalize First Letter of each paragraph*/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*Create Definitions List*/
function createList() {
  const promise = fetchVocabularyWords(searchField.value);
  meaningText.textContent = "Meaning";
  defList.style.display = "block";

  /*Definitions List*/
  promise.then(
    (data) => (defOne.textContent = capitalizeFirstLetter(data[0].shortdef[0]))
  );
  promise.then(
    (data) => (defTwo.textContent = capitalizeFirstLetter(data[0].shortdef[1]))
  );
  promise.then(
    (data) =>
      (defThree.textContent = capitalizeFirstLetter(data[0].shortdef[2]))
  );
  checkIfNoDataEmptyList(); //Checks if data/list is empty
}

/*Display Synonyms*/
function displaySynonyms() {
  const promise = fetchSynonymsThesaurus(searchField.value);
  synonymsText.style.display = "block";
  synonymsText.textContent = "Synonyms";
  synonymOne.style.display = "block";
  synonymTwo.style.display = "block";
  synonymThree.style.display = "block";
  promise.then((data) => (synonymOne.textContent = capitalizeFirstLetter(data[0].meta.syns[0][0])));
  promise.then((data) => (synonymTwo.textContent = capitalizeFirstLetter(data[0].meta.syns[1][3])));
  promise.then((data) => (synonymThree.textContent = capitalizeFirstLetter(data[0].meta.syns[3][6])));
}

/*Display words searched in the search field*/
function createDictionary() {
  const promise = fetchVocabularyWords(searchField.value);
  nounLine.style.display = "block";
  playIcon.style.display = "block";

  /*Display Headword*/
  promise.then((data) => (vocabWord.textContent = data[0].meta.stems[0]));
  /*Display Phonetic Sound*/
  promise.then(
    (data) => (soundOutPhonetic.textContent = "/" + data[0].hwi.prs[0].mw + "/")
  );
  /*Display noun and noun-line*/
  promise.then((data) => (noun.textContent = data[0].fl));
  nounLine.style.width = "70%";
  nounLine.style.height = "0.5px";
  nounLine.style.backgroundColor = "var(--gray-num-two)";

  /*Play audio on icon click*/
  playIcon.addEventListener("click", () => {
    playAudio();
  });
  /*Create Definitions List*/
  createList();

  /*Display Synonyms Section*/
  displaySynonyms();
}
export { createDictionary };

/*Console Logs*/
//const promise = fetchVocabularyWords("voluminous");
//promise.then((data) => console.log(data[0]));
//promise.then((data) => (data[0].shortdef[0]))
const promise = fetchSynonymsThesaurus('tree');
promise.then((data) => console.log(data[0]));
//promise.then((data) => console.log(data[0].meta.syns[0]));
