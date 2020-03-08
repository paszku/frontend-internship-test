const popupHide = document.querySelector(".popup");
popupHide.style.display = "none";


const btnMain = document.querySelector(".btn-main");
const checkbox = document.querySelector("input.checkbox");  
const submit = document.getElementById("sign-in-submit");  
const eMail = document.querySelector(".email");
const password = document.querySelector(".password");
const successMessage = document.querySelector(".success--message");
const cancel = document.querySelector(".close");
successMessage.style.display = "none";

btnMain.addEventListener('click', function(){
    popupHide.style.display = "flex";
    btnMain.style.display = "none";

})

cancel.addEventListener('click', function(){
    popupHide.style.display = "none";
    btnMain.style.display = "block";

})

submit.addEventListener('click', function() { 
    if(eMail.value.length > 3 & password.value.length > 3 & checkbox.checked == true){
    setTimeout( () => {
        popupHide.style.display = "none";
        successMessage.style.display = "block";
        btnMain.style.display = "none";
        }, 3000);}
        else {
            alert("You email or password is too short, please accept terms and conditions")
        }
        

})