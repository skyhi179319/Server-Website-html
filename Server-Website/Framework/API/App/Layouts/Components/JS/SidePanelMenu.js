$(function(){
    $( "#menu" ).menu();
});
$(document).ready(function(){
	$( "li" ).each(function() {
		$(this).css("background-color","lightblue");
    });
	$("#LoadAXCPictures").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/AXC/HTML/Pictures.html");
	});
	$("#LoadImagesCapturedChart").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/AXC/Charts/HTML/ImagesCaptured.html");
	});
	$("#LoadAboutModal").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Modals/About/Modal.html");
	});
	$("#Reset").click(function(){
		$("#LoadContent").empty();
	});
});