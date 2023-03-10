import { searchField } from "./global-variables";
import { arrowSvgBtn } from "./global-variables";
import { fontDropdownMenu } from "./global-variables";
import { fontDropdownList } from "./global-variables";
import { fontPlaceholder } from "./global-variables";
import { sansSerif, serif, mono} from "./global-variables";
import { vocabWord, vocabWordTwo} from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo} from "./global-variables";
import { soundOutPhonetic, soundOutPhoneticTwo} from "./global-variables";
import { meaningText, meaningTextTwo} from "./global-variables";
import { defOne, defTwo, defThree, defOneOfTwo, defTwoofTwo, defThreeofTwo} from "./global-variables";
import { synonymsText, synonymOne, synonymTwo, synonymThree} from "./global-variables";
import {synonymsTextofTwo,synonymOneofTwo, synonymTwoofTwo, synonymThreeofTwo} from "./global-variables";
import { noDefinitionsFoundText, errorMessage} from "./global-variables";

/* FONT DROPDOWN MENU*/
/*Show font list on hover-mouseover*/
function displayFontList() {
  fontDropdownList.style.display = "block";
}

/*Hide font list when mouse is off arrow*/
function hideFontList() {
  fontDropdownList.style.display = "none";
}

/*Show font dropdown list when arrow is hovered*/
arrowSvgBtn.addEventListener("mouseover", displayFontList);

/*Hide font list when arrow is clicked*/
fontDropdownMenu.addEventListener("mouseleave", hideFontList);

/*CHANGE FONT TYPE ON CLICK*/
/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
/*Change Font To Sans Serif*/
function changeFontToSansSerif() {
  /*Change font text displayed*/
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute("id", "sans-serif");

  /*Change searchfield text to font style on input*/
    searchField.style.fontSize = "16px";
    searchField.style.fontWeight = "bold";
    searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";

    /*Vocabulary Definitions To Font*/
    vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    vocabWord.style.fontSize = "32px";
    vocabWordTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    vocabWordTwo.style.fontSize = "32px";

    /*Phonetic Spelling*/
    soundOutPhonetic.style.fontFamily ="var(--inter-font),var(--static-inter-bold)";
    soundOutPhonetic.style.fontSize = "18px";
    soundOutPhonetic.style.lineHeight = "24px";
    soundOutPhonetic.style.color = "var(--purple)";
    soundOutPhoneticTwo.style.fontFamily ="var(--inter-font),var(--static-inter-bold)";
    soundOutPhoneticTwo.style.fontSize = "18px";
    soundOutPhoneticTwo.style.lineHeight = "24px";
    soundOutPhoneticTwo.style.color = "var(--purple)";

    /*Parts of Speech and Style Lines*/
    partsOfSpeech.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    partsOfSpeech.style.fontStyle = "Italic";
    partsOfSpeech.style.fontSize = "18px";
    partsOfSpeech.style.fontWeight = "bold";
    partsOfSpeechTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    partsOfSpeechTwo.style.fontStyle = "Italic";
    partsOfSpeechTwo.style.fontSize = "18px";
    partsOfSpeechTwo.style.fontWeight = "bold";

    /*Meaning Text and Word Definitions*/
    meaningText.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    meaningText.style.fontSize = "16px";
    meaningText.style.color = "var(--gray-num-one)";
    meaningTextTwo.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    meaningTextTwo.style.fontSize = "16px";
    meaningTextTwo.style.color = "var(--gray-num-one)";
    
    /*Set defintion font styes*/
    function setDefinitionFontStyles(definition){
      definition.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
      definition.style.fontSize = "15px";
      definition.style.lineHeight = "24px";
      definition.style.color = "var( --off-black-one)";
    }
    setDefinitionFontStyles(defOne);
    setDefinitionFontStyles(defTwo);
    setDefinitionFontStyles(defThree);
    setDefinitionFontStyles(defOneOfTwo);
    setDefinitionFontStyles(defTwoofTwo);
    setDefinitionFontStyles(defThreeofTwo);

    /*Synonyms Text*/
    synonymsText.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    synonymsText.style.fontSize = "16px";
    synonymsText.style.color = "var(--gray-num-one)";
    synonymsTextofTwo.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    synonymsTextofTwo.style.fontSize = "16px";
    synonymsTextofTwo.style.color = "var(--gray-num-one)";

    /*Synonyms Words*/
    function setSynonymWordsFontStyles(synonym){
      synonym.style.fontFamily = "var(--inter-font), var( --static-inter-bold)";
      synonym.style.fontSize = "16px";
      synonym.style.fontWeight = "bold";
      synonym.style.color = "var(--purple)";
    }
    setSynonymWordsFontStyles(synonymOne);
    setSynonymWordsFontStyles(synonymTwo);
    setSynonymWordsFontStyles(synonymThree);
    setSynonymWordsFontStyles(synonymOneofTwo);
    setSynonymWordsFontStyles(synonymTwoofTwo);
    setSynonymWordsFontStyles(synonymThreeofTwo);

    /*Error Message Font for Sans Serif*/
    /*No Definitions Found Text*/
    noDefinitionsFoundText.style.fontFamily = "var(--inter-font), var( --static-inter-bold)";
    noDefinitionsFoundText.style.fontSize = "16px";
    noDefinitionsFoundText.style.fontWeight = "bold";
    noDefinitionsFoundText.style.color = "var( --off-black-one)";
    /*Error Message*/
    errorMessage.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    errorMessage.style.fontSize = "13px";
    errorMessage.style.color = "var(--gray-num-one)";

}changeFontToSansSerif(); //Set As Default Font Style

