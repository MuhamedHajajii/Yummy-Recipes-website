
export function formValidation() {
  $("#userNamer").on("input", function () {
    if (nameValidation()) {
      $("#userNamer").next().addClass("d-none");
      $("#userNamer").addClass("is-valid");
      $("#userNamer").removeClass("is-invalid");
    } else {
      $("#userNamer").next().removeClass("d-none");
      $("#userNamer").removeClass("is-valid");
      $("#userNamer").addClass("is-invalid");
    }
    buttonRun();
  });
  $("#userEmail").on("input", function () {
    
    if (emailValidation()) {
      $("#userEmail").next().addClass("d-none");
      $("#userEmail").addClass("is-valid");
      $("#userEmail").removeClass("is-invalid");
    } else {
      $("#userEmail").next().removeClass("d-none");
      $("#userEmail").removeClass("is-valid");
      $("#userEmail").addClass("is-invalid");
    }
    buttonRun();
  });
  
  $("#userPhone").on("input", function () {
    if (phoneValidation()) {
      $("#userPhone").next().addClass("d-none");
      $("#userPhone").addClass("is-valid");
      $("#userPhone").removeClass("is-invalid");
    } else {
      $("#userPhone").next().removeClass("d-none");
      $("#userPhone").removeClass("is-valid");
      $("#userPhone").addClass("is-invalid");
    }
    buttonRun();
  });
  $("#userAge").on("input", function () {
    if (ageValidation()) {
      $("#userAge").next().addClass("d-none");
      $("#userAge").addClass("is-valid");
      $("#userAge").removeClass("is-invalid");
    } else {
      $("#userAge").next().removeClass("d-none");
      $("#userAge").removeClass("is-valid");
      $("#userAge").addClass("is-invalid");
    }
    buttonRun();
  });
  $("#userPassword").on("input", function () {
    if (passwordValidation()) {
      $("#userPassword").next().addClass("d-none");
      $("#userPassword").addClass("is-valid");
      $("#userPassword").removeClass("is-invalid");
    } else {
      $("#userPassword").next().removeClass("d-none");
      $("#userPassword").removeClass("is-valid");
      $("#userPassword").addClass("is-invalid");
    }
    buttonRun();
  });
  $("#userPasswordVerf").on("input", function () {
    if (repasswordValidation()) {
      $("#userPasswordVerf").next().addClass("d-none");
      $("#userPasswordVerf").addClass("is-valid");
      $("#userPasswordVerf").removeClass("is-invalid");
    } else {
      $("#userPasswordVerf").next().removeClass("d-none");
      $("#userPasswordVerf").removeClass("is-valid");
      $("#userPasswordVerf").addClass("is-invalid");
    }
    buttonRun();
  });
  
  function buttonRun() {
    if (
      nameValidation() &&
      emailValidation() &&
      phoneValidation() &&
      ageValidation() &&
      passwordValidation() &&
      repasswordValidation()
    ) {
      $("#formBtn").removeAttr("disabled");
    } else {
      $("#formBtn").attr("disabled", "disabled");
    }
  }
  
  $("#formBtn").on("click", function (e) {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed Up successfully",
    });
  });
  function nameValidation() {
    return /^[a-zA-Z ]{4,20}$/.test($("#userNamer").val());
  }
  function emailValidation() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      $("#userEmail").val()
    );
  }
  function phoneValidation() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      $("#userPhone").val()
    );
  }
  function ageValidation() {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($("#userAge").val());
  }
  function passwordValidation() {
    return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($("#userPassword").val());
  }
  function repasswordValidation() {
    return $("#userPassword").val() === $("#userPasswordVerf").val();
  }
}