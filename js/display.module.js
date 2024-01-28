import {getAllIds} from "./details.module.js";
import {getIngredients} from "./ingredients.module.js"; 
import {displayAreas} from "./area.module.js"; 
import {displayCategories} from "./categories.module.js"; 
export function displayMeals(meals) {
  $("#contentSearch").empty();
  for (let i = 0; i < meals.length; i++) {
    // console.log(meals[i]);
    $("#contentSearch").append(`
    <div class="col" data-id-col="${meals[i].idMeal}">
      <div class="position-relative overflow-hidden">
        <img class="rounded-2 img-fluid" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}">
        <div  class="position-absolute w-100 h-100 start-0 d-flex rounded-2 p-1 layer text-capitalize p-1">
        <p class="h3 align-self-center">${meals[i].strMeal}</p>
        </div>
      </div>
    </div>
    `);
  }
  getAllIds()
}