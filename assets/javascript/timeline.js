let viewportWidth, divWidth, tb, touchSensitivity;

$(function () {

  viewport = $('#timelineContainer').innerWidth();
  tb = $('#thumbs');
  divWidth = tb.outerWidth();
  touchSensitivity = 5;

  $('#timelineContainer').mousemove(function (e) {
    tb.css({ left: ((viewport - divWidth) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + "px" });
  });
  // CREDIT: https://bootstrapious.com/p/bootstrap-carousel for the general swipe framework
  $('#timelineContainer').on("touchstart", function (event) {
    let xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
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

  $('.history-block').on('click', function (event) {
    event.preventDefault();
    $('.history-block').css('width', '300px');
    $('.history-block').find('.project').css('width', '260px');
    $('.history-block .timeline').hide();
    $(this).css('width', '600px');
    $(this).find('.project').css('width', '500px');
    $(this).find('.timeline').show();
    $(this).find('.top-boxes').append(`<span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>`);
    $(this).find('.bottom-boxes').append(`<span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>
                                        <span class="small_box"></span>`);
    $('#timelineContainer').mousemove(function (e) {
      tb.css({ left: ((viewport - divWidth - 300) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
    });
  });
  $('.timeline ul li').on('click', function () {
    $(this).parent().blink();
  });
});