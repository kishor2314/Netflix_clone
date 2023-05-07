const btn=document.querySelectorAll(".btn");
const input_email=document.querySelector("#inputs");
btn.forEach((button)=>{
    button.addEventListener("click",()=>{

if(input_email.value=="")
{
    alert("Enter The Email");
}
else{
    alert("Success...!")
}



    })
})