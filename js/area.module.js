import { displayMeals } from "./display.module.js";

$("#area").on("click", function () {
  $(".layerBox").fadeIn(300);
  getArea()
  });

async function getArea() {
  let response = await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")).json()
  displayAreas(response.meals);
}

export function displayAreas(areas) {
  for (let i = 0 ; i < areas.length ; i++ )
  {
    $("#contentSearch").append(`
      <div data-area-id="${areas[i].strArea}" class="col currentArea text-center text-white">
    <div class="position-relative overflow-hidden">
    <i class="fa-solid fa-house-laptop fa-4x mb-2"></i>
    <h3 class="align-self-center">${areas[i].strArea}</h3>
    </div>
    </div>  `);
  }
  getAreaName()
  $(".layerBox").fadeOut(300);

}
function getAreaName() {
  $(".currentArea").on("click",function(){
    $(".layerBox").fadeIn(300);
    getAreaNameTwo($(this).attr("data-area-id"))
        $(".layerBox").fadeOut(300);
      })}
async function getAreaNameTwo(areaName) {
  let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)).json()
  displayMeals(response.meals.splice(0,20))
}