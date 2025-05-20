$(document).ready(function(){
    /* 스크롤여부, 브라우저 넓이 */
    let scrolling //브라우저가 스크롤 된 정도를 저장
    let win_w //브라우저 넓이
    let device_status //지금 현재 넓이가 pc인지 모바일인지 저장

    scroll_chk() //문서가 로딩되었을 때 1번 실행
    $(window).scroll(function(){ //스크롤 할때마다 1번씩 실행
        scroll_chk() //함수의 실행
    }) //$(window).scroll

    device_chk() //문서가 로딩되었을 때 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 할 때마다 1번씩 실행
        device_chk() //함수의 실행
    }) //$(window).resize

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    } //function scroll_chk

    function device_chk(){
        win_w = $(window).width()
        
        if(win_w > 1024){ //1025 이상
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

}) //$(document).ready

