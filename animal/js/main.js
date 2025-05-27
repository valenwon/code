
$(document).ready(function(){
    
    /***************************  header & 메뉴 시작  *******************************
    - pc인지 모바일인지 구분 - 브라우저 넓이로
    - 스크롤값 계산
    - 공통사항 : 브라우저가 스크롤되면 or header에 오버하면 header에 fixed 클래스 추가
    - pc일 때 : 마우스를 오버한 li에만 over 클래스 추가
    - 모바일 때 : 메뉴열기를 클릭하면 header에 menu_open 클래스 추가
                 1차메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴만) 클릭한 li에 open클래스 추가
    *****/
    
    let device_status //모바일인지 pc인지
    let scrolling //스크롤한 값
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈
    
    scroll_chk() //함수 실행 (처음에 문서가 로딩되었을 때 1번)
    resize_chk() //함수 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될 떄마다 1번씩 실행
        resize_chk() //함수 실행
    })
    $(window).scroll(function(){ //브라우저를 스크롤 할 때마다 1번씩 실행
        scroll_chk() //함수 실행
    })
    
    function scroll_chk(){ //함수 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }
    
    /*******header에 마우스를 오버했을 때 *******/
    $('header').on('mouseenter', function(){
        console.log('오버햤더')
        $('header').addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        /*브라우저가 스크롤된 상태에서는 header에 fixed클래스를 삭제하면 XX 
          맨 위에 있을 때만 삭제해야 함*/
        if(scrolling <= 0){ 
            console.log('아웃')
            $('header').removeClass('fixed')
        } //if 종료 
    })
    
    /***************************  header & 메뉴 끝  **************************************/
    
    /***************************  visual_swiper 시작  ************************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });

    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide() //정지버튼 자신은 숨김
        $('.visual .btn_wrap button.btn_play').show() //재생 나타남
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide() //재생버튼 자신은 숨김
        $('.visual .btn_wrap button.btn_stop').show() //정지 나타남
    })
    /****************************  visual_swiper 끝  ************************************/
})

