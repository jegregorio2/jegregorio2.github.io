// form-validation.js
$(function () {
  $("form[name='registration']").validate({
    // Rules
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    // Messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address"
    },
    // Submit
    submitHandler: function (form) {
      form.submit();
    }
  });
});