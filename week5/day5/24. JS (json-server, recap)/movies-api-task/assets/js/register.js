import { endpoints } from "./API/constants.js"
import{getAll,getOne,post} from "./API/requests/index.js";

const registerForm = document.getElementById("register-form");
const userNameInp = document.getElementById("user-name");
const userEmailInp = document.getElementById("user-email");
const userPasswordInp = document.getElementById("user-password");
const userConfirmPassInp = document.getElementById("user-confirm-password");

registerForm.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(userEmailInp)

    getAll(endpoints.users).then(res=>{
        const existEmail = res.data.find( x=> x.email ==userEmailInp.value)
        
        if(existEmail){
            swal.fire({
                icon:"error",
                title:"Oops..",
                text:"bu email istade olunub basqasini qeyd edin",

            });
            return
        }
        if(userPasswordInp.value.trim()!=userConfirmPassInp.value.trim()){
            swal.fire({
                icon:"error",
                title:"Oops..",
                text:"Password ve confirm password eyni olmalidir",
            })
            return
        }
        swal.fire({
            position: "top-end",
            icon:"success",
            title:"Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
            post(endpoints.users,
                {
                    email: userEmailInp.value.trim(),
                    username:userNameInp.value.trim(),
                    password:userPasswordInp.value.trim(),
                      
                }
                
                )
                userEmailInp.value=''
                userNameInp.value=''
                userPasswordInp=''
                confirmPassword.value=''
        })
         window.location.replace("login.html")
    })
   
}

)