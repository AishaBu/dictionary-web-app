const arrowSvgBtn = document.getElementById('arrow-svg');
const fontDropdownList = document.getElementById('font-dropdown-list');
const fontDropdownMenu = document.getElementById('font-dropdown-menu');

/*Show font list on hover-mouseover*/
function displayFontList(){
    fontDropdownList.style.display = "block";
}

/*Hide font list when mouse is off arrow*/
function hideFontList(){
    fontDropdownList.style.display = "none";
}

/*Show font dropdown list when arrow is hovered*/
arrowSvgBtn.addEventListener('mouseover', displayFontList);

/*Hide font list when arrow is clicked*/
fontDropdownMenu.addEventListener('mouseleave', hideFontList)

/*Change font name for placeholder*/
const fontPlaceholder = document.getElementById('font-choice-placeholder');
const sansSerif = document.getElementById('sans-serif');
const serif = document.getElementById('serif');
const mono = document.getElementById('mono');

/*Display default font*/
function defaultDisplay(){
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute('id','sans-serif');
}
defaultDisplay();

/*Display each font on click*/;
sansSerif.addEventListener('click', () =>{
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute('id','sans-serif');
} );

serif.addEventListener('click', () =>{
    fontPlaceholder.innerHTML = serif.innerHTML;
    fontPlaceholder.setAttribute('id','serif');
} );

mono.addEventListener('click', () =>{
    fontPlaceholder.innerHTML = mono.innerHTML;
    fontPlaceholder.setAttribute('id','mono');
} );

