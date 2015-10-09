$(document).ready(function () {

  $('#mobile-toggle').click(function() {
    $(this).toggleClass('active');
    $('#nav-links-mobile').toggleClass('active');
  })

  // Simple Fade Slideshow
  // Source: http://snook.ca/archives/javascript/simplest-jquery-slideshow
  
  $(function(){
      $('#hero-slideshow li:gt(0)').hide();
      setInterval(function(){
        $('#hero-slideshow :first-child').fadeOut()
           .next('li').fadeIn(1000)
           .end().appendTo('#hero-slideshow');}, 
        3500);
  });
  


});    
