import { searchField } from "./global-variables";
import { arrowSvgBtn} from "./global-variables";
import { fontDropdownMenu } from "./global-variables";
import { fontDropdownList } from "./global-variables";
import { fontPlaceholder } from "./global-variables";
import { sansSerif } from "./global-variables";
import { serif } from "./global-variables";
import { mono } from "./global-variables";


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
  
  /*Display default font*/
  function defaultDisplay() {
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute("id", "sans-serif");
  }
  defaultDisplay();
  

/*CHANGE FONT TYPE ON CLICK*/
/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
sansSerif.addEventListener("click", () => {
    /*Change font text displayed*/
    fontPlaceholder.innerHTML = sansSerif.innerHTML;
    fontPlaceholder.setAttribute("id", "sans-serif");
  
    /*Change input field to font*/
    searchField.addEventListener('input', () => {
      searchField.style.fontSize = "16px";
      searchField.style.fontWeight = "bold";
      searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    })
  });
  
  serif.addEventListener("click", () => {
    fontPlaceholder.innerHTML = serif.innerHTML;
    fontPlaceholder.setAttribute("id", "serif");
  });
  
  mono.addEventListener("click", () => {
    fontPlaceholder.innerHTML = mono.innerHTML;
    fontPlaceholder.setAttribute("id", "mono");
  });