/*Change Font To Serif*/
function changeFontToSerif() {
  /*Change font text displayed*/
    fontPlaceholder.innerHTML = serif.innerHTML;
    fontPlaceholder.setAttribute("id", "serif");

  /*Change searchfield text to font style on input*/
    searchField.style.fontSize = "16px";
    searchField.style.fontWeight = "bold";
    searchField.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";

    /*Vocabulary Definitions To Font*/
    vocabWord.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
    vocabWord.style.fontSize = "32px";
    vocabWordTwo.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
    vocabWordTwo.style.fontSize = "32px";

    /*Phonetic Spelling*/
    soundOutPhonetic.style.fontFamily ="var(--lora-font),var(--lora-static-bold-font)";
    soundOutPhonetic.style.fontSize = "18px";
    soundOutPhonetic.style.lineHeight = "24px";
    soundOutPhonetic.style.color = "var(--purple)";
    soundOutPhoneticTwo.style.fontFamily ="var(--lora-font),var(--lora-static-bold-font)";
    soundOutPhoneticTwo.style.fontSize = "18px";
    soundOutPhoneticTwo.style.lineHeight = "24px";
    soundOutPhoneticTwo.style.color = "var(--purple)";

    /*Parts of Speech and Style Lines*/
    partsOfSpeech.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
    partsOfSpeech.style.fontStyle = "Italic";
    partsOfSpeech.style.fontSize = "18px";
    partsOfSpeech.style.fontWeight = "bold";
    partsOfSpeechTwo.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
    partsOfSpeechTwo.style.fontStyle = "Italic";
    partsOfSpeechTwo.style.fontSize = "18px";
    partsOfSpeechTwo.style.fontWeight = "bold";

    /*Meaning Text and Word Definitions*/
    meaningText.style.fontFamily= "var(--lora-font), var(--lora-static-bold-font)";
    meaningText.style.fontSize = "16px";
    meaningText.style.color = "var(--gray-num-one)";
    meaningTextTwo.style.fontFamily= "var(--lora-font), var(--lora-static-bold-font)";
    meaningTextTwo.style.fontSize = "16px";
    meaningTextTwo.style.color = "var(--gray-num-one)";
    
    /*Set defintion font styes*/
    function setDefinitionFontStyles(definition){
      definition.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
      definition.style.fontSize = "15px";
      definition.style.lineHeight = "24px";
      definition.style.color = "var( --off-black-one)";
    }
    setDefinitionFontStyles(defOne);
    setDefinitionFontStyles(defTwo);
    setDefinitionFontStyles(defThree);
    setDefinitionFontStyles(defOneOfTwo);
    setDefinitionFontStyles(defTwoofTwo);
    setDefinitionFontStyles(defThreeofTwo);

    /*Synonyms Text*/
    synonymsText.style.fontFamily= "var(--lora-font), var(--lora-static-bold-font)";
    synonymsText.style.fontSize = "16px";
    synonymsText.style.color = "var(--gray-num-one)";
    synonymsTextofTwo.style.fontFamily= "var(--lora-font), var(--lora-static-bold-font)";
    synonymsTextofTwo.style.fontSize = "16px";
    synonymsTextofTwo.style.color = "var(--gray-num-one)";

    /*Synonyms Words*/
    function setSynonymWordsFontStyles(synonym){
      synonym.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
      synonym.style.fontSize = "16px";
      synonym.style.fontWeight = "bold";
      synonym.style.color = "var(--purple)";
    }
    setSynonymWordsFontStyles(synonymOne);
    setSynonymWordsFontStyles(synonymTwo);
    setSynonymWordsFontStyles(synonymThree);
    setSynonymWordsFontStyles(synonymOneofTwo);
    setSynonymWordsFontStyles(synonymTwoofTwo);
    setSynonymWordsFontStyles(synonymThreeofTwo);

    /*Error Message Font for Serif*/
    /*No Definitions Found Text*/
    noDefinitionsFoundText.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
    noDefinitionsFoundText.style.fontSize = "16px";
    noDefinitionsFoundText.style.fontWeight = "bold";
    noDefinitionsFoundText.style.color = "var( --off-black-one)";
    /*Error Message*/
    errorMessage.style.fontFamily= "var(--lora-font), var(--lora-static-bold-font)";
    errorMessage.style.fontSize = "13px";
    errorMessage.style.color = "var(--gray-num-one)";
}

