window.onload = pageLoad;

var UserName,Password,retypePassword;
UserName = document.getElementById("username");
Password = document.getElementById("Password");
retypePassword = document.getElementById("retypePassword")

var UserLogin = [UserName,Password,retypePassword];
var ClickRegister = document.getElementById("submit");
ClickRegister.onclick = validateForm;
//function pageLoad(){
	
//}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    if(Password.value === retypePassword.value){
  //      pageLoad();
    }
    else{
        alert("false");
    }

}