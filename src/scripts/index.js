import "../styles/styles.css";
import "./switch-font-style";
import "./dictionary-api";
import "./media-queries";
import "./toggle-theme";
import "./default-word";
import {searchField } from "./global-variables";
import { errorSearchMessage } from "./global-variables";
import { form } from "./global-variables";
import createDictionary from "./dictionary-api";
import { displayE } from "./dictionary-api";

import { vocabWord, vocabWordTwo } from "./global-variables";
import { soundOutPhonetic, soundOutPhoneticTwo } from "./global-variables";
import { partsOfSpeech, partsOfSpeechTwo } from "./global-variables";
import { styleLine, styleLineTwo, styleLineThree } from "./global-variables";
import { playIcon, playIconTwo } from "./global-variables";
import { meaningText, meaningTextTwo } from "./global-variables";
import {synonymsText,synonymOne,synonymTwo,synonymThree} from "./global-variables";
import {synonymOneofTwo,synonymsTextofTwo,synonymThreeofTwo,synonymTwoofTwo} from "./global-variables";
import { defOne, defTwo, defThree} from "./global-variables"
import {defOneOfTwo,defTwoofTwo,defThreeofTwo} from "./global-variables";

/*FORM VALIDATION*/
searchField.addEventListener("keydown", (event) => {
  /*Display message if capslock is on*/
  if(event.getModifierState("CapsLock")) {
    event.preventDefault(); //stops default action
    event.stopPropagation(); //stops further propogation in event/bubbling phases
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Turn off Caps Lock before typing";
    errorSearchMessage.setAttribute("id", "invalid-error-message");
  }
  /*Display message if shift plus key is pressed*/
  else if(event.shiftKey) {
    event.preventDefault(); //stops default action
    event.stopPropagation(); //stops further propogation in event/bubbling phases
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "No shift, lowercase letters only";
    errorSearchMessage.setAttribute("id", "invalid-error-message");
  }
  else{
    errorSearchMessage.textContent = " ";
    searchField.setAttribute("id", "valid-value");
    searchField.removeAttribute("id", "invalid-search-field");
    errorSearchMessage.removeAttribute("id", "invalid-error-message");
  }
});

/*If searchfield value is not missing, it reverts to valid status*/
searchField.addEventListener("input", () => {
  if (!searchField.validity.valueMissing) {
    errorSearchMessage.textContent = " ";
    searchField.setAttribute("id", "valid-value");
  }
});

/*Check for regex match and prevent submit on input*/
form.addEventListener("submit", (event) => {
  event.preventDefault(); //stops default action
  event.stopPropagation(); //stops further propogation in event/bubbling phases
  const regex = /^[a-zA-Z]+/g;
  const numRegex = /\d/;
  const specChar = /[$&+,:;=?@#|'<>.-^*()%!{}]/;

  if((!searchField.value.match(regex)) || searchField.value.match(numRegex) || searchField.value.match(specChar)) {
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Please type only letters!";
    errorSearchMessage.setAttribute("id", "invalid-error-message");
  } 
  else {
    errorSearchMessage.textContent = " ";
    errorSearchMessage.removeAttribute("id", "invalid-error-message");
    searchField.setAttribute("id", "valid-value");
    /*Clear Synonyms Each Time*/
    synonymOne.textContent = " ";
    synonymTwo.textContent = " ";
    synonymThree.textContent = " ";
    synonymOneofTwo.textContent = " ";
    synonymTwoofTwo.textContent = " ";
    synonymThreeofTwo.textContent = " ";
    createDictionary();
  }
});



/*Check if field empty onsubmit*/
form.addEventListener("submit", (event) => {
  if (searchField.validity.valueMissing) {
    event.preventDefault(); //stops default action
    event.stopPropagation(); //stops further propogation in event/bubbling phases
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Whoops, can't be empty!";
    errorSearchMessage.setAttribute("id", "invalid-error-message");

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
});

