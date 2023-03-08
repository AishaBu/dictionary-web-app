import { capitalizeFirstLetter } from "./dictionary-api";
import { vocabWord, vocabWordTwo } from "./global-variables";
import { soundOutPhonetic, soundOutPhoneticTwo } from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo } from "./global-variables";
import { styleLine, styleLineTwo, styleLineThree } from "./global-variables";
import { playIcon, playIconTwo } from "./global-variables";
import { meaningText, meaningTextTwo } from "./global-variables";
import { defOne, defTwo, defThree, defList} from "./global-variables";
import {synonymsText,synonymOne,synonymTwo,synonymThree} from "./global-variables";
import {defOneOfTwo,defTwoofTwo,defThreeofTwo,defListofTwo} from "./global-variables";
import {synonymOneofTwo,synonymsTextofTwo,synonymThreeofTwo,synonymTwoofTwo} from "./global-variables";
import { hideE } from "./dictionary-api";
import { searchField } from "./global-variables";
/*Default Word*/ const defaultWord = "Hello";


/*API CALL*/
/*Dictionary Api Call*/
async function fetchVocabularyWordsDefault(searchFieldValue) {
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
    console.error(`Could not get word: ${searchField.value}`);
    /*Hide Vocab Section One*/
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
    defOne.style.display = "none";
    defTwo.style.display = "none";
    defThree.style.display = "none";
  
    /*Hide Vocab Section Two*/
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
    defOneOfTwo.style.display = "none";
    defTwoofTwo.style.display = "none";
    defThreeofTwo.style.display = "none";
    displayE();
  }
}

/*Thesaurus Api Call*/
async function fetchSynonymsThesaurusDefault(searchFieldValue) {
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
    console.error(`Could not get word: ${searchField.value}`);
  }
}

  /*Create audio on click of icon*/
  //Moving audio value outside of function creates sound only once.
  const globalAudio = new Audio();
  function playAudioOneDefault() {
    const promise = fetchVocabularyWordsDefault(defaultWord);
    promise.then((data) => {
      let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].hwi.prs[0].sound.audio[0]}/${data[0].hwi.prs[0].sound.audio}.mp3`;
      globalAudio.src = audioURL;
      globalAudio.preload = "none";
      globalAudio.play();
    });
  }
  
  /*Check if no data is available for list*/
  function removeBulletListIfNoDataDefault() {
    const promise = fetchVocabularyWordsDefault(defaultWord);
  
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
  
  function hideEntireSecondWordSectionIfNoDataDefault() {
    const promise = fetchVocabularyWordsDefault(defaultWord);
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
  function createListDefault() {
    const promise = fetchVocabularyWordsDefault(defaultWord);
    meaningText.textContent = "Meaning";
    defList.style.display = "block";
    meaningTextTwo.textContent = "Meaning";
    defListofTwo.style.display = "block";
  
      /*Definitions List One*/
      promise.then(
        (data) =>
          (defOne.textContent = capitalizeFirstLetter(data[0].shortdef[0]))
      );
      promise.then(
        (data) =>
          (defTwo.textContent = capitalizeFirstLetter(data[0].shortdef[1]))
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
      removeBulletListIfNoDataDefault(); /*Fine*/
      hideEntireSecondWordSectionIfNoDataDefault();
    }
  
  /*Display Synonyms for Words One and Two*/
  function displaySynonymsDefault() {
    const promise = fetchSynonymsThesaurusDefault(defaultWord);
    
      /*Synonyms List One*/
      synonymsText.style.display = "block";
      synonymsText.textContent = "Synonyms";
      synonymOne.style.display = "block";
      synonymTwo.style.display = "block";
      synonymThree.style.display = "block";
      promise.then(
        (data) =>
          (synonymOne.textContent = capitalizeFirstLetter(
            data[0].meta.syns[0][0]
          ))
      );
      promise.then(
        (data) =>
          (synonymTwo.textContent = capitalizeFirstLetter(
            data[0].meta.syns[0][1]
          ))
      );
      promise.then(
        (data) =>
          (synonymThree.textContent = capitalizeFirstLetter(
            data[0].meta.syns[0][2]
          ))
      );
    } 
  
    /*Check Headword for Extra Strings*/
    function checkHeadwordForExtraStringsBeforeDisplayingDefault(){
        const promise = fetchVocabularyWordsDefault(defaultWord);
        /*Remove Extra Words After Headword*/
        let targetString = defaultWord;
        let extraString = defaultWord;
        let index = extraString.indexOf(targetString);
      
        if(index !== -1){
          let result = extraString.substring(0, index + targetString.length)
          vocabWord.textContent = " ";
          vocabWordTwo.textContent = " ";
          vocabWord.textContent= capitalizeFirstLetter(result);
          vocabWordTwo.textContent= capitalizeFirstLetter(result);
        } 
        else{
            /*Display Headword One and Two*/
          /*Vocab Word One*/
            promise.then(
              (data) =>
                (vocabWord.textContent = capitalizeFirstLetter(
                  data[1].meta.stems[0]
                )) 
            );
      
            /*Vocab Word Two*/ 
            promise.then(
              (data) =>
                (vocabWordTwo.textContent = capitalizeFirstLetter(
                  data[1].meta.stems[0]
                )) 
          );
    }};
      
  
  /*Create Definitions*/
  /*Display words searched in the search field*/
  function displayDefaultDictionary() {
    hideE();
    const promise = fetchVocabularyWordsDefault(defaultWord);
    styleLine.style.display = "block";
    playIcon.style.display = "block";
   
      /*Check Strings And Remove Extra Strings
       If Available Before Displaying - Headword One*/
      checkHeadwordForExtraStringsBeforeDisplayingDefault();
  
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
        playAudioOneDefault();
      });
      /*Create Definitions List*/
      createListDefault();
  
      /*Display Synonyms Section*/
      displaySynonymsDefault();
    } 

    /*Display Default Dictinary On Page Load*/
    window.addEventListener("load", () => {
        displayDefaultDictionary();
      });
    