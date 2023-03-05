
import { vocabWord, vocabWordTwo } from "./global-variables";
import {soundOutPhonetic, soundOutPhoneticTwo } from "./global-variables";
import {defOne, defTwo, defThree, defOneOfTwo, defTwoofTwo, defThreeofTwo} from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo, meaningText, meaningTextTwo} from "./global-variables";
import { synonymsText, synonymsTextofTwo} from "./global-variables";
import { synonymOne, synonymTwo, synonymThree, synonymOneofTwo, synonymTwoofTwo, synonymThreeofTwo} from "./global-variables";
import { errorMessage } from "./global-variables";

/*Function*/
function setMobileMediaQuery(queryWidthMobile){
  const mediaQuery = window.matchMedia(queryWidthMobile);
    if (mediaQuery.matches) {
      /*List Paragraphs*/
      defOne.style.fontSize = "18px";
      defTwo.style.fontSize = "18px";
      defThree.style.fontSize = "18px";
      defOneOfTwo.style.fontSize = "18px";
      defTwoofTwo.style.fontSize= "18px";
      defThreeofTwo.style.fontSize= "18px";
      defOne.style.lineHeight = "24px";
      defTwo.style.lineHeight = "24px";
      defThree.style.lineHeight = "24px";
      defOneOfTwo.style.lineHeight = "24px";
      defTwoofTwo.style.lineHeight = "24px";
      defThreeofTwo.style.lineHeight = "24px";

      /*Sound Phonetic*/
      soundOutPhonetic.style.fontSize = "20px";
      soundOutPhoneticTwo.style.fontSize = "20px";
      soundOutPhonetic.style.lineHeight = "24px";
      soundOutPhoneticTwo.style.lineHeight = "24px";

      /*Parts of Speech*/
      partsOfSpeech.style.fontSize = "20px";
      partsOfSpeech.style.lineHeight = "29px";
      partsOfSpeechTwo.style.fontSize = "20px";
      partsOfSpeechTwo.style.lineHeight = "29px";
      
      /*Meaning Text*/
      meaningText.style.fontSize = "20px";
      meaningTextTwo.style.fontSize = "20px";
      meaningText.style.lineHeight = "24px";
      meaningTextTwo.style.lineHeight = "24px";

      /*Synonyms Text*/
      synonymsText.style.fontSize = "20px";
      synonymsTextofTwo.style.fontSize = "20px";
      synonymsText.style.lineHeight = "24px";
      synonymsTextofTwo.style.lineHeight = "24px";

      /*Synonyms Lists*/
      synonymOne.style.fontSize = "20px";
      synonymTwo.style.fontSize = "20px";
      synonymThree.style.fontSize = "20px";
      synonymOneofTwo.style.fontSize = "20px";
      synonymTwoofTwo.style.fontSize = "20px";
      synonymThreeofTwo.style.fontSize = "20px";

      synonymOne.style.lineHeight = "24px";
      synonymTwo.style.lineHeight = "24px";
      synonymThree.style.lineHeight = "24px";
      synonymOneofTwo.style.lineHeight = "24px";
      synonymTwoofTwo.style.lineHeight = "24px";
      synonymThreeofTwo.style.lineHeight= "24px";
  
    }
   }

   setMobileMediaQuery(('(width:414px)'));
   setMobileMediaQuery(('(width:412px)'));
   setMobileMediaQuery(('(width:393px)'));
   setMobileMediaQuery(('(width:390px)'));
  

/*Mobile Error Message Width 280 and below*/
function setMediaQueryErrorMessage() {
  const mediaQuery = window.matchMedia("(max-width:280px)");
  if(mediaQuery.matches){
    errorMessage.style.width = "200px";
  }

}setMediaQueryErrorMessage();

/*Tablet 500 And Above*/
function setMediaQueryTablet() {
  const mediaQuery = window.matchMedia("(min-width:500px)");

  if (mediaQuery.matches) {
    /*Vocab Word*/
    vocabWord.style.fontSize = "64px";
    vocabWordTwo.style.fontSize = "64px";
    vocabWord.style.lineHeight = "77px";
    vocabWordTwo.style.lineHeight = "77px";

    /*Sound Phonetic*/
    soundOutPhonetic.style.fontSize = "24px";
    soundOutPhoneticTwo.style.fontSize = "24px";
    soundOutPhonetic.style.lineHeight = "29px";
    soundOutPhoneticTwo.style.lineHeight = "29px";

    /*List Paragraphs*/
    defOne.style.fontSize = "18px";
    defTwo.style.fontSize = "18px";
    defThree.style.fontSize = "18px";
    defOneOfTwo.style.fontSize = "18px";
    defTwoofTwo.style.fontSize= "18px";
    defThreeofTwo.style.fontSize= "18px";
    defOne.style.lineHeight = "24px";
    defTwo.style.lineHeight = "24px";
    defThree.style.lineHeight = "24px";
    defOneOfTwo.style.lineHeight = "24px";
    defTwoofTwo.style.lineHeight = "24px";
    defThreeofTwo.style.lineHeight = "24px";

    /*Parts of Speech*/
    partsOfSpeech.style.fontSize = "24px";
    partsOfSpeech.style.lineHeight = "29px";
    partsOfSpeechTwo.style.fontSize = "24px";
    partsOfSpeechTwo.style.lineHeight = "29px";
    
    /*Meaning Text*/
    meaningText.style.fontSize = "20px";
    meaningTextTwo.style.fontSize = "20px";
    meaningText.style.lineHeight = "24px";
    meaningTextTwo.style.lineHeight = "24px";

    /*Synonyms Text*/
    synonymsText.style.fontSize = "20px";
    synonymsTextofTwo.style.fontSize = "20px";
    synonymsText.style.lineHeight = "24px";
    synonymsTextofTwo.style.lineHeight = "24px";

    /*Synonyms Lists*/
    synonymOne.style.fontSize = "20px";
    synonymTwo.style.fontSize = "20px";
    synonymThree.style.fontSize = "20px";
    synonymOneofTwo.style.fontSize = "20px";
    synonymTwoofTwo.style.fontSize = "20px";
    synonymThreeofTwo.style.fontSize = "20px";

    synonymOne.style.lineHeight = "24px";
    synonymTwo.style.lineHeight = "24px";
    synonymThree.style.lineHeight = "24px";
    synonymOneofTwo.style.lineHeight = "24px";
    synonymTwoofTwo.style.lineHeight = "24px";
    synonymThreeofTwo.style.lineHeight= "24px";

  }
}
setMediaQueryTablet();




