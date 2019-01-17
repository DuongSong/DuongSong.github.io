var Piechart = function (options) {
	this.options = options;
	var canvas = options.canvas;
	var centerX = options.centerX;
	var centerY = options.centerY;
	var radius = options.radius;
	var color = options.colors;
	var ctx = options.ctx;
	var myrate = options.data;
	var title = options.title;
	var sliceHeight = 250;
	var fixX = -20;
	var fixY = 10;
	ctx.scale(1,0.3);

	this.printChart = function (i) {
		if( i<sliceHeight ){
			ctx.fillStyle = color.successDown;
		}
		else{
			ctx.fillStyle = color.successUp;
		}
		ctx.beginPath();
		ctx.moveTo(centerX,centerY-i);
		ctx.arc(centerX, centerY-i, radius, 550, myrate.success*2*Math.PI + 550);
		ctx.fill();
		ctx.closePath();

		if( i<sliceHeight ){
			ctx.fillStyle = color.failDown;
		}
		else{
			ctx.fillStyle = color.failUp;
		}
		ctx.beginPath();
		ctx.moveTo(centerX + fixX,centerY + fixY -i);
		ctx.arc(centerX + fixX, centerY + fixY - i, radius,myrate.success*2*Math.PI+550, 550);
		ctx.fill();
		ctx.closePath();
	}

	this.printLineSuccess = function () {
		ctx.beginPath();
		ctx.moveTo(centerX + 50, centerY - 250);
		ctx.lineTo(650,100);
		ctx.lineTo(850, 100);
		ctx.lineWidth = 5;
		ctx.strokeStyle = color.successDown;
		ctx.stroke();
	}

	this.printLineFail = function (){
		ctx.beginPath();
		ctx.moveTo(centerX - 130, centerY - 180);
		ctx.lineTo(200,100);
		ctx.lineTo(20, 100);
		ctx.lineWidth = 5;
		ctx.strokeStyle = color.failDown;
		ctx.stroke();
	}

	this.printTitle = function () {
		ctx.scale(1, 3);
		ctx.beginPath();
		ctx.font = "20px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(title,350,370);
		ctx.stroke();
	}
	
	this.printTextSuccess = function () {
		ctx.scale(1, 1);
		ctx.beginPath();
		ctx.font = "20px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("80% Đã đạt",50,20);
		ctx.stroke();
	}
	
	this.printTextFail = function () {
		ctx.scale(1, 1);
		ctx.beginPath();
		ctx.font = "20px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("20% chưa đạt",675,20);
		ctx.stroke();
	}


	this.print = function () {
		for( var i=0; i<=sliceHeight; i++)
			this.printChart(i);
		this.printLineSuccess();
		this.printLineFail();
		this.printTitle();
		this.printTextSuccess();
		this.printTextFail();
	}
}
