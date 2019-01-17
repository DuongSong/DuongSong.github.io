$(document).ready(function () {
	var previousX;  //take coorodinate X.
	var layer = 0;	//local of layers

	//function handle when moving mouse.
	$(document).mousemove(function () {
		if(previousX == undefined)
			previousX = event.clientX;
		$('#pic_layer2').css('left',layer);
		$('#pic_layer3').css('left',layer);
		$('#pic_layer4').css('left',layer);
		if(previousX > event.clientX)
			layer -= 1;
		else
			layer += 1;
		previousX = event.clientX;
	});
});