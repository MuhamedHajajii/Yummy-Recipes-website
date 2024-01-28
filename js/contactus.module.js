  import {formValidation} from "./validation.module.js";
export let ContactForm = (function(){
  $("#contactUs").on("click", function () {
    $("#contentSearch").html(`
    <div id="contact" class="vh-100 w-100  d-flex justify-content-center align-items-center">
    <div class="container w-75">
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <input id="userNamer" placeholder="Enter Your Name" class="form-control" type="text" name="userName">
          <p class="alert d-none text-center mt-2 alert-danger">Special characters and numbers not allowed at characters 4 letters maximum 30 characters</p>
        </div>
        <div class="col-12 col-md-6">
          <input id="userEmail" placeholder="Enter Your Email" class="form-control" type="email" name="userEmail">
          <p class="alert d-none text-center mt-2 alert-danger">Email not valid *exemple@yyy.zzz</p>
        </div>
        <div class="col-12 col-md-6">
          <input id="userPhone" placeholder="Enter Your Phone" class="form-control" type="tel" name="userPhone">
          <p class="alert d-none text-center mt-2 alert-danger">Enter valid Phone Number</p>
        </div>
        <div class="col-12 col-md-6">
          <input id="userAge" placeholder="Enter Your Age" class="form-control" type="number" name="userAge">
          <p class="alert d-none text-center mt-2 alert-danger">Enter valid age</p>
        </div>
        <div class="col-12 col-md-6">
          <input id="userPassword" placeholder="Enter Your Password" class="form-control" type="password" name="userPassowrd">
          <p class="alert d-none text-center mt-2 alert-danger">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
        </div>
        <div class="col-12 col-md-6">
          <input id="userPasswordVerf" placeholder="Repassword" class="form-control" type="password" name="userPasswordVerf">
          <p class="alert d-none text-center mt-2 alert-danger">Enter valid repassword</p>
        </div>
        <button id="formBtn" disabled class="btn btn-outline-danger w-auto mx-auto" type="submit">Submit</button>
      </div>
    </div>
    </div>
    `);
    formValidation()
  });
})()
