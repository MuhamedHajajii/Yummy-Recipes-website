export function getAllIds() {
  $("#contentSearch .col").on("click", function () {
    $(".layerBox").fadeIn(300);
    getDetails($(this).attr("data-id-col"));
    $(".layerBox").fadeOut(300);
  });
}
async function getDetails(id) {
  $("#contentSearch").addClass("d-none");
  let response = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  ).json();
  displayDetails(response.meals[0],id);
}
let Resipes = "";
let strIngredient = [];
let strMeasure = [];
let tags = "";

export function displayDetails(currentMeal,id) {
  strIngredient = [];
  strMeasure = [];
  tags = "";
  Resipes = "";
  for (const key in currentMeal) {
    if (key.includes("strIngredient") && currentMeal[key] != "") {
      strIngredient.push(currentMeal[key]);
    }
    if (
      key.includes("strMeasure") &&
      currentMeal[key] != " " &&
      currentMeal[key] != ""
    ) {
      strMeasure.push(currentMeal[key]);
    }
  }

  for (let i = 0; i < strIngredient.length; i++) {
    Resipes += `<li class="text-capitalize alert alert-info m-2 p-1">${strMeasure[i]} ${strIngredient[i]}</li>`;
  }
  let {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
    strArea,
    strSource,
    strYoutube,
  } = currentMeal;
  if (
    currentMeal.strTags != null &&
    currentMeal.strTags != "" &&
    currentMeal.strTags != " "
  ) {
    let tagsArr = currentMeal.strTags.split(",");
    for (let i = 0; i < tagsArr.length; i++) {
      if (tagsArr[i] != "" && tagsArr[i] != " ") {
        tags += `<li class="text-capitalize alert alert-danger m-2 p-1">${tagsArr[i]}</li>`;
      }
    }
  } else if (currentMeal.strTags == null) {
    tags = "No Tags for this meal";
  }

  $("#details").css("display", "block");
  $("#details").html(`
  <div class="container bg-black position-absolute top-0 start-0 w-100 h-100">
  <div class="detailsBtns mb-2 text-end">
    <button id="closeBtn" class="btn btn-outline-dark text-white"><i class="fas fa-close"></i></button>
  </div>
  <div class="row text-white pb-5">
    <div class="col-12 col-md-4 mb-3">
      <img class="w-100 rounded-2 mb-2 d-block" src="${strMealThumb}" alt="${strMeal}">
      <h2 class="text-capitalize m-0">${strMeal}</h2>
      <div class="text-center d-flex justify-content-between mt-3">
      <button id="prevBtn" class="d-block btn btn-outline-dark px-3 py-2 text-white"><i class="fa-solid fa-angles-left"></i></button>
      <button id="nextBtn" class="d-block btn btn-outline-dark px-3 py-2 text-white"><i class="fa-solid fa-angles-right"></i></button>
    </div>
    </div>
    <hr class="d-block d-md-none border-4" />
    <div class="col-12 col-md-8">
      <h2>Instructions</h2>
      <p>${strInstructions}</p>
      <p class="h3 text-capitalize">Area : ${strArea}</p>
      <p class="h3 text-capitalize">Category : ${strCategory}</p>
      <p class="h3 text-capitalize">Resipes :</p>
      <div>
        <ul class="list-unstyled d-flex flex-wrap">
          ${Resipes}
        </ul>
        <p class="h3">Tags :</p>
        <ul class="list-unstyled d-flex flex-wrap">
          ${tags}
        </ul>
        <hr class="d-block d-md-none border-4" />
        <a class="text-capitalize text-decoration-none btn btn-success me-2" target="_blank" href="${strSource}">Source</a>
        <a class="text-capitalize text-decoration-none btn btn-danger" target="_blank" href="${strYoutube}">Youtube</a>
      </div>
    </div>
  </div>
</div>
  `);
  $("#closeBtn").on("click", function () {
    $("#details").empty();
    $("#details").css("display", "none");
    $("#contentSearch").removeClass("d-none");
  });
  sliderBtns(id)
}

function sliderBtns(id) {
  let nextIteration = id; 
  $("#nextBtn").on('click',function(){
    if ($(`[data-id-col=${id}]`).nextAll().eq(0).attr("data-id-col")) {
      let currentId = $(`[data-id-col=${id}]`).nextAll().eq(0).attr("data-id-col")
    getDetails(currentId)
    } else {
      $("#nextBtn").css({"cssText":`cursor:not-allowed;background:rgba(255,0,0,0.7);`}).addClass("disabledBtn")
    }
  })
  $("#prevBtn").on('click',function(){
    if ($(`[data-id-col=${id}]`).prevAll().eq(0).attr("data-id-col") != null) {
      let currentId = $(`[data-id-col=${id}]`).prevAll().eq(0).attr("data-id-col")
      getDetails(currentId)
    } else {
      $("#prevBtn").css({"cssText":`cursor:not-allowed;background:rgba(255,0,0,0.7);`}).addClass("disabledBtn")
    }
  })
}


$("#darkMoodAlret").on("click",function(){
  $("#darkMoodAlret").addClass("d-none")
  $("#lightMoodAlret").removeClass("d-none")
  $(".light").slideDown()
  $(".dark").slideUp()

})
$("#lightMoodAlret").on("click",function(){
  $("#lightMoodAlret").addClass("d-none")
  $("#darkMoodAlret").removeClass("d-none")
  $(".light").slideUp()
  $(".dark").slideDown()

})