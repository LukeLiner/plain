$(function(){
  $('.public ul li').click(function(){
    $(this).addClass('current').siblings().removeClass('current');

    $('.public ul li .tabs a').click(function(e){
      e.preventDefault();
    });

    var index = $(this).index();
    $('#menu_con>div').hide();
    $('#menu_con>div:eq('+index+')').show();
  });
});