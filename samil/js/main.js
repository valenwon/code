
$(document).ready(function(){
    let totalNum
    let currNum
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        on: {
            init: function (swiper) {
                totalNum = swiper.slides.length - (swiper.loopedSlides * 2);
                currNum = swiper.realIndex + 1;
                $('.visual .paging .total').text(totalNum); // loop 때문에 가짜 슬라이드 2개 빼기
                $('.visual .paging .current').text(currNum);
            },
            slideChange: function (swiper) {
                currNum = swiper.realIndex + 1
                $('.visual .paging .current').text(currNum);
            },
        }

    });


    let scrolling
    let win_h
    let about = $('.about .about_wrap span.photo')

    



    scroll_chk()
    resize_chk()

    $(window).scroll(function(){
        scroll_chk()
    })
    $(window).resize(function(){
        resize_chk()
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log('스크롤값', scrolling)
        if(scrolling > 200){
            $('.about').addClass('active')
        }else if(scrolling < 700){
            $('.about').removeClass('active')
        }
    }
    function resize_chk(){
        win_h = $(window).height()
        console.log('브라우저 높이', win_h)
    }


})










    
