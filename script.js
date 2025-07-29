const form=document.getElementById("JAWform");
form.addEventListener("submit",function(e){
    const pswd=document.getElementById("pswd").value;
    const confirm=document.getElementById("confirm").value;
    if(pswd!=confirm){
        e.preventDefault();
        alert("Passwords do not match!");
    }
}); 