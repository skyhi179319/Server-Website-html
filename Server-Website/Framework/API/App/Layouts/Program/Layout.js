$(document).ready(function(){
	$("#ImportSidePanelMenu").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Components/HTML/SidePanelMenu.html");
	$("#ImportColorBreak").load("http://127.0.0.1/Server-Website/Framework/API/Components/Elements/ColorBreak/ColorBreak.html");
	$("#FullImprovements").load("http://127.0.0.1/Server-Website/Framework/API/Improvements/Side-Menu/Full/Page.html");
	$("#BackgroundButton").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/Components/Elements/Background/Year/HTML/Canvas.html");
	});
});