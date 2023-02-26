import { form, searchField } from "./global-variables";
import { vocabWord, vocabWordTwo } from "./global-variables";
import { soundOutPhonetic, soundOutPhoneticTwo } from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo } from "./global-variables";
import { styleLine, styleLineTwo, styleLineThree } from "./global-variables";
import { playIcon, playIconTwo } from "./global-variables";
import { meaningText, meaningTextTwo } from "./global-variables";
import { defOne, defTwo, defThree, defList} from "./global-variables";
import {synonymsText,synonymOne,synonymTwo,synonymThree} from "./global-variables";
import {defOneOfTwo, defTwoofTwo, defThreeofTwo, defListofTwo} from "./global-variables";
import {synonymOneofTwo, synonymsTextofTwo, synonymThreeofTwo, synonymTwoofTwo} from "./global-variables";
import { errorMessage, frownFaceEmoji, noDefinitionsFoundText} from "./global-variables";

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
  } 
  catch (error) {
    console.error(`Could not get word: ${searchField.value}`);
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
  } 
  catch (error) {
    console.error(`Could not get word: ${searchField.value}`);
  }
}

function displaySearchErrorMessage(){
    /*If there is an error in search value*/
    (vocabWord.style.display = "none"),
    (soundOutPhonetic.style.display = "none"),
    (playIcon.style.display = "none"),
    (meaningText.style.display = "none"),
    (partsOfSpeech.style.display = "none"),
    (synonymsText.style.opacity = "0.3%"),
    (synonymOne.style.display = "none"),
    (synonymTwo.style.display = "none"),
    (synonymThree.style.display = "none"),
    (styleLine.style.display = "none"),
    (defList.style.display = "none"),

    /*Section Two*/
    (vocabWordTwo.style.display = "none"),
    (soundOutPhoneticTwo.style.display = "none"),
    (playIconTwo.style.display = "none"),
    (meaningTextTwo.style.display = "none"),
    (partsOfSpeechTwo.style.display = "none"),
    (synonymsTextofTwo.style.opacity = "0.3%"),
    (synonymOneofTwo.style.display = "none"),
    (synonymTwoofTwo.style.display = "none"),
    (synonymThreeofTwo.style.display = "none"),
    (styleLineTwo.style.display = "none"),
    (styleLineThree.style.display = "none"),
    (defListofTwo.style.display = "none"),

    /*Display Error Message*/
    frownFaceEmoji.style.display = "block",
    noDefinitionsFoundText.style.display = "block",
    errorMessage.style.display = "block",
    frownFaceEmoji.textContent = String.fromCodePoint(128577),
    noDefinitionsFoundText.textContent = "No Definitions Found",
    errorMessage.textContent = "Sorry pal, we couldn't find definitions for the word you were looking for." +
    "You can try the search again at later time or head to the web instead."
}

/*Create audio on click of icon*/
//Moving audio value outside of function creates sound only once.
const globalAudio = new Audio();
function playAudioOne() {
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) => {
    let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].hwi.prs[0].sound.audio[0]}/${data[0].hwi.prs[0].sound.audio}.mp3`;
    globalAudio.src = audioURL;
    globalAudio.preload = "none";
    globalAudio.play();
  });
}

/*Audio Two*/
function playAudioTwo() {
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) => {
    let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[1].hwi.prs[0].sound.audio[0]}/${data[1].hwi.prs[0].sound.audio}.mp3`;
    globalAudio.src = audioURL;
    globalAudio.preload = "none";
    globalAudio.play();
  });
}

/*Capitalize First Letter of each paragraph*/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*Check if no data is available for list*/
function removeBulletListIfNoData() {
  const promise = fetchVocabularyWords(searchField.value);

 /*WORD SECTION ONE -check if data list empty*/
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

  /*WORD SECTION TWO-check if data list empty*/
  promise.then((data) => {
    if (data[1].shortdef[0] == undefined) {
      defOneOfTwo.style.display = "none";
    } else {
      defOneOfTwo.style.display = "block";
    }
  });

  /*If data for deftwooftwo is empty*/
  promise.then((data) => {
    if (data[1].shortdef[1] == undefined) {
      defTwoofTwo.style.display = "none";
    } else {
      defTwoofTwo.style.display = "block";
    }
  });

  /*If data for defthreeoftwo is empty*/
  promise.then((data) => {
    if (data[1].shortdef[2] == undefined) {
      defThreeofTwo.style.display = "none";
    } else {
      defThreeofTwo.style.display = "block";
    }
  });
}

