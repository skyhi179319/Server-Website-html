var CurrentURL = window.location.href;
function HomePage(){
	$(document).ready(function(){
		$("#ImportAPI").load("http://127.0.0.1/Server-Website/Framework/API/Home-Page/HTML/Canvas.html");
		$(".API").css("width","252px");
		$(".API").css("height","252px");
	}); 
}
function AboutPage(){
	$(document).ready(function(){
		$("#ImportAPI").load("http://127.0.0.1/Server-Website/Framework/API/About-Page/HTML/Tab.html");
	}); 
}
function AppPage(){
	$(document).ready(function(){
		$("#ImportAPI").load("http://127.0.0.1/Server-Website/Framework/API/App/App.html");
	}); 
}
if(CurrentURL == "http://127.0.0.1/Server-Website/Home.html"){
	HomePage();
}
if(CurrentURL == "http://127.0.0.1/Server-Website/Pages/About.html"){
	AboutPage();
}
if(CurrentURL == "http://127.0.0.1/Server-Website/Pages/App.html"){
	AppPage();
}