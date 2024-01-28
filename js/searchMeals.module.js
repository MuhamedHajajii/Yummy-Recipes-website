import { displayMeals } from "./display.module.js";
$(".mainSideBar > ul li")
  .eq(0)
  .on("click", function () {
    $(".searchInputs").css("display", "block");
  });
$(".mainSideBar > ul li")
  .eq(0)
  .siblings()
  .on("click", function () {
    $(".searchInputs").css("display", "none");
  });

$("#searchByName").on("input", function () {
  searchByName($("#searchByName").val());
  $("#searchByF").val("");
  $("#searchByF").removeClass("is-invalid");
});

async function searchByName(MealName) {
  $(".layerBox").fadeIn(300);
  let response = await (
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`
    )
  ).json();
  $(".layerBox").fadeOut(300);
  if (response.meals != null) {
    displayMeals(response.meals.splice(0, 20));
    $("#searchByName").removeClass("is-invalid");
    $("#errorMesage").css("opacity", "0");
  } else {
    $("#searchByName").addClass("is-invalid");
    $("#errorMesage").css("opacity", "1");
  }
}

//
$("#searchByF").on("input", function () {
  getMealsByFirstNAme($("#searchByF").val());
  $("#searchByName").val("");
  $("#searchByName").removeClass("is-invalid");
});

//
async function getMealsByFirstNAme(meals) {
  $(".layerBox").fadeIn(300);
  let response = await (
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        meals == "" ? (meals = "a") : meals
      }`
    )
  ).json();
  $(".layerBox").fadeOut(300);
  if (response.meals != null) {
    displayMeals(response.meals.splice(0, 20));
    $("#searchByF").removeClass("is-invalid");
    $("#errorMesage").css("opacity", "0");
  } else {
    $("#searchByF").addClass("is-invalid");
    $("#errorMesage").css("opacity", "1");
  }
}
$("#searchByName").on("blur", function () {
  $("#searchByF").removeClass("is-invalid");
  $("#errorMesage").css("opacity", "0");
});
$("#searchByF").on("blur", function () {
  $("#searchByF").removeClass("is-invalid");
  $("#errorMesage").css("opacity", "0");
});
