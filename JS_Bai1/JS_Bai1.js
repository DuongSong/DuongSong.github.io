function addData() {
	//take value of textbox.
	var txtInput = document.getElementById("input").value;

	//create tags such as li, textnode, image.
	var li = document.createElement("li");
	var nodeText = document.createTextNode(txtInput);
	var imgDelete = document.createElement("img");
	imgDelete.className = "delete"; //assign a value for class name.
	imgDelete.src = "image/pic_x.png"; //assign a image for image.

	//add node child into tag li.
	li.appendChild(imgDelete);
	li.appendChild(nodeText);

	//checking textbox have valuable or not.
	if( txtInput === ''){
			alert("You must write something!!!")
	}
	else {
		//add node child into tag ul.
			document.getElementById("list").appendChild(li);
	}
	document.getElementById("input").value = '';
	deleteData();
}

//function handle delete when clicking into image x
function deleteData() {
	var i;
	var del = document.getElementsByClassName("delete");
	for(i=0; i<del.length; i++){
		del[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}


