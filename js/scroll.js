$( document ).ready(function(){
	
$('.scroll, .scroll-arrow, .scroll-acerca, .scroll-galeria, .scroll-redes').click(function(e){
	e.preventDefault();
	var str = $(this).attr('href');
	$('body,html').stop(true, true).animate({
		scrollTop:$(str).offset().top
	},1000);
});

});









