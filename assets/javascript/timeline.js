var viewportWidth, divWidth, tb;
$(function () {

  viewport = $('#timelineContainer').innerWidth();
  tb = $('#thumbs');
  divWidth = tb.outerWidth();

  $('#timelineContainer').mousemove(function (e) {
    tb.css({ left: ((viewport - divWidth) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + "px" });
  });

  $('.history-block').on('click', function () {
    $('.history-block').css('width', '300px');
    $('.history-block').find('.title').css('width', '260px');
    $('.history-block .timeline').hide(300);
    $(this).css('width', '600px');
    $(this).find('.title').css('width', '500px');
    $(this).find('.timeline').show(800);
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