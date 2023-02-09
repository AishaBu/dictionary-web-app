const vocabWord = document.getElementById('vocabulary-word');

async function fetchVocabularyWords() {
  try {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
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

const promise = fetchVocabularyWords();
promise.then((data) => console.log(data[0]));
//promise.then((data) => console.log(data[0].word));
//promise.then((data) => console.log(data[0].phonetics[1].text));
//promise.then((data) => vocabWord.textContent = data[0].word);
promise.then((data) => vocabWord.textContent = data[0].word);