function hideEntireSecondWordSectionIfNoData() {
  const promise = fetchVocabularyWords(searchField.value);
  /*If all of data are missing/undefined for word sections*/
  promise.then((data) => {
    /*WORD SECTION ONE-If all data missing*/
    if (
      data[0].shortdef[0] == undefined &&
      data[0].shortdef[1] == undefined &&
      data[0].shortdef[2] == undefined
    ) {
      vocabWord.style.display = "none";
      soundOutPhonetic.style.display = "none";
      playIcon.style.display = "none";
      meaningText.style.display = "none";
      partsOfSpeech.style.display = "none";
      synonymsText.style.display = "none";
      synonymOne.style.display = "none";
      synonymTwo.style.display = "none";
      synonymThree.style.display = "none";
      styleLine.style.display = "none";
    } else {
      vocabWord.style.display = "block";
      soundOutPhonetic.style.display = "block";
      playIcon.style.display = "block";
      meaningText.style.display = "block";
      partsOfSpeech.style.display = "block";
      synonymsText.style.display = "block";
      synonymOne.style.display = "block";
      synonymTwo.style.display = "block";
      synonymThree.style.display = "block";
      styleLine.style.display = "block";
    }

    /*WORD SECTION TWO -if all data is empty*/
    if (
      data[1].shortdef[0] == undefined &&
      data[1].shortdef[1] == undefined &&
      data[1].shortdef[2] == undefined
    ) {
      vocabWordTwo.style.display = "none";
      soundOutPhoneticTwo.style.display = "none";
      playIconTwo.style.display = "none";
      meaningTextTwo.style.display = "none";
      partsOfSpeechTwo.style.display = "none";
      synonymsTextofTwo.style.display = "none";
      synonymOneofTwo.style.display = "none";
      synonymTwoofTwo.style.display = "none";
      synonymThreeofTwo.style.display = "none";
      styleLineTwo.style.display = "none";
      styleLineThree.style.display = "none";
    } else {
      vocabWordTwo.style.display = "block";
      soundOutPhoneticTwo.style.display = "block";
      playIconTwo.style.display = "block";
      meaningTextTwo.style.display = "block";
      partsOfSpeechTwo.style.display = "block";
      synonymsTextofTwo.style.display = "block";
      synonymOneofTwo.style.display = "block";
      synonymTwoofTwo.style.display = "block";
      synonymThreeofTwo.style.display = "block";
      styleLineTwo.style.display = "block";
      styleLineThree.style.display = "block";

      /*Decrease margin top for definition*/
      styleLineTwo.style.opacity = "0.3%";
      vocabWordTwo.style.marginTop = "-50px";
    }
  });
}

/*Create Definitions Lists*/
function createList() {
  const promise = fetchVocabularyWords(searchField.value);
  meaningText.textContent = "Meaning";
  defList.style.display = "block";
  meaningTextTwo.textContent = "Meaning";
  defListofTwo.style.display = "block";

  /*Definitions List One*/
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

  /*Definitions List Two*/
  promise.then(
    (data) =>
      (defOneOfTwo.textContent = capitalizeFirstLetter(data[1].shortdef[0]))
  );
  promise.then(
    (data) =>
      (defTwoofTwo.textContent = capitalizeFirstLetter(data[1].shortdef[1]))
  );
  promise.then(
    (data) =>
      (defThreeofTwo.textContent = capitalizeFirstLetter(data[1].shortdef[2]))
  );
  removeBulletListIfNoData(); /*Fine*/
  hideEntireSecondWordSectionIfNoData();
}

