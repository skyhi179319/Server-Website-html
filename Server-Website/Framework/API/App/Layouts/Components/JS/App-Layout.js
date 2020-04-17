$(function(){
    $( "#menu2" ).menu();
});
$( "#menu2" ).after(function() {
	$("#ImportColorBreak2").load("http://127.0.0.1/Server-Website/Framework/API/Components/Elements/ColorBreak/ColorBreak.html");
});
$("#LoadLayoutScripts").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/Developer/Layout-Scripts/Page.html");
});
$("#LoadAboutModalInfo").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/Developer/About-Modal/Page.html");
});
$("#LoadDeveloperModal").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Modals/Developer/Modal.html");
});
$("#LoadAXCAll").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/Developer/AXC-All/Page.html");
});
$("#LoadSPAll").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/Developer/SP-All/Page.html");
});
$("#LoadAllComponentsInfo").click(function(){
		$("#LoadContent").load("http://127.0.0.1/Server-Website/Framework/API/App/Layouts/Program/Include/Developer/Components-All/Page.html");
});