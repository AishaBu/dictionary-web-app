import {searchField } from "./global-variables";
import {defOne, defOneOfTwo, defThree, defThreeofTwo, defTwo, defTwoofTwo} from "./global-variables";
import {fontPlaceholder, fontDropdownList , sansSerif, serif, mono} from "./global-variables";
import { moonIcon } from "./global-variables";

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
} setDefaultTheme(); //Set Default Theme for Toggle*/


  /*Toggle Theme On and Off*/
  /*Checks if light-mode theme is active click, if it, is remove class,
   and toggle dark-mode, if dark-mode is active instead on click,
   remove light-mode class and set default theme.*/
  checkBoxInput.addEventListener('click', () => {
     if(body.classList.contains('light-mode')){
      body.classList.remove("light-mode");
      toggleDarkTheme();
     }
     else{
      body.classList.remove("dark-mode");
      moonIcon.classList.remove('moon-dark-theme');
      setDefaultTheme();
     }
  })




