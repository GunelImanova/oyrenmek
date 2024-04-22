import { endpoints } from "./API/constants";
import { getAll,getOne,post } from "./API/requests/index.js";

let loginForm=document.getElementById("add-form");
let usernameInp=document.getElementById("username");
let passwordInp=document.getElementById("password");
console.log(passwordInp.value);
loginForm.addEventListener("submit", async function (e) {
    e.preventDefault()
    try {
        await getAll(endpoints.users).then((response)=>{
            console.log(response.data);
            const user = response.data.find(user => user.name ==userNameInp.value);
            console.log(user);

            if(user){
                swal.fire({
                 icon:"error",
                 title:"Are u stupid?",
                 text:"user not found",
                 footer:'<a href="#"> why do i have this issue?</a>'
                });
                window.location.replace("index.html")
                return;
             }
             else{
                swal.fire({
                    position:"top-end",
                    icon:"succes",
                    title:"you could it congratulations",
                    showConfirmButton: false;
                    time: 1500
       
      
       

        }
    }
    catch(err){
        console.log(err);
    }
});