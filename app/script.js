$(document).ready(function() {
	//On user submitting text
	$("#converter").on("submit", function(e) {
		//Prevent page refresh
		e.preventDefault();
		var textObj = { textToConvert: $("input[name=humanText]").val() };
		console.log(textObj);
		//POST to server using ajax
		$.post("textToMeekrat", textObj, function(res) {
			$("#converted p").text("Converted Text:<br/>" + res.meekratText);
		});
	});
});
