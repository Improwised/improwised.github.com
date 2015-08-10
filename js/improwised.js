$('#about_us').on('click', function(){
  if( $( '#about_us' ).hasClass( "animation_class" ) ){
    $('#about_us').css('-webkit-transition','all 1s ease');
    $('#about_us').removeClass('animation_class');
    $('#logo').removeClass('display-none');
    $('#tag_line').removeClass('display-none');
    $('#services').removeClass('display-none');
    $('#work_with_us').removeClass('display-none');
    $('#contact_us').removeClass('display-none');
    $('.back_btn').removeClass('fadeIn');
    $('.back_btn').addClass('animated fadeOut');
    // $('body').css('background','none');
    // $('body').css('background-color','#2baed8');
    $('body').css('background','url(img/00.png) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');
    $('.about_us_des').css('display','none');
    $('.about_us_des').removeClass('fadeIn');
    $('.about_us_des').addClass('fadeOut');
  }
  else{
    $(this).addClass('animation_class');
    $('#logo').addClass('display-none change_delay');
    $('#tag_line').addClass('display-none change_delay');
    $('#services').addClass('display-none change_delay');
    $('#work_with_us').addClass('display-none change_delay');
    $('#contact_us').addClass('display-none change_delay');
    $('.back_btn').css('display','block');
    $('.back_btn').removeClass('fadeOut');
    $('.back_btn').addClass('animated fadeIn');
    $('.back_btn').css('border','5px solid white');
    $('.back_btn').css('color','white');
    $('body').css('background','none');
    $('body').css('background-color','#2baed8');
    $('.about_us_des').css('display','block');
    $('.about_us_des').removeClass('fadeOut');
    $('.about_us_des').addClass('fadeIn');
    $('.mailtoimprowised').css('color','white');
    // $('body').css('background','url(img/about.jpg) no-repeat center center fixed');
    // $('body').css('-webkit-background-size','cover');
  }
});





$('#services').on('click', function(){
  if( $( '#services' ).hasClass( "animation_class" ) ){
    $('#services').css('-webkit-transition','all 1s ease');
    $('#services').removeClass('animation_class');
    $('#logo').removeClass('display-none');
    $('#tag_line').removeClass('display-none');
    $('#about_us').removeClass('display-none');
    $('#work_with_us').removeClass('display-none');
    $('#contact_us').removeClass('display-none');
    $('html').css('background-color','transparent');
    $('body').css('background','url(img/00.png) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');
    $('.services_des').css('display','none');
    $('.services_des').removeClass('fadeIn');
    $('.services_des').addClass('fadeOut');

    $('.back_btn').removeClass('fadeIn');
    $('.back_btn').addClass('animated fadeOut');
  }
  else{
    $(this).addClass('animation_class');
    $('#logo').addClass('display-none change_delay');
    $('#tag_line').addClass('display-none change_delay');
    $('#about_us').addClass('display-none change_delay');
    $('#work_with_us').addClass('display-none change_delay');
    $('#contact_us').addClass('display-none change_delay');
    // $('body').css('background','none');
    // $('html').css('background-color','#2baed8');

    $('body').css('background','url(img/4.jpg) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');

    $('.services_des').css('display','block');
    $('.services_des').removeClass('fadeOut');
    $('.services_des').addClass('fadeIn');

    $('.back_btn').css('display','block');
    $('.back_btn').removeClass('fadeOut');
    $('.back_btn').addClass('animated fadeIn');
    $('.back_btn').css('border','5px solid white');
    $('.back_btn').css('color','white');

  }
});





$('#work_with_us').on('click', function(){
  if( $( '#work_with_us' ).hasClass( "animation_class" ) ){
    $('#work_with_us').css('-webkit-transition','all 1s ease');
    $('#work_with_us').removeClass('animation_class');
    $('#logo').removeClass('display-none');
    $('#tag_line').removeClass('display-none');
    $('#about_us').removeClass('display-none');
    $('#services').removeClass('display-none');
    $('#contact_us').removeClass('display-none');
    $('.portfolio').css('display','none');
    $('body').css('background','url(img/00.png) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');

    $('.back_btn').removeClass('fadeIn');
    $('.back_btn').addClass('animated fadeOut');
    $('.back_btn').css('border','5px solid white');
    $('.back_btn').css('background-color','transparent');

  }
  else{
    $(this).addClass('animation_class');
    $('#logo').addClass('display-none change_delay');
    $('#tag_line').addClass('display-none change_delay');
    $('#about_us').addClass('display-none change_delay');
    $('#services').addClass('display-none change_delay');
    $('#contact_us').addClass('display-none change_delay');
    $('.portfolio').css('display','block');
    $('.portfolio').addClass('fadeIn');
    $('body').css('background','url(img/14.jpg) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');

    $('.back_btn').css('display','block');
    $('.back_btn').removeClass('fadeOut');
    $('.back_btn').addClass('animated fadeIn');
    $('.back_btn').css('border','5px solid #2baed8');
    $('.back_btn').css('background-color','#2baed8');
    $('.back_btn').css('color','white');

  }
});





