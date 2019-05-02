let viewportWidth, divWidth, tb, touchSensitivity, timelineSwitch;

$(function () {

  viewport = $('#timelineContainer').innerWidth();
  tb = $('#thumbs');
  divWidth = tb.outerWidth();
  touchSensitivity = 5;
  timelineSwitch = false;

  $('#timelineContainer').mousemove(function (e) {
    tb.css({ left: ((viewport - divWidth) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + "px" });
  });
  // CREDIT: https://bootstrapious.com/p/bootstrap-carousel for the general swipe framework
  // tested ... works but need to refine the pixel width. think about adding divs with arrows in place of the #thumbs
  $('#timelineContainer').on("touchstart", function (event) {
    let xClick = event.originalEvent.touches[0].pageX;
    $(this).on("touchmove", function (event) {
      let xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > touchSensitivity) {
        $(this).find('#thumbs').css('right', '100px');
      } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
        $(this).find('#thumbs').css('left', '100px');
      }
    });
    $('#timelineContainer').on("touchend", function () {
      $(this).off("touchmove");
    });
  });

  // Set "active" class on click
  $('.history-block').on('click', function () {
    $(this).toggleClass('active');
    $(this).find('.timeline').toggle();
    $(this).find('.project').toggleClass('active');
    $(this).find('.top-boxes-zoom').toggle();
    $(this).find('.bottom-boxes-zoom').toggle();
  });

});
