import { displayMeals } from "./display.module.js";
import {displayDetails} from "./details.module.js";
import * as searchMeals from "./searchMeals.module.js";
import * as UI from "./UI.module.js";
import {ContactForm} from "./contactus.module.js";
// Meals Place Holder
jQuery(function () {
  readyDom()
  $(".first").fadeOut(300);
});
async function readyDom() {
  let response = await (await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")).json()
  displayMeals(response.meals)
}
