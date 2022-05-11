var formGroup = document.getElementsByClassName("form-group");
var formInput = document.getElementsByClassName("form-control");
var formLabel = document.getElementsByClassName("label");
for(let i=0;i<formInput.length;i++){
    formInput[i].addEventListener("click", function(){
        formLabel[i].classList.add("focus");
        formGroup[i].style.borderColor= " #64b1bc";
    })
    for(let j=0;j<formInput.length;j++)
    if(j!=i){
        formInput[j].addEventListener("click", function(){
            
            if(formInput[i].value==""){
                formLabel[i].classList.remove("focus")
                formGroup[i].style.borderColor= "#d2d1d4";
            }else{
                formGroup[i].style.borderWidth= "2px"
                formGroup[i].style.borderColor= "#64b1bc";
            }
        })
    }
}

for(let i=0;i<formLabel.length;i++){
    formLabel[i].addEventListener("click", function(){
        formLabel[i].classList.add("focus");
        formGroup[i].style.borderColor= " #64b1bc";
    })
    for(let j=0;j<formLabel.length;j++)
    if(j!=i){
        formLabel[j].addEventListener("click", function(){
            
            if(formInput[i].value==""){
                formLabel[i].classList.remove("focus")
                formGroup[i].style.borderColor= "#d2d1d4";
            }else{
                formGroup[i].style.borderWidth= "2px"
                formGroup[i].style.borderColor= "#64b1bc";
            }
        })
    }
}

function showForm(){
    var iconUser = document.getElementsByClassName("fa-solid fa-user fa-lg");
    var check = document.getElementById("form-login");
    if(check.style.display=="none"){
        check.style.display="block";
    }
}