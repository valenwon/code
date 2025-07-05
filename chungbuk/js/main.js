
$(document).ready(function(){
    const visual_wrap_swiper = new Swiper('.visual_wrap .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual_wrap .swiper .inner .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            //renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //    return '<span class="' + className + '">' + (index + 1) + "</span>";
            //},
        },
        

        //navigation: {  /* 이전, 다음 버튼 */
            //nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            //prevEl: '.swiper-button-prev',  
        //},

    });

    $('.visual_wrap .swiper .ctrl_wrap .btn_play').on('click', function(){
        visual_wrap_swiper.autoplay.start();  /* 재생 기능 */
        //console.log('재생버튼 클릭!!')
    })

    $('.visual_wrap .swiper .ctrl_wrap .btn_stop').on('click', function(){
        visual_wrap_swiper.autoplay.stop();  /* 일시정지 기능 */
        // console.log('정지버튼 클릭!!')
    })

    
    //swiper.autoplay.stop();  /* 일시정지 기능 */
    //swiper.autoplay.start();  /* 재생 기능 */
})










    
