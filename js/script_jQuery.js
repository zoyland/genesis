// 햄버거메뉴
$('.burger').click(function(){
  $('.burger-menu').slideToggle();

});

$(document).ready(function(){
  $('.detail').hover(function(){
    //this runs on mouse enter
    $(this).closest('.imgbox').find('.imgbox_wrapper img').css('transform','scale(1.3,1.3)');
  }, function(){
    //this runs on mouse leave
    $(this).closest('.imgbox').find('.imgbox_wrapper img').css('transform','scale(1,1)');
  });
});

$( document ).ready( function() {
  $( '#sec01 .design_01 img' ).fadeIn( 3000 );

    // $('.tabBtn1').click(function(){//1번 버튼을 클릭했을때
          //     $('.tabBtn1').addClass('on');//1번 버튼 활성화
          //     $('.tabBtn2, .tabBtn3').removeClass('on');//2.3번 버튼 비활성화
          //     $('.tabCont1').css('display','block');//1번컨텐츠 활성화
          //     $('.tabCont2, .tabCont3').css('display', 'none');//2.3번 컨텐츠 비활성화
          //     return false;// a테그 무효화
          // });
          $('#sec01 .color .tabBtn li').click(function(){//n번 버튼을 클릭했을때
              var idx = $(this).index();
              // console.log(idx);

              $('#sec01 .car a').eq(idx).siblings().find('img').hide();
              $('#sec01 .car a').eq(idx).find('img').fadeIn();
              return false;// a테그 무효화
          });

          //처음 창을 열었을때 , 기본으로 세팅되어 있는경우
          // $('.tabBtn1').addClass('on');
          // $('.tabCont1').css('display','block');
});

AOS.init();


  
//
$(document).ready(function(){
  $('.detail').hover(function(){
    $(this).closest('.imgbox').find('.imgbox_wrapper').css('transform','scale(1.2, 1.2)');
    $(this).closest('.imgbox').find('.imgbox_wrapper').css('opacity','.9');
  }, function(){
    $(this).closest('.imgbox').find('.imgbox_wrapper').css('opacity','.2');
    $(this).closest('.imgbox').find('.imgbox_wrapper').css('transform','scale(1,1)');
  });

  $(document).ready(function(){
    $('.detail').hover(function(){
      $(this).closest('.imgbox').find('.imgbox_wrapper').css('transform','scale(1.2, 1.2)');
      $(this).closest('.imgbox').find('.imgbox_wrapper').css('opacity','.9');
    }, function(){
      $(this).closest('.imgbox').find('.imgbox_wrapper').css('opacity','.2');
      $(this).closest('.imgbox').find('.imgbox_wrapper').css('transform','scale(1,1)');
    });
    // Sec03 Gallery hover effect 


    
    $(window).scroll(function(){
      $('#sec02 .fade_box .extra').each(function(){ 
          var position = $(this).offset().top;
          var positionD = position - (position/6);
          console.log(position);
          console.log(positionD);
          var scroll = $(window).scrollTop();
          console.log(scroll);
          if (scroll >= positionD) {
              $(this).parent().find('.subtitle').fadeIn(1000);
              $(this).parent().find('.subtext').fadeIn(1000);
          } else {
              $(this).parent().find('.subtitle').fadeOut(500);
              $(this).parent().find('.subtext').fadeOut(500);
          }
        });
    });
    // Sec02 Safety text fade effect

  });

  $(".ft_bt").on("click", function(){
    function slideDown(target){
        slideUp();   //선택한걸 제외하고 없애주는 것
        $(target).addClass("on").next().slideDown();
    }
    function slideUp(){
        $(".ft_bt").removeClass("on").next().slideUp();
    }
    $(this).hasClass("on") ? slideUp() : slideDown($(this));
    // 조건식 ? 참일떄실행문 : 거짓일때실행문;
  });
  
});






