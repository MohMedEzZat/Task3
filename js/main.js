document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll("button").forEach(function(button){

        button.onclick = function(){
            document.querySelector("#example").style.color = button.dataset.color;
        }
    })
});

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit = function(){
    var value = document.querySelector("#Ezzat").value;
    var result = document.querySelector("#output");
        if(value ==""){
            return false;
        }else{
            var myLi = document.createElement("li");
            myLi.innerHTML = value;
            result.appendChild(myLi);
            document.querySelector("#Ezzat").value ="";
            return false; 
        }
    }
});