/*Change Font To Mono*/
function changeFontToMono() {
  /*Change font text displayed*/
    fontPlaceholder.innerHTML = mono.innerHTML;
    fontPlaceholder.setAttribute("id", "mono");

  /*Change searchfield text to font style on input*/
    searchField.style.fontSize = "16px";
    searchField.style.fontWeight = "bold";
    searchField.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";

    /*Vocabulary Definitions To Font*/
    vocabWord.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    vocabWord.style.fontSize = "32px";
    vocabWordTwo.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    vocabWordTwo.style.fontSize = "32px";

    /*Phonetic Spelling*/
    soundOutPhonetic.style.fontFamily ="var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    soundOutPhonetic.style.fontSize = "18px";
    soundOutPhonetic.style.lineHeight = "24px";
    soundOutPhonetic.style.color = "var(--purple)";
    soundOutPhoneticTwo.style.fontFamily ="var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    soundOutPhoneticTwo.style.fontSize = "18px";
    soundOutPhoneticTwo.style.lineHeight = "24px";
    soundOutPhoneticTwo.style.color = "var(--purple)";

    /*Parts of Speech and Style Lines*/
    partsOfSpeech.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    partsOfSpeech.style.fontStyle = "Italic";
    partsOfSpeech.style.fontSize = "18px";
    partsOfSpeech.style.fontWeight = "bold";
    partsOfSpeechTwo.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
    partsOfSpeechTwo.style.fontStyle = "Italic";
    partsOfSpeechTwo.style.fontSize = "18px";
    partsOfSpeechTwo.style.fontWeight = "bold";

    /*Meaning Text and Word Definitions*/
    meaningText.style.fontFamily= "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    meaningText.style.fontSize = "16px";
    meaningText.style.color = "var(--gray-num-one)";
    meaningTextTwo.style.fontFamily= "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    meaningTextTwo.style.fontSize = "16px";
    meaningTextTwo.style.color = "var(--gray-num-one)";
    
    /*Set defintion font styes*/
    function setDefinitionFontStyles(definition){
      definition.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
      definition.style.fontSize = "15px";
      definition.style.lineHeight = "24px";
      definition.style.color = "var( --off-black-one)";
    }
    setDefinitionFontStyles(defOne);
    setDefinitionFontStyles(defTwo);
    setDefinitionFontStyles(defThree);
    setDefinitionFontStyles(defOneOfTwo);
    setDefinitionFontStyles(defTwoofTwo);
    setDefinitionFontStyles(defThreeofTwo);

    /*Synonyms Text*/
    synonymsText.style.fontFamily= "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    synonymsText.style.fontSize = "16px";
    synonymsText.style.color = "var(--gray-num-one)";
    synonymsTextofTwo.style.fontFamily= "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    synonymsTextofTwo.style.fontSize = "16px";
    synonymsTextofTwo.style.color = "var(--gray-num-one)";

    /*Synonyms Words*/
    function setSynonymWordsFontStyles(synonym){
      synonym.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
      synonym.style.fontSize = "16px";
      synonym.style.fontWeight = "bold";
      synonym.style.color = "var(--purple)";
    }
    setSynonymWordsFontStyles(synonymOne);
    setSynonymWordsFontStyles(synonymTwo);
    setSynonymWordsFontStyles(synonymThree);
    setSynonymWordsFontStyles(synonymOneofTwo);
    setSynonymWordsFontStyles(synonymTwoofTwo);
    setSynonymWordsFontStyles(synonymThreeofTwo);

    /*Error Message Font for Mono*/
    /*No Definitions Found Text*/
    noDefinitionsFoundText.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    noDefinitionsFoundText.style.fontSize = "16px";
    noDefinitionsFoundText.style.fontWeight = "bold";
    noDefinitionsFoundText.style.color = "var( --off-black-one)";
    /*Error Message*/
    errorMessage.style.fontFamily= "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    errorMessage.style.fontSize = "13px";
    errorMessage.style.color = "var(--gray-num-one)";

}


/*Change font style on click*/
function changeFontDisplayedAndStyleOnClick(){
/*Sans Serif*/
  sansSerif.addEventListener('click', ()=>{
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute("id", "sans-serif");
    changeFontToSansSerif();
  })

  /*Serif*/
  serif.addEventListener('click', ()=>{
    fontPlaceholder.innerHTML = serif.innerHTML;
    fontPlaceholder.setAttribute("id", "serif");
    changeFontToSerif();
  })

  /*Mono*/
  mono.addEventListener('click', ()=>{
    fontPlaceholder.innerHTML = mono.innerHTML;
    fontPlaceholder.setAttribute("id", "mono");
    changeFontToMono();
  })

}changeFontDisplayedAndStyleOnClick();

export {changeFontToSansSerif};
export {changeFontToSerif};
export {changeFontToMono};