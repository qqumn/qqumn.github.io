// Fixed menu

var options = {
  offset: 730
}
var header = new Headhesive('.nav-menu', options);


//Меню переходов + активный класс

$('a').on('click', function() {
  var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
  $('body,html').animate({
      scrollTop: scrollPoint
  }, 500);
  return false;
});

  $(window).scroll(function() {
  var windscroll = $(window).scrollTop();
    $('.wrapper section').each(function(i){
      if($(this).position().top <= windscroll + 10) {
        $('.headhesive a.active').removeClass('active');
        $('.headhesive a').eq(i).addClass('active');
      }
    });
  }).scroll();


  //Filtering pitures

  $(function(){

    // Instantiate MixItUp:

    $('#Container').mixItUp();

});