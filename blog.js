var PostCount = 1
function postFunction() {
    
    
    
     if (PostCount == 1) {
        var Input = document.getElementById("text1");
        const StringInfor = Input.value;
        var PostString = document.getElementById("topic1");
        PostString.innerHTML = StringInfor;
        PostCount = 2;
    }
    else if (PostCount == 2) {
        var Input2 = document.getElementById("text1");
        const StringInfor2 = Input2.value;
        var PostString2 = document.getElementById("comment1");
        PostString2.innerHTML = StringInfor2;
        PostCount = 3
    }
    else if (PostCount == 3) {
        var Input3 = document.getElementById("text1");
        const StringInfor3 = Input3.value;
        var PostString3 = document.getElementById("comment2");
        PostString3.innerHTML = StringInfor3;
        
    }
}
function clearFunction() {
    PostCount = 1;
    var Post1 = document.getElementById("topic1");
    Post1.innerHTML = "";
    var Post2 = document.getElementById("comment1");
    Post2.innerHTML = "";
    var Post3 = document.getElementById("comment2");
    Post3.innerHTML = "";
}