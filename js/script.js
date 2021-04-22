/*<script>
jQuery(function($) {
$("body").css("display", "none");
$("body").fadeIn(2000);
$("a.transition").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(1000, redirectPage);
});
function redirectPage() {
window.location = linkLocation;
}
});
</script>


*/
/*헤더 픽스드가 내려오면 투명도*/

$(document).ready(function(){
$(document).scroll(function(){
var top=$(this).scrollTop();
if(top<150){
var dif=1-top/150;
$("#header.fiexd").css({opacity:dif});
}
})
});