import { searchField } from "./global-variables";
import { form } from "./global-variables";
import { vocabWord } from "./global-variables";
import { soundOutPhonetic } from "./global-variables";

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
  } catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

/*Display words searched in the search field*/
function displayWords(){
  const promise = fetchVocabularyWords(searchField.value);
  /*Display Headword*/
  promise.then((data) => (vocabWord.textContent = data[0].meta.id));
  /*Display Phonetic Sound*/
  promise.then((data) => (soundOutPhonetic.textContent = "/" + data[0].hwi.prs[0].mw + "/"));
}

/*Display words onsubmit*/
form.addEventListener("submit", (event) => {
  event.preventDefault();
  displayWords();
});