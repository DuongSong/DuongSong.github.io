window.onload = event;
function event() {
	Canvas();
}

function Canvas() {
	var color = {
		colorColumn: "#0000ff"
	};
	var data = [2, 0.1, 3, 4, 4];
	var name = ["A","B","C","D","E"];

	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	var myPiechart = new Piechart(
		{
			ctx,
			data : data,
			name: name,
			colors: color,
			canvas: myCanvas
		}
	);
	myPiechart.print();
}