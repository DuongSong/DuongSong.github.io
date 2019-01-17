window.onload = event;
function event() {
	Canvas();
}

function Canvas() {
	var myRate = {
		success: 0.8,
		fail: 0.2
	};
	var color = {
		successUp:"#87cefa",
		successDown:"#0000ff",
		failUp: "#cd5c5c",
		failDown: "#ff0000"
	};
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	var myPiechart = new Piechart(
			{
				ctx,
				centerX: 500,
				centerY: 800,
				radius: 200,
				title: "Biểu đồ tổng quan khung năng lực",
				canvas: myCanvas,
				data: myRate,
				colors: color,
			}
		);
	myPiechart.print();
}