$(document).ready(function() {
  $(window).scroll(function() {
    $('.hidden').each(function(el) {
      let object_top = $(this).position().top;
      let window_bottom = $(window).scrollTop() + $(window).height();

      if (window_bottom > object_top) {
        $(this).animate({ 'opacity': 1 }, 1000);
      }
    });
  });
});