import "../styles/styles.css";
import "./switch-font-style";
import "./dictionary-api";
import "./media-queries";
import {searchField } from "./global-variables";
import { errorSearchMessage } from "./global-variables";
import { form } from "./global-variables";
import createDictionary from "./dictionary-api";
import { displayE } from "./dictionary-api";
import {defOne, defOneOfTwo, defThree, defThreeofTwo, defTwo, defTwoofTwo} from "./global-variables";
import {fontPlaceholder, fontDropdownList , sansSerif, serif, mono} from "./global-variables";
import { moonIcon } from "./global-variables";


/*FORM VALIDATION*/
/*If searchfield value is not missing, it reverts to valid status*/
searchField.addEventListener("input", () => {
  if (!searchField.validity.valueMissing) {
    errorSearchMessage.textContent = " ";
    searchField.setAttribute("id", "valid-value");
  }
});

/*Check for regex match and prevent submit on input*/
searchField.addEventListener("input", () => {
  const regex = /^[a-zA-Z]+/g;
  const numRegex = /\d/;
  const specChar = /[$&+,:;=?@#|'<>.-^*()%!{}]/;
  if (
    !searchField.value.match(regex) ||
    searchField.value.match(numRegex) ||
    searchField.value.match(specChar)
  ) {
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Please type only letters!";
    errorSearchMessage.setAttribute("id", "invalid-error-message");

    /*If there is an attempt to submit form while invalid, prevent sending*/
    form.addEventListener("submit", (event) => {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
    });
  } else {
    /*Display words on formsubmit if field value is valid*/
    form.addEventListener("submit", (event) => {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
      createDictionary();
    });
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
    displayE();
  }
});


/*TOGGLE COLOR THEME CHANGE*/
const checkBoxInput = document.getElementById("checkbox-input");
const body = document.querySelector("body");

function toggleDarkTheme() {
  body.classList.toggle("dark-mode");
  moonIcon.classList.toggle('moon-dark-theme');
  searchField.setAttribute("id", "valid-value");
  fontDropdownList.style.backgroundColor = "var(--black-num-two)";
  fontDropdownList.style.boxShadow = "var(--dark-theme-box-shadow)";
  
  /*Functions*/
  function setListTextColorWhite(listPar){
    listPar.style.color = "var(--white)";
  }

  function setFontHoverColor(param){
    param.addEventListener('mouseover', () => {
      param.style.color = "var(--purple)";
    })

    param.addEventListener('mouseleave', () => {
      param.style.color = "var(--white)";
    })
  }

  /*Bullet Lists Paragraphs*/
  setListTextColorWhite(defOne);
  setListTextColorWhite(defTwo);
  setListTextColorWhite(defThree);
  setListTextColorWhite(defOneOfTwo);
  setListTextColorWhite(defTwoofTwo);
  setListTextColorWhite(defThreeofTwo);

  /*SansSerif, Serif, and Mono Fonts*/
  setListTextColorWhite(fontPlaceholder);
  setListTextColorWhite(sansSerif);
  setListTextColorWhite(serif);
  setListTextColorWhite(mono);

  /*Set Hover on Fonts*/
  setFontHoverColor(sansSerif);
  setFontHoverColor(serif);
  setFontHoverColor(mono);

/*Set moon icon color for dark theme*/
 moonIcon.style.marginLeft = "10px";

 /*Switch font color to white for
 dark theme when font style changes*/
function changeFontColorWithFontStyleDarkTheme(){
  /*Sans Serif*/
    sansSerif.addEventListener('click', ()=>{
      setListTextColorWhite(defOne);
      setListTextColorWhite(defTwo);
      setListTextColorWhite(defThree);
      setListTextColorWhite(defOneOfTwo);
      setListTextColorWhite(defTwoofTwo);
      setListTextColorWhite(defThreeofTwo);
    })
  
    /*Serif*/
    serif.addEventListener('click', ()=>{
      setListTextColorWhite(defOne);
      setListTextColorWhite(defTwo);
      setListTextColorWhite(defThree);
      setListTextColorWhite(defOneOfTwo);
      setListTextColorWhite(defTwoofTwo);
      setListTextColorWhite(defThreeofTwo);
    })
  
    /*Mono*/
    mono.addEventListener('click', ()=>{
      setListTextColorWhite(defOne);
      setListTextColorWhite(defTwo);
      setListTextColorWhite(defThree);
      setListTextColorWhite(defOneOfTwo);
      setListTextColorWhite(defTwoofTwo);
      setListTextColorWhite(defThreeofTwo);
    })
  
  }changeFontColorWithFontStyleDarkTheme();  
}


/*DEFAULT HERE*/
function setDefaultTheme() {
  body.classList.toggle("light-mode");
  searchField.setAttribute("id", "valid-value");
  fontDropdownList.style.backgroundColor = "var(--white)";
  fontDropdownList.style.boxShadow = "var(--box-shadow)";
  
  /*Functions*/
  function setListTextColorBlack(par){
    par.style.color = "var(--black-num-one)";
  }

  function setFontHover(hoverParam){
    hoverParam.addEventListener('mouseover', () => {
      hoverParam.style.color = "var(--purple)";
    })

    hoverParam.addEventListener('mouseleave', () => {
      hoverParam.style.color = "var(--black-num-one)";
    })
  }

  /*Bullet Lists Paragraphs*/
  setListTextColorBlack(defOne);
  setListTextColorBlack(defTwo);
  setListTextColorBlack(defThree);
  setListTextColorBlack(defOneOfTwo);
  setListTextColorBlack(defTwoofTwo);
  setListTextColorBlack(defThreeofTwo);

  /*SansSerif, Serif, and Mono Fonts*/
  setListTextColorBlack(fontPlaceholder);
  setListTextColorBlack(sansSerif);
  setListTextColorBlack(serif);
  setListTextColorBlack(mono);

  /*Set Hover on Fonts*/
  setFontHover(sansSerif);
  setFontHover(serif);
  setFontHover(mono);

/*Set moon icon color for dark theme*/
 moonIcon.style.marginLeft = "10px";

 /*Switch font color to white for
 dark theme when font style changes*/
function changeFontColor(){
  /*Sans Serif*/
    sansSerif.addEventListener('click', ()=>{
      setListTextColorBlack(defOne);
      setListTextColorBlack(defTwo);
      setListTextColorBlack(defThree);
      setListTextColorBlack(defOneOfTwo);
      setListTextColorBlack(defTwoofTwo);
      setListTextColorBlack(defThreeofTwo);
    })
  
    /*Serif*/
    serif.addEventListener('click', ()=>{
      setListTextColorBlack(defOne);
      setListTextColorBlack(defTwo);
      setListTextColorBlack(defThree);
      setListTextColorBlack(defOneOfTwo);
      setListTextColorBlack(defTwoofTwo);
      setListTextColorBlack(defThreeofTwo);
    })
  
    /*Mono*/
    mono.addEventListener('click', ()=>{
      setListTextColorBlack(defOne);
      setListTextColorBlack(defTwo);
      setListTextColorBlack(defThree);
      setListTextColorBlack(defOneOfTwo);
      setListTextColorBlack(defTwoofTwo);
      setListTextColorBlack(defThreeofTwo);
    })
  
  }changeFontColor();  
}

/*Toggle Theme On and Off */
checkBoxInput.addEventListener('click', () => {
    toggleDarkTheme();
  /*Listen for second click*/
  checkBoxInput.addEventListener('click', () => {
    setDefaultTheme();
  })
})




