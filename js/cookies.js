function addLoadEvent() {
	var oldonload = window.onload;
	
	if (typeof window.onload != 'function') {
		window.onload = cookiesAccept;
	} else {
		window.onload = function() {
			if (oldonload) { oldonload(); }
			cookiesAccept();
		}
	}
} 

addLoadEvent();

function cookiesAccept() {

	checkCookie();

	function getCookie(c_name) {
		var i, x, y, ARRcookies = document.cookie.split(";");
		
		for (i = 0; i < ARRcookies.length; i++) {
			x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x = x.replace(/^\s+|\s+$/g,"");
			if (x == c_name) { return unescape(y); }
		}
	}
	
	function setCookie() {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + 365);
		var c_value = escape('1') + ((365==null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = 'cookies_info' + "=" + c_value;
		
		document.getElementById('cookie_info').style.display = 'none';
	}
	
	function checkCookie() {
		var cookies_info = getCookie("cookies_info");
		if (cookies_info == null || cookies_info == "") { 
		
			var cookiesContainer = document.createElement("div");
				cookiesContainer.setAttribute("id", "cookie_info");
				cookiesContainer.innerHTML = '<a id="close_info_cookie"><p>x</p></a><div id="user_information"><div class="user_information_nag">COOKIE INFO</div><div class="user_information_text">This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies and our <a href="http://lovingvincent.com/privacy-policy,315,pl.html" target="_blank">Privacy Policy</a>. You can specify the conditions for storage or access to cookies in your browser.</div></div>';
			
			document.getElementsByTagName("body").item(0).appendChild(cookiesContainer);
			
			var newlink = document.createElement("style");
				newlink.setAttribute("rel", "stylesheet");
				newlink.setAttribute("type", "text/css");
				newlink.innerHTML = "";
			
			document.getElementsByTagName("head").item(0).appendChild(newlink);
			
			var element = document.getElementById('close_info_cookie');
			
			if (element.addEventListener) { element.addEventListener('click', function() { setCookie() } , false); }
			else if (element.attachEvent) { element.attachEvent('onclick', function() { setCookie() }); }
		
		}
	}
	
}