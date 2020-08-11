$(document).ready(function($) {
	
function NewPopUp(){
var width = $(document).width();
console.log(width);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

$('.popup-fade-phone').fadeIn();

	$('.popup-close-phone').click(function() {
		$(this).parents('.popup-fade-phone').fadeOut();
		return false;
	});		

 

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-phone').fadeOut();
		}
	});

	

	$('.popup-fade-phone').click(function(e) {
		if ($(e.target).closest('.popup-phone').length == 0) {
			$(this).fadeOut();					
		}
	});


} 
else{


$('.popup-fade').fadeIn();

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		

 

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});

	   
}
}
	
	if (Cookies.get('popup_status') != '1') {
	NewPopUp();
	}
	
	Cookies.set('popup_status', '1', {
    expires: 60
    });
	
});