import { searchField } from "./global-variables";
import { arrowSvgBtn } from "./global-variables";
import { fontDropdownMenu } from "./global-variables";
import { fontDropdownList } from "./global-variables";
import { fontPlaceholder } from "./global-variables";
import { sansSerif } from "./global-variables";
import { vocabWord } from "./global-variables";
import { noun } from "./global-variables";
import { soundOutPhonetic } from "./global-variables";
import { meaningText } from "./global-variables";
import { defOne, defTwo, defThree} from "./global-variables";
import { synonymsText, synonymOne, synonymTwo, synonymThree } from "./global-variables";

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
function changeFontToSansSerif() {
  /*Change font text displayed*/
  fontPlaceholder.innerHTML = sansSerif.innerHTML;
  fontPlaceholder.setAttribute("id", "sans-serif");

  /*Change input field to font*/
    searchField.style.fontSize = "16px";
    searchField.style.fontWeight = "bold";
    searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";

    /*Vocabulary Definitions To Font*/
    vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    vocabWord.style.fontSize = "32px";
    /*Phonetic Spelling*/
    soundOutPhonetic.style.fontFamily ="var(--inter-font),var(--static-inter-bold)";
    soundOutPhonetic.style.fontSize = "18px";
    soundOutPhonetic.style.lineHeight = "24px";
    soundOutPhonetic.style.color = "var(--purple)";
    /*Noun and Noun Line*/
    noun.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    noun.style.fontStyle = "Italic";
    noun.style.fontSize = "18px";
    /*Meaning Text and Word Definitions*/
    meaningText.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    meaningText.style.fontSize = "16px";
    meaningText.style.color = "var(--gray-num-one)";
    
    /*Set defintion font styes -defOne, defTwo, defThree fonts*/
    function setDefinitionFontStyles(definition){
      definition.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
      definition.style.fontSize = "15px";
      definition.style.lineHeight = "24px";
      definition.style.color = "var( --off-black-one)";
    }
    setDefinitionFontStyles(defOne);
    setDefinitionFontStyles(defTwo);
    setDefinitionFontStyles(defThree);

    /*Synonyms Text*/
    synonymsText.style.fontFamily= "var(--inter-font), var(--static-inter-regular-font)";
    synonymsText.style.fontSize = "16px";
    synonymsText.style.color = "var(--gray-num-one)";

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
}
changeFontToSansSerif();

