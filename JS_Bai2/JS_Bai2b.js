//Checking input value.
function checkInputValue() {
	var username = document.getElementById("txtUsername").value;
	var password = document.getElementById("txtPassword").value;
	var email = document.getElementById("txtEmail").value;
	var birthday = document.getElementById("txtInput").value;
	var notifyUsername = document.getElementById("notify_username");
	var notifyPassword = document.getElementById("notify_password");
	var notifyEmail = document.getElementById("notify_email");
	var notifyBirthday = document.getElementById("notify_birthday");
	var time = new Date();
	var stringTime = time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();

	if(username.length < 8)
		notifyUsername.innerText = 'Username lenght min 8 letter';
	else
		notifyUsername.innerText = '';
	if(password.length < 8)
	 	notifyPassword.innerText = 'Password lenght min 8 letter';
	else
		notifyPassword.innerText = '';
	if(email.length < 8)
	 	notifyEmail.innerText = 'Email lenght min 8 letter';
	else {
		var vt;
		for (var i = 0; i < email.length; i++) {
			if (email[i] == "@") {
				vt = email.indexOf("@");
				for (var j = vt; j < email.length; j++) {
					if (email[j] == ".")
						notifyEmail.innerText = '';
					else
						notifyEmail.innerText = 'Email wrong format';
				}
				break;
			}
			else
				notifyEmail.innerText = 'Email wrong format';
		}
	}
	if(birthday.length == '')
		notifyBirthday.innerText = "Please don't empty birthday";
	else{
		if(birthday > stringTime)
			notifyBirthday.innerText = "Birthday less than today";
		else
			notifyBirthday.innerText = '';
	}
}

//function assign value empty if vlaue in textbox was changed
function changeValue() {
		var username = document.getElementById("txtUsername").value;
		var password = document.getElementById("txtPassword").value;
		var email = document.getElementById("txtEmail").value;
		var birthday = document.getElementById("txtInput").value;
		var notifyUsername = document.getElementById("notify_username");
		var notifyPassword = document.getElementById("notify_password");
		var notifyEmail = document.getElementById("notify_email");
		var notifyBirthday = document.getElementById("notify_birthday");
		if(username != '')
			notifyUsername.innerText = '';
		if(password != '')
			notifyPassword.innerText = '';
		if(email != '')
			notifyEmail.innerText = '';
		if(birthday != '')
		notifyBirthday.innerText = '';
}

//functions clear value in textbox
function btnRefresh() {
	var username = document.getElementById("txtUsername").value;
	var password = document.getElementById("txtPassword").value;
	var email = document.getElementById("txtEmail").value;
	var birthday = document.getElementById("txtInput").value;
	if(username != '')
		document.getElementById("txtUsername").value = '';
	if(password != '')
		document.getElementById("txtPassword").value = '';
	if(email != '')
		document.getElementById("txtEmail").value = '';
	if(birthday != '')
		document.getElementById("txtInput").value = '';
}



