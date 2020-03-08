const popupHide = document.querySelector(".popup");
popupHide.style.display = "none";


const btnMain = document.querySelector(".btn-main");
const checkbox = document.querySelector(".checkbox");  
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
    if(password.value.length == 0 , eMail.value.length ==0)
    alert("Uzupełnij luki")
    else
    setTimeout( () => {
        popupHide.style.display = "none";
        successMessage.style.display = "block";
        btnMain.style.display = "none";
        }, 3000);
        

})




