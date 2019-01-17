var Piechart = function (options) {
	this.options = options;
	var ctx = options.ctx;
	var canvas = options.canvas;
	var title = options.title;
	var color = options.colors;
	var data = options.data;
	var name = options.name;
	var fixY = 10;
	ctx.scale(0.8,0.5);
	var startX = 150;
	var startY = 1000;
	var endX = 900;
	var endY = 1000;

	this.printLineAt0 = function () {
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.fillStyle = "black";
		ctx.font = "30px arial";
		ctx.align = "center";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.fillText("0",startX/2 + 50,startY + fixY);
		ctx.closePath();
	}

	this.printLine = function () {
		var y = startY - startY/5;
		ctx.beginPath();
		for(var i=0; i<4; i++) {
			ctx.lineWidth = 1;
			ctx.color = "#d3d3d3";
			ctx.fillStyle = "black";
			ctx.moveTo(startX,y);
			ctx.lineTo(endX,y);
			ctx.stroke();
			ctx.fillText(i+1,startX/2 + 50, y + fixY);
			y -= startY/5;
		}
		ctx.closePath();
	}

	this.printTitle = function () {
		ctx.beginPath();
		ctx.font = "50px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("BIỂU ĐỒ LỊCH SỬ OF POSITION",startY/10 + 40,startY/10-50);
		ctx.stroke();
	}

	this.printText = function () {
		ctx.beginPath();
		ctx.fillStyle = color.colorColumn;
		ctx.fillRect(endX+50, endY/5, 150, 100);
		ctx.font = "50px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("LEVEL ",endX+50,endY/2.5);
		ctx.fillText("OF ",endX+50,endY/2.1);
		ctx.fillText("POSITION",endX+50,endY/1.8);
		ctx.translate(0,600);
		ctx.rotate(-Math.PI / 2);
		ctx.fillText("LEVEL OF POSITION",-150,endY/10);
		ctx.stroke();
	}

	this.printColumn = function () {
		var changeXPrintCol = startX;
		var heightCol = 200;
		ctx.beginPath();
		for( var i=0; i<5; i++){
			ctx.fillStyle = color.colorColumn;
			ctx.fillRect(changeXPrintCol, endY, 100,-data[i]*heightCol);
			changeXPrintCol += 150;
		}

		var changeXPrintName = startX;
		for( var i=0; i<5; i++){
			ctx.fillStyle = "black";
			ctx.fillText(name[i],changeXPrintName+40,endY+50);
			changeXPrintName += 150;
		}
		ctx.closePath();
	}

	this.print = function () {
		this.printLineAt0();
		this.printLine();
		this.printColumn();
		this.printTitle();
		this.printText();
	}
}

