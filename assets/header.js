// $( document ).ready(function() {
//    $('.site-nav__link--main').hover(function(){
//         $(this).parent().find('.site-nav__dropdown').addClass('active');
//         $(this).parents().siblings().find('.site-nav__dropdown').removeClass('active');
//    })
// });

$(document).ready(function() {
    $('li.site-nav--has-dropdown').hover(
        function () {
          $($(this).find('.site-nav__dropdown'), this).stop().slideDown(300);
        },
        function () {
          $($(this).parent().find('.site-nav__dropdown'), this).stop().slideUp(200);
        }
      );
});