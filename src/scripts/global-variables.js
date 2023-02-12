
/*Dropdown List*/
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

/*API*/
const vocabWord = document.getElementById('vocabulary-word');
const soundOutPhonetic = document.getElementById('phonetic');

export {arrowSvgBtn};
export {fontDropdownList};
export {fontDropdownMenu};
export {fontPlaceholder};
export {sansSerif};
export {serif};
export {mono};
export {form};
export {searchField};
export {errorSearchMessage};
export {vocabWord};
export{soundOutPhonetic};