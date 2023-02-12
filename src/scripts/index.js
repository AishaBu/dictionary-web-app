import "../styles/styles.css";
import "./switch-font-style";
import "./dictionary-api";
import { searchField } from "./global-variables";
import { errorSearchMessage } from "./global-variables";
import { form } from "./global-variables";

/*FORM VALIDATION*/
/*Checks input value matches regex pattern*/
function checkRegexMatch() {
  const regex = /^[a-zA-Z]+/g;

  searchField.addEventListener("input", () => {
    searchField.addEventListener("keydown", (event) => {
      if (!searchField.value.match(regex) && event.key == "Enter") {
        event.preventDefault(); //stops default action
        event.stopPropagation(); //stops further propogation in event/bubbling phases
        searchField.setAttribute("id", "invalid-search-field");
        errorSearchMessage.textContent = "Please type only letters!";
        errorSearchMessage.setAttribute("id", "invalid-error-message");
      } else {
        errorSearchMessage.textContent = " ";
        searchField.setAttribute("id", "valid-value");
      }
    });
  });
}

function checkIfFieldEmpty() {
  searchField.addEventListener("input", () => {
    if (searchField.validity.valueMissing) {
      searchField.setAttribute("id", "invalid-search-field");
      errorSearchMessage.textContent = "Whoops, can't be empty!";
      errorSearchMessage.setAttribute("id", "invalid-error-message");
    } else {
      errorSearchMessage.textContent = " ";
      searchField.setAttribute("id", "valid-value");
    }
  });
}

/*Checks form onsubmit and prevents send if invalid values,and
displays message to user that input field cannot be empty*/
function checkFormOnSubmit() {
  form.addEventListener("submit", (event) => {
    if (searchField.validity.valueMissing) {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
      searchField.setAttribute("id", "invalid-search-field");
      errorSearchMessage.textContent = "Please type a word before sending!";
      errorSearchMessage.setAttribute("id", "invalid-error-message");
    }
  });
}

/*Validate input field from function*/
function validateField() {
  checkIfFieldEmpty();
  checkFormOnSubmit();
  checkRegexMatch();
}
validateField();

      