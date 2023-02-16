import "../styles/styles.css";
import "./switch-font-style";
import "./dictionary-api";
import { searchField } from "./global-variables";
import { errorSearchMessage } from "./global-variables";
import { form } from "./global-variables";
import { createDictionary } from "./dictionary-api";

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
  if(!searchField.value.match(regex) || searchField.value.match(numRegex) || searchField.value.match(specChar)){
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Please type only letters!";
    errorSearchMessage.setAttribute("id", "invalid-error-message");
    
    /*If there is an attempt to submit form while invalid, prevent sending*/
    form.addEventListener('submit', (event) => {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
    })
  }
  else{
    /*Display words on formsubmit if field value is valid*/
    form.addEventListener('submit', (event) => {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
      createDictionary();
    });
  }
  }
);

/*Check if field empty onsubmit*/
form.addEventListener("submit", (event) => {
  if(searchField.validity.valueMissing) {
    event.preventDefault(); //stops default action
    event.stopPropagation(); //stops further propogation in event/bubbling phases
    searchField.setAttribute("id", "invalid-search-field");
    errorSearchMessage.textContent = "Whoops, can't be empty!";
    errorSearchMessage.setAttribute("id", "invalid-error-message");
  }
});