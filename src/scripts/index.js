import "../styles/styles.css";


const arrowSvgBtn = document.getElementById("arrow-svg");
const fontDropdownList = document.getElementById("font-dropdown-list");
const fontDropdownMenu = document.getElementById("font-dropdown-menu");

/*Change font name for placeholder*/
const fontPlaceholder = document.getElementById("font-choice-placeholder");
const sansSerif = document.getElementById("sans-serif");
const serif = document.getElementById("serif");
const mono = document.getElementById("mono");

/*Form Input*/
const form = document.getElementById("form");
const searchField = document.getElementById("search-field");
const errorSearchMessage = document.querySelector("#search-field + span#error");

/*API Call*/
const vocabWord = document.getElementById('vocabulary-word');

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

/*Display default font*/
function defaultDisplay() {
  fontPlaceholder.innerHTML = sansSerif.innerHTML;
  fontPlaceholder.setAttribute("id", "sans-serif");
}
defaultDisplay();

/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
sansSerif.addEventListener("click", () => {
  fontPlaceholder.innerHTML = sansSerif.innerHTML;
  fontPlaceholder.setAttribute("id", "sans-serif");
});

serif.addEventListener("click", () => {
  fontPlaceholder.innerHTML = serif.innerHTML;
  fontPlaceholder.setAttribute("id", "serif");
});

mono.addEventListener("click", () => {
  fontPlaceholder.innerHTML = mono.innerHTML;
  fontPlaceholder.setAttribute("id", "mono");
});

/*Form Validation*/
/*Checks input value matches regex pattern*/
function checkRegexMatch() {
  const regex = /^[a-zA-Z]+/g;

  searchField.addEventListener("input", () => {
    searchField.addEventListener("keydown", (e) => {
      if (!searchField.value.match(regex) && e.key == "Enter") {
        e.preventDefault(); //stops default action
        e.stopPropagation(); //stops further propogation in event/bubbling phases
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
  form.addEventListener("submit", (e) => {
    if (searchField.validity.valueMissing) {
      e.preventDefault(); //stops default action
      e.stopPropagation(); //stops further propogation in event/bubbling phases
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


/*API CALL*/
async function fetchVocabularyWords(searchFieldValue) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchFieldValue}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get word: ${error}`);
  }
}

  //const promise = fetchVocabularyWords();
  //promise.then((data) => console.log(data[0].phonetics[1].text));
  //promise.then((data) => console.log(data[0].word));
  //promise.then((data) => vocabWord.textContent = data[0].word);
   
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const promise = fetchVocabularyWords(searchField.value);
  promise.then((data) => vocabWord.textContent = data[0].word);
})
