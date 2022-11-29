$( document ).ready(function() {


    // $( ".modal__body .info_user .so-thich  label" ).click(function() {
    //     $(this).css('border', '2px solid #FCAF17');
    //   });

  $('.register').click(function() {
    $('.modal').css('display', 'flex');
    $('.modal-signin_body').css('display', 'none');
    $('.modal-signup_body').css('display', 'block');
  })

  $('#login').click(function() {
    $('.modal').css('display', 'flex');
    $('.modal-signin_body').css('display', 'block');
  
  })

  $('.modal__overlay').click(function() {
    $('.modal').css('display', 'none');
    $('.modal-signup_body').css('display', 'none');
    $('.modal-signin_body').css('display', 'none');

  })
        
  $("#form-sign-up").validate({
    errorClass: 'errors',
    rules: {
      // simple rule, converted to {required:true}
      hname:{
        required: true,
      },
      tname:{
        required: true,
      },
      phone:{
        required: true,
      },
      password:{
        required: true,
      },
      // compound rule
      email: {
        required: true,
        email: true
      }
    },
    messages: {
        hname: {
          required: "Tên không được để  trống",
        },
        tname: {
            required: " Họ không được để  trống",
          },
        phone: {
            required: "Số điện thoại không được để  trống",
        },
        password: {
            required: "Mật khẩu không được để  trống",
        },
        email: {
            required: "Email không được để  trống",
            email: "Email phải có đuôi @gmail.com",
        },
      }
  });


  $("#form-sign-in").validate({
    errorClass: 'errors',
    rules: {
      // simple rule, converted to {required:true}
      password:{
        required: true,
      },
      // compound rule
      email: {
        required: true,
        email: true
      }
    },
    messages: {
        password: {
            required: "Mật khẩu không được để  trống",
        },
        email: {
            required: "Email không được để  trống",
            email: "Email phải có đuôi @gmail.com",
        },
      }
  });

 $("#togglePassword-sign-up").click(function() {
  var input = $("#password-sign-up");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }

 })

 $("#togglePassword-sign-in").click(function() {
  var input = $("#password-sign-in");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }

 })



});

