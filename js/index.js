$( document ).ready(function() {


    // $( ".modal__body .info_user .so-thich  label" ).click(function() {
    //     $(this).css('border', '2px solid #FCAF17');
    //   });

  $('.register').click(function() {
    $('.modal').css('display', 'flex');
    $('.modal-signin_body').css('display', 'none');
    $('.modal-signup_body').css('display', 'block');
    console.log(324325);
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
});



