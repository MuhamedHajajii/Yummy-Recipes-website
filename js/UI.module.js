let sideBar = $("#mainSideBar").innerWidth();
let animationDurition;
$("#aside").css("left", -sideBar);

$("#sidebarOpen").on("click", function () {
  animationDurition = 300;
  for (let i = 0; i < 5; i++) {
    $(".mainSideBar > ul li")
    .eq(i)
    .animate({ top: "0" }, (animationDurition += 100));
  }
  $("#aside").animate({ left: "0" }, 500);

  // btns open&close
  $("#sidebarOpen").css("display", "none");
  $("#sidebarClose").css("display", "block");
});

$("#sidebarClose").on("click", function () {
  $("#aside").animate({ left: -sideBar }, 500);

  // btns open&close
  $("#sidebarOpen").css("display", "block");
  $("#sidebarClose").css("display", "none");

  // animate li
  for (let i = 0; i < 5; i++) {
    $(".mainSideBar > ul li").eq(i).animate({ top: "300" });
  }
});

$(".mainSideBar > ul li").on("click", function () {
  $("#contentSearch").empty()
  $("#aside").animate({ left: -sideBar }, 500);
  $("#sidebarOpen").css("display", "block");
  $("#sidebarClose").css("display", "none");
  $("#details").css("display","none")
});