$('#contact_us').on('click', function(){
  if( $( '#contact_us' ).hasClass( "animation_class" ) ){
    $('#contact_us').css('-webkit-transition','all 1s ease');
    $('#contact_us').removeClass('animation_class');
    $('#logo').removeClass('display-none');
    $('#tag_line').removeClass('display-none');
    $('#about_us').removeClass('display-none');
    $('#services').removeClass('display-none');
    $('#work_with_us').removeClass('display-none');


    $('.contact_us').removeClass('fadeIn');
    $('.contact_us').css('display','none');

    $('body').css('background','url(img/00.png) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');

    $('.back_btn').removeClass('fadeIn');
    $('.back_btn').addClass('animated fadeOut');
  }
  else{
    $(this).addClass('animation_class');
    $('#logo').addClass('display-none change_delay');
    $('#tag_line').addClass('display-none change_delay');
    $('#about_us').addClass('display-none change_delay');
    $('#services').addClass('display-none change_delay');
    $('#work_with_us').addClass('display-none change_delay');

    $('body').css('background','url(img/contactus.png) no-repeat center center fixed');
    $('body').css('-webkit-background-size','cover');

    $('.contact_us').css('display','inline-block');
    $('.contact_us').addClass('fadeIn');

    $('.back_btn').css('display','block');
    $('.back_btn').removeClass('fadeOut');
    $('.back_btn').addClass('animated fadeIn');
    $('.back_btn').css('border','5px solid white');
    $('.back_btn').css('color','white');

  }
});

$('.back_btn').on('click', function(){

    if( $( '#about_us' ).hasClass( "animation_class" ) ){
      $('#about_us').css('-webkit-transition','all 1s ease');
      $('#about_us').removeClass('animation_class');
      $('#logo').removeClass('display-none');
      $('#tag_line').removeClass('display-none');
      $('#services').removeClass('display-none');
      $('#work_with_us').removeClass('display-none');
      $('#contact_us').removeClass('display-none');
      $('.back_btn').removeClass('fadeIn');
      $('.back_btn').addClass('animated fadeOut');
      // $('body').css('background','none');
      // $('body').css('background-color','#2baed8');
      $('body').css('background','url(img/00.png) no-repeat center center fixed');
      $('body').css('-webkit-background-size','cover');
      $('.about_us_des').css('display','none');
      $('.about_us_des').removeClass('fadeIn');
      $('.about_us_des').addClass('fadeOut');

      $('.back_btn').removeClass('fadeIn');
      $('.back_btn').addClass('animated fadeOut');

    }
    else if( $( '#services' ).hasClass( "animation_class" ) ){
      $('#services').css('-webkit-transition','all 1s ease');
      $('#services').removeClass('animation_class');
      $('#logo').removeClass('display-none');
      $('#tag_line').removeClass('display-none');
      $('#about_us').removeClass('display-none');
      $('#work_with_us').removeClass('display-none');
      $('#contact_us').removeClass('display-none');
      $('html').css('background-color','transparent');
      $('body').css('background','url(img/00.png) no-repeat center center fixed');
      $('body').css('-webkit-background-size','cover');
      $('.services_des').css('display','none');
      $('.services_des').removeClass('fadeIn');
      $('.services_des').addClass('fadeOut');

      $('.back_btn').css('display','block');
      $('.back_btn').removeClass('fadeOut');
      $('.back_btn').addClass('animated fadeIn');
      $('.back_btn').css('border','5px solid white');
      $('.back_btn').css('color','white');
    }
    else if( $( '#work_with_us' ).hasClass( "animation_class" ) ){
      $('#work_with_us').css('-webkit-transition','all 1s ease');
      $('#work_with_us').removeClass('animation_class');
      $('#logo').removeClass('display-none');
      $('#tag_line').removeClass('display-none');
      $('#about_us').removeClass('display-none');
      $('#services').removeClass('display-none');
      $('#contact_us').removeClass('display-none');
      $('.portfolio').css('display','none');
      $('body').css('background','url(img/00.png) no-repeat center center fixed');
      $('body').css('-webkit-background-size','cover');

      $('.back_btn').removeClass('fadeIn');
      $('.back_btn').addClass('animated fadeOut');
      $('.back_btn').css('border','5px solid white');
      $('.back_btn').css('background-color','transparent');
    }
    else if( $( '#contact_us' ).hasClass( "animation_class" ) ){
      $('#contact_us').css('-webkit-transition','all 1s ease');
      $('#contact_us').removeClass('animation_class');
      $('#logo').removeClass('display-none');
      $('#tag_line').removeClass('display-none');
      $('#about_us').removeClass('display-none');
      $('#services').removeClass('display-none');
      $('#work_with_us').removeClass('display-none');


      $('.contact_us').removeClass('fadeIn');
      $('.contact_us').css('display','none');

      $('body').css('background','url(img/00.png) no-repeat center center fixed');
      $('body').css('-webkit-background-size','cover');

      $('.back_btn').removeClass('fadeIn');
      $('.back_btn').addClass('animated fadeOut');
    }

});