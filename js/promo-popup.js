$(document).ready(function($) {

var language = window.navigator ? (window.navigator.language ||
                  window.navigator.systemLanguage ||
                  window.navigator.userLanguage) : "en";
language = language.substr(0, 2).toLowerCase();
console.log(language);

var textpc = "Would you like to join our team and become the </br> painting animator?"; 
var clickpc = "Click here"; 
var urlpc = "https://join.breakthrufilms.pl/en/"; 
var closephone = "Close"; 

console.log(language);

if(language=="pl"){
var textpc = "Chcesz dołączyć do naszego zespołu i zostać </br>animatorem?"; 
var clickpc = "Tak"; 
var urlpc = "https://join.breakthrufilms.pl/"; 
var closephone = "Nie"; 
}

if(language=="uk"){
var textpc = "Ви хочете приєднатися до нашої команди та стати </br> аніматором?"; 
var clickpc = "Так"; 
var urlpc = "https://join.breakthrufilms.pl/ua/"; 
var closephone = "Ні"; 
}


if (Cookies.get('popup_status') != '1'){
var width = $(document).width();
console.log(width);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
document.getElementById("textphone").innerHTML = textpc;
document.getElementById("urlphone").setAttribute('href', urlpc);
document.getElementById("clickphone").setAttribute('value', clickpc);
document.getElementById("closephone").setAttribute('value', closephone);

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
document.getElementById("textpc").innerHTML = textpc;
document.getElementById("clickpc").innerHTML = clickpc;
document.getElementById("urlpc").setAttribute('href', urlpc);
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
	
	
	
	Cookies.set('popup_status', '1', {
    expires: 60
    });
	
});