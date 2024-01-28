import { displayMeals } from "./display.module.js";

$("#categories").on("click", function () {
  $(".layerBox").fadeIn(300);
  getCategories();
});
async function getCategories() {
  let response = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  ).json();
  displayCategories(response.categories);
}

export function displayCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    $("#contentSearch").append(`
  <div class="col" data-list-id="${categories[i].strCategory}">
  <div class="position-relative overflow-hidden text-center">
    <img class="rounded-2 img-fluid" src="${
      categories[i].strCategoryThumb
    }" alt="${categories[i].strMeal}">
    <div  class="position-absolute w-100 h-100 start-0 rounded-2 p-1 layer p-1 text-center">
      <h2>${categories[i].strCategory}</h2>
    <p>${categories[i].strCategoryDescription
      .split(" ")
      .slice(0, 20)
      .join(" ")}</p>
    </div>
  </div>
</div>
  `);
  }
  $(".layerBox").fadeOut(300);
  fireGetID();
}
async function getId(currentID) {
  $(".layerBox").fadeIn(300);
  let response = await (
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentID}`
    )
  ).json();
  displayMeals(response.meals.splice(0, 20));
  $(".layerBox").fadeOut(300);
}

function fireGetID() {
  $(".col").on("click", function () {
    getId($(this).attr("data-list-id"));
  });
}
