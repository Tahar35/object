$(function() {
  $("#store-list li").on("singletap", function() {
    $.UIGoToArticle("#book");
  });
  $('#backToMain').on('singletap', function() {
    $.UIGoBackToArticle('#main');
  });
  bookDateSelect();
});
function bookDateSelect (argument) {
  
  var segmentedResponse = function(e) {
    e.stopPropagation();
    $('#output').find('h3 > span').html(($(this).index() + 1));
  };
  // Init Segmented Control:
  $('.segmented').UISegmented({
    selected: 0, 
    callback:segmentedResponse
  });
}