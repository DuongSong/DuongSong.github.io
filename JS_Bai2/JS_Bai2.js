function createCelenda() {
	var tableData = document.getElementById("table");
	document.getElementById("txtInput").value = '';
	tableData.style.visibility = "visible";
	var count = 0;
	//Create row, column and then add into table
	for( var i=0; i<6; i++) {
		var tr = document.createElement("tr");
		for(var j=0; j<7; j++){
			var td = document.createElement("td");
			td.id = count++;
			tr.appendChild(td);
		}
		tableData.appendChild(tr);
	}
	//create combo box year.
	var y = new Date();
	for( i=y.getFullYear()-5; i<=y.getFullYear()+5; i++){
		var option = document.createElement("option");
		option.value = i;
		option.text = i;
		if(i == y.getFullYear()){
			option.selected = true;
		}
		document.getElementById("cmbYear").appendChild(option);
	}
	document.getElementById("icn_celendar").onclick = '';
	printDay('01','01','2019');
}

//function checking month and year
function checkMonth(month,year) {
	var checkValue = new Date(year,month,0).getDate();
	return checkValue;
}

//function print day .
function printDay(day, month, year) {
	resetTable();
	var string = month + "/" + day + "/" + year;
	var date = new Date(string);
	var now = new Date();
	var select_month = document.getElementById("cmbMonth").value;
	var select_year = document.getElementById("cmbYear").value;
	var countDay = 1;
	for( var i=date.getDay(); i<=42; i++) {
		document.getElementById(i).innerText = countDay++;
		document.getElementById(i).style.background = "#ffffff";
		document.getElementById(i).onclick = clickItem;
		document.getElementById(i).value = countDay - 1;
		if ((select_month - 1 == now.getMonth()) && (select_year == now.getFullYear())) {
			if (now.getDate() == countDay - 1) {
				document.getElementById(i).style.background = "blue";
			}
		}
		if (countDay > checkMonth(month, year))
			break;
	}
}

//function reset table
function resetTable() {
		for (var i=0; i<42 ;i++){
			document.getElementById(i).style.background = "#2d2d2d";
			document.getElementById(i).innerText = '';
			document.getElementById(i).onclick = '';
			document.getElementById(i).value = '';
		}
}

//function handle print day again then change value day, month and year
function chooseAgainMonthYear() {
	var month = document.getElementById("cmbMonth").value;
	var year = document.getElementById("cmbYear").value;
	printDay(1,month,year);
}

//function handle decrease year when click double arrow
function decreaseYear() {
	var year = document.getElementById("cmbYear").value;
	if(year == "2014")
		return;
	document.getElementById("cmbYear").value--;
	chooseAgainMonthYear();
}

//function handle decrease month when click single arrow
function decreaseMonth() {
	var month = document.getElementById("cmbMonth").value;
	if(month == "1")
		return;
	document.getElementById("cmbMonth").value--;
	chooseAgainMonthYear();
}

//function handle decrease year when click double arrow
function increaseYear() {
	var year = document.getElementById("cmbYear").value;
	if(year == "2024")
		return;
	document.getElementById("cmbYear").value++;
	chooseAgainMonthYear();
}
//function handle increase month when click single arrow
function increaseMonth() {
	var month = document.getElementById("cmbMonth").value;
	if(month == "12")
		return;
	document.getElementById("cmbMonth").value++;
	chooseAgainMonthYear();
}

//function handle select and assign value into the textbox when clicking into a cell in calendar
function clickItem() {
	var month = document.getElementById("cmbMonth").value;
	var year = document.getElementById("cmbYear").value;
	var stringDay = this.value + "/" + month + "/" + year;
	var pic = document.getElementById("icn_celendar");
	pic.onclick = createCelenda;
	document.getElementById("table").style.visibility = "hidden";
	document.getElementById("txtInput").value = stringDay.toString();
	delTable();
}

// function delete table
function delTable() {
	for( var i=0; i<8 ;i++){
		document.getElementById("table").deleteRow(2);
	}
}