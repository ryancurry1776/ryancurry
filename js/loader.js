$('body')
  $('#first-slide-jqueryLoad').css('background-image', '../img/profile.jpg')
  .waitForImages(function ()  {
}, $.noop, true);

$('body')
  $('#second-slide-jqueryLoad').css('background-image', '../img/bay.jpg')
  .waitForImages(function ()  {
}, $.noop, true);

$('body')
  $('#third-slide-jqueryLoad').css('background-image', '../img/forest.jpg')
  .waitForImages(function ()  {
}, $.noop, true);

$(window).on('load', function() {
  $('#preloader').delay(300).fadeOut();
  $('#bodyshown').css('overflow', 'visible')
});