/*Display Synonyms for Words One and Two*/
function displaySynonyms() {
  const promise = fetchSynonymsThesaurus(searchField.value);
  /*Synonyms List One*/
  synonymsText.style.display = "block";
  synonymsText.textContent = "Synonyms";
  synonymOne.style.display = "block";
  synonymTwo.style.display = "block";
  synonymThree.style.display = "block";
  promise.then(
    (data) =>
      (synonymOne.textContent = capitalizeFirstLetter(data[0].meta.syns[0][0]))
  );
  promise.then(
    (data) =>
      (synonymTwo.textContent = capitalizeFirstLetter(data[0].meta.syns[1][3]))
  );
  promise.then(
    (data) =>
      (synonymThree.textContent = capitalizeFirstLetter(
        data[0].meta.syns[3][6]
      ))
  );

  /*Synonyms List Two*/
  synonymsTextofTwo.style.display = "block";
  synonymsTextofTwo.textContent = "Synonyms";
  synonymOneofTwo.style.display = "block";
  synonymTwoofTwo.style.display = "block";
  synonymThreeofTwo.style.display = "block";
  promise.then(
    (data) =>
      (synonymOneofTwo.textContent = capitalizeFirstLetter(
        data[1].meta.syns[0][0]
      ))
  );
  promise.then(
    (data) =>
      (synonymTwoofTwo.textContent = capitalizeFirstLetter(
        data[1].meta.syns[1][3]
      ))
  );
  promise.then(
    (data) =>
      (synonymThreeofTwo.textContent = capitalizeFirstLetter(
        data[1].meta.syns[3][6]
      ))
  );
}

/*Create Definitions*/
/*Display words searched in the search field*/
function createDictionaryOne() {
  const promise = fetchVocabularyWords(searchField.value);
  styleLine.style.display = "block";
  playIcon.style.display = "block";

  /*Display Headword One*/
  promise.then(
    (data) =>
      (vocabWord.textContent = capitalizeFirstLetter(data[1].meta.stems[0]))
  );
  /*Display Phonetic Sound*/
  promise.then(
    (data) =>
      (soundOutPhonetic.textContent =
        "/" + capitalizeFirstLetter(data[0].hwi.prs[0].mw + "/"))
  );

  /*Display noun and noun-line*/
  promise.then(
    (data) => (partsOfSpeech.textContent = capitalizeFirstLetter(data[0].fl))
  );
  styleLine.style.width = "70%";
  styleLine.style.height = "0.5px";
  styleLine.style.backgroundColor = "var(--gray-num-two)";

  /*Play audio on icon click*/
  playIcon.addEventListener("click", () => {
    playAudioOne();
  });
  /*Create Definitions List*/
  createList();

  /*Display Synonyms Section*/
  displaySynonyms();
  
}


/*Dictionary Two*/
function createDictionaryTwo() {
  const promise = fetchVocabularyWords(searchField.value);
  styleLineTwo.style.display = "block";
  styleLineThree.style.display = "block";
  playIconTwo.style.display = "block";

  /*Display Headword Two*/
  promise.then(
    (data) =>
      (vocabWordTwo.textContent = capitalizeFirstLetter(data[1].meta.stems[0]))
  );
  /*Display Phonetic Sound Two*/
  promise.then(
    (data) =>
      (soundOutPhoneticTwo.textContent =
        "/" + capitalizeFirstLetter(data[1].hwi.prs[0].mw + "/"))
  );

  /*Display parts of speech and style-lines*/
  promise.then(
    (data) => (partsOfSpeechTwo.textContent = capitalizeFirstLetter(data[1].fl))
  );
  styleLineThree.style.width = "70%";
  styleLineThree.style.height = "0.5px";
  styleLineThree.style.backgroundColor = "var(--gray-num-two)";

  /*Style Line Two*/
  styleLineTwo.style.width = "100%";
  styleLineTwo.style.height = "0.30px";
  styleLineTwo.style.backgroundColor = "var(--gray-num-two)";

  /*Play audio on icon click*/
  playIconTwo.addEventListener("click", () => {
    playAudioTwo();
  });
  /*Create Definitions List*/
  createList();

  /*Display Synonyms Section*/
  displaySynonyms();
}

/*Create Dictionary Function*/
function createDictionary() {
  createDictionaryOne();
  createDictionaryTwo();
}
export default createDictionary;

/*Console Logs*/
//const promise = fetchVocabularyWords("hello");
//promise.then((data) => console.log(data[0]));
//promise.then((data) => (data[0].shortdef[0]))

//const promise = fetchSynonymsThesaurus('umpire');
//promise.then((data) => console.log(data[0]));
//promise.then((data) => console.log(data[0].meta.syns[0]))
