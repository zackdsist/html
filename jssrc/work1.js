$(document).ready(function(){
$(".button1,.button2,.button3,.button4").mouseenter(function(){
	$(this).css("background-image","url(./img/buttonHover2.jpg)");
});
$(".button1,.button2,.button3,.button4").mouseleave(function(){
	$(this).css("background-image","url(./img/buttonActive1.jpg)");
});
});
