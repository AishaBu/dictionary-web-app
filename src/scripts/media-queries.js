
import { vocabWord, vocabWordTwo } from "./global-variables";
import { playIcon, playIconTwo } from "./global-variables";
import {soundOutPhonetic, soundOutPhoneticTwo } from "./global-variables";
import {defOne, defTwo, defThree, defOneOfTwo, defTwoofTwo, defThreeofTwo} from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo, meaningText, meaningTextTwo} from "./global-variables";
import { synonymsText, synonymsTextofTwo} from "./global-variables";
import { synonymOne, synonymTwo, synonymThree, synonymOneofTwo, synonymTwoofTwo, synonymThreeofTwo} from "./global-variables";
import { errorMessage } from "./global-variables";
import { errorSearchMessage } from "./global-variables";
` `
/*MEDIA QUERY 499PX AND BELOW*
const mediaQuery499pxAndBelow = window.matchMedia(('(max-width:499px)'));

function setMobileMediaQuery(){
    if (mediaQuery499pxAndBelow.matches) {

      /*Vocab Word*
      vocabWord.style.fontSize = "32px";
      vocabWordTwo.style.fontSize = "32px";
      vocabWord.style.lineHeight = "50px";
      vocabWordTwo.style.lineHeight = "50px";

      /*List Paragraphs*
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

      /*Sound Phonetic*
      soundOutPhonetic.style.fontSize = "20px";
      soundOutPhoneticTwo.style.fontSize = "20px";
      soundOutPhonetic.style.lineHeight = "24px";
      soundOutPhoneticTwo.style.lineHeight = "24px";

      /*Parts of Speech*
      partsOfSpeech.style.fontSize = "20px";
      partsOfSpeech.style.lineHeight = "29px";
      partsOfSpeechTwo.style.fontSize = "20px";
      partsOfSpeechTwo.style.lineHeight = "29px";
      
      /*Meaning Text*
      meaningText.style.fontSize = "20px";
      meaningTextTwo.style.fontSize = "20px";
      meaningText.style.lineHeight = "24px";
      meaningTextTwo.style.lineHeight = "24px";

      /*Synonyms Text*
      synonymsText.style.fontSize = "20px";
      synonymsTextofTwo.style.fontSize = "20px";
      synonymsText.style.lineHeight = "24px";
      synonymsTextofTwo.style.lineHeight = "24px";

      /*Synonyms Lists*
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

    /*Play Icons*
    playIcon.style.width = "55px";
    playIcon.style.height = "55px";
    playIconTwo.style.width = "55px"
    playIconTwo.style.height = "55px";
  
    }
   }
/*Media Query Event Listener*
mediaQuery499pxAndBelow.addEventListener("change", setMobileMediaQuery);
*/
   
  
  
/*ERROR MESSAGE WIDTH MEDIA QUERY 280PX AND BELOW*/
/*Mobile Error Message Width 280 and below*/ 
const mediaQueryErrorMessageWidth = window.matchMedia("(max-width:280px)");

function setMediaQueryErrorMessage() {
 
  if(mediaQueryErrorMessageWidth.matches){
    errorMessage.style.width = "200px";
  }
}
/*Media Query Error Message Event Listener*/
mediaQueryErrorMessageWidth.addEventListener("change", setMediaQueryErrorMessage);


/*TABLET DEVICE MEDIA QUERY 500PX AND ABOVE*/
function setMediaQueryTablet(mediaQueryWidth) {

const mediaQuery500AndAbove = window.matchMedia(mediaQueryWidth);

  if (mediaQuery500AndAbove.matches) {
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

    /*Play Icons*/
    playIcon.style.width = "65px";
    playIcon.style.height = "65px";
    playIconTwo.style.width = "65px"
    playIconTwo.style.height = "65px";

  }
}
/*Media Query Tablet Event Listener*/
setMediaQueryTablet("(min-width:500px)");



/*INPUT ERROR MESSAGE MEDIA QUERY*/
/*Input Errror Message Shift*/
/*Mobile Between 400px And 499px*/  
function setMediaQueryErrorInputMessage400(mediaQueryWidthInputMessage) {

  const mediaQueryBetween400And499 = window.matchMedia(mediaQueryWidthInputMessage);

  if (mediaQueryBetween400And499.matches) {
    errorSearchMessage.style.marginLeft= "-60px";
  }
}
/*Media Query Between 400px and 499px Event Listener*/
setMediaQueryErrorInputMessage400("(width:400px) and (max-width:499px)");



/*AT 500PX ONLY MEDIA QUERIES*/
/*Mobile At 500px*/ 
function setMediaQueryErrorInputMessage500(mediaQueryWidthErrorInputMessage) {

const mediaQueryErrorInputMessage500 = window.matchMedia(mediaQueryWidthErrorInputMessage);

  if (mediaQueryErrorInputMessage500.matches) {
    errorSearchMessage.style.marginLeft= "-130px";
  }
}
/*Media Query Mobile At 500px Event Listener*/
setMediaQueryErrorInputMessage500("(width:500px)");


/*MEDIA QUERY BETWEEN 1300PX AND 1399PX*/
/*Mobile Between 1300px and 1399px*/
function setMediaQueryErrorInputMessage1300(setMediaQueryWidthBetween1300and1399) {
  const mediaQueryBetween1300And1399 = window.matchMedia(setMediaQueryWidthBetween1300and1399);
  if (mediaQueryBetween1300And1399.matches) {
    errorSearchMessage.style.marginRight= "360px";
  }
}

/*Media Query Mobile Between 1300px and 1399px Event Listener*/
setMediaQueryErrorInputMessage1300("(min-width:1300px) and (max-width: 1399px)");


/*MEDIQ QUERY 1500PX AND BELOW*/
/*Mobile 1500px And Below*/
function setMediaQueryErrorInputMessage1500(mediaQueryWidthInputErrorMessage1500) {
  const mediaQueryErrorInputMessage1500 = window.matchMedia(mediaQueryWidthInputErrorMessage1500);
  if (mediaQueryErrorInputMessage1500.matches) {
    errorSearchMessage.style.marginLeft= "-900px";
  }
}

/*Mobile 1500px And Below Event Listener*/
setMediaQueryErrorInputMessage1500("(min-width:1500px)");