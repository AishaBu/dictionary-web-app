import { searchField } from "./global-variables";
import { form } from "./global-variables";
import { vocabWord } from "./global-variables";

/*API CALL*/
async function fetchVocabularyWords(searchFieldValue) {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchFieldValue}`
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
  
    //const promise = fetchVocabularyWords();
    //promise.then((data) => console.log(data[0].phonetics[1].text));
    //promise.then((data) => console.log(data[0].word));
    //promise.then((data) => vocabWord.textContent = data[0].word);
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const promise = fetchVocabularyWords(searchField.value);
      
        /*Vocabulary Heading*/
        promise.then((data) => vocabWord.textContent = data[0].word);
      })
  
  
  