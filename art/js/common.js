/* header, footer 공통요소에 들어가는 jabascript / jquery */
/********************
 * pc버전, 모바일 버전 구분
 * 스크롤 된 값 계산
 * 
 * 스크롤을 내리면 header에 fixed 클래스 추가
 * 메뉴에 마우스를 올리면 menu_over 클래스 추가
 * 메뉴를 오버한 li에 over 클래스 추가
 * 
 * 스크롤을 내릴 때는 gnb_up 클래스 추가
 * 스크롤을 올릴 때는 gnb_up 클래스 삭제
 * ==> 이전에 스크롤값과 현재 스크롤 값을 비교해서
       현재 값이 더 크면 내려가는 중 (100 -> 200)
       현재 값이 작으면 올라가는 중 (200 -> 100)
 * ************** */

let device_status //pc인지 모바일인지 구분하는 값
let scrolling //브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된 값
let window_w //브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부

$(window).scroll(function(){ //브라우저가 스크롤 될 때마다 1번 실행
    //console.log('브라우저가 스크롤 된다!!')
    scroll_chk()
})
$(window).resize(function(){ ///리사이즈 될 때마다 1번 실행
    //console.log('브라우저 크기 변한다!!')
    resize_chk() //함수의 실행
})
$(document).ready(function(){ //문서가 로딩 되고 단 1번
    //console.log('로딩됐다!!')
    resize_chk() //함수의 실행
    scroll_chk()

    
})