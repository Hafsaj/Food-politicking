//load the DOM
$(document).ready(function(){

  //Click the hamburger icon
  $('.toggle-mobile-menu').click(function(){

  //Show the mobile menu
  $('#mobile_menu').toggleClass('mobile_menu_visible');

});

  //Click the cross icon

  //Close the mobile menu

  /*
  ** Includes:
  ** - jquery.js
  ** - jquery.flexslider.js
  */

    // Assign flexslider functoin to class .flexslider
    $('.flexslider').flexslider({
      // Customize flexslider properties
      animation: "slide",
      slideshowSpeed: 5000,
      animationSpeed: 1000,
      slideshow: false,
      directionNav: false

    });
    $("#sticky_nav").sticky({
   topSpacing: 0
 });

});
