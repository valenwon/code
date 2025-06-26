$(document).ready(function(){

    let device_status //pc인지 모바일인지 구분하는 값
    let scrolling //브라우저가 스크롤 된 값
    let scroll_prev //이전에 스크롤 된 값
    let window_w //브라우저의 넓이 값
    let mobile_size = 1024 //모바일로 변경되는 사이트

    scroll_chk() //함수 실행 (처음에 문서가 로딩되었을 때 1번)
    resize_chk() //함수 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될 떄마다 1번씩 실행
        resize_chk() //함수 실행
    })
    $(window).scroll(function(){ //브라우저를 스크롤 할 때마다 1번씩 실행
        scroll_chk() //함수 실행
    })

    function scroll_chk(){
        scroll_prev = scrolling
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
            if(scrolling > scroll_prev){
                $('header').addClass('gnb_up')
            }else{
                $('header').removeClass('gnb_up')
            }
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
    }


    /***** header에 마우스를 오버했을 때 */

    $('header').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('fixed') /* 마우스 오버 시 fixed 메뉴바가 나타남*/
        }
    })
    $('header').on('mouseleave', function(){
        if(scrolling <= 0){
            $('header').removeClass('fixed')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over') /*2차 메뉴 나타났다가 사라짐*/
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over') /*탭으로 갔을 때 */
    })


})