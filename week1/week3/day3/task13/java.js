// let num=Number(prompt("ededi daxil edin"))



let num='371'
let sum=0

for(let i=0;i<num.length;i++){
   sum+=Number(num[i]**3)

}

if(num==sum){
    console.log("Armstronqdur")

   }else{
    console.log("Armstronq deyil")
   }