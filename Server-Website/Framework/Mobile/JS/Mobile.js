$(document).ready(function(){
    // Global Styles
    function GlobalStyles(){
        var CurrentURL = window.location.href;
		// Page Functions
		function AboutPage(){
			$(document).ready(function(){
				$("#ImportAPI").remove();
			}); 
		}
		function AppPage(){
			$(document).ready(function(){
				$("#ImportAPI").remove();
			}); 
		}
		// Check URLS
        if(CurrentURL == "http://127.0.0.1/Server-Website/Pages/About.html"){
	        AboutPage();
        }
        if(CurrentURL == "http://127.0.0.1/Server-Website/Pages/App.html"){
	        AppPage();
        }
	}
    if(window.matchMedia("(max-width: 767px)").matches){
        // The viewport is less than 768 pixels wide
        GlobalStyles();
    }
});