/* Here /* Here goes your JS code */
             /* Here goes your JS code */
const popupHide = document.querySelector(".popup");
popupHide.style.display = "none";

const btnMain = document.querySelector(".btn-main");
const checkbox = document.querySelector(".checkbox");  
const submit = document.getElementById("sign-in-submit");  
const eMail = document.querySelector(".email");
const password = document.querySelector(".password");
const successMessage = document.querySelector(".success--message");
const cancel = document.querySelector(".close");
// successMessage.style.display = "none";

btnMain.addEventListener('click', function(){
    popupHide.style.display = "flex";
    btnMain.style.display = "none";

})

cancel.addEventListener('click', function(){
    popupHide.style.display = "none";
    btnMain.style.display = "block";

})



// checkbox.addEventListener('click', () => {
//     submit.classList.toggle('checkbox--checked');
// })

submit.addEventListener('click', () => { 
    setTimeout( () => {
        popupHide.style.display = "none";
        // successMessage.style.display = "block";
        btnMain.style.display = "none";
        }, 3000);

})

window.onload = function () {
    var clickMeBtn = document.getElementById('clickMeBtn');
    clickMeBtn.addEventListener('click', function (event) {
        location.href = "#show-popup-form";
    });
}; 