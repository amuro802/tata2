//슬릭구현
$(document).ready(function(){
    //메인슬라이더
    $('.mainImg').slick({
        dots:true,
        prevArrow:$('.prev'),
        nextArrow:$('.next'),
        autoplay:true,  //자동으로 슬라이드
        autoplaySpeed:500, //몇초동안 자동슬라이드개념
        pauseOnHover:false, //마우스를 올려도 자동슬라이드 https://kenwheeler.github.io/slick/
    })
    
    $('.pauseBtn').click(function(){   //pauseBtn를 클릭을 했을떄
        $(this).toggleClass('play'); //토글클레스는 on off
        
        var playCheck=$('.pauseBtn').hasClass('play');
        
        if(palyCheck){
            $('.mainImg').slick('slickPause');      //slickPause은 슬릭을 멈추는개념
        }else if(!playCheck){
            $('.mainImg').slick('slickPlay'); 
        }
    })
    //wow
    new WOW().init();
    
})
