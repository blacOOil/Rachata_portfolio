window.onload = loginLoad;

function loginLoad(){

	var LoginChecking = document.getElementById("myLogin");
	LoginChecking.onsubmit = checkLogin;
	var Clickreset = document.getElementById("reset");
	Clickreset.onclick = ResetInput;
	

}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const Password = urlParams.get('password');

	var userInput = document.forms["myLogin"]["username"];
	var passInput = document.forms["myLogin"]["password"];
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(userInput.value == username && passInput.value == Password){
		alert("Login Success!");
	}
	else{
		alert("login fail!");
		return false;
	}

}
function ResetInput(){
	loginLoad();
}

			