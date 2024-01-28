import { displayMeals } from "./display.module.js";

$("#ingredients").on("click", function () {
  ingra()
});

async function ingra() {
  $(".layerBox").fadeIn(300);
let response = await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")).json()
    getIngredients(response.meals.splice(0, 20));
$(".layerBox").fadeOut(300);
}

export function getIngredients(ingredients) {
  $(".layerBox").fadeIn(300);
  for (let i = 0; i < ingredients.length; i++) {
    $("#contentSearch").append(`
  <div data-ingredients="${ingredients[i].strIngredient}" class="col">
  <div class="position-relative overflow-hidden text-white text-center">
    <i class="fa-solid fa-drumstick-bite fa-4x mb-2"></i>
    <h2 class="h3 align-self-center text-capitalize">${
      ingredients[i].strIngredient
    }</h2>
    <p>${ingredients[0].strDescription.split(" ").splice(0, 20).join(" ")}</p>
  </div>
</div>
  `);
  }
  $(".layerBox").fadeOut(300);
  currentIngredients()
}

async function getIngredientsAttr(currentIngredients) {
  let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${currentIngredients}`)).json()
  $(".layerBox").fadeIn(300);
  displayMeals(response.meals.splice(0, 20));
  $(".layerBox").fadeOut(300);
}

function currentIngredients() {
  $(".col").on("click", function () {
    getIngredientsAttr($(this).attr("data-ingredients"))
  });
}