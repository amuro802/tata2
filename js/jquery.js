//For Live Projects
/*
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});

*/

/*	$(document).ready( function() 
	{
		var filter_Offset = $('.con01Logo').offset();

		$(window).scroll(function() 
		{
			if ( $(document).scrollTop() > filter_Offset.top ) 
			{
			   $('.con01Logo').addClass('.con01Logo-Fixed');
			} 
			else 
			{
			   $('.con01Logo').removeClass('.con01Logo-Fixed');
			}
		});
	});
    */
/*
   $(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 0){ 
      $('.mainCon01List .con01Logo').addClass('fixinner'); 
    }else if(height == 0){ 
      $('.mainCon01List .con01Logo').removeClass('fixinner'); 
    } 
  });
  */
/*
console.clear();
$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    
    if ( scrollTop < 100 ) {
        scrollTop = 100;
    }
    else if ( scrollTop > 9600 ) {
        scrollTop = 9600;
    }
    
    let duration = 5000;
    $('.mainCon01List .con01Logo').stop().animate({top:scrollTop}, duration);
    
    //console.log(scrollTop);
});
